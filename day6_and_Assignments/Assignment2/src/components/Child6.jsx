/* eslint-disable react/prop-types */


const Child6 = ({ message, user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <h2>Child Component</h2>
      <p><strong>Message:</strong> {message}</p>
      <p><strong>User Name:</strong> {user.name}</p>
      <p><strong>User Age:</strong> {user.age}</p>
    </div>
  );
};

export default Child6;
