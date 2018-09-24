// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll Animations

$(window).scroll(function() {
  console.log($(window).scrollTop());
  let height = $(window).scrollTop();

  // Project Section Header
  if (height > 192 && height < 1056) {
    $(".project-title > h1")
      .removeClass("hidden")
      .addClass("fadeinUp");
  } else if (height >= 1057) {
    $(".project-title > h1")
      .removeClass("fadeinUp")
      .addClass("hidden");
  } else if (height < 27) {
    $(".project-title > h1")
      .removeClass("fadeinUp")
      .addClass("hidden");
  }

  // Social Scape
  if (height < 261 || height > 1494) {
    $(".ss > .project-image")
      .addClass("hidden")
      .removeClass("fadeInRight");

    $(".ss > .project-content")
      .addClass("hidden")
      .removeClass("fadeInLeft");
  } else if (height > 597) {
    $(".ss > .project-image")
      .removeClass("hidden")
      .addClass("fadeInRight");

    $(".ss > .project-content")
      .removeClass("hidden")
      .addClass("fadeInLeft");
  }

  // Wayfarer
  if (height < 581 || height > 1813) {
    $(".wf > .project-image")
      .addClass("hidden")
      .removeClass("fadeInLeft");

    $(".wf > .project-content")
      .addClass("hidden")
      .removeClass("fadeInRight");

  } else if (height > 911) {
    $(".wf > .project-image")
      .removeClass("hidden")
      .addClass("fadeInLeft");

    $(".wf > .project-content")
      .removeClass("hidden")
      .addClass("fadeInRight");
  }

  // Suite Health
  if (height < 911 || height > 2134) {
    $(".sh > .project-image")
      .addClass("hidden")
      .removeClass("fadeInRight");

    $(".sh > .project-content")
      .addClass("hidden")
      .removeClass("fadeInLeft");
  } else if (height > 1236) {
    $(".sh > .project-image")
      .removeClass("hidden")
      .addClass("fadeInRight");

    $(".sh > .project-content")
      .removeClass("hidden")
      .addClass("fadeInLeft");
  }

  // Bartender
  if (height < 1236 || height > 2462) {
    $(".bt > .project-image")
      .addClass("hidden")
      .removeClass("fadeInLeft");

    $(".bt > .project-content")
      .addClass("hidden")
      .removeClass("fadeInRight");
  } else if (height > 1554) {
    $(".bt > .project-image")
      .removeClass("hidden")
      .addClass("fadeInLeft");

    $(".bt > .project-content")
      .removeClass("hidden")
      .addClass("fadeInRight");
  }

})