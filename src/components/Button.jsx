const Button = ({ children, ...props }) => (
    <button className="px-4 py-2 bg-blue-500 text-white rounded mt-2" {...props}>
      {children}
    </button>
  );
  
  export default Button;