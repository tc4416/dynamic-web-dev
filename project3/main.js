let q;

window.onload = async () => {
  // checking if the jaba script is succesfully linked and windows loading
  alert("ye");

  //changing quote when space pressed / mouse click
  //event listener
  let quote = document.getElementById("quote");

  // checking mouse click
  document.addEventListener("click", () => {
    // console.log("click");
    quote.innerHTML = "mouse is clicked ye";
  });

  //checking space bar
  document.addEventListener("keyup", (e) => {
    if (e.key == " ") {
      //   console.log("key pressed");
      //   console.log(e.key);
      quote.innerHTML = "space bar is pressed ye";
    }
  });

  //Geting quate through API
  let url = "https://api.kanye.rest";

  fetchingQuote(url);
  //   let responseRaw = await fetch(url);
  //   console.log(responseRaw);

  //   //translate to json
  //   let responseQuote = await responseRaw.json();
  //   console.log(responseQuote);
  //   console.log(responseQuote.quote);
};

async function fetchingQuote(url) {
  let responseRaw = await fetch(url);
  console.log(responseRaw);

  //translate to json
  let responseQuote = await responseRaw.json();
  console.log(responseQuote);

  q = responseQuote.quotes;
  console.log(q);

  return q;
}
