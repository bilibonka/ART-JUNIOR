const $n = {};

window.$n = $n;

function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.setAttribute("data-close", "true");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-window">
			<div class="modal-body">
        <div class="blockScroll">
          <ul class="navList">
            <li class="navItem mainBut">
              <a href="index.php" class="navButton" title="Перейти на главную страницу">главная</a>
            </li>
            <li class="navItem rulesBut">
              <a href="rules.php" class="navButton" title="Перейти на страницу правила">правила</a>
            </li>
            <li class="navItem juryBut">
              <a href="jury.php" class="navButton" title="Перейти на страницу жюри">жюри</a>
            </li>
            <li class="navItem newResultsBut">
              <a href="news.php" class="navButton" title="Перейти на страницу новости, итоги">новости, итоги</a>
            </li>
            <li class="navItem contactsBut">
              <a href="contacts.php" class="navButton" title="Перейти на страницу контакты">контакты</a>
            </li>
          </ul>
        </div>
      </div>
		</div>`
  );
  document.body.appendChild(modal);
  return modal;
}

$n.modal = function (options) {
  const ANIMATION_SPEED = 300;
  const $nmodal = _createModal(options);
  let closing = false;

  const modal = {
    open() {
      !closing && $nmodal.classList.add("open");
    },
    close() {
      closing = true;
      $nmodal.classList.add("hide");
      setTimeout(() => {
        $nmodal.classList.remove("hide");
      }, ANIMATION_SPEED);
      $nmodal.classList.remove("open");
      closing = false;
    },
  };

  $nmodal.addEventListener("click", (event) => {
    if (event.target.dataset.close) {
      modal.close();
    }
  });

  return modal;
};

const modal = $n.modal();

//вызов основного модульного окна
document.querySelectorAll(".call_modal").forEach((elem) => {
  elem.addEventListener("click", modal.open);
});