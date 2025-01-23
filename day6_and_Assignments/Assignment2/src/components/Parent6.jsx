import Child6 from './Child6';

const Parent6 = () => {
  const message = "Hello from the App Component!";
  const user = {
    name: "John Doe",
    age: 25,
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Nested Components with Props</h1>
      <Child6 message={message} user={user} />
    </div>
  );
};

export default Parent6;
