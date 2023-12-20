
import { useEffect, useState } from 'react';
import { app } from './firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  
} from 'firebase/auth';
function App() {
  const auth = getAuth();
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }

    setData({ ...data, ...inputs })
  }

  const handleSubmit =() =>{
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((response)=>{
      alert("succesfully login")
    })
    .catch((err)=>{
      alert(err.message)
    })
  
  }
 

  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={event => handleInputs(event)} style={{color : "black"}}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={event => handleInputs(event)}
        style={{color : "black"}}
      />

      <button onClick={handleSubmit}>Log In</button>
      
    </div>
  );
}

export default App;


