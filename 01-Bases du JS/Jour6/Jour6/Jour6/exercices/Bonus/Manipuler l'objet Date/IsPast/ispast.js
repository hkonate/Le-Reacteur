const isPast = (today, date) => {
  if (today.getYear() > new Date(date).getYear()) {
    return "Date is past";
  } else if (today.getYear() < new Date(date).getYear()) {
    return "Date is not past";
  } else {
    if (today.getMonth() > new Date(date).getMonth()) {
      return "Date is past";
    } else if (today.getMonth() < new Date(date).getMonth()) {
      return "Date is not past";
    } else {
      if (today.getDate() > new Date(date).getDate()) {
        return "Date is past";
      } else if (today.getDate() < new Date(date).getDate()) {
        return "Date is not past";
      }
    }
  }
  return;
};
console.log(isPast(new Date(), "July, 14, 2019")); // Date is past
console.log(isPast(new Date(), "July, 14, 2025")); // Date is not past
