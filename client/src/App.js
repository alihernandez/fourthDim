import './App.css'; 
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <ToastContainer />
     <Contact />
    </div>
  );
}

export default App;
