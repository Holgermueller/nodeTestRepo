"use strict";

const modal = document.getElementById("myModal");

const button = document.getElementById("modalButton");

const closeButton = document.getElementById("span");

const showModal = () => {
  modal.style.display = "block";
};

const hideModal = () => {
  modal.style.display = "none";
};

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
