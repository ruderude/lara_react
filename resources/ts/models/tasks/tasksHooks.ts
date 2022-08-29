import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export type Task = {
  id: number
  title: string
  is_done: boolean
  created_at: Date
  updated_at: Date
}

export const useTasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = useCallback(async () => {
    const { data } = await axios.get<Task[]>('api/tasks');
    console.log(data);
    setTasks(data);
  }, [setTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return {
    tasks
  }
}