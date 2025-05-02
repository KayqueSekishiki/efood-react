import { MyGlobalProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles";

import Router from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <MyGlobalProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Footer />
      </BrowserRouter>
    </MyGlobalProvider>
  );
}

export default App;
