// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Importez le rootReducer

const store = configureStore({
  reducer: rootReducer,
  // Autres options comme le middleware, etc. peuvent être ajoutées ici
});

export default store;