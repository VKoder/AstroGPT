import { Provider, useSelector } from 'react-redux';
import Body from './components/Body';
import appStore from './store/appStore';
import { ToastContainer } from 'react-toastify';
import LoginForm from './components/LoginForm';

function App() {
 
  return (
    <>
    <Provider store={appStore}>
    <div className='no-scrollbar relative'>
    <Body/>
    <ToastContainer />
    </div>
    </Provider>
    </>
  );
}

export default App;


