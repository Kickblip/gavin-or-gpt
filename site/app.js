import snippets from "./assets/snippet-list.js";
let correctCounter = 0;
let totalCounter = 0;
let repeatArray = [];

const resetButtons = () => {
  const divs = document.querySelectorAll(".content-div");
  const paragraph = document.querySelector(".content");

  divs.forEach((div) => {
    div.removeEventListener("click", handleClick);
    div.style.backgroundColor = "#d3d3d3";
    div.classList.remove("shake");
  });

  let snippetIndex = Math.floor(Math.random() * snippets.length);
  let gptOrGavin = Math.random() > 0.5;

  let attempt = 0;
  while (
    repeatArray.includes(snippets[snippetIndex]) &&
    attempt < snippets.length
  ) {
    snippetIndex = Math.floor(Math.random() * snippets.length);
    attempt++;
  }

  if (attempt >= snippets.length) {
    repeatArray = [];
  }

  if (gptOrGavin) {
    paragraph.innerHTML = snippets[snippetIndex].gavin;
  } else {
    paragraph.innerHTML = snippets[snippetIndex].gpt;
  }
  repeatArray.push(snippets[snippetIndex]);

  divs[0].dataset.isGavin = gptOrGavin.toString();
  divs[1].dataset.isGavin = (!gptOrGavin).toString();

  divs.forEach((div) => {
    div.addEventListener("click", handleClick);
  });
};

const handleClick = (event) => {
  const div = event.currentTarget;
  const isGavin = div.dataset.isGavin === "true";
  const isCorrect = isGavin;
  totalCounter += 1;

  document
    .querySelectorAll(".content-div")
    .forEach((d) => d.removeEventListener("click", handleClick));

  div.style.backgroundColor = isCorrect ? "#90ee90" : "#ffcccb";
  if (!isCorrect) {
    div.classList.add("shake");
  } else {
    correctCounter += 1;
  }
  document.querySelector(".totalCorrect").innerHTML =
    correctCounter + "/" + totalCounter;

  setTimeout(() => {
    resetButtons();
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  resetButtons();
});
