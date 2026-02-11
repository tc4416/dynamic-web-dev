let q = " ";
let urlQuote = "https://api.kanye.rest";
let htmlQuote;

window.onload = async () => {
  // checking if the jaba script is succesfully linked and windows loading
  alert("ye");

  //changing quote when space pressed / mouse click
  //event listener
  htmlQuote = document.getElementById("quote");

  fetchingQuote(urlQuote);
};

async function fetchingQuote(url) {
  let responseRaw = await fetch(url);
  //   console.log(responseRaw);

  //translate to json
  let responseQuote = await responseRaw.json();
  //  console.log(responseQuote);

  q = responseQuote.quote;
  //   console.log(q);
}

//moved these outside of windows.onload()
// checking mouse click
document.addEventListener("click", () => {
  // console.log("click");
  //   quote.innerHTML = "mouse is clicked ye";
  fetchingQuote(urlQuote);
  //   console.log(q);
  htmlQuote.innerHTML = q;
});

//checking space bar
document.addEventListener("keyup", (e) => {
  if (e.key == " ") {
    //   console.log("key pressed");
    //   console.log(e.key);
    // quote.innerHTML = "space bar is pressed ye";
    fetchingQuote(urlQuote);
    //   console.log(q);
    htmlQuote.innerHTML = q;
  }
});
