// ham 버튼 클릭했을 때
const $btnHam = document.querySelector(".ham");
const $gnb = document.querySelector(".gnbM");

const $hd = document.querySelector(".hd");
const $links = $hd.querySelectorAll(".gnb > li > a ");
const $sub = $hd.querySelectorAll(".sub");
const $bodyBg = document.querySelector(".bodyBg");
// const $bodym = document.querySelector("body");

$btnHam.addEventListener("click", () => {
  $gnb.classList.toggle("on");
  // $ham.classList.remove("on");
  $bodyBg.classList.toggle("on");
  // $bodym.classList.toggle("on");
});

// $links.forEach((a) => {
//   a.addEventListener("click", (e) => {
//     for (subElm of $sub) {
//       subElm.style.display = `none`;
//     }
//     e.target.nextElementSibling.style.display = ` block`;
//   });
// });

// const $gnbList = document.querySelectorAll(".gnbM > .gnb > li > a");
// const $gnbSub = document.querySelectorAll(".gnbM > .gnb > .sub");

// $gnbList.forEach((a, i) => {
//   a.addEventListener("click", (e) => {
//     for (subm of $gnbSub) {
//       subm.style.cssText = `display:none`;
//       // e.target.addEventListener("click", () => {});
//     }
//     // $gnbSub[i].style.cssText = `display:block`;
//     e.target.nextElementSibling.style.cssText = `display:block`;
//     // e.target.classList.add("on");
//     // e.target.classList.remove("on");
//   });
// });

// 이벤트 위임 방법
// nav 영역을 클릭했을 때
// e.target.matches('.gnb>li>a') 해당 조건이 참이라면
// 1. 형제 요소가 존재하는 조건 확인
//     e.target.nextElementSibling
// 1.1 조건이 참이라면
//     e.preventDefault()
//     형제 요소에 .on toggle 적용
//     $sub 중 대상 sub를 제외하고 기존에 적용된 .on remove
// 2. 1조건이 거짓이라면
//     모든 .sub에 .on remove

$gnbMgnb = document.querySelector(".gnbM .gnb");
// console.log($gnbMgnb);

$gnbMgnb.addEventListener("click", function (e) {
  let A = e.target;
  // $gnbMgnb.style.cssText = `transition:0.3s`;
  if (A.matches(".gnbM .gnb > li > a")) {
    let siblingSub = A.nextElementSibling;
    if (siblingSub) {
      e.preventDefault();
      siblingSub.classList.toggle("on");
      $sub.forEach((sub) => {
        if (sub !== siblingSub) {
          sub.classList.remove("on");
        }
      });
    }
  } else {
    $sub.forEach((sub) => {
      sub.classList.remove("on");
    });
  }
});

// main의 tabmenu 영역
// const $menuTab = document.querySelector(".menuTab");
// const $p = $menuTab.querySelectorAll("p");
// const $menuCon = document.querySelectorAll(".mainMenu > div");
// $p[0].classList.add("on");
// $menuCon[0].style.display = "block";

// $menuTab.addEventListener("click", (e) => {
//   let target = e.target;
//   $p.forEach((p) => {
//     p.classList.remove("on");
//   });
//   target.classList.add("on");

//   let menuName = target.dataset.menuname;
//   if (!menuName) return;

//   $menuCon.forEach((con) => {
//     con.style.display = "none";
//   });

//   let con = document.querySelector(`.${menuName}`);
//   con.style.display = "block";
// });

const $sec = document.querySelector(".sec1");
const $menuTab2 = document.querySelector(".menuTab");
const $p2 = $menuTab2.querySelectorAll("p");
const $secCon = document.querySelectorAll(".secCon");
$p2[0].classList.add("on");
$secCon[0].style.display = "block";
// $secCon.nextElementSibling.style.display = "none";

$menuTab2.addEventListener("click", (e) => {
  let target = e.target;
  $p2.forEach((p) => {
    p.classList.remove("on");
  });
  target.classList.add("on");

  let menuName = target.dataset.menuname;
  if (!menuName) return;

  $secCon.forEach((con) => {
    con.style.display = "none";
  });

  let con = document.querySelector(`.${menuName}`);
  con.style.display = "block";
});
