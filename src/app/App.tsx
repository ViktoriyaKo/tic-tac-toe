import { Provider } from 'react-redux';
import { MainPage, store } from '../packages/main';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
