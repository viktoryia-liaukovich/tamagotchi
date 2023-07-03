import './App.scss';
import Header from './components/Header/Header';
import { GuineaPigProvider } from './providers/GuineaPigProvider';

function App() {

  return (
    <GuineaPigProvider>
      <Header />
    </GuineaPigProvider>
  )
};

export default App;
