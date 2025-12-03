import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

function AddUserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const id_last_user = useSelector(
        (state) => state.users[state.users.length - 1].id
    );
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();

        const newUser = {
            id: id_last_user + 1,
            name: name,
            email: email,
        };

        dispatch(addUser(newUser));
        setName("");
        setEmail("");
        navigate("/");
    };
    return (
        <div>
            <form onSubmit={handleAdd}>
                Name :
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                Email :
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddUserForm;
