import logo from './logo.svg';
import './App.css';
// import './index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/all.min.css';
import './css/bootstrap.min.css'
import './css/simple-line-icons.css'
import './css/slick.css'
import './css/style.css'


import Landing from './pages/landing'
import Login from './pages/login'

//User
import UHomePage from './pages/Users/uHomePage'


//Admin
import AHomePage from './pages/Admin/aHomePage'
import AExpert from './pages/Admin/aExpert'
import AData from './pages/Admin/aData'
import AExpertsOrder from './pages/Admin/aExpertOrder'
import AExpertApplications from './pages/Admin/aExpertApplication'
import SignUp from './pages/signup'
import UserEdit from './pages/Users/UserEdit'
import UserInfo from './pages/Users/UserInfo'

function App() {
  return (
    <>
      <BrowserRouter basename={'/'} >
          <Switch>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={SignUp}/>
              {/* <Route exact path="/register" component={Register}/> */}

              {/* User */}
              <Route exact path="/userHomePage" component={UHomePage}/>

              {/* Admin */}
              <Route exact path="/adminHomePage" component={AHomePage}/>
              <Route exact path="/adminExpert" component={AExpert}/>
              <Route exact path="/adminExpertOrders" component={AExpertsOrder}/>
              <Route exact path="/adminExpertApplications" component={AExpertApplications}/>
              <Route exact path="/adminData" component={AData}/>
              <Route exact path="/userEdit" component={UserEdit}/>
              <Route exact path="/userInfo" component={UserInfo}/>
          </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
