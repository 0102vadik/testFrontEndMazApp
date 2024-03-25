// var bg = document.querySelector('.item-bg');
// // var items = document.querySelectorAll('.news__item');
// // var item = document.querySelector('.news__item');
// //
// // function cLog(content) {
// //     console.log(content)
// // }
// //
// // if ($(window).width() > 800) {
// //     $(document).on("mouseover", ".news__item", function (_event, _element) {
// //
// //         var newsItem = document.querySelectorAll('.news__item');
// //         newsItem.forEach(function (element, index) {
// //             element.addEventListener('mouseover', function () {
// //                 var x = this.getBoundingClientRect().left;
// //                 var y = 0;
// //                 var width = this.getBoundingClientRect().width;
// //                 var height = this.getBoundingClientRect().height;
// //
// //                 $('.item-bg').addClass('active');
// //                 $('.news__item').removeClass('active');
// //                 // $('.news__item').removeClass('active');
// //
// //
// //                 bg.style.width = width + 'px';
// //                 bg.style.height = height + 'px';
// //                 bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
// //             });
// //
// //             element.addEventListener('mouseleave', function () {
// //                 $('.item-bg').removeClass('active');
// //                 $('.news__item').removeClass('active');
// //             });
// //
// //         });
// //
// //     });
// // }
// //
// //
// // var swiper = new Swiper('.news-slider', {
// //     effect: 'coverflow',
// //     grabCursor: true,
// //     loop: true,
// //     centeredSlides: true,
// //     keyboard: true,
// //     spaceBetween: 0,
// //     slidesPerView: 'auto',
// //     speed: 300,
// //     coverflowEffect: {
// //         rotate: 0,
// //         stretch: 0,
// //         depth: 0,
// //         modifier: 3,
// //         slideShadows: false
// //     },
// //     breakpoints: {
// //         480: {
// //             spaceBetween: 0,
// //             centeredSlides: true
// //         }
// //     },
// //     simulateTouch: true,
// //     navigation: {
// //         nextEl: '.news-slider-next',
// //         prevEl: '.news-slider-prev'
// //     },
// //     pagination: {
// //         el: '.news-slider__pagination',
// //         clickable: true
// //     },
// //     on: {
// //         init: function () {
// //             var activeItem = document.querySelector('.swiper-slide-active');
// //
// //             var sliderItem = activeItem.querySelector('.news__item');
// //
// //             $('.swiper-slide-active .news__item').addClass('active');
// //
// //             var x = sliderItem.getBoundingClientRect().left;
// //             var y = 0;
// //             var width = sliderItem.getBoundingClientRect().width;
// //             var height = sliderItem.getBoundingClientRect().height;
// //
// //
// //             $('.item-bg').addClass('active');
// //
// //             bg.style.width = width + 'px';
// //             bg.style.height = height + 'px';
// //             bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
// //         }
// //     }
// // });
// //
// // swiper.on('touchEnd', function () {
// //     $('.news__item').removeClass('active');
// //     $('.swiper-slide-active .news__item').addClass('active');
// // });
// //
// // swiper.on('slideChange', function () {
// //     $('.news__item').removeClass('active');
// // });
// //
// // swiper.on('slideChangeTransitionEnd', function () {
// //     $('.news__item').removeClass('active');
// //     var activeItem = document.querySelector('.swiper-slide-active');
// //
// //     var sliderItem = activeItem.querySelector('.news__item');
// //
// //     $('.swiper-slide-active .news__item').addClass('active');
// //
// //     var x = sliderItem.getBoundingClientRect().left;
// //     var y = 0;
// //     var width = sliderItem.getBoundingClientRect().width;
// //     var height = sliderItem.getBoundingClientRect().height;
// //
// //
// //     $('.item-bg').addClass('active');
// //
// //     bg.style.width = width + 'px';
// //     bg.style.height = height + 'px';
// //     bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
// // });

const slides = document.querySelectorAll(".slider-container .slide");
const dots = document.querySelector(".dots");
const arrows = document.querySelectorAll(".arrows i");

let counter = 0;
let autoSlide = true;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

for (let i = 0; i < slides.length; i++) {
    if (i === 0) {
        dots.innerHTML += `<div class="dot active" data-id="${i}"></div>`;
    } else {
        dots.innerHTML += `<div class="dot" data-id="${i}"></div>`;
    }
}

dots.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    counter = id;
    changeImg();
});

const dotControl = (index) => {
    document.querySelectorAll(".dot").forEach((i) => {
        i.classList.remove("active");
    });

    document.querySelector(`.dot[data-id = '${index}']`).classList.add("active");
};

const changeImg = () => {
    if (counter > slides.length - 1) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    dotControl(counter);
};

// Prev Button
arrows[0].addEventListener("click", () => {
    counter--;
    changeImg();
    return counter;
});

// Next Button
arrows[1].addEventListener("click", () => {
    counter++;
    changeImg();
    return counter;
});

// if (autoSlide === true) {
//     setInterval(() => {
//         counter++;
//         changeImg();
//     }, 6000);
// }
