"use strict";

//Ẩn thông tin cá nhân
document.querySelector(".emailError").style.display = "none";
document.querySelector(".displayInfo").style.display = "none";
const emailEl = document.querySelector(".email");

document.querySelector(".btn").addEventListener("click", function () {
  // Lấy giá trị input
  const email = emailEl.value.trim();
  // console.log(email);

  //Dữ liệu
  let isValid = true;

  //Kiểm tra email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email) || email === "") {
    document.querySelector(".emailError").style.display = "block";
    document.querySelector(".is-valid").style.display = "none";
    isValid = false;
    // console.log(regex.test(email));
  }

  //Nếu dữ liệu hợp lệ
  if (isValid) {
    document.querySelector(".displayInfo").style.display = "block";
    document.querySelector(".data-form").style.display = "none";
  }
});

emailEl.addEventListener("click", function () {
  document.querySelector(".emailError").style.display = "none";
  document.querySelector(".is-valid").style.display = "block";
});

// Khi ấn vào view more
const btn = document.querySelectorAll(".fa-solid");

document.querySelectorAll(".view-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = button.nextElementSibling;
    content.classList.toggle("active");
    content.classList.toggle("content");
    if (content.classList.contains("active")) {
      button.lastChild.nodeValue = "View Less";
      btn.forEach((btn) => {
        btn.classList.remove("fa-caret-down");
      });
      btn.forEach((btn) => {
        btn.classList.add("fa-caret-up");
      });
    } else {
      button.lastChild.nodeValue = "View More";
      btn.forEach((btn) => {
        btn.classList.add("fa-caret-down");
      });
      btn.forEach((btn) => {
        btn.classList.remove("fa-caret-up");
      });
    }
  });
});
