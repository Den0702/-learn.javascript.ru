function makeUser() {
  return {
    name: "Джон",
    ref() { 
      return this;
    },
  };
};

let user = makeUser();

console.log( user.ref().name );