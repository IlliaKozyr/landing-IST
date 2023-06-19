let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  function clearPrefix() {
    var input = document.getElementById("phone-input");
    if (input.value === "+380") {
        input.value = "";
    }
}

function restorePrefix() {
    var input = document.getElementById("phone-input");
    if (input.value === "") {
        input.value = "+380";
    }
}

// POPUP --------------

function openPopup(){
  let popup =  document.querySelector(".popup-wrap");
  console.log(popup);
  console.log(popup.className);
  console.log(popup.classList);
  if(popup.classList.contains("is-active")){
      popup.classList.remove("is-active");
  }else{
      popup.classList.add("is-active");
  }
}

// Menu Burger -------------

const iconMenu = document.querySelector('.menu__icon');
if(iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}
