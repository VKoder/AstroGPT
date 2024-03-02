import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './store/appStore';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Provider store={appStore}>
    <div className='no-scrollbar'>
    <Body/>
    <ToastContainer />
    </div>
    </Provider>
    </>
  );
}

export default App;


