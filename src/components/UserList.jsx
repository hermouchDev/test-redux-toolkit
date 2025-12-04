import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../reducers/userReducer";
import { Link } from "react-router-dom";

function UserList() {
    const users = useSelector((state) => state.users) ?? [];
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Users List :</h1>
            <p>
                Add User :{" "}
                <Link to="/add">
                    <button>Add</button>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => {
                        return (
                            <tr key={u.name}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                    <Link to={`/update/${u.id}`}>
                                        <button>UPDATE</button>
                                    </Link>
                                    <button
                                        onClick={() =>
                                            dispatch(deleteUser(u.id))
                                        }
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
