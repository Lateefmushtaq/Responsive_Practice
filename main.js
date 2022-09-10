function changeImage() {
  const image = document.getElementById("right-image");
  image.src = "./images/onClick.png";
  console.log("done");
}
function changeImageBack() {
  const image = document.getElementById("right-image");
  image.src = "./images/section-2.svg";
  console.log("done");
}

function makeBox() {
  document.getElementById("makeBox").setAttribute("class", "card");
}

function clicked() {
  changeImage();
  makeBox();
}

let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
