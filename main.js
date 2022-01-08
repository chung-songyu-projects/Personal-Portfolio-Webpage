$(document).ready(function() {
  $("#h1").html("<span id='h1-1'>H</span>");
  $("#h1-1").fadeOut(1).fadeIn(1550).append("<span id='h1-2'>i</span>");
  $("#h1-2").fadeOut(1).fadeIn(1550).append("<span id='h1-3'>,</span>");
  $("#h1-3").fadeOut(1).fadeIn(1600).append("<span id='h1-4'> </span>");
  $("#h1-4").fadeOut(1).fadeIn(1650).append("<span id='h1-5'>I</span>");
  $("#h1-5").fadeOut(1).fadeIn(1700).append("<span id='h1-6'>\'</span>");
  $("#h1-6").fadeOut(1).fadeIn(1750).append("<span id='h1-7'>m</span>");
  $("#h1-7").fadeOut(1).fadeIn(1800).append("<span id='h1-8'> </span>");
  $("#h1-8").fadeOut(1).fadeIn(1850).append("<span id='h1-9'>S</span>");
  $("#h1-9").fadeOut(1).fadeIn(1900).append("<span id='h1-10'>o</span>");
  $("#h1-10").fadeOut(1).fadeIn(1950).append("<span id='h1-11'>n</span>");
  $("#h1-11").fadeOut(1).fadeIn(2000).append("<span id='h1-12'>g</span>");
  $("#h1-12").fadeOut(1).fadeIn(2050).append("<span id='h1-13'>y</span>");
  $("#h1-13").fadeOut(1).fadeIn(2100).append("<span id='h1-14'>u</span>");
  $("#h1-14").fadeOut(1).fadeIn(2150);

  // ========== carousel ==========
  let course = 7;
  let project = 5;

  const projectSelector = () => {
    // to account for project #5 not being included in carousel
    if(course == 1 && project == 5) {
      project = 4;
    }

    document.getElementById("radio" + course).checked = true;
    document.getElementById("radio-sub" + project).checked = true;

    let x = 0;
    for(let i=7; i>0; i--) {
      if(document.getElementById("radio" + i).checked) {
        x -= 4000 * (7 - i);
        course = i;
      }
    };
    for(let j=5; j>0; j--) {
      if(document.getElementById("radio-sub" + j).checked) {
        // to account for project #5 not being included in carousel
        if(course == 1) {
          if(j == 5) {
            continue;
          } else {
            x -= 800 * (4 - j);
          }
        } else {
          x -= 800 * (5 - j);
        }
        project = j;
      }
    };
    document.getElementById("first").style.transform = "translateX(" + x.toString() + "px)";

    // ========== max-width > 1140px ==========
    // check if max-width > 1140px
    const element = document.querySelector(".course-7p");
    const notMobile = getComputedStyle(element).display;
    if(notMobile != "none") {
      let projectId = (course - 1) * 5 + project;
      $(".project").addClass("hidden-not-mobile");
      $("#project-" + projectId).removeClass("hidden-not-mobile");

      // to account for project #5 not being included in carousel
      if(projectId < 5 && projectId > 0) {
        $(".radio-not-mobile").addClass("hidden");
      } else {
        $(".radio-not-mobile").removeClass("hidden");
      }

      $("#project-4").addClass("br-bottom-left");
      $("#project-3").addClass("br-bottom-left");
      $("#project-2").addClass("br-bottom-left");
      $("#project-1").addClass("br-bottom-left");
      if(course == 1) {
        $(".course-1").removeClass("br-bottom-left");
      } else {
        $(".course-1").addClass("br-bottom-left");
      }
    }

    project--;
    // to account for project #5 not being included in carousel
    if(course == 1 & project == 0) {
      course = 7;
      project = 5;
    }
    if(project < 1) {
      project = 5;
      course--;
    }
    if(course < 1) {
      course = 7;
    }
  };

  for(let i=7; i>0; i--) {
    document.getElementById("radio" + i).addEventListener("change", () => {
      course = i;
      if(course == 1) {
        project = 4;
      } else {
        project = 5;
      }
      projectSelector();
    })
    document.getElementsByClassName("course-" + i)[0].addEventListener("click", () => {
      course = i;
      if(course == 1) {
        project = 4;
      } else {
        project = 5;
      }
      projectSelector();
    })
  };
  for(let i=5; i>0; i--) {
    document.getElementById("radio-sub" + i).addEventListener("change", () => {
      project = i;
      projectSelector();
    })
  };

  setInterval(projectSelector, 4000);
});

$(() => {
  // ========== max-width <= 1140px ==========
  $(".course-1").click(() => {
    if($(".course-1p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-1p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
  $(".course-2").click(() => {
    if($(".course-2p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-2p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
  $(".course-3").click(() => {
    if($(".course-3p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-3p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
  $(".course-4").click(() => {
    if($(".course-4p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-4p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
  $(".course-5").click(() => {
    if($(".course-5p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-5p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
  $(".course-6").click(() => {
    if($(".course-6p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-6p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
  $(".course-7").click(() => {
    if($(".course-7p").hasClass("hidden-mobile")) {
      $(".course-project").addClass("hidden-mobile");
      $(".course-7p").removeClass("hidden-mobile");
    } else {
      $(".course-project").addClass("hidden-mobile");
    }
  });
});
