function Comp1() {
  let User = "Nikhil Verma";
  const student = {
    regno: 100,
    sname: "Star"
  };

  return (
    <div>
      <h1>My first react app</h1>
      <p>Welcome to {User}</p>
      <p>Regno: {student.regno}</p>
      <p>Name: {student.sname}</p>
    </div>
  );
}

export default Comp1