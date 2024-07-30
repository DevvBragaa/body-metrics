import './App.css';
import Calculator from './components/calculator/calculator';
import Toolbar from './components/Toolbar/toolbar';


function App() {
  return (
    <div>
      <header>
        <nav>
          <Toolbar />
        </nav>
      </header>

      <main>
        <div className="calculator-container">
          <Calculator />
        </div>
      </main>
    </div>
  );
}

export default App;
