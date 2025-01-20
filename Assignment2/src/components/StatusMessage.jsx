/* eslint-disable react/prop-types */

const StatusMessage = ({ status }) => {
  let message;
  let style;

  // Conditional rendering logic
  switch (status) {
    case 'success':
      message = "Operation completed successfully!";
      style = { color: 'green' };
      break;
    case 'error':
      message = "An error occurred. Please try again.";
      style = { color: 'red' };
      break;
    case 'loading':
      message = "Loading... Please wait.";
      style = { color: 'blue' };
      break;
    default:
      message = "Unknown status.";
      style = { color: 'gray' };
  }

  return (
    <div style={{ padding: '10px', ...style }}>
      <strong>{message}</strong>
    </div>
  );
};

export default StatusMessage;
