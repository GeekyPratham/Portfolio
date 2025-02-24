export const Project = ({count, description,githublink,demo,arrayOfPhoto,arraytechUsed}) => {
    return (
        <div className="flex flex-col gap-10">
        <div>
            <span className="text-4xl md:text-5xl font-mono font-bold text-green-300 animate-pulse">
            {count}
            </span>

            <span className="text-lg md:text-xl font-semibold text-gray-300 mt-2 text-center">
                {description}
            </span>

            <span className="text-lg md:text-xl font-semibold text-red-300 mt-2 text-center">

                {arraytechUsed.map((name, index) => (
                    <span key={index} className="text-red-300">{name}</span>
                ))}

            </span>

            <div className="flex gap-4">
                <a href={githublink}>
                    <button>
                        Github
                    </button>
                </a>
                <a href={demo}>
                    <button>
                        Demo
                    </button>
                </a>

            </div>
        </div>
        <div className="flex gap-4">
            {arrayOfPhoto.map((photo, index) => (
                <img key={index} src={photo} alt="project" />
            ))}
        </div>
            
    </div>
    )
}