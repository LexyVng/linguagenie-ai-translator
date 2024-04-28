function displayTranslation(response) {
  let translatedTextElement = document.querySelector("#translation");
  translatedTextElement.classList.remove("hidden");

  setTimeout(() => {
    new Typewriter("#translation", {
      strings: response.data.answer,
      autoStart: true,
      delay: 2,
      cursor: null,
    });
  }, 3000);
}

function translateText(event) {
  event.preventDefault();

  let selectedOriginLanguage = document.querySelector("#origin-languages");
  let selectedDestinationLanguage = document.querySelector(
    "#destination-languages"
  );
  let userInputElement = document.querySelector("#requested-text");

  let translatedTextElement = document.querySelector("#translation");
  translatedTextElement.innerHTML = `<div class="message">Your wish is our command! Please wait...</div>`;

  let apiKey = "2b4a0533t1055afa3fbo41efac5059ad";
  let prompt = `Translate ${userInputElement.value} from ${selectedOriginLanguage.value} to ${selectedDestinationLanguage.value}`;
  let context =
    "You are an expert translator who speaks fluently many languages. Please provide a precise translation as per the prompt in basic HTML, but DO NOT write anything else except the translated text.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTranslation);
}

let translationFormElement = document.querySelector("#translation-form");
translationFormElement.addEventListener("submit", translateText);
