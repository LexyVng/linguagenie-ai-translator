function displayTranslation(response) {
  new Typewriter("#translation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: null,
  });
}

function translateText(event) {
  event.preventDefault();

  let selectedOriginLanguage = document.querySelector("#origin-languages");
  let selectedDestinationLanguage = document.querySelector(
    "#destination-languages"
  );
  let userInputElement = document.querySelector("#requested-text");

  let apiKey = "2b4a0533t1055afa3fbo41efac5059ad";
  let prompt = `Translate ${userInputElement.value} from ${selectedOriginLanguage.value} to ${selectedDestinationLanguage.value}`;
  let context =
    "You are an expert translator who speaks fluently many languages. Please provide a precise translation as per the prompt in basic HTML. Your answer should have the following format: <strong>Translation:</strong> <br/><br/>Your answer";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTranslation);
}

let translationFormElement = document.querySelector("#translation-form");
translationFormElement.addEventListener("submit", translateText);
