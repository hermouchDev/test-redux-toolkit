import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../reducers/userReducer";

function UpdateUserForm() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const user = users.find((u) => u.id === Number(id));
    const dispatch = useDispatch();

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateUser({ id: Number(id), name, email }));
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <h2>Edit User</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <button>Update</button>
        </form>
    );
}

export default UpdateUserForm;
