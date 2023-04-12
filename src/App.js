import { Provider } from 'react-redux';
import store from './toolkit';
import TodoListApp from './TodoListApp';


function App() {
  return (
    
    <Provider store={store}>

      <TodoListApp/>

    </Provider>
      
   

    
  );
}

export default App;
