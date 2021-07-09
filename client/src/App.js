import './App.css'; 
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';
import Emailjs from './components/emailJS/emailSub';

function App() {
  return (
    <div className="App">
      <Emailjs />
      <ToastContainer />
     <Contact />
    </div>
  );
}

export default App;
