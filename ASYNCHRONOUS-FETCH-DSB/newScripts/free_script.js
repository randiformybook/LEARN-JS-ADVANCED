const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return(this.lastName);
    }
  };
const funcFullname = person.fullName();
console.log(funcFullname);