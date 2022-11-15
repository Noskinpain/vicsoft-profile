import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import NavBar from './Components/NavBar';
import BackTop from "./Components/BackTop"
// import useHover from "@react-hook/hover";
// import { styles } from "@dash-ui/styles";
import AnimatedRoutes from './Components/AnimatedRoutes';


function App() {
  
  return (
    <>
      <Router>
       <NavBar/>
       <AnimatedRoutes/>
      </Router>
    </>
  );
}

export default App;
