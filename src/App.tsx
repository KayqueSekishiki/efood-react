import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MyGlobalProvider } from "./context";

import { GlobalStyle } from "./styles";

import Router from "./routes";
import Footer from "./components/Footer";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MyGlobalProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
          <Footer />
        </BrowserRouter>
      </MyGlobalProvider>
    </Provider>
  );
}

export default App;
