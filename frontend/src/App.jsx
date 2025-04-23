import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HireMe } from "./pages/HireMe";
import { Work } from "./pages/Work";
import { Resume } from "./pages/Resume";

import { Verify } from "./pages/Verify";
import { Addproject } from "./pages/Addproject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/addproject" element={<Addproject/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
