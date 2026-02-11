// checlk if java script work
// alert("javascript page has been successfully linked!");

//write to the inspector conlole
console.log("this is a concole message");

window.onload = async () => {
  console.log("window has loaded");

  // retrievs a specific element using the id from the html page
  document.getElementById("important");

  document.getElementById('blue1')
    document.getElementById("blue1").innerHTML = "hello??"
let blue1 = document.getElementById("blue1")
    //  blue1.classList.add("hide");



  //maniputate the text of the selected element
  document.getElementById("important").innerHTML =
    "i have <span> change</span> the text with javasceipt";

    //  document.getElementById("important").remove();


  let importantParagraph = document.getElementById("important");
  // importantParagraph.style.backgroundColor = "#840032";
  importantParagraph.style.backgroundColor = "#6a48a8ff";

  importantParagraph.classList.add("hide");
  importantParagraph.classList.remove("hide");

  //adding element to html usung js
  //4 steps
  //1. getting the element that we will add a child to
  let c = document.getElementById("container");

  // 2.  what type of tag will we create
  let i = document.createElement("img");

  // 3. modify new element as needed
  i.src =
    "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog";

  c.appendChild(i);



let b = document.getElementById("blue1")
b.appendChild(i)



  //   event listner is a function takes 2 paramet
  // 1. name of the ebent 2. call back function
  c.addEventListener("click", () => {
    console.log("click");

    if (importantParagraph.classList.contains("hide")) {
      importantParagraph.classList.remove("hide");
    } else {
      importantParagraph.classList.add("hide");
    }
  });

  //   use class as the selector for the elements
  let blues = document.getElementsByClassName("blue");
  console.log(blues);
  blues[1].style.backgroundColor = "skyblue";

  for (let b of blues) {
    b.style.border = "navy solid 4px";
  }

  // API Stuff
  // making an api request
  // create url URLSearchParams
  let params = new URLSearchParams({
    apikey: "ef5d768",
    s: "blade runner",
    type: "movie",
  });

  let url = "https://omdbapi.com/?" + params;

  console.log(url);

  //makie the request to the url fetch
  let response = await fetch(url);
  console.log(response);

  let movieData = await response.json();
  console.log("movieData")
  console.log(movieData);

  let movies = movieData.Search;
  console.log(movies);

  for (let m of movies) {
    let div = document.createElement("div");
    div.textContent = m.Title;

    let poster = document.createElement("img");
    poster.src = m.Poster;
    div.appendChild(poster);

    c.appendChild(div);
  }
};
