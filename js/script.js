function DropDown1() {
  document.getElementById("dropdown__list1").classList.toggle("show");
}

function DropDown2() {
  document.getElementById("dropdown__list2").classList.toggle("show");
}

window.onclick = function (event) {
  if (event.target.parentNode.matches("#post")) {
    window.location.replace("http://localhost:5500/html/fullPost.html");
  }
};