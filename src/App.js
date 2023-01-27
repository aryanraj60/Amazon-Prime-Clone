import { Routes, Route } from "react-router-dom";
import { Login, Home } from "./pages";
import { Header, Footer } from "./components";

function App() {
  console.log("App Rendered!");

  return (
    <div className="App text-slate-50">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
