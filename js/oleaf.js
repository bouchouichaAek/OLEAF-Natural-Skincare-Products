var check = document.querySelector("nav .navbar .chackbox");
var links = document.querySelector("nav .navbar .links");
check.onclick = function () {
  if (check.classList.contains("active")) {
    links.style.left = "0";
    check.classList.remove("active");
  } else if (!check.classList.contains("active")) {
    links.style.left = "-100%";
    check.classList.add("active");
  }
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
