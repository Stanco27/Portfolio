import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/theme.css'
import "./App.css";
import NavigationBar from './navigation-bar';
import Footer from './footer';
import AppRoute from './route';

function App() {
  return (
    <>
    <div className='app'>
      <NavigationBar />
      <AppRoute />
      <Footer />
    </div>
    </>
  );
}

export default App;
