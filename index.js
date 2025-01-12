const buttonRandom = document.querySelector("#btnRandom");
const boxLetters = document.querySelector("#letters");
const letterWrong = document.querySelector("#letterWrong");
const timer = document.querySelector("#timer");
const reset = document.querySelector("#reset");
let lettersWrong = 0;
letterWrong.innerText = lettersWrong;
const word =
  "A tecnologia tem avançado a passos largos nos ultimos anos. A cada dia, novas inovaçoes surgem, transformando a forma como interagimos com o mundo. Desde a criaçao dos primeiros computadores, ate o advento da inteligencia artificial, a tecnologia tem sido um motor fundamental para o progresso. A internet, por exemplo, revolucionou a comunicaçao, tornando o mundo mais conectado do que nunca. As redes sociais, os aplicativos moveis e os dispositivos inteligentes estao mudando a maneira como nos relacionamos e trabalhamos. No entanto, com todos esses avanços, surgem tambem questoes relacionadas a privacidade, segurança e etica no uso da tecnologia. Por isso, e essencial estarmos sempre atentos as implicaçoes de cada inovaçao. A educaçao digital e a conscientizaçao sobre o uso responsavel da tecnologia são fundamentais para garantir que as proximas geraçoes aproveitem ao maximo as oportunidades que a tecnologia oferece.";

let letters = word.toLowerCase().split("");
let letterCurrent = 0;

const renderText = () => {
  letters.forEach((item) => {
    const span = document.createElement("span");
    span.innerText = item;

    boxLetters.appendChild(span);
  });
};

renderText();

const allSpans = document.querySelectorAll("span");

const typingText = (e) => {
  const key = e.key;

  if (key === letters[letterCurrent]) {
    allSpans[letterCurrent].classList.add("right");
    letterCurrent++;
  } else {
    allSpans[letterCurrent].classList.add("wrong");
    lettersWrong++;

    letterCurrent++;
  }

  letterWrong.innerText = lettersWrong;
};

const startTimer = () => {
  const timerTyping = setInterval(() => {
    let numberTime = Number(timer.textContent);
    numberTime -= 1;
    timer.innerText = numberTime;

    if (numberTime <= 0) {
      clearInterval(timerTyping);
      window.removeEventListener("keyup", typingText);
    }
  }, 1000);
};

startTimer();

const resetTyping = () => {
  window.location.href = "/";
};

window.addEventListener("keyup", typingText);
reset.addEventListener("click", resetTyping);
