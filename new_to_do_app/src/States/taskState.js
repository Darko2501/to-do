import {atom} from "recoil";

import localStorageEffect from "../Effects/LocalStorageEffect";


export const taskState=atom({
    key: "taskState",
    default:{},
    effects_UNSTABLE:[
        localStorageEffect("userTasks")
    ],
});