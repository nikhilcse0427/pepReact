  const User = {
    name: "Nikhil Verma",
    age: 21,
    city: "Bhagalpur",
  };

  // Destructure User object
  const { name, ...rest } = User;

  console.log(name); // "Nikhil Verma"
  console.log(rest);  // { age: 21, city: "Bhagalpur" }


