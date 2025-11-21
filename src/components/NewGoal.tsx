import CourseGoalListProps from "./CourseGoalList";
import {useRef} from "react";
type CourseGoalListProps = {
    
    onAddGoal: (title: string, description: string) => void;
}
export default function NewGoal(props: CourseGoalListProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const title = titleRef.current!.value;
        const description = descriptionRef.current!.value;
        props.onAddGoal(title, description);
        titleRef.current!.value = "";
        descriptionRef.current!.value = "";
    }
    return <form onSubmit={submitHandler}>
        <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={titleRef} />
        </p>
        <p>
            <label htmlFor="description">Description</label>
            <input type="text" id="summary" ref={descriptionRef} />
        </p>
        <button type="submit">Add Goal</button>
    </form>;
}