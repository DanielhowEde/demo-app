export const Select = ({ children, ...props }) => (
    <select className="border p-2 rounded w-full mt-2" {...props}>
      {children}
    </select>
  );
  
  export const SelectItem = ({ value, children }) => (
    <option value={value}>{children}</option>
  );
  