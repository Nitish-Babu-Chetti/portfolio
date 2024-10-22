import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css'
import {LandingPage} from "./Components/LandingPage/LandingPage";
import {About} from "./Components/About/About";
import {Skills} from "./Components/Skills/Skills";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FrontEndSkills} from "./Components/Skills/FrontendSkills/FrontEndSkills";
import {AllSkills} from "./Components/Skills/AllSkills/AllSkills";
import {BackEndSkills} from "./Components/Skills/BackendSkills/BackEndSkills";
import {DataBaseSkills} from "./Components/Skills/DataBaseSkills/DataBaseSkills";
import {ProgrammingLanguages} from "./Components/Skills/ProgrammingLanguages/ProgrammingLanguages";
import {OtherSkills} from "./Components/Skills/OtherSkills/OtherSkills";
import {Projects} from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <LandingPage/>
            <About/>
            <Skills/>
            <Routes>
                <Route path="/" element={<AllSkills/>}/>
                <Route path="/frontEndSkills" element={<FrontEndSkills/>}/>
                <Route path="/backEndSkills" element={<BackEndSkills/>}/>
                <Route path="/dataBaseSkills" element={<DataBaseSkills/>}/>
                <Route path="/programmingLanguages" element={<ProgrammingLanguages/>}/>
                <Route path="/otherSkills" element={<OtherSkills/>}/>
            </Routes>
            <Projects/>
            <Contact/>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
