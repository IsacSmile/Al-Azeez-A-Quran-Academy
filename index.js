 //For Hamburger 
 const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('active');
    });


    // For Faqs 
     document.querySelectorAll(".faq-item").forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

 

document.addEventListener("DOMContentLoaded", () => {
  const readHere = document.querySelector(".onclick");
  const termsPopup = document.querySelector(".parent-terms-condition");

  // Create Close Icon (❌)
  const closeIcon = document.createElement("span");
  closeIcon.innerHTML = "&#10005;";
  closeIcon.classList.add("close-terms");
  termsPopup.querySelector(".child-terms-condition").prepend(closeIcon);

  // Open Terms Popup
  readHere.addEventListener("click", () => {
    termsPopup.classList.add("active");
  });

  // Close Terms Popup
  closeIcon.addEventListener("click", () => {
    termsPopup.classList.remove("active");
  });
});

