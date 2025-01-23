/* eslint-disable react/prop-types */

function Child({name,lName,age}) { // Destructure the 'car' prop
  return (
    <div>
      <h1>first name {name}</h1>
      <h1>last name {lName}</h1>
      <h1>age {age}</h1>
    </div>
  );
}

export default Child;
