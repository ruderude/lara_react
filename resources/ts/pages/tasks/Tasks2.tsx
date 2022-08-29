import React from "react";
import { useTasks } from "../../models/tasks/tasksHooks";

export const Tasks2 = () => {

  const { tasks } = useTasks();

  return (<>
    <h2>Tasks2</h2>
    <form>
      <div className="flex items-end mb-3">
        <div className="relative w-full mr-3 revue-form-group">
          <label htmlFor="task" className="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">タスク：</label>
          <input type="text" name="task" id="task" className="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="タスク・・・" />
        </div>
        <div className="revue-form-actions">
          <button type="submit" className="cursor-pointer text-white w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">送信</button>
        </div>
      </div>
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
