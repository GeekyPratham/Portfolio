export default function Inputbox({ placeholder, name, onChange}){
    return (
        <div>
            <div className="text-m font-medium text-left py-2">
                {name}
            </div>
            <div>
                <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-400"></input>
            </div>
        
        </div>
    )
}