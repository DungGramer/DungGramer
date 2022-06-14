import './base.scss';
import Download from './components/download';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Skill from './components/skill';

const App = () => (
  <main className="A4 container">
    <Header />
    <Experience />
    <Skill />
    <Education />
    <Download />
  </main>
);

export default App;
