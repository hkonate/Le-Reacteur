const user = {
  firstname: "Peter",
  lastname: "Parker",
  alias: "Spiderman",
  nationality: "American",
  height: 178,
  favoriteColor: "red",
};
const filterObject = (obj, filter) => {
  if (!filter || filter.length === 0) {
    return obj;
  }
  const filtered = {};
  for (let i = 0; i < filter.length; i++) {
    filtered[filter[i]] = user[filter[i]];
  }
  return filtered;
};
console.log(filterObject(user, ["firstname", "alias"]));
// Must returns { firstname: "Peter", alias: "Spiderman" }

console.log(filterObject(user, ["nationality", "favoriteColor"]));
// Must returns { nationality: "American", favoriteColor: "red"}

console.log(filterObject(user));
// Must returns entire user object.

console.log(filterObject(user, []));
// Must returns entire user object.
