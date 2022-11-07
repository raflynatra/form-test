import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<FormComponent setUserList={setUserList} />}
          />
          <Route
            path="/table"
            element={<TableComponent userList={userList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
