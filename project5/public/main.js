//word array
let words = [
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "I",
  "I",
  "I",
  "I",
  "I",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",
  "s",

  "an",
  "an",
  "and",
  "and",
  "and",
  "and",
  "as",
  "as",
  "at",
  "at",
  "but",
  "but",
  "but",
  "by",
  "for",
  "for",
  "for",
  "from",
  "from",
  "if",
  "in",
  "in",
  "in",
  "no",
  "no",
  "not",
  "not",
  "o",
  "of",
  "of",
  "of",
  "of",
  "on",
  "on",
  "or",
  "our",
  "out",
  "over",
  "so",
  "some",
  "than",
  "that",
  "the",
  "the",
  "the",
  "the",
  "their",
  "them",
  "then",
  "there",
  "they",
  "this",
  "this",
  "those",
  "though",
  "to",
  "to",
  "to",
  "to",
  "up",
  "use",
  "was",
  "we",
  "we",
  "were",
  "when",
  "which",
  "who",
  "with",
  "with",
  "would",

  "he",
  "he",
  "her",
  "her",
  "him",
  "his",
  "it",
  "it",
  "it",
  "it",
  "me",
  "me",
  "my",
  "my",
  "one",
  "she",
  "she",
  "them",
  "they",

  "am",
  "are",
  "are",
  "ask",
  "be",
  "bleed",
  "bring",
  "can",
  "celebrate",
  "come",
  "could",
  "dance",
  "decay",
  "devour",
  "did",
  "die",
  "do",
  "do",
  "drink",
  "eat",
  "embrace",
  "explore",
  "fly",
  "give",
  "go",
  "go",
  "growl",
  "has",
  "haunt",
  "have",
  "heal",
  "is",
  "is",
  "is",
  "is",
  "kiss",
  "laugh",
  "let",
  "lie",
  "like",
  "like",
  "like",
  "linger",
  "listen",
  "live",
  "look",
  "make",
  "may",
  "melt",
  "must",
  "need",
  "open",
  "put",
  "remember",
  "sail",
  "see",
  "smile",
  "surround",
  "throb",
  "use",
  "wake",
  "will",
  "work",

  "air",
  "angel",
  "baby",
  "belly",
  "boy",
  "breath",
  "breeze",
  "brother",
  "bug",
  "cake",
  "candy",
  "caramel",
  "cat",
  "champagne",
  "child",
  "cloud",
  "coffee",
  "color",
  "concrete",
  "corduroy",
  "cup",
  "day",
  "desire",
  "dirt",
  "dog",
  "eternity",
  "eye",
  "father",
  "fever",
  "fire",
  "fish",
  "flower",
  "fool",
  "ghost",
  "girl",
  "glass",
  "god",
  "grass",
  "heart",
  "hole",
  "home",
  "ice",
  "joy",
  "life",
  "lip",
  "liquid",
  "magic",
  "man",
  "marble",
  "men",
  "morning",
  "night",
  "ocean",
  "peace",
  "perfume",
  "picture",
  "pie",
  "poetry",
  "poison",
  "porcelain",
  "prisoner",
  "red",
  "rhythm",
  "salt",
  "secret",
  "self",
  "sex",
  "sister",
  "sky",
  "smoke",
  "son",
  "star",
  "steam",
  "steel",
  "time",
  "tree",
  "universe",
  "velvet",
  "voice",
  "window",
  "woman",
  "women",
  "word",

  "about",
  "after",
  "all",
  "almost",
  "always",
  "away",
  "blue",
  "blush",
  "born",
  "brilliant",
  "broken",
  "cool",
  "dark",
  "dazzle",
  "delicious",
  "fat",
  "ferocious",
  "good",
  "green",
  "hard",
  "here",
  "hot",
  "how",
  "long",
  "moist",
  "more",
  "more",
  "most",
  "must",
  "naked",
  "never",
  "night",
  "old",
  "only",
  "open",
  "over",
  "peace",
  "sad",
  "sacred",
  "slow",
  "soft",
  "vast",
  "warm",
  "wet",
  "wild",
  "young",
  "yet",

  "ed",
  "ed",
  "ed",
  "er",
  "er",
  "es",
  "es",
  "ing",
  "ing",
  "ing",
  "ing",
  "ing",
  "ing",
  "less",
  "ly",
  "ly",
  "y",
  "y",
  "y",
  "d",
  "d",
  "r",
  "r",
];

window.onload = async () => {
  wordsZone = document.getElementById("words-zone");
  boardZone = document.getElementById("board-zone");

  save = document.getElementById("save-poem");
  // when save-button is clicked
  save.addEventListener("click", async () => {
    const canvas = await html2canvas(boardZone);
    const imageData = canvas.toDataURL("image/png");

    const request = await fetch("/save-poem", {
      method: "POST", //sending gata to server
      headers: { "Content-Type": "application/json" }, //json type data
      body: JSON.stringify({ image: imageData, createdAt: new Date() }), //data itsld
    });

    const json = await request.json();

    // if (json.success) alert("Poem saved!");
    //new window open gallery when the poem is saved
    if (json.success) {
    window.open("/gallery"); 
  }
  });
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    div.className = "word";
    div.id = words[i];
    div.innerHTML = words[i];
    div.style.top = Math.random() * wordsZone.offsetHeight - 30 + "px";
    div.style.left = Math.random() * wordsZone.offsetWidth - 20 + "px";

    div.addEventListener("mousedown", mouseDown);

    wordsZone.appendChild(div);
  }

  let newX = 0,
    newY = 0,
    startX = 0,
    startY = 0;
  let activeDiv = null;

  function mouseDown(e) {
    // console.log(e);
    activeDiv = e.currentTarget;
    // console.log(activeDiv);
    startX = e.clientX;
    startY = e.clientY;

    console.log("startX is ", startX, " startY ", startY);

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }

  function mouseMove(e) {
    console.log("startX is ", startX, " startY ", startY);

    //calculate pixel movement of mouse
    console.log("clientX is ", e.clientX, " clientY ", e.clientY);
    newX = startX - e.clientX;
    newY = startY - e.clientY;
    console.log("newFX is ", newX, " newY ", newY);

    startX = e.clientX;
    startY = e.clientY;

    //applying pixel movement to div
    activeDiv.style.top = activeDiv.offsetTop - newY + "px";
    activeDiv.style.left = activeDiv.offsetLeft - newX + "px";
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    if (activeDiv && isInsideRect(activeDiv, boardZone)) {
      // get position relative to answerBox before reparenting
      const divRect = activeDiv.getBoundingClientRect();
      const boxRect = boardZone.getBoundingClientRect();

      const relativeTop = divRect.top - boxRect.top;
      const relativeLeft = divRect.left - boxRect.left;

      // reparent
      boardZone.appendChild(activeDiv);

      // reposition relative to new parent
      activeDiv.style.top = relativeTop + "px";
      activeDiv.style.left = relativeLeft + "px";
    }

    activeDiv = null;
  }

  function isInsideRect(draggedDiv, targetDiv) {
    const dragged = draggedDiv.getBoundingClientRect();
    const target = targetDiv.getBoundingClientRect();

    console.log(dragged);
    console.log(target);
    return (
      dragged.left >= target.left &&
      dragged.top >= target.top &&
      dragged.right <= target.right &&
      dragged.bottom <= target.bottom
    );
  }
};
