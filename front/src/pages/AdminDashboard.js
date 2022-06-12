import { useEffect, useState } from "react";
import UserTable from "../components/UserTable/UserTable";
import { getUtil } from "../utils/api/auction-system-api";

const AdminDashboard = () => {
  const [usersList, setUsersList] = useState([{}]);
  useEffect(() => {
    getUtil("users").then((c) => setUsersList(c.data));
  }, []);
  return (
    <div
      style={{
        margin: "100px 0",
        padding: "0 100px",
        width: "100%",
        height: "100%",
      }}
    >
      <h1
        style={{ marginLeft: "10px", fontSize: "50px", fontWeight: "400" }}
        className="auctions-heading"
      >
        Admin Dashboard
      </h1>
      <UserTable data={usersList} />
    </div>
  );
};

export default AdminDashboard;
