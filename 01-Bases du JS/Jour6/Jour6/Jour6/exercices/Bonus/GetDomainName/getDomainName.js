const getDomainName = (str) => {
  if (str && str.includes("www.")) {
    let newStr = "";
    let dot = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        dot++;
      } else if (dot === 1) {
        newStr += str[i];
      }
    }
    return newStr;
  }
  return "Please return an URL.";
};

console.log(getDomainName("https://www.lereacteur.io")); //returns "lereacteur"

console.log(getDomainName("https://www.twitch.tv/stevenpersia")); //returns "twitch"

console.log(getDomainName("http://www.oldwebsite.org/")); //returns "oldwebsite"

console.log(getDomainName("www.google.com")); //returns "google"

console.log(getDomainName()); //returns "Please return an URL."
