import { useRecoilValue, useSetRecoilState } from "recoil";
import { taskState } from "../States/taskState";
import { useForm } from "react-hook-form";
import { categories } from "../Utils/Categories";

export const CreateTasks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const setTasks = useSetRecoilState(taskState);

    const createTasks = (data) => {
        const newTask = {
            id: Date.now(),
            name: data.task,
            category: data.category,
            comments: "" // Initialize comments as an empty string
        };

        setTasks((oldTasks) => {
            return Array.isArray(oldTasks) ? [...oldTasks, newTask] : [newTask];
        });
    };

    return (
        <div >
            <h5>CREATE NEW TASK: </h5>
            <form className={'createForm'} onSubmit={handleSubmit(createTasks)}>
                <h3>Enter task:</h3>

                <input
                    {...register('task', {required: 'Task is required'})}
                    type="text"
                    placeholder="Enter the new task"
                /><br/>
                {errors.task && <p>{errors.task.message}</p>}

                <select {...register('category', {required: 'Category is required'})}>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && <p>{errors.category.message}</p>}

                <br/>
                <button type="submit">CREATE TASK</button>
            </form>
        </div>
    );
}
