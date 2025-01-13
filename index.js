const buttonRandom = document.querySelector("#btnRandom");
const boxLetters = document.querySelector("#letters");
const letterWrong = document.querySelector("#letterWrong");
const timer = document.querySelector("#timer");
const reset = document.querySelector("#reset");
let lettersWrong = 0;
let timerStarted = false;
letterWrong.innerText = lettersWrong;

const word =
  "A tecnologia tem avançado a passos largos nos últimos anos. A cada dia, novas inovações surgem, transformando a forma como interagimos com o mundo. Desde a criação dos primeiros computadores, até o advento da inteligência artificial, a tecnologia tem sido um motor fundamental para o progresso. A internet, por exemplo, revolucionou a comunicação, tornando o mundo mais conectado do que nunca. As redes sociais, os aplicativos móveis e os dispositivos inteligentes estão mudando a maneira como nos relacionamos e trabalhamos. No entanto, com todos esses avanços, surgem também questões relacionadas à privacidade, segurança e ética no uso da tecnologia. Por isso, é essencial estarmos sempre atentos às implicações de cada inovação. A educação digital e a conscientização sobre o uso responsável da tecnologia são fundamentais para garantir que as próximas gerações aproveitem ao máximo as oportunidades que a tecnologia oferece.";

let letters = word.split("");
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
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }

  const key = e.key;

  if (e.ctrlKey || e.altKey || key === "Shift" || e.key === "Dead") {
    return;
  }

  let typedLetter = key;
  const currentLetter = letters[letterCurrent];

  if (typedLetter === currentLetter) {
    allSpans[letterCurrent].classList.add("right");
  } else {
    allSpans[letterCurrent].classList.add("wrong");
    lettersWrong++;
  }

  letterCurrent++;
  letterWrong.innerText = lettersWrong;
};

const startTimer = () => {
  const timerTyping = setInterval(() => {
    let numberTime = Number(timer.textContent);
    numberTime -= 1;
    timer.innerText = numberTime;

    if (numberTime <= 0) {
      clearInterval(timerTyping);
      window.removeEventListener("keydown", typingText);
    }
  }, 1000);
};

const resetTyping = () => {
  window.location.href = "/";
};

window.addEventListener("keydown", typingText);
reset.addEventListener("click", resetTyping);
