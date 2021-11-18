import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Header from './components/Header';
import './styles/App.css';
import Objectives from './components/Objectives';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Objectives />
      <Footer />
    </div>
  );
}

export default App;
