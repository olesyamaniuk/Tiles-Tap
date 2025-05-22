$(function () {
  $(".e-m-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".e-m-reviews-list-left",
    nextArrow: ".e-m-reviews-list-right",
  });
});
$(function () {
  $(".e-m-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-m-why-list-left",
    nextArrow: ".e-m-why-list-right",
  });
});
