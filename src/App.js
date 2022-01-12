import Bookpage from "./page/docbook/bookpage";
import Landing from "./page/landingpage/landing";
import { Link, Route, Router, Switch } from 'react-router-dom'
import Loginpage from "./page/login/loginpage";
import Sign from "./page/signup/sign";
import Profilepage from "./page/profile/profilepage";
import Recept from "./page/reciption/recept";
function App() {
  return (
   
    
    
    <Switch>
        
    <Route exact path='/'  component={Landing} />
    <Route  path='/books'  component={Bookpage} />
    <Route   path='/loginpage' component={Loginpage}  />
    <Route path='/signup' component={Sign} />
    <Route  path='/profile' component={Profilepage}/>
    <Route path='/recipt' component={Recept}/>

    </Switch>
    
  );
}

export default App;
