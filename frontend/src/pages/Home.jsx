import Count from "../components/Count";
import { Header } from "../header/Header";

// const myPhote = "https://avatars.githubusercontent.com/u/62515367?v=4";
import myPhoto from "../assets/myPhoto.jpg";

export const Home = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 px-8 py-6">
      {/* Header */}
      <header className="mb-8">
        <Header />
      </header>

      {/* Main Section */}
      <div className="w-full h-auto min-h-[700px] bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-lg mt-10">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 bg-pink-700 rounded-xl shadow-md">
          {/* Description */}
          <div className="w-full md:w-1/2 text-white space-y-4">
            <h1 className="text-5xl font-bold tracking-wide">Hello,</h1>
            <p className="text-lg">
              I am a Full Stack Developer with experience in React, Node, and Django. I’m a quick learner who loves to dive into new technologies and create beautiful, responsive web applications.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, numquam! Distinctio dolores, molestiae expedita harum nulla delectus necessitatibus dolorem sapiente. Aut, amet tempora odit minima nam sapiente laudantium unde quasi.
            </p>
          </div>
          {/* Profile Photo */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
            //   src="https://avatars.githubusercontent.com/u/62515367?v=4"
              src={myPhoto}
              alt="Pratham Raj"
              className="w-75 h-75 rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 p-6 bg-pink-700 rounded-xl shadow-md">
          <Count text="Projects Done" count="10" />
          <Count text="Clients Served" count="5" />
          <Count text="Years Experience" count="2" />
          <Count text="Tech Stacks" count="8" />
        </div>
      </div>
    </div>
  );
};
