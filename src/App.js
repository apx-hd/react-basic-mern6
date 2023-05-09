import Counter from "./pages/counter";
import Todo from "./pages/todo";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todo" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
