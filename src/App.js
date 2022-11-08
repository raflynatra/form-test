import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/table" element={<TableComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
