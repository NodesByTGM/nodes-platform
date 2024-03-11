import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";
import {PageLoader} from './components'
import React from 'react'

export default function AppWrapper({children}) {
    const persistor = persistStore(store());

  return (
    <div data-testid="app">
    <Provider data-testid="store" store={store()}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
      
        {children}
      </PersistGate>
    </Provider>
  </div>
  )
}
