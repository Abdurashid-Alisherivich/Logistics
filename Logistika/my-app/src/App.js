import Menu from './Menu/menu';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Login/Login'
import Home from './home/home';
import About from './about/About'
import Turizm from './Servis_turizm/odam_turizm';
import Service from './Service/Service';
import ServiceIchki from './ServisIchki/Servis_ichki';
import Footer from './Footer/footer';
import News from './News/news'
import Contact from './contact/Contact';
import Admin_news from './admin_add_news/admin_add_news';

function App() {
  return (
  <>
      <BrowserRouter>
        <Menu />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path ='/service' component={Service} />
        <Route exact path ='/service_ichki' component={ServiceIchki} />
        <Route exact path='/turizm' component={Turizm} />
        <Route exact path='/news' component={News} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/admin_add_news' component={Admin_news} />
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
