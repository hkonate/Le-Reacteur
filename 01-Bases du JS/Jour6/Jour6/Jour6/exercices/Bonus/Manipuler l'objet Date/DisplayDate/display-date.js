const displayDate = (date) => {
  let str;
  switch (date.getDay()) {
    case 0:
      switch (date.getMonth()) {
        case 0:
          str = `Nous sommes dimanche ${date.getDate()} janvier ${date.getYear()}`;
          break;
        case 1:
          str = `Nous sommes dimanche ${date.getDate()} février ${date.getYear()}`;
          break;
        case 2:
          str = `Nous sommes dimanche ${date.getDate()} mars ${date.getYear()}`;
          break;
        case 3:
          str = `Nous sommes dimanche ${date.getDate()} avril ${date.getYear()}`;
          break;
        case 4:
          str = `Nous sommes dimanche ${date.getDate()} mai ${date.getYear()}`;
          break;
        case 5:
          str = `Nous sommes dimanche ${date.getDate()} juin ${date.getYear()}`;
          break;
        case 6:
          str = `Nous sommes dimanche ${date.getDate()} juillet ${date.getYear()}`;
          break;
        case 7:
          str = `Nous sommes dimanche ${date.getDate()} août ${date.getYear()}`;
          break;
        case 8:
          str = `Nous sommes dimanche ${date.getDate()} septembre ${date.getYear()}`;
          break;
        case 9:
          str = `Nous sommes dimanche ${date.getDate()} octobre ${date.getYear()}`;
          break;
        case 10:
          str = `Nous sommes dimanche ${date.getDate()} novembre ${date.getYear()}`;
          break;
        default:
          str = `Nous sommes dimanche ${date.getDate()} décembre ${date.getYear()}`;
      }
      break;
    case 1:
      switch (date.getMonth()) {
        case 0:
          str = `Nous sommes lundi ${date.getDate()} janvier ${date.getYear()}`;
          break;
        case 1:
          str = `Nous sommes lundi ${date.getDate()} février ${date.getYear()}`;
          break;
        case 2:
          str = `Nous sommes lundi ${date.getDate()} mars ${date.getYear()}`;
          break;
        case 3:
          str = `Nous sommes lundi ${date.getDate()} avril ${date.getYear()}`;
          break;
        case 4:
          str = `Nous sommes lundi ${date.getDate()} mai ${date.getYear()}`;
          break;
        case 5:
          str = `Nous sommes lundi ${date.getDate()} juin ${date.getYear()}`;
          break;
        case 6:
          str = `Nous sommes lundi ${date.getDate()} juillet ${date.getYear()}`;
          break;
        case 7:
          str = `Nous sommes lundi ${date.getDate()} août ${date.getYear()}`;
          break;
        case 8:
          str = `Nous sommes lundi ${date.getDate()} septembre ${date.getYear()}`;
          break;
        case 9:
          str = `Nous sommes lundi ${date.getDate()} octobre ${date.getYear()}`;
          break;
        case 10:
          str = `Nous sommes lundi ${date.getDate()} novembre ${date.getYear()}`;
          break;
        default:
          str = `Nous sommes lundi ${date.getDate()} décembre ${date.getYear()}`;
      }
      break;

    case 2:
      switch (date.getMonth()) {
        case 0:
          str = `Nous sommes mercredi ${date.getDate()} janvier ${date.getYear()}`;
          break;
        case 1:
          str = `Nous sommes mercredi ${date.getDate()} février ${date.getYear()}`;
          break;
        case 2:
          str = `Nous sommes mercredi ${date.getDate()} mars ${date.getYear()}`;
          break;
        case 3:
          str = `Nous sommes mercredi ${date.getDate()} avril ${date.getYear()}`;
          break;
        case 4:
          str = `Nous sommes mercredi ${date.getDate()} mai ${date.getYear()}`;
          break;
        case 5:
          str = `Nous sommes mercredi ${date.getDate()} juin ${date.getYear()}`;
          break;
        case 6:
          str = `Nous sommes mercredi ${date.getDate()} juillet ${date.getYear()}`;
          break;
        case 7:
          str = `Nous sommes mercredi ${date.getDate()} août ${date.getYear()}`;
          break;
        case 8:
          str = `Nous sommes mercredi ${date.getDate()} septembre ${date.getYear()}`;
          break;
        case 9:
          str = `Nous sommes mercredi ${date.getDate()} octobre ${date.getYear()}`;
          break;
        case 10:
          str = `Nous sommes mercredi ${date.getDate()} novembre ${date.getYear()}`;
          break;
        default:
          str = `Nous sommes mercredi ${date.getDate()} décembre ${date.getYear()}`;
      }
      break;

    case 4:
      switch (date.getMonth()) {
        case 0:
          str = `Nous sommes jeudi ${date.getDate()} janvier ${date.getYear()}`;
          break;
        case 1:
          str = `Nous sommes jeudi ${date.getDate()} février ${date.getYear()}`;
          break;
        case 2:
          str = `Nous sommes jeudi ${date.getDate()} mars ${date.getYear()}`;
          break;
        case 3:
          str = `Nous sommes jeudi ${date.getDate()} avril ${date.getYear()}`;
          break;
        case 4:
          str = `Nous sommes jeudi ${date.getDate()} mai ${date.getYear()}`;
          break;
        case 5:
          str = `Nous sommes jeudi ${date.getDate()} juin ${date.getYear()}`;
          break;
        case 6:
          str = `Nous sommes jeudi ${date.getDate()} juillet ${date.getYear()}`;
          break;
        case 7:
          str = `Nous sommes jeudi ${date.getDate()} août ${date.getYear()}`;
          break;
        case 8:
          str = `Nous sommes jeudi ${date.getDate()} septembre ${date.getYear()}`;
          break;
        case 9:
          str = `Nous sommes jeudi ${date.getDate()} octobre ${date.getYear()}`;
          break;
        case 10:
          str = `Nous sommes jeudi ${date.getDate()} novembre ${date.getYear()}`;
          break;
        default:
          str = `Nous sommes jeudi ${date.getDate()} décembre ${date.getYear()}`;
      }
      break;

    case 5:
      switch (date.getMonth()) {
        case 0:
          str = `Nous sommes vendredi ${date.getDate()} janvier ${date.getYear()}`;
          break;
        case 1:
          str = `Nous sommes vendredi ${date.getDate()} février ${date.getYear()}`;
          break;
        case 2:
          str = `Nous sommes vendredi ${date.getDate()} mars ${date.getYear()}`;
          break;
        case 3:
          str = `Nous sommes vendredi ${date.getDate()} avril ${date.getYear()}`;
          break;
        case 4:
          str = `Nous sommes vendredi ${date.getDate()} mai ${date.getYear()}`;
          break;
        case 5:
          str = `Nous sommes vendredi ${date.getDate()} juin ${date.getYear()}`;
          break;
        case 6:
          str = `Nous sommes vendredi ${date.getDate()} juillet ${date.getYear()}`;
          break;
        case 7:
          str = `Nous sommes vendredi ${date.getDate()} août ${date.getYear()}`;
          break;
        case 8:
          str = `Nous sommes vendredi ${date.getDate()} septembre ${date.getYear()}`;
          break;
        case 9:
          str = `Nous sommes vendredi ${date.getDate()} octobre ${date.getYear()}`;
          break;
        case 10:
          str = `Nous sommes vendredi ${date.getDate()} novembre ${date.getYear()}`;
          break;
        default:
          str = `Nous sommes vendredi ${date.getDate()} décembre ${date.getYear()}`;
      }
      break;

    default:
      switch (date.getMonth()) {
        case 0:
          str = `Nous sommes samedi ${date.getDate()} janvier ${date.getYear()}`;
          break;
        case 1:
          str = `Nous sommes samedi ${date.getDate()} février ${date.getYear()}`;
          break;
        case 2:
          str = `Nous sommes samedi ${date.getDate()} mars ${date.getYear()}`;
          break;
        case 3:
          str = `Nous sommes samedi ${date.getDate()} avril ${date.getYear()}`;
          break;
        case 4:
          str = `Nous sommes samedi ${date.getDate()} mai ${date.getYear()}`;
          break;
        case 5:
          str = `Nous sommes samedi ${date.getDate()} juin ${date.getYear()}`;
          break;
        case 6:
          str = `Nous sommes samedi ${date.getDate()} juillet ${date.getYear()}`;
          break;
        case 7:
          str = `Nous sommes samedi ${date.getDate()} août ${date.getYear()}`;
          break;
        case 8:
          str = `Nous sommes samedi ${date.getDate()} septembre ${date.getYear()}`;
          break;
        case 9:
          str = `Nous sommes samedi ${date.getDate()} octobre ${date.getYear()}`;
          break;
        case 10:
          str = `Nous sommes samedi ${date.getDate()} novembre ${date.getYear()}`;
          break;
        default:
          str = `Nous sommes samedi ${date.getDate()} décembre ${date.getYear()}`;
      }
  }
  return str;
};
const today = new Date();

console.log(displayDate(today));
