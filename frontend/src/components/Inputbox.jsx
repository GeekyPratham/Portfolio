

 const Inputbox = ({ type, placeholder, name, onChange }) => {
  return (
    <div>
      <div className="text-m font-medium text-left py-2">{name}</div>
      <div>
        <input
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-2 py-1 border rounded border-slate-200"
          
        />
      </div>
    </div>
  );
};

export default Inputbox;
