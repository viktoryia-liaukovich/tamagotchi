import './App.scss';
import Avatar from './components/Avatar/Avatar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { GuineaPigProvider } from './providers/GuineaPigProvider';

function App() {

  return (
    <GuineaPigProvider>
      <Header />
      <Avatar />
      <Footer />
    </GuineaPigProvider>
  )
};

export default App;
