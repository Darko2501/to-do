import {useRecoilValue} from "recoil";
import{userState} from "../States/UserState";

export const UserData = ()=>{
    const userData=useRecoilValue(userState)
    console.log(userData);
    return(
        <>
        <p className={'userName'}>{userData.email}</p>
        </>
    )
}

export  default UserData;