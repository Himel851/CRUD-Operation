import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [users, setUser] = useContext(UserContext);

  return (
    <div>
      <Link to="/create">
        <Button className="createBtn" variant="primary">
          Create User
        </Button>
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>
                <Link to={"/read/" + user.id}>
                  <Button className="actionBtn" variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/edit/"+user.id}>
                  <Button className="actionBtn" variant="info">
                    Edit
                  </Button>
                </Link>

                <Link to={"/delete/" + user.id}>
                  <Button className="actionBtn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
