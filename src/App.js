import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  // const adminUSer= {
  //   Account_id : "1",
  //   password : "admin@123"
  // }
  // const [user,setUser] = useState({password:""});
  // const [error,setError]  = useState("");

  // const Login = details =>{
  //   console.log(details);
  // }
  // const Logout = details =>{
  //   console.log("LogOut");
  // }


  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
