import './App.scss';
import Avatar from './components/Avatar/Avatar';
import Header from './components/Header/Header';
import { GuineaPigProvider } from './providers/GuineaPigProvider';

function App() {

  return (
    <GuineaPigProvider>
      <Header />
      <Avatar />
    </GuineaPigProvider>
  )
};

export default App;
