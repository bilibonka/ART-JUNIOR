let elem = document.querySelector(".containerMain");
let el = document.querySelector(".menu_mobile");

// elem.onclick = function e (event) {
//  let target = event.target; // где был клик?
//  let tar = target;
//  if (target.classList.contains('buttonMenu')) {
//  	let men = target.previousSibling.previousSibling;

// 	if(!men.classList.contains('active')) {
// 		men.classList.add('active');
// 		tar.innerText = "Свернуть";
// 		// попытаться сделать свернуть/развернуть с анимацией и пошарить в коде оригинала
// 	} else {
// 	setInterval(function() {
// 		tegg = window.getComputedStyle(men).height;
// 		el.style.maxHeight = tegg+"px";
// 		// console.log("negg"+negg);
// 		console.log("tegg"+tegg);
// 	}, 500)
// 	elem.addEventListener('dblclick', function () {
// 		 men.classList.remove('active');
// 		tar.innerText = "Развернуть";
// 	});

// 		// попытаться сделать свернуть/развернуть с анимацией и пошарить в коде оригинала
// 	}
//  	console.log(men);
//  }

// }
function anichange(objName) {
  if ($(objName).css("display") == "none") {
    $(objName).animate({ height: "show" }, 1000);
    $(objName).addClass("active");
  } else {
    $(objName).animate({ height: "hide" }, 500);
    $(objName).removeClass("active");
  }
}
