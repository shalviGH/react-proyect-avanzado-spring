import { red } from "@mui/material/colors";
import UserServices from "../services/UserServices";
import { useState, useEffect } from "react";

const Products = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("========================  ");
    UserServices.getAllClients()
      .then((response) => {
        setUsers(response.data.data);

        console.log("========================  " + response.data.data);
      })
      .catch((error) => {
        console.log("========================  " + error);
        console.log(error);
      });
  }, []);

  return (
    <div className="container md-4 lg-5">
      <div className="card mt-4 mb-4">
        <h1 className="text-center">Lista de usuarios</h1>
      </div>

      <table className="table table-hover">
        <thead style={{ backgroundColor: red, color: "white" }}>
          <tr>
            <th>Email</th>
            <th>Firtsname</th>
            <th>last name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img src={user.avatar} alt="" width={70} height={70} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
