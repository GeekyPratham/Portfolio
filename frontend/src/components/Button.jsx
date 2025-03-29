export default function Button({ buttonName , onClick , width = "w-auto" }) {
    return (
        <button onClick={onClick} type="button" className={`bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${width}`}>
            {buttonName}
        </button>
    )
}