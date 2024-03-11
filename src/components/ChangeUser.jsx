import React, {useContext} from 'react'
import UserContext from "../context/UserContext";

function ChangeUser  ()  {
  const {user, setUser}  = useContext(UserContext)
    return (
        <button onClick={() => setUser(user === 'Dima' ? 'Alice' : 'Dima')}>Chang User</button>
    )
}

export default ChangeUser
