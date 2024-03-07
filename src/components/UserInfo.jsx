import React from 'react'
import UserContext from "../context/UserContext";

export const UserInfo = () => {
    return (
        <UserContext.Consumer>{value => <h1>{value}</h1>}</UserContext.Consumer>
    )
}
