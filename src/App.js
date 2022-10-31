import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./Screens/Home";
import Users from "./Screens/Users";
import Settings from "./Screens/Settings";

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/settings" element={<Settings/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
