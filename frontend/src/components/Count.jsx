const Count = ({ text, count }) => {
    return (
      <div className="flex flex-col items-center  justify-center bg-gray-500 text-white w-40 h-40 rounded-lg shadow-lg p-4">
        <span className="text-4xl md:text-5xl font-mono font-bold text-green-400 animate-pulse">
          {count}
        </span>
        <span className="text-lg md:text-xl font-semibold text-gray-300 mt-2 text-center">
          {text}
        </span>
      </div>
    );
  };
  
  export default Count;
  