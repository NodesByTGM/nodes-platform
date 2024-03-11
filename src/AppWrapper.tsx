import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";

import { store, persistor } from "./store";
import { PageLoader } from "./components";
import React from "react";

export default function AppWrapper({ children }) {
  // const persistor = persistStore(store());

  return (
    <Provider data-testid="store" store={store}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
        <ToastContainer />

        {children}
      </PersistGate>
    </Provider>
  );
}
