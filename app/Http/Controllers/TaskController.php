<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::orderByDesc('id')->get();
    }

    public function store(StoreTaskRequest $request)
    {
        $title = $request->get("title") ?? null;
        $is_done = $request->get("is_done") ?? false;
        $task = Task::make();
        $task->title = $title;
        $task->is_done = $is_done;
        $task->save();

        return $task
            ? response()->json($task, 201)
            : response()->json([], 500);
    }

    public function show(Task $task)
    {
        //
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $title = $request->get("title") ?? null;
        // $is_done = $request->get("is_done") ?? false;
        $task->title = $title;

        return $task->update()
            ? response()->json($task)
            : response()->json([], 500);
    }

    public function destroy(Task $task)
    {
        return $task->delete()
            ? response()->json($task)
            : response()->json([], 500);
    }
}
