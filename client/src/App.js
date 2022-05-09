import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import { AppAnnonce } from './component/app-annonce';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <AppAnnonce />
      </BrowserRouter>
    </div>
  );
}

export default App;
