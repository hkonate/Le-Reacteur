const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";

// Début de votre code
const cowsay = (str) => {
  let newStr = str.split(" ");
  let array = "";
  let chars = 0;
  let limitWord = 0;
  let pos = 1;
  for (let i = 0; i < newStr.length; i++) {
    if (i === 0) {
      array += " ";
      for (let i = 0; i < 41; i++) {
        array += "_";
      }
      array += " \n";
    }
    for (let i = 0; limitWord < 39; i++) {
      if (limitWord + newStr[i].length <= 39) {
        limitWord += newStr[i].length;
      }
      if (limitWord + 1 <= 39) {
        limitWord++;
      }
      pos = i;
    }
    if (chars + newStr[i].length <= 39) {
      for (let j = 0; j < newStr[i].length; j++) {
        array += newStr[i][j];
        chars++;
      }
      array += " ";
      chars++;
    } else {
      for (let k = chars; k < 39; k++) {
        array += " ";
      }
      array += " |\n ";
      chars = 0;
      for (let j = 0; j < newStr[i].length; j++) {
        array += newStr[i][j];
        chars++;
      }
      array += " ";
      chars++;
    }
    if (i === newStr.length - 1 && chars < 40) {
      for (let j = chars; j < 40; j++) {
        array += " ";
      }
    }
  }
  array += "/\n ";
  for (let i = 0; i < 41; i++) {
    array += "-";
  }
  array += " \n";
  return array;
};
// Fin de votre code

console.log(cowsay(str));
