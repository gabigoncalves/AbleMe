import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import Navegacao from './src/router/Navegacao'
import reducers from './src/APIservice/withThunk/reducers'

// import reducers from './src/APIservice/reducers'
// import Navegacao from './src/router/THUNK_Navegacao'
// import ReduxPromise from 'redux-promise';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
// const store = createStoreWithMiddleware(reducers);

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store= {store}>        
        <Navegacao />
    </Provider>
  );
};

export default App;

/*

  É PRECISO CHECAR:

  - iniciar o app e o servidor juntos (npm start e node index.js sendo iniciado juntos) 
  - introduzir médias na listagem de locais
  - autenticação via facebook e gmail
  - 

*/