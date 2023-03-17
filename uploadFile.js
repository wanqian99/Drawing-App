function uploadFile() {    
    var options = document.getElementsByClassName('options')[0];
    
    //create a new div with id(uploadFileButton) in the options div
    var uploadbtn = document.createElement('div');
    uploadbtn.id = 'uploadFileButton';
    options.appendChild(uploadbtn);
    
    //create button to upload image
    input = createFileInput(handleFile);
    input.parent(uploadbtn);
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, '');
  } 
  else {
    img = null;
  }
}