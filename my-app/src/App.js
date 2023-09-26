import logo from './logo.svg';
import Signup from './component/Singup';
import EmailVerification from './component/EmailVerification';
import {Route,Routes} from'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/email-verification' element={<EmailVerification/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
