import { Project } from "../components/Project"
import { Header } from "../header/Header"

export const Work = () => {
    return (
        <div className="w-screen h-screen overflow-y-auto bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 px-8 py-6">
            {/* Header */}
            <header className="mb-8">
                <Header />
            </header>
            {/* Main Section */}
            {/* in this section each time it render each project from the project folder it has a button of next of prev to show all the project */}
            
            <div className="w-full h-auto min-h-[700px] bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-lg mt-10">
                <div className=" w-full min-h-[500px] flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-blue-600 rounded-xl shadow-md">

                    <Project count="01" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at nobis fugit maiores. Suscipit beatae, consequatur perferendis voluptatum nostrum inventore voluptates tenetur doloribus ipsa quod commodi in necessitatibus dolorem quaerat molestiae asperiores. Ipsa, nihil ipsum ipsam doloribus natus delectus aliquid commodi iste perferendis vero laudantium eos itaque ratione adipisci quidem!" githublink="https://github.com" demo="https://demo.com" arrayOfPhoto={["https://via.placeholder.com/150", "https://via.placeholder.com/150"]} arraytechUsed={["React,tailwind,mongoose,express,nodejs"]} />
                    

                </div>
            </div>

       
        </div>
    )
}