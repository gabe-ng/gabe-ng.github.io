// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Hide Skill
document.querySelectorAll(".skill").forEach(skill => {
  skill.classList.add("hidden");
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

  // About Me Header
  if (height > 1885 && height < 2775) {
      $(".about-title > h1")
        .removeClass("hidden")
        .addClass("fadeinDown");
    } else if (height >= 2775) {
      $(".about-title > h1")
        .removeClass("fadeinDown")
        .addClass("hidden");
    } else if (height < 1757) {
      $(".about-title > h1")
        .removeClass("fadeinDown")
        .addClass("hidden");
    }

  // About Me Section
  if (height > 2452 && height < 3349) {
    $(".about-me")
      .removeClass("hidden")
      .addClass("fadeinDown");
  } else if (height >= 3349) {
    $(".about-me")
      .addClass("hidden")
      .removeClass("fadeinDown");
  } else if (height < 2062) {
    $(".about-me")
      .addClass("hidden")
      .removeClass("fadeinDown");
  }

  // Skill Section Header
  if (height > 2808 && height < 3722) {
    $(".skill-title > h1")
      .removeClass("hidden")
      .addClass("fadeinUp");
  } else if (height >= 3722) {
    $(".skill-title > h1")
      .addClass("hidden")
      .removeClass("fadeinUp");
  } else if (height < 2715) {
    $(".skill-title > h1")
      .addClass("hidden")
      .removeClass("fadeinUp");
  }

  // Skills

  if (height >= 3306 && height < 4498) {
    let time = 200;
    document.querySelectorAll(".skill")
      .forEach(skill => {
        setTimeout(() => {
          skill.classList.remove("hidden");
          skill.classList.add("fadeinUp");
        }, time);
        time += 200;
      });
    }
    // } else if (height >= 4498) {
    //   document.querySelectorAll(".skill").forEach(skill => {
    //     console.log("hiding");
    //     skill.classList.add("hidden");
    //     skill.classList.remove("fadeinUp");
    //   });
    // } else if (height < 2984) {    
    //   document.querySelectorAll(".skill").forEach(skill => {
    //     console.log("hiding");
    //     skill.classList.add("hidden");
    //     skill.classList.remove("fadeinUp");
    //   });
    // }
});




