$(document).ready(function () {
  // Start Header Section
  // Start Banner Section
  $(".carousel").carousel({
    interval: 1000,
  });
  // Start Banner Section
  // Start Header Section
  //   console.log("hi");

  //   Start info section
  $(window).scroll(function () {
    let getscrollpoint = $(this).scrollTop();
    if (getscrollpoint >= 220) {
      $(".infotexts").addClass("fromlefts");
      $(".infotopics").addClass("fromrights");
    } else {
      $(".infotexts").removeClass("fromlefts");
      $(".infotopics").removeClass("fromrights");
    }
  });
  //   End info section

  //Start Premies Section
  $("#lightslider").lightSlider({

    item: 4,
    loop: true,
    slideMove: 1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    auto: true
  }).play();
  // End Premies Section

  // Start pricing section
  $(window).scroll(function () {
    let getscroll = $(this).scrollTop();
    if (getscroll >= 2450) {
      $(".cardones").addClass("movelefts");
      $(".cardtwos").addClass("movebottoms");
      $(".cardthrees").addClass("moverights");
    } else {
      $(".cardones").removeClass("movelefts");
      $(".cardtwos").removeClass("movebottoms");
      $(".cardthrees").removeClass("moverights");
    }
  })
  //End pricing section
});

// 28FR
// 4PS