import './App.css';

import Skills from './components/skills/Skills';

const skills = ['JS', 'CSS', 'HTML', 'React', 'Node']

function App() {
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
