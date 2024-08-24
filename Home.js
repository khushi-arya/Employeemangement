import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    load();
  }, []);
  const load = async () => {
    try {
      const response = await axios.get("http://localhost:7040/get");
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <table class="table  shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.username}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                    <button className="btn btn-primary mx-2">View</button>
                    <button className="btn btn-outline-primary mx-2">Edit</button>
                    <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
