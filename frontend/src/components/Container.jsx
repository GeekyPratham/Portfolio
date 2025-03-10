import Button from "./Button";
import CrossButton from "./CrossButton";

const Container = ({ text }) => {
    return (
        <div className="flex items-center justify-between p-3 w-full h-12 bg-blue-500 text-white overflow-hidden rounded-md mb-2">
            {/* Clickable Link */}
            <a href={text} target="_blank" rel="noopener noreferrer" className="truncate w-5/6 underline">
                {text}
            </a>
            <CrossButton onClick={() => alert("Small Button Clicked!")} size={16} />
        </div>
    );
};

export default Container;
