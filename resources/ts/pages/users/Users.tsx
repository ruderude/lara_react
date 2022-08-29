import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query';

type User = {
  id: number
  name: string
}

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};


const Users = () => {

  const result = useQuery(['users'], fetchUsers);
  console.log(result.data);
  // const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   fetchUsers().then((data) => {
  //     setUsers(data);
  //   });
  // }, []);

  return (<>
    <h2>Users</h2>
    <h2>ユーザ一覧</h2>
    <div>
      <ul className="mx-auto w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {result.data &&
        result.data.map((user) => (
          <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600" key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  </>);
};

export default Users;