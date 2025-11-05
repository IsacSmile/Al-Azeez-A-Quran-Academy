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



// Animated cursor
 const cursor = document.querySelector(".faq-cursor");

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  // Smooth trailing effect
  const followSpeed = 0.15;
  function animate() {
    currentX += (mouseX - currentX) * followSpeed;
    currentY += (mouseY - currentY) * followSpeed;
    cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Update target position
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Click animation
  document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
  });
  document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
  });