(function() {
  setTimeout(function(){ 
    document.body.innerHTML = '';
    const img = document.createElement("img");
    img.src = "images/creep.jpeg";
    document.body.appendChild(img);
    document.body.style.background = "black";
    setTimeout(function(){ 
      location.reload();
    }, 3000);}, 30000);
}());