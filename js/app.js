/* #Search Menu
  ======================================================= */
const headerSearchIcons = document.querySelectorAll('.header-search-icon');
const headerSearchMenu = document.querySelector('.header-search-menu');
const headerSearchClose = document.querySelector('.header-search-menu .close');

headerSearchIcons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();

    headerSearchMenu.classList.add('show');
    body.classList.add('no-scroll');
  });
})


headerSearchClose.addEventListener('click', (e) => {
  e.preventDefault();

  headerSearchMenu.classList.remove('show');
  body.classList.remove('no-scroll');
  header.classList.remove('show');
});

/* #Home Banner
  ======================================================= */
if (document.querySelector('.home-banner .swiper')) {
  const play = document.querySelector('.home-banner .play');
  const pause = document.querySelector('.home-banner .pause');

  const swiper = new Swiper(".home-banner .swiper", {
    pagination: {
      el: ".home-banner .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    loop: true
  });

  play.addEventListener('click', (e) => {
    swiper.autoplay.start();
  });

  pause.addEventListener('click', (e) => {
    swiper.autoplay.stop();
  });
}

/* #Product Slider
  ======================================================= */
if (document.querySelector('.product-slider .tab-navigation .swiper')) {
  new Swiper(".product-slider .tab-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.3,
        freeMode: true,
      },
      1024: {
        slidesPerView: 6,
        freeMode: false,
      }
    }
  });
}

if (document.querySelector('.product-slider .tab-content .swiper')) {
  const sliders = document.querySelectorAll('.product-slider .tab-content .swiper');

  sliders.forEach((slider) => {
    new Swiper(slider, {
      breakpoints: {
        0: {
          slidesPerView: 1.3
        },
        1024: {
          slidesPerView: 4
        }
      }
    });
  });
}

/* #Checklist Slider
  ======================================================= */
if (document.querySelector('.checklist .tab-navigation .swiper')) {
  new Swiper(".checklist .tab-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.3,
        freeMode: true,
      },
      1024: {
        slidesPerView: 4,
        freeMode: false,
      }
    }
  });
}

/* #Diaper Slider
  ======================================================= */
if (document.querySelector('.diaper .swiper')) {
  new Swiper(".diaper .swiper", {
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4.75,
      }
    },
    navigation: {
      nextEl: ".diaper .next",
      prevEl: ".diaper .prev",
    },
  });
}

/* #Blog Post Slider
  ======================================================= */
if (document.querySelector('.blog-post-slider .tab-navigation .swiper')) {
  new Swiper(".blog-post-slider .tab-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.3,
        freeMode: true,
      },
      1024: {
        slidesPerView: 5,
        freeMode: false,
      }
    }
  });
}

if (document.querySelector('.blog-post-slider .tab-content .swiper')) {
  new Swiper(".blog-post-slider .tab-content .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.3,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 4.5,
        centeredSlides: true,
      }
    },
    navigation: {
      nextEl: ".blog-post-slider .tab-content .next",
      prevEl: ".blog-post-slider .tab-content .prev",
    },
  });
}

/* #Home Presents Bottom Slider
  ======================================================= */
if (document.querySelector('.home-presents .bottom .swiper')) {
  new Swiper(".home-presents .bottom .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.2
      },
      1024: {
        slidesPerView: 3
      }
    },
    pagination: {
      el: ".home-presents .bottom .swiper-pagination",
      clickable: true,
    },
  });
}

/* #Journey Slider
  ======================================================= */
if (document.querySelector('.journey-slider .tab-content .swiper')) {
  new Swiper(".journey-slider .tab-content .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.3
      },
      1024: {
        slidesPerView: 4
      }
    },
    pagination: {
      el: ".journey-slider .tab-content .swiper-pagination",
      clickable: true,
    },
  });
}

/* #Category Slider
  ======================================================= */
if (document.querySelector('.category-slider')) {
  if (document.querySelector('.category-slider .tab-navigation')) {
    var observer = new IntersectionObserver(function (entries) {
      // no intersection with screen
      if (entries[0].intersectionRatio === 0)
        document.querySelector(".category-slider .tab-navigation").classList.add("sticky");
      // fully intersects with screen
      else if (entries[0].intersectionRatio === 1)
        document.querySelector(".category-slider .tab-navigation").classList.remove("sticky");
    }, {
      threshold: [0, 1]
    });

    observer.observe(document.querySelector('.category-slider .sticky-trigger'));

    if (document.querySelector('.category-slider .tab-navigation .swiper')) {
      new Swiper(".category-slider .tab-navigation .swiper", {
        breakpoints: {
          0: {
            slidesPerView: 2.3,
            freeMode: true,
          },
          1024: {
            slidesPerView: 6,
            freeMode: false,
          }
        }
      });
    }
  }

  const sliders = document.querySelectorAll('.category-slider .slider');

  if (!document.querySelector('.category-slider').classList.contains('alt')) {
    sliders.forEach((slider) => {
      const swiper = slider.querySelector('.swiper');
      const next = slider.querySelector('.next');
      const prev = slider.querySelector('.prev');

      new Swiper(swiper, {
        breakpoints: {
          0: {
            slidesPerView: 1.3
          },
          1024: {
            slidesPerView: 4.67
          }
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      });
    });
  } else {
    sliders.forEach((slider) => {
      const swiper = slider.querySelector('.swiper');
      const pagination = slider.querySelector('.swiper-pagination');
      const next = slider.querySelector('.next');
      const prev = slider.querySelector('.prev');

      new Swiper(swiper, {
        breakpoints: {
          0: {
            slidesPerView: 1.3
          },
          1024: {
            slidesPerView: 4
          }
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
      });
    });
  }
}

/* #Product Info
  ======================================================= */
if (document.querySelector('.product-info .tab-navigation .swiper')) {
  new Swiper(".product-info .tab-navigation .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.3,
        freeMode: true,
      },
      1024: {
        slidesPerView: 5,
        freeMode: false,
      }
    }
  });
}

/* #Popup Video Iframe
  ======================================================= */
function stopIframeVideo(iframe) {
  const url = iframe.getAttribute('src');
  iframe.setAttribute('src', '');
  iframe.setAttribute('src', url);
}

const videoPopup = document.querySelector('.video-popup');
const videoPopupIframe = document.querySelector('.video-popup iframe');

if (videoPopup) {
  videoPopup.addEventListener('click', (e) => {
    if (e.target.closest('.popup-close') || !e.target.closest('.video')) {
      stopIframeVideo(videoPopupIframe);
    }
  });
}