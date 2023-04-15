(function() {
  setTimeout(function(){ 
    var sound = new Audio("http://127.0.0.1:5500/sound/shriek.wav")
    sound.play()
    document.body.innerHTML = '';
    const img = document.createElement("img");
    img.src = "images/creep.jpeg";
    document.body.appendChild(img);
    document.body.style.background = "black";
    setTimeout(function(){ 
      location.reload();
    }, 3000);}, 5000);
}());