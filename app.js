const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.querySelector(".popup-content img");
const span = document.getElementsByClassName("close")[0];

img.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


console.log('Hello World !')