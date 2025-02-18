const inputFile = document.getElementById('inputFile'); // get the input file
const img = document.querySelector('.uploadedImg'); // get the uploaded image
const queryImgContainer = document.querySelector('.queryImg'); // get the query image container
const uploadContainer = document.querySelector('.imgUploadContainer'); // get the whole upload container

// get names
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const gitHubUserName = document.getElementById('gitName');
const uploadIcon = document.querySelector('.uploadIcon'); // get the uploaded icon

function inputFileImg(){
 uploadIcon.addEventListener('click', function(){
  inputFile.click()
 })
}inputFileImg() // Function to input image file

// Function to preview Uploaded image
function uploadImage(){
 inputFile.addEventListener('change', function(event){
  const file = event.target.files[0] // get the first selected file
  const maxSize = 500 * 1024; // create a variable for file size not more than 500kb
  
  //ensure a file is present
  if(!file) return;
  
  //Ensure file is an image
  const validImageType = ['image/jpeg', 'image/png', 'image/gif'];
  if(!validImageType.includes(file.type)){
   //file.type access the MIME of the img file which returns a string making it easier for .includes to compare with the validImageType array.
   alert('pls upload a valid image file');
   this.value = '' //this refers to the input file
  }else{
     //Ensure file image file is not larger than 500kb
     if (file.size > maxSize) {
     alert('Image file is too large');
     this.value = ''
     }else{
      const reader = new FileReader; // FileReader is an api that allows the content of files to be read
      reader.readAsDataURL(file) // read file and converts it to a base 64 encoded string
      //after the file has been read reader.onLoad is triggered
      reader.onload = function(e) {
      img.src = e.target.result;
      console.log(img.src)
      //img.src = this.result;

       //Hide and show necessary elements
       uploadContainer.querySelector('p').style.display = "none";
       uploadIcon.style.display = "none";
       img.style.display = 'block';
       queryImgContainer.style.display = 'flex';
       }
     }
  }
 })
}
uploadImage();

function queryImage(){
 queryImgContainer.addEventListener('click', function(e) {
 const $target = e.target;
 if ($target.id.includes('removeImg')) {
  img.src = ''
  img.alt = ''
  inputFile.value = ''
  uploadContainer.querySelector('p').style.display = "block";
  uploadIcon.style.display = "block";
  queryImgContainer.style.display = 'none';
 } else if ($target.id.includes('changeImg')) {
  inputFile.click()
 }
}) // options to remove or change image
}
queryImage() // call queryImage function

// GENERATE TICKET
function generateTicket(){
 const generateTicket = document.getElementById('generateTicket');
 generateTicket.addEventListener('click', function(){
  
  if (fullName.value == '' || email.value == '' || gitHubUserName.value == '' || img.src == '' || !img.src.includes('image/')){
  alert('inputs cannot be empty');
  }else{
   // fetch names from form input
   document.querySelectorAll('.name').forEach(function(element) {
   element.textContent = fullName.value
   }) //get full name
   document.getElementById('gitHubUserName').textContent = gitHubUserName.value; // get github user name
   document.getElementById('fetchedEmail').textContent = email.value
   document.getElementById('ticketImage').src = img.src//fetch uploaded image
   
   // Display date
   
   const date = new Date();
   const day = date.getDate();
   const year = date.getFullYear();
   const $date = document.getElementById('date');

   switch (date.getMonth()) {
    case 0:
     $date.textContent = `Jan ${day}, ${year}`
     break;
     case 1:
      $date.textContent = `feb ${day}, ${year}`
      break;
      case 2:
       $date.textContent = `mar ${day}, ${year}`
       break;
       case 3:
        $date.textContent = `april ${day}, ${year}`
        break;
        case 4:
         $date.textContent = `may ${day}, ${year}`
         break;
         case 5:
          $date.textContent = `June ${day}, ${year}`
          break;
          case 6:
           $date.textContent = `july ${day}, ${year}`
           break;
           case 7:
            $date.textContent = `aug ${day}, ${year}`
            break;
            case 8:
             $date.textContent = `sept ${day}, ${year}`
             break;
             case 9:
              $date.textContent = `oct ${day}, ${year}`
              break;
              case 10:
               $date.textContent = `nov ${day}, ${year}`
               break;
               case 11:
                $date.textContent = `dec ${day}, ${year}`
                break;
}

   //display and hide neccessary elements

   document.getElementsByTagName('main')[0].style.display = 'none';
   document.getElementsByTagName('header')[0].style.display = 'none'
   document.getElementById('ticketHeader').style.display = 'block';
   document.getElementById('ticket').style.display = 'block';
   
  }
  console.log(img.src)
 })
}
generateTicket()