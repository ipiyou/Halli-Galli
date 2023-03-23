import { GlobalProvider } from "./style/Provider";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="ingame" element={<div>공백</div>} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
