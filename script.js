
var swiper = new Swiper(".homeslider", {
    slidesPerView: 2,
    spaceBetween:30,
    loop:true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });
  var swiper = new Swiper(".Deals", {
    slidesPerView:"3",
    spaceBetween:30,
   grabcursor:true,
    loop:true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });
  var swiper = new Swiper(".client", {
    spaceBetween: 30,
    grabcursor:true,
    loop:true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

   // Handle Get OTP button click
   document.getElementById('get-otp-btn').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phone').value;
    
    if (phoneNumber) {
      // Simulate OTP sending process
      document.getElementById('otp-container').style.display = 'block';
      document.getElementById('get-otp-btn').style.display = 'none';
      document.getElementById('verify-otp-btn').style.display = 'block';
    }
  });
  //move to login page
  function loginpage(){
    window.location.href = 'login-ssignup.html';
  }
 