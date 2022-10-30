import logo from './logo.svg';
import './Style/App.css';
import './Style/RegisterStyle.css';
import './Style/MuridStyle.css';
import './Style/TutorStyle.css';
import './Style/AdminStyle.css';
import './Style/Login.css';
import './Style/Biaya.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screen/Home';
import UjiCoba from './screen/UjiCoba';
import Murid from './screen/Murid';
import Tutor from './screen/Tutor';
import Router from './routers/Router';

function App() {
  return (
    <div className="App">
      <Router />
      {/* <UjiCoba /> */}
      {/* <BrowserRouter>
      
          <Route exact path="/" component={Home} />
          <Route path="/Murid" component={Murid} />
          <Route path="/Tutor" component={Tutor} />
      </BrowserRouter> */}
      
      {/* <Home /> */}
      {/* <UjiCoba /> */}
    </div>
  );
}

export default App;
