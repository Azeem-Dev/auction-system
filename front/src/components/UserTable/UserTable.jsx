import {  Table } from 'antd';
const UserTable = ({data}) => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'PhoneNo',
          dataIndex: 'phoneNo',
          key: 'phoneNo',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Delete User',
          key: 'deleteUser',
          render: (_, record) => (
            <div size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </div>
          ),
        },
      ];
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default UserTable