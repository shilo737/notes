import { Provider } from 'react-redux';
import myStore from './redux/store';
import Home from './components/page/Home';

function App() {


  return (
    <Provider store={myStore}>
        <Home/>
    </Provider>
  )
}

export default App
