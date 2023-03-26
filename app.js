const out = document.querySelector(".calc-display p");

// история операций ===============================
let history = [];

// операция ========================================
const operation = {
  a: "",
  b: "",
  sign: "",
  result: "",
  finish: false,
  id: 0
};

// рендер кнопок ====================================
const btnsToHTML = (btn) => `
  <div class="${btn.classes}" data-type="${btn.type}" data-name="${btn.name}">${btn.name}</div>
`;

function renderBtns() {
  const num = [
    12,
    13,
    14,
    15,
    17,
    18,
    19,
    20,
    22,
    23,
    24,
    25,
    27,
    28,
    29,
    30,
    32,
    33,
    34,
    35
  ];

  const html = btns
    .map((btn) => {
      if (num.includes(btn.id)) {
        return btnsToHTML(btn);
      }
    })
    .join("");
  document.querySelector(".calc-btns").innerHTML = html;
}
renderBtns();

function renderBtnsEngineering() {
  const html = btns.map(btnsToHTML).join("");
  document.querySelector(".calc-btns").innerHTML = html;
}

// рендер истории операций ==========================
const historyToHTML = (item) => `
  <div class="calc-history-item" data-id="${item.id}">${item.a.replace(
  ".",
  ","
)} ${item.sign} ${item.b.replace(".", ",")} = ${item.result.replace(
  ".",
  ","
)}</div>
`;

function renderHistory() {
  const html = history.map(historyToHTML).reverse().join("");
  document.querySelector(".calc-history").innerHTML = html;
}

// функции очистки поля, удаления символов, расчёта, обновлении истории и очистки истории
function cleanUp() {
  operation.a = "";
  operation.b = "";
  operation.sign = "";
  operation.finish = "";
  out.textContent = "";
}

function deleteSymbol() {
  if (operation.b !== "") {
    operation.b = operation.b.slice(0, -1);
    out.textContent = `${operation.a} ${operation.sign} ${operation.b}`;
  } else if (operation.sign !== "") {
    operation.sign = "";
    out.textContent = `${operation.a} ${operation.sign}`;
  } else if (operation.a !== "") {
    operation.a = operation.a.slice(0, -1);
    out.textContent = `${operation.a}`;
  }
}

function calc() {
  btns.map((btn) => {
    if (operation.sign === btn.name) {
      operation.result = String(btn.handler(operation.a, operation.b));
      operation.finish = true;
      console.log(operation);
    }
  });
}

function updateHistory() {
  operation.id += 1;
  history.push({ ...operation });
  if (document.querySelector(".calc-btns").classList.contains("history")) {
    renderHistory();
  }
  console.log(history);
}

function cleanUpHistory() {
  history = [];
  renderHistory();
}

// обработчик нажатия по кнопкам калькулятора
document.querySelector(".calc-btns").onclick = (e) => {
  if (!e.target.classList.contains("calc-btn")) return;

  let key = e.target.dataset.name;
  const type = e.target.dataset.type;

  if (type === "digit") {
    if (operation.b === "" && operation.sign === "") {
      operation.a += key.replace(",", ".");
      out.textContent = operation.a.replace(".", ",");
      console.log(operation);
    } else if (operation.a !== "" && operation.b !== "" && operation.finish) {
      operation.b += key.replace(",", ".");
      operation.finish = false;
      out.textContent = `${operation.a} ${operation.sign} ${operation.b}`.replaceAll(
        ".",
        ","
      );
      console.log(operation);
    } else {
      operation.b += key.replace(",", ".");
      out.textContent = `${operation.a} ${operation.sign} ${operation.b}`.replaceAll(
        ".",
        ","
      );
      console.log(operation);
    }
    return;
  }

  if (type === "action" && key !== "=") {
    if (operation.b !== "") {
      calc();
      updateHistory();
      operation.a = operation.result.replace(",", ".");
      operation.b = "";
      operation.result = "";
      console.log(operation);
    }
    operation.sign = key;
    out.textContent = `${operation.a} ${operation.sign}`.replace(".", ",");
    console.log(operation);
    return;
  }

  if (key === "=") {
    if (operation.b === "" && operation.sign !== "") operation.b = operation.a;
    if (operation.sign !== "" && operation.b !== "") {
      calc();
      out.textContent = `${operation.result}`.replace(".", ",");
      updateHistory();
      operation.a = operation.result.replace(",", ".");
      operation.b = "";
      operation.sign = "";
      operation.result = "";
    }
    console.log(operation);
    return;
  }

  if (type === "cleaner") {
    cleanUp();
    return;
  }

  if (type === "delete") {
    deleteSymbol();
    return;
  }
};

