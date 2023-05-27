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

var imgs = document.querySelectorAll(
  ".single-product-information .images .imgs img.sm-img"
);
var displayImg = document.querySelector(
  ".single-product-information .images .display-img img"
);

if (window.location.href.endsWith("single-product.html")) {
  displayImg.src = imgs[0].src;
}

imgs.forEach((img) => {
  img.onclick = () => {
    imgs.forEach((img) => {
      img.classList.remove("active");
    });
    displayImg.src = img.src;
    img.classList.add("active");
  };
});

var buttons = document.querySelectorAll(
  ".reviews-comments .reviews-comments-head a"
);

buttons.forEach((button) => {
  button.onclick = () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  };
});

var allChecks = document.querySelectorAll(".table-responsive table th input");
var CheckBoxes = document.querySelectorAll(
  ".table-responsive table input[type='checkbox']"
);

allChecks.forEach((allCheck) => {
  allCheck.onclick = function () {
    CheckBoxes.forEach((CheckBoxe) => {
      if (
        CheckBoxe.classList.contains(allCheck.dataset.filter) &&
        allCheck.checked
      ) {
        CheckBoxe.checked = true;
      } else {
        CheckBoxe.checked = false;
      }
    });
  };
});

var allTab = document.querySelectorAll(".section.dashboard .tabs .tab");
var tabsList = document.querySelectorAll(".section.dashboard .tabs-list ul li");

tabsList.forEach((link) => {
  link.onclick = (e) => {
    tabsList.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
    allTab.forEach((tab) => {
      tab.classList.add("d-none");
      if (tab.dataset.set == e.target.textContent) {
        tab.classList.remove("d-none");
      }
    });
  };
});

var sectionLinks = document.querySelectorAll(".account .account-nav ul li");
var sections = document.querySelectorAll(".sections .section");

sectionLinks.forEach((sectionLink) => {
  sectionLink.onclick = (e) => {
    sectionLinks.forEach((sectionLink) => {
      sectionLink.classList.remove("active");
    });
    sectionLink.classList.add("active");
    sections.forEach((section) => {
      section.classList.add("d-none");
      if (section.dataset.set == e.target.textContent) {
        section.classList.remove("d-none");
      }
    });
  };
});

var editInfobtns = document.querySelectorAll(
  ".account .section.profile .profile-info .info form input[type='submit']"
);
editInfobtns.forEach((btn) => {
  btn.onclick = (e) => {
    if (btn.previousElementSibling.disabled == true) {
      e.preventDefault();
      btn.previousElementSibling.disabled = false;
      btn.value = "save";
    } else {
      btn.previousElementSibling.disabled = true;
      btn.value = "edit";
      e.stopPropagation();
    }
  };
});
