
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Main from './components/MainContainer/Main';

function App() {
  return (
    <div>
      <Main></Main>
      <ToastContainer  position="top-center" hideProgressBar/>
    </div>
  );
}

export default App;
