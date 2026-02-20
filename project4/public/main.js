let from;
let to;
let paragraph

window.onload = async () => {
  from = " ";
  to = " ";
  // checking if the jaba script is succesfully linked and windows loading

  //   getMessages();

  let response = await fetch("/input");
  let names = await response.json();

  from = names.input[0].from;
  to = names.input[0].to;

paragraph = document.getElementById("text");

  console.log("helllo??");
  console.log(names);
  console.log(names.input[0].from);
  console.log(names.input[0].to);
  console.log(from);

  //  paragraph.innerHTML = from;
  paragraph.innerHTML = poetry(to, from);
};

// poetry generator stuff
let sal_adjs = ["Beloved", "Darling", "Dear", "Dearest", "Fanciful", "Honey"];

let sal_nouns = [
  "Chickpea",
  "Dear",
  "Duck",
  "Jewel",
  "Love",
  "Moppet",
  "Sweetheart",
];

let adjs = [
  "affectionate",
  "amorous",
  "anxious",
  "avid",
  "beautiful",
  "breathless",
  "burning",
  "covetous",
  "craving",
  "curious",
  "eager",
  "fervent",
  "fondest",
  "loveable",
  "lovesick",
  "loving",
  "passionate",
  "precious",
  "seductive",
  "sweet",
  "sympathetic",
  "tender",
  "unsatisfied",
  "winning",
  "wistful",
];

let nouns = [
  "adoration",
  "affection",
  "ambition",
  "appetite",
  "ardour",
  "being",
  "burning",
  "charm",
  "craving",
  "desire",
  "devotion",
  "eagerness",
  "enchantment",
  "enthusiasm",
  "fancy",
  "fellow feeling",
  "fervour",
  "fondness",
  "heart",
  "hunger",
  "infatuation",
  "little liking",
  "longing",
  "love",
  "lust",
  "passion",
  "rapture",
  "sympathy",
  "thirst",
  "wish",
  "yearning",
];

let advs = [
  "affectionately",
  "ardently",
  "anxiously",
  "beautifully",
  "burningly",
  "covetously",
  "curiously",
  "eagerly",
  "fervently",
  "fondly",
  "impatiently",
  "keenly",
  "lovingly",
  "passionately",
  "seductively",
  "tenderly",
  "wistfully",
];

let verbs = [
  "adores",
  "attracts",
  "clings to",
  "holds dear",
  "hopes for",
  "hungers for",
  "likes",
  "longs for",
  "loves",
  "lusts after",
  "pants for",
  "pines for",
  "sighs for",
  "tempts",
  "thirsts for",
  "treasures",
  "yearns for",
  "woos",
];

function poetry(to, from) {
  let lengthOptions = ["short", "long"];
  let output =
    sal_adjs[Math.floor(Math.random() * sal_adjs.length)] + " " + to + ",\n \n";

  let history = [];
  let body = "";

  for (let i = 0; i < 5; i++) {
    let kind = choice([0, 1]);
    if (kind == 1) {
      // Construct long phrase (matching the 50% chance logic via empty strings in arrays)
      let line = [
        "My",
        choice(adjs),
        choice(nouns),
        choice(advs),
        choice(verbs),
        "your",
        choice(adjs),
        choice(nouns),
      ]
        .filter((word) => word !== "")
        .join(" "); // filter removes the empty strings to avoid double spaces

      //output+=line;
      body += line;
    } else {
      const adjNoun = (choice(adjs) + " " + choice(nouns)).trim();

      // Handle the "short" phrase logic
      if (history.length > 0 && history[history.length - 1] == "short") {
        body += ": my " + adjNoun;
      } else {
        body += "You are my " + adjNoun;
      }
    }

    body += ". ";
    history.push(kind);
  }

  // 3. Clean up output
  body = body.replace("  ", " "); // Regex for multiple spaces
  body = body.replace(". ", ".");

  output += body;
  output += "\n\nYours " + choice(advs).trim() + ",\n";

  console.log(output);
  output += from;
  return output;
}

let choice = (arr) => arr[Math.floor(Math.random() * arr.length)];
