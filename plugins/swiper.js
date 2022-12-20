import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Navigation, Pagination, Autoplay])

// init Swiper:
/* eslint-disable no-unused-vars */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // @see https://swiperjs.com/swiper-api#parameters
  direction: 'horizontal',
  loop: true,
  // remove unused modules if needed
  modules: [Navigation, Pagination, Autoplay],
  // Pagination if needed
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  // Autoplay if needed
  autoplay: {
    delay: 3000
  },
  // Navigation arrows if needed
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
  // Configure other options. Not tested
})
