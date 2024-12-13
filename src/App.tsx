import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {

  return (
    <Provider store={appStore}>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
