function showPreview(event){
  if(event.target.files.length){
    var src = URL.createObjectURL(event.target.files[]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}