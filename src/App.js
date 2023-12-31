
import './App.css';
import Navbar from './component/NavBar';
import Main from './component/Main';
import { Aboutme } from './component/Aboutme';
import Skills from './component/Skills';
import Projects from'./component/Projects';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">

      <Navbar/>
      <Main/>
      <Aboutme/>
      <Skills/>
      <Projects/>
    </div>

      )
}

export default App;
