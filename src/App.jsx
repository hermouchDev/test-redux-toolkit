import { useEffect } from "react";
import UserList from "./components/UserList";
import { useDispatch } from "react-redux";
// import { fetchUsers } from "./actions/action";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UpdateUserForm from "./components/UpdateUserForm";
import { fetchUser } from "./reducers/userReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => dispatch(fetchUser(data)))
            .catch((err) => console.error(err));
    }, []);

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
