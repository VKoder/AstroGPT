import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './store/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
    <div className='bg-[#353582]'>
    <Body/>
    </div>
    </Provider>
    </>
  );
}

export default App;
