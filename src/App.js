import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import UserInfor from "./components/UserDetail";

function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:userId" element={<UserInfor/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
