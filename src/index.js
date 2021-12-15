import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NoRoute from "./NoRoute";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}></Route>
      <Route path="*" element={<NoRoute/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
