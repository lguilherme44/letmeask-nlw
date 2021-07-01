import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Routes } from "./routes";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
          <Toaster />
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
