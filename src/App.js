import './sass/main.css';
import './css/iconFont.css';

import { BrowserRouter } from 'react-router-dom';

//COMPONENTS
import Header from './Components/Header';
import About from './Components/About';
import Features from './Components/Features';
import Tours from './Components/Tours';
import Testemonials from './Components/Testemonials';
import Booking from './Components/Booking';
import Footer from './Components/Footer';
import Menu from './Components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
        <Header />
        <About />
        <Features />
        <Tours />
        <Testemonials />
        <Booking />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
