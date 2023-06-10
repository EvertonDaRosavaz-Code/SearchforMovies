let inputFile = this.document.getElementById('fileToUpload');
let fileNameElement = this.document.getElementById('nameMovie')

inputFile.addEventListener('change', function(){
    const fileName = this.files[0].name;
    console.log(fileName);
    fileNameElement.value = fileName
})




