import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './store/appStore';

function App() {
  return (
    <>
    <Provider store={appStore}>
    <div className='bg-[#E6E6FA]'>
    <Body/>
    </div>
    </Provider>
    </>
  );
}

export default App;
