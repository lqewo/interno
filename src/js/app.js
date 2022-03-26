import * as flsFunction from "./modules/functions.js";

flsFunction.isWebp();
import $ from "jquery";
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use(Navigation, Pagination);

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  $(function()  {
    $('.tab__element').on('click', function (e){
        e.preventDefault()
        $('.tab__element').removeClass('tab__element--active')
        $(this).addClass('tab__element--active')

        $('.catalog-slider').removeClass('catalog-slider--active')
        $($(this).attr('href')).addClass('catalog-slider--active')
    })

    $(window).resize(function(){
      var windowWidth = $('body').innerWidth();
      if(windowWidth < 800){$(".container").addClass('container-fluid');}
      else{$(".container").removeClass('container-fluid');}
    });
  });