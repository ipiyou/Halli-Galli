import { GlobalProvider } from "./style/Provider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      hello guy
      <Routes>
        <Route path="ingame" element={<div>공백</div>} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
