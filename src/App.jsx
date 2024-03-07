import './App.css';
import {useState} from "react";
import UserContext from "./context/UserContext";
import {User} from "./components/User";

function App() {

  const [user, setUser] = useState("Dima");

  return (
    <div className="App">
          <UserContext.Provider value={user}>
              <User/>
          </UserContext.Provider>
    </div>
  );
}

export default App;
