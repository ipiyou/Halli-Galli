import { GlobalProvider } from "./style/Provider";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { InGame } from "./pages/inGame";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingame/:level" element={<InGame />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
