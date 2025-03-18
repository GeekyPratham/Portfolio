import { forwardRef } from "react";

const Inputbox = forwardRef(({ value, type, placeholder, name, onChange }, ref) => {
  return (
    <div>
      <div className="text-m font-medium text-left py-2">{name}</div>
      <div>
        <input
          ref={ref}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
    </div>
  );
});

Inputbox.displayName = "Inputbox";

export default Inputbox;
