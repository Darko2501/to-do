import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../States/UserState";
import { CreateTasks } from "./CreateTasks";
import { taskState } from "../States/taskState";
import { AddComment } from "./AddComment";
import {UserData} from "./UserData";

export const Tasks = () => {
    const userData = useRecoilValue(userState);
    const taskData = useRecoilValue(taskState);
    const setTaskData = useSetRecoilState(taskState);
    const [editTaskId, setEditTaskId] = useState(null);
    const [newTaskName, setNewTaskName] = useState("");

    const deleteTask = (taskToDelete) => {
        setTaskData((prevTasks) => prevTasks.filter(task => task.id !== taskToDelete.id));
    }

    const updateTask = (updatedTask) => {
        setTaskData((prevTasks) =>
            prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task)
        );
        setEditTaskId(null);
    }

    const handleNameClick = (task) => {
        setEditTaskId(task.id);
        setNewTaskName(task.name);
    }

    const handleUpdateClick = (task) => {
        if (newTaskName.trim()) {
            updateTask({ ...task, name: newTaskName });
        }
    }

    return (
        <>
            {userData.LoggedIn && (
                <div>

                    <div>
                        <h4>TASKS:</h4>
                    </div>
                    <div className={'taskDiv'}>
                        {Array.isArray(taskData) && taskData.map((task, index) => (
                            <div className={'singleTask'} key={index}>
                                <h4>{task.category}</h4>
                                {editTaskId === task.id ? (
                                    <div className={'singleTask'}>
                                        <input
                                            type="text"
                                            value={newTaskName}
                                            onChange={(e) => setNewTaskName(e.target.value)}
                                        />
                                        <button onClick={() => handleUpdateClick(task)}>UPDATE</button>
                                        <button onClick={() => setEditTaskId(null)}>CANCEL</button>
                                    </div>
                                ) : (
                                    <p onClick={() => handleNameClick(task)}>{task.name}</p>
                                )}

                                <div>
                                    <p>Comments:</p>
                                    {task.comments && task.comments.length > 0 ? (
                                        <ul>
                                            {task.comments.map((comment, i) => (
                                                <li key={i}>{comment}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No comments yet</p>
                                    )}
                                </div>

                                <button onClick={() => deleteTask(task)}>DELETE TASK</button>
                                <AddComment task={task} updateTask={updateTask} />
                            </div>
                        ))}
                        <CreateTasks />
                    </div>
                </div>
            )}
        </>
    );
}
