
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Main from './components/MainContainer/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Main></Main>
      <Footer></Footer>
      <ToastContainer  position="top-center" hideProgressBar/>
    </div>
  );
}

export default App;
