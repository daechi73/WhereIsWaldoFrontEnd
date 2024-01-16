import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import WaldoFaceLoading from "./components/global/WaldoFaceLoading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
