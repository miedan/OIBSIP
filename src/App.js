
import './App.css';
import Navbar from './component/NavBar';
import Main from './component/Main';
import { Aboutme } from './component/Aboutme';
import Skills from './component/Skills';
import Projects from'./component/Projects';
import {Contact} from './component/Contact';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">

      <Navbar/>
      <Main/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>

      )
}

export default App;
