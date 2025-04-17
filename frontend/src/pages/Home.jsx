import Count from "../components/Count";
import { Header } from "../header/Header";
import myPhoto from "../assets/myPhoto.jpg";

export const Home = () => {
  return (
    <div className="w-screen min-h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-4 md:px-6 py-4 md:py-6 text-white">
      {/* Header - Full Width */}
      <header className="mb-8">
        <Header />
      </header>

      {/* Main Section - Centered */}
      <div className="w-full flex justify-center mt-6 md:mt-10">
        <div className="w-full max-w-6xl bg-black/50  border border-gray-700 bg-opacity-70 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg">
          
          {/* About Me Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-8 bg-gray-800 rounded-xl shadow-md border border-gray-700">
            {/* Profile Photo */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={myPhoto}
                alt="Pratham Raj"
                className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-gray-500 shadow-lg transition-transform duration-300 hover:scale-105"

              />
            </div>

            {/* Description */}
            <div className="w-full md:w-2/3 text-gray-300 space-y-4 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-bold text-green-400">
                Hello, I'm Pratham Raj
              </h1>
              <p className="text-sm md:text-lg leading-relaxed">
                I'm Pratham Raj, a passionate and driven tech enthusiast with a strong desire to push boundaries in the world of software development. My journey in tech began with a fascination for solving complex problems and crafting impactful solutions. I thrive in an environment that challenges me to grow and innovate, and I'm constantly motivated to learn new technologies to build meaningful experiences.
                <br /><br />
                I believe that technology has the power to transform lives, and I’m committed to creating products that make a difference. The ever-evolving landscape of tech excites me, and I’m passionate about evolving alongside it. My goal is to build scalable, user-centric solutions that are not just functional but also bring real value to users, while continuously expanding my skill set to stay ahead of the curve.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-10 p-4 md:p-6 bg-gray-800 rounded-xl shadow-md border border-gray-700">
            <Count text="Projects Done" count="4" />
            <Count text="Clients Served" count="1" />
            <Count text="Years Experience" count="0" />
            <Count text="Tech Stacks" count="10+" />
          </div>
        </div>
      </div>
    </div>
  );
};
