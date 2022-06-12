import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { deleteUtil } from "../../utils/api/auction-system-api";
const UserTable = ({ data }) => {
  const navigate = useNavigate();

  const deleteUser = (userId) => {
    deleteUtil(`users/DeleteUser/${userId}`).then((c) => {
      navigate("/");
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
      key: "name",
      render: (text) => (
        <a
          style={{
            color: "#1890ff",
            textDecoration: "none",
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: " color .3s",
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PhoneNo",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Delete User",
      key: "deleteUser",
      render: (_, record) => (
        <div size="middle">
          <a
            style={{
              color: "#1890ff",
              textDecoration: "none",
              backgroundColor: "transparent",
              outline: "none",
              cursor: "pointer",
              transition: " color .3s",
            }}
            onClick={() => {
              deleteUser(record.id);
            }}
          >
            Delete user: {record.userName} with Id: {record.id}
          </a>
        </div>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default UserTable;
