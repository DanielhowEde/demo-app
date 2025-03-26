const Toast = ({ message, isVisible, onClose }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
        {message}
        <button className="ml-4 text-white font-bold" onClick={onClose}>✖</button>
      </div>
    );
  };
  
  export default Toast;