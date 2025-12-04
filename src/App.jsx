import UserList from "./components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UpdateUserForm from "./components/UpdateUserForm";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserList />}></Route>
                    <Route path="/add" element={<AddUserForm />}></Route>
                    <Route
                        path="/update/:id"
                        element={<UpdateUserForm />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