// обработчик нажатия на кнопку история
document.querySelector(".calc-btn-history").onclick = (e) => {
  if (history.length == 0) {
    const modal = `<div class="calc-modal">Нет записей</div>`;
    document.querySelector(".calc").insertAdjacentHTML("beforeend", modal);
    setTimeout(() => {
      document.querySelector(".calc").lastChild.remove();
    }, 2000);
  } else {
    document.querySelector(".calc-btns").classList.add("history");
    document.querySelector(".calc-btn-back").classList.add("show");
    document.querySelector(".calc-btn-history").classList.add("hide");
    document.querySelector(".calc-history").classList.add("show");
    document.querySelector(".calc-btn-engineering").classList.add("hide");
    document.querySelector(".calc-btns").classList.remove("engineering");
    document.querySelector(".calc-btn-delete").classList.add("show");

    renderHistory();

    function renderBtnsHistory() {
      let numbers = [14, 15, 20, 25, 30, 35];
      const html = btns
        .map((btn) => {
          if (numbers.includes(btn.id)) {
            return btnsToHTML(btn);
          }
        })
        .join("");
      document.querySelector(".calc-btns").innerHTML = html;
    }
    renderBtnsHistory();
  }
};

// обработчик нажатия на элемент истории
document.querySelector(".calc-history").onclick = (e) => {
  if (!e.target.classList.contains("calc-history-item")) return;

  history.map((item) => {
    console.log(item.id, e.target.dataset.id);
    if (e.target.dataset.id == item.id) {
      if (operation.b === "" && operation.sign === "") {
        operation.a = item.result.replace(",", ".");
        out.textContent = operation.a.replace(".", ",");
        console.log(operation);
      } else if (operation.a !== "" && operation.b !== "" && operation.finish) {
        operation.b = item.result.replace(",", ".");
        operation.finish = false;
        out.textContent = `${operation.a} ${operation.sign} ${operation.b}`.replaceAll(
          ".",
          ","
        );
        console.log(operation);
      } else {
        operation.b = item.result.replace(",", ".");
        out.textContent = `${operation.a} ${operation.sign} ${operation.b}`.replaceAll(
          ".",
          ","
        );
        console.log(operation);
      }
      return;

      console.log(operation);
    }
  });
};

// обработчик нажатия кнопки назад
document.querySelector(".calc-btn-back").onclick = (e) => {
  document.querySelector(".calc-btns").classList.remove("history");
  document.querySelector(".calc-history").classList.remove("show");
  document.querySelector(".calc-btn-back").classList.remove("show");
  document.querySelector(".calc-btn-history").classList.remove("hide");
  document.querySelector(".calc-btn-engineering").classList.remove("hide");
  document.querySelector(".calc-btn-delete").classList.remove("show");

  renderBtns();
};

// обработчик нажатия кнопки инженерного калькулятора
document.querySelector(".calc-btn-engineering").onclick = (e) => {
  document
    .querySelector(".fa-solid.fa-square-root-variable")
    .classList.toggle("hide");
  document.querySelector(".fa-solid.fa-plus-minus").classList.toggle("show");
  document.querySelector(".calc-btns").classList.toggle("engineering");

  if (document.querySelector(".calc-btns").classList.contains("engineering")) {
    renderBtnsEngineering();
  } else {
    renderBtns();
  }
};

// обработчик нажатия на кнопку очистить историю
document.querySelector(".calc-btn-delete").onclick = () => {
  cleanUpHistory();
  document.querySelector(".calc-btns").classList.remove("history");
  document.querySelector(".calc-history").classList.remove("show");
  document.querySelector(".calc-btn-back").classList.remove("show");
  document.querySelector(".calc-btn-history").classList.remove("hide");
  document.querySelector(".calc-btn-engineering").classList.remove("hide");
  document.querySelector(".calc-btn-delete").classList.remove("show");
  renderBtns();
};