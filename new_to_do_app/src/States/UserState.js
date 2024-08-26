import {atom} from "recoil";
import localStorageEffect from "../Effects/LocalStorageEffect";
export const userState=atom({
    key:"UserState",
    default:{},
    effects_UNSTABLE:[
        localStorageEffect("userData")
    ],
});

