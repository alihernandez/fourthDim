import './App.css'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Mens from './pages/Mens/Mens';
import Womens from './pages/Womens/Womens';
import Contact from './pages/Contact/Contact';
import Emailjs from './components/emailJS/emailSub';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/mens' component={Mens} />
      <Route path='/womens' component={Womens} />
      <Route path='/contact' component={Contact} />
      {/* <Route path='/annual' component={AnnualReport} />
      <Route path='/team' component={Teams} />
      <Route path='/blogs' component={Blogs} />
      <Route path='/sign-up' component={SignUp} /> */}
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
