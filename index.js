let box = document.getElementsByClassName('box')[0]

let thing = true 

box.addEventListener('click', function() {
  if (thing) {
    box.className += " clicked";
    thing = !thing
  } else {
    box.className = "box";
    thing = !thing
  }
})