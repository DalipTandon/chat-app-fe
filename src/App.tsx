import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Login from "./components/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Body from "./components/Body"
import Navbar from "./components/Navbar"
import CreateRoom from "./components/CreateRoom"
import JoinRoom from "./components/JoinRoom"

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/body" element={<Body />} />
        <Route path="/createroom" element={<CreateRoom/>} />
        <Route path="/joinroom" element={<JoinRoom/>} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App
