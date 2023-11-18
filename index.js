"use strict";

const modal = document.getElementById("myModal");

const button = document.getElementById("modalButton");

const closeButton = document.getElementById("span");

const showModal = () => {
  console.log("bing");

  modal.style.display = "block";
};

const hideModal = () => {
  console.log("click");

  modal.style.display = "none";
};
