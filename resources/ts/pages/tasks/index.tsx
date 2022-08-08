import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

type Task = {
  id: number
  title: string
  is_done: boolean
  created_at: Date
  updated_at: Date
}

const Tasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const { data } = await axios.get<Task[]>('api/tasks');
    console.log(data);
    // setTasks(data);
  }

  useEffect(() => {
    getTasks();
  });

  // const { data:tasks, status } = useQuery('tasks', async () => {
  //   const { data } = await axios.get<Task[]>('api/tasks');
  //   return data;
  // })

  // if (status === 'loading') {
  //   return <div className="loader" />
  // } else if (status === 'error') {
  //   return <div>データの読み込みに失敗しました。</div>
  // } else if (!tasks || tasks.length <= 0) {
  //   return <div>登録されたToDoはありません。</div>
  // }


  const name = "";

  return (<>
    <h2>Tasks</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" defaultValue={name} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
          </li>
        ))}
      </ul>
    </div>
  </>);
};

export default Tasks;