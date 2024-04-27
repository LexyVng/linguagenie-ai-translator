function translateText(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: ["hola"],
    autoStart: true,
    delay: 2,
    cursor: null,
  });
}

let translationFormElement = document.querySelector("#translation-form");
translationFormElement.addEventListener("submit", translateText);
