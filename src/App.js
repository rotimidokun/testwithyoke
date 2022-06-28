import './App.css';
import Header from './components/Header/Header';
import SubHeader from './components/SubHeader/SubHeader';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <SubHeader></SubHeader>
    <Main></Main>
      <header className="App-header">
        The Header
      </header>
    </div>
  );
}

export default App;
