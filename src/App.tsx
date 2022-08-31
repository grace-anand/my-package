import './globals.scss';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Page from './Components/page';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <Page />
      </div>
      <Footer />
    </div>
  );
}

export default App;
