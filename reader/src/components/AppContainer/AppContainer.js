import './AppContainer.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

function AppContainer() {
  return (
    <div className='container'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default AppContainer;
