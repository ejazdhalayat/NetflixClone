import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homescreen from "./Screen/Homescreen";
import LoginScreen from "./Screen/LoginScreen";
import WatchMovie from "./Screen/WatchMovie";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase'


function App() {
  const auth = getAuth(app);



  const schema = {email : "" , pass : ""} ;
  const [ cred  ,setCred ] = useState(schema) ;
  const [user ,setUser] = useState(null) ;


  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, cred.email, cred.pass)
    .then(userCredential => {
      const u = userCredential.user;
      setUser(u)
    })
    .catch(error => {
      setUser(null)
    });
  }



  const loginUser = async () => {
    await signInWithEmailAndPassword(auth, cred.email, cred.pass)
    .then(userCredential => {
      const u = userCredential.user;
      setUser(u)
    })
    .catch(error => {
      setUser(null)
    });
  }

  
  return (
    <div className="App bg-black">
        <Routes>
          <Route path="/watch/:movieid/:auth" element={<WatchMovie />} />
          <Route path="/" element={ user ? <Homescreen /> : <LoginScreen handle={{createUser ,loginUser}} Cred={cred} SCred={setCred} /> } />
          <Route path="/login" element={<LoginScreen Cred={setCred} />} />
        </Routes>
    </div>
  );
}

export default App;




// import { redirect } from "react-router-dom";

  // const loader = async () => {
  //   const user = await getUser();
  //   if (!user) {
  //     return redirect("/login");
  //   }
  // };

 