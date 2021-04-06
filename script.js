const imageStorage = [
  {
    value: "ás",
    img: '<img src="./img/a-paus.svg" alt="ás de paus">',
  },
  {
    value: "2",
    img: '<img src="./img/2-paus.svg" alt="2 de paus">',
  },
  {
    value: "3",
    img: '<img src="./img/3-paus.svg" alt="3 de paus">',
  },
  {
    value: "4",
    img: '<img src="./img/4-paus.svg" alt="4 de paus">',
  },
  {
    value: "5",
    img: '<img src="./img/5-paus.svg" alt="5 de paus">',
  },
  {
    value: "6",
    img: '<img src="./img/6-paus.svg" alt="6 de paus">',
  },
  {
    value: "7",
    img: '<img src="./img/7-paus.svg" alt="7 de paus">',
  },
  {
    value: "8",
    img: '<img src="./img/8-paus.svg" alt="8 de paus">',
  },
  {
    value: "9",
    img: '<img src="./img/9-paus.svg" alt="9 de paus">',
  },
  {
    value: "10",
    img: '<img src="./img/10-paus.svg" alt="10 de paus">',
  },
  {
    value: "valete",
    img: '<img src="./img/j-paus.svg" alt="valete de paus">',
  },
  {
    value: "dama",
    img: '<img src="./img/q-paus.svg" alt="dama de paus">',
  },
  {
    value: "rei",
    img: '<img src="./img/k-paus.svg" alt="rei de paus">',
  },
];

const randomNumber = parseInt(Math.random() * 12);
const rightAnswer = imageStorage[randomNumber];

const userAnswer = {
  tries: 3,
  title: document.getElementById("title"),
  description: document.getElementById("description"),
  answer: document.getElementById("user-guess"),
  img: document.querySelector("div.image"),
  windowWidth: window.screen.availWidth,

  checkTheAnswer() {
    document.querySelector("div.answer").classList.add("active");
    userAnswer.tries--;

    if (userAnswer.answer.value.toLowerCase() == rightAnswer.value) {
      if (userAnswer.windowWidth > 800) {
        userAnswer.img.innerHTML = rightAnswer.img;
      }

      userAnswer.title.innerHTML = "Quase um Mago!!!";
      userAnswer.description.innerHTML = `
                <p>Parabéns, seu nível de cartomante foi aumentado em +5!!!</p>
                <p>Clique em confirmar para jogar novamente</p>
            `;

      document.getElementById("checking-answer").disabled = true;
      document.getElementById("confirm").onclick = () => {
        location.reload();
      };
    } else if (userAnswer.tries > 0) {
      userAnswer.title.innerHTML = "Hmmm... Não foi dessa vez!!!";

      userAnswer.description.innerHTML = `Mas vamos lá, você ainda tem: ${userAnswer.tries} tentativa(s)`;

      document.getElementById("checking-answer").disabled = true;
      document.getElementById("confirm").onclick = () => {
        document.querySelector("div.answer").classList.remove("active");

        document.getElementById("checking-answer").disabled = false;

        userAnswer.answer.value = "";
      };
    } else {
      if (userAnswer.windowWidth > 800) {
        userAnswer.img.innerHTML = rightAnswer.img;
      }

      userAnswer.title.innerHTML = "GAME OVER!!!";
      userAnswer.description.innerHTML = `
            <P>Acabaram suas chances companheiro!</p>
            <p>Se eu fosse você, eu tentaria de novo. Afinal, DESISTIR JAMAIS, NÉ?</p>
            <p>Clique em confirmar para jogar novamente</p>`;

      document.getElementById("checking-answer").disabled = true;
      document.getElementById("confirm").onclick = () => {
        location.reload();
      };
    }
  },
};
document.getElementById("checking-answer").onclick = userAnswer.checkTheAnswer;

const showPlaceholderOnDesktop = () => {
  let windowWidth = window.screen.availWidth;

  if (windowWidth > 800) {
    let img = document.querySelector("div.image");
    img.innerHTML = '<img src="./img/placeholder.png" alt=""></img>';
  }
};
showPlaceholderOnDesktop();