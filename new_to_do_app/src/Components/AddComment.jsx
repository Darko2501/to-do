import { useForm } from "react-hook-form";

export const AddComment = ({ task, updateTask }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const addComment = (data) => {
        const updatedTask = {
            ...task,
            comments: [...(task.comments || []), data.comment]
        };
        updateTask(updatedTask);
    };

    return (
        <>
            <form onSubmit={handleSubmit(addComment)}>
                <input
                    {...register('comment', { required: 'Comment is required' })}
                    type="text"
                    placeholder="Enter your comment"
                />

                <button type="submit">ADD COMMENT</button>
            </form>
        </>
    );
}
