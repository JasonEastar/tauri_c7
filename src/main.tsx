import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./stores/store";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, MantineProvider } from "@mantine/core";
import "./styles.css";
import "./assets/styles/global.scss";
import "@mantine/core/styles.css";
const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MantineProvider theme={theme}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </MantineProvider>
  </Provider>
);
