import {UserInfo} from "./UserInfo";
import UserContext from "../context/UserContext";

export const User = () => {
    return (
        <>
            <UserContext.Provider value={"Alice"}>
                <UserInfo/>
            </UserContext.Provider>
        </>
    )
}
