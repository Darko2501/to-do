
const localStorageEffect=(localStorageKey)=>({setSelf,onSet})=>{
    const savedValue=localStorage.getItem(localStorageKey);
    if(savedValue != null){
        setSelf(JSON.parse(savedValue));
    }
    onSet(newValue=>{
        localStorage.setItem(localStorageKey,JSON.stringify(newValue));
    })


};
export  default localStorageEffect;
