document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-toggle").addEventListener("click", function () {
      this.classList.toggle("menu-open");
      document.querySelector(".menu").classList.toggle("active");
    });
  
    document.querySelectorAll(".link").forEach(function (element) {
      element.addEventListener("click", function () {
        document.querySelector(".menu-toggle").classList.toggle("menu-open");
        document.querySelector(".menu").classList.toggle("active");
      });
    });
  
    document.querySelector(".videoOne").addEventListener("click", function () {
      document.querySelector(".overlayOne").classList.toggle("active");
    });
  
    document.querySelector(".videoTwo").addEventListener("click", function () {
      document.querySelector(".overlayTwo").classList.toggle("active");
    });
  
    document.querySelector(".videoThree").addEventListener("click", function () {
      document.querySelector(".overlayThree").classList.toggle("active");
    });
  
    document.querySelector(".videoFour").addEventListener("click", function () {
      document.querySelector(".overlayFour").classList.toggle("active");
    });
  
    document.querySelector(".closeOverlayOne").addEventListener("click", function () {
      document.querySelector(".overlayOne").classList.toggle("active");
    });
  
    document.querySelector(".closeOverlayTwo").addEventListener("click", function () {
      document.querySelector(".overlayTwo").classList.toggle("active");
    });
  
    document.querySelector(".closeOverlayThree").addEventListener("click", function () {
      document.querySelector(".overlayThree").classList.toggle("active");
    });
  
    document.querySelector(".closeOverlayFour").addEventListener("click", function () {
      document.querySelector(".overlayFour").classList.toggle("active");
    });
  });




  const maskedImage = document.querySelector(".masked-image");
  const maxMovement = 10; // Maximum pixels to translate in any direction
  
  // Detect if the device is a mobile device
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
  
  // Function to move the image based on cursor position
  function moveImage(e) {
    // Calculate position relative to the viewport
    const xPercent = e.clientX / window.innerWidth;
    const yPercent = e.clientY / window.innerHeight;
  
    // Calculate the translation values
    const translateX = (xPercent - 0.5) * 2 * maxMovement;
    const translateY = (yPercent - 0.5) * 2 * maxMovement;
  
    // Apply the translation to the image
    maskedImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
  
  // Function for random movement on mobile devices
  function moveRandomly() {
    const translateX = (Math.random() - 0.5) * 2 * maxMovement;
    const translateY = (Math.random() - 0.5) * 2 * maxMovement;
  
    maskedImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
  
  // Apply mousemove event listener to the entire body
  if (!isMobileDevice) {
    document.body.addEventListener("mousemove", moveImage);
  } else {
    // For mobile devices, move the image randomly every 500ms
    setInterval(moveRandomly, 500);
  }
  