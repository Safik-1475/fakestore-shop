import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menu/Menubar';
import Allproduct from './components/AllProducts/Allproduct';



function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Allproduct></Allproduct>
    </div>
  );
}

export default App;
