import Count from "../components/Count";
import { Header } from "../header/Header";
import myPhoto from "../assets/myPhoto.jpg";

export const Home = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-6 py-6 text-white">
      {/* Header - Full Width */}
      <header className="mb-8">
        <Header />
      </header>

      {/* Main Section - Limited Width */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-6xl bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl">
          
          {/* About Me Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            {/* Profile Photo */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={myPhoto}
                alt="Pratham Raj"
                className="w-60 h-60 rounded-full border-4 border-gray-500 shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-gray-300 space-y-4">
              <h1 className="text-4xl font-bold text-green-400">Hello, I'm Pratham Raj</h1>
              <p className="text-lg">
                A <span className="text-blue-400 font-semibold">Full Stack Developer</span> specializing in **React, Node, and Django**.  
                Passionate about building **efficient and scalable** web applications.  
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dolores, molestiae expedita harum nulla delectus necessitatibus dolorem sapiente.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam asperiores similique nisi doloribus dolore tempore rerum omnis est ipsa dolores, nobis natus ab. Voluptate non libero, dolorum eaque sapiente adipisci.
                lorem
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
            <Count text="Projects Done" count="10" />
            <Count text="Clients Served" count="5" />
            <Count text="Years Experience" count="2" />
            <Count text="Tech Stacks" count="8" />
          </div>
        </div>
      </div>
    </div>
  );
};
