const wordCount = (str) => {
  if (str === "") {
    return 0;
  }
  const counter = str.trim().split(" ").length;
  console.log(counter);
};

wordCount("");
