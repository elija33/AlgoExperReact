import logo from './logo.svg';
import './App.css';
import portals from './component/portals'

function App() {
  const name = 'Conner';
  return (
    <>
    <portals />
      <h1>Hello {name.toUpperCase()} am here</h1>
      <p>Open the Door {name} for me plase</p>
      
    </>
  );
}

export default App;
