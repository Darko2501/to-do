
import { RecoilRoot } from 'recoil';
import { Login } from './Components/Login';
import { UserData } from './Components/UserData';
import { Tasks } from './Components/Tasks';
import './App.css';
function App() {
    console.log("App component rendered!!!");
    return (
        <>
            <h2>MY TO-DO APP</h2>
            <RecoilRoot>
                <UserData />
                <Login />
                <Tasks />

            </RecoilRoot>
        </>
    );
}

export default App;


