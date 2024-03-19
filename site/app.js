import snippets from "./assets/snippet-list.js";

const resetButtons = () => {
  const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
  const divs = document.querySelectorAll(".content-div");

  divs.forEach((div) => {
    div.removeEventListener("click", handleClick);
    div.style.backgroundColor = "#d3d3d3";
    div.classList.remove("shake");
  });

  let firstDivIsGavin = Math.random() > 0.5;
  divs[0].dataset.isGavin = firstDivIsGavin;
  divs[1].dataset.isGavin = !firstDivIsGavin;

  divs[0].textContent = firstDivIsGavin
    ? randomSnippet.gavin
    : randomSnippet.gpt;
  divs[1].textContent = firstDivIsGavin
    ? randomSnippet.gpt
    : randomSnippet.gavin;

  divs.forEach((div) => {
    div.addEventListener("click", handleClick);
  });
};

const handleClick = (event) => {
  const div = event.currentTarget;
  const isGavin = div.dataset.isGavin === "true";
  const isCorrect =
    isGavin &&
    div.textContent ===
      snippets.find((snippet) => snippet.gavin === div.textContent).gavin;

  document
    .querySelectorAll(".content-div")
    .forEach((d) => d.removeEventListener("click", handleClick));

  div.style.backgroundColor = isCorrect ? "#90ee90" : "#ffcccb";
  if (!isCorrect) {
    div.classList.add("shake");
  }

  setTimeout(() => {
    resetButtons();
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  resetButtons();
});
