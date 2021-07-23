import './App.css'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Mens from './pages/Mens/Mens';
import Menstops from './pages/Mens/MensTops';
import Womens from './pages/Womens/Womens';
import Womenstops from './pages/Womens/WomensTops'
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
      <Route path='/mens-tops' component={Menstops} />
      <Route path='/womens-tops' component={Womenstops} />
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
