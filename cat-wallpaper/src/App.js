import link from './request'
import Cat from './Cat'
import './App.css';

function App() {
  return (
    <div className="App">
      <Cat fetchUrl={link.fetchRandomCat}/>
    </div>
  );
}

export default App;
