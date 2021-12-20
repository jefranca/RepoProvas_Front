import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import NoRoute from "./components/NoRoute";
import SearchByDiscipline from "./components/SearchByDiscipline";
import SearchRoute from "./components/SearchRoute";
import SendRoute from "./components/SendRoute";
import ResetCss from "./styles/ResetCss";

render(
  <BrowserRouter>
    <ResetCss />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="exams" element={<Outlet />}>
          <Route path="search" element={<Outlet />}>
            <Route index element={<SearchRoute/>}/>
            <Route path="discipline" element={<SearchByDiscipline/>}/>
          </Route>
          <Route path="send" element={<SendRoute />} />
        </Route>
        <Route path="*" element={<NoRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
