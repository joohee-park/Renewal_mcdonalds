let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".nextBt",
    prevEl: ".prevBt",
  },
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// html에서 사용되는 배경요소를 script로 추가하기
const wrapBG = document.createElement("div");
wrapBG.setAttribute("class", "bg");
wrapBG.innerHTML = `<img src="./img/bg.svg" alt="" />`;

const $wrap = document.querySelector(".wrap");
$wrap.prepend(wrapBG);

// main의 tabmenu 영역
const $menuTab = document.querySelector(".menuTab");
const $p = $menuTab.querySelectorAll("p");
const $menuCon = document.querySelectorAll(".mainMenu > div");
$p[0].classList.add("on");
$menuCon[0].style.display = "block";

$menuTab.addEventListener("click", (e) => {
  let target = e.target;
  $p.forEach((p) => {
    p.classList.remove("on");
  });
  target.classList.add("on");

  let menuName = target.dataset.menuname;
  if (!menuName) return;

  $menuCon.forEach((con) => {
    con.style.display = "none";
  });

  let con = document.querySelector(`.${menuName}`);
  con.style.display = "block";
});
