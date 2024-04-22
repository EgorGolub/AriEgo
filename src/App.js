import './App.css';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Content from './parts/Content';
//import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
