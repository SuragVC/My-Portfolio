$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Flutter Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Surag V C", "Flutter Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  //   $('form').submit(function(event) {
  //       event.preventDefault();
  //       var formData = {
  //           'name': $('input[name=name]').val(),
  //           'email': $('input[name=email]').val(),
  //           'subject': $('input[name=subject]').val(),
  //           'message': $('textarea[name=message]').val()
  //       };

  //       $.ajax({
  //           type: 'POST',
  //           url: 'send_email.php', // Replace 'send_email.php' with your server-side script URL
  //           data: formData,
  //           dataType: 'json',
  //           encode: true
  //       })
  //       .done(function(data) {
  //           alert(data.message);
  //           // Optionally, you can reset the form after successful submission
  //           $('form')[0].reset();
  //       })
  //       .fail(function(data) {
  //           alert('Failed to send message. Please try again later.');
  //       });
  // });
});

let drive  = document.querySelector(".Drivegoogle").addEventListener("click",openDrive)

function openDrive(){
window.open(href="./Resume.pdf");
}
let drive2  = document.querySelector(".Drivegoogle2").addEventListener("click",openDrive2)

function openDrive2(){
window.open(href="./Resume.pdf");
}
let drive3  = document.querySelector(".Drivegoogle3").addEventListener("click",openDrive3)

function openDrive3(){
window.open(href="./Resume.pdf");
}
