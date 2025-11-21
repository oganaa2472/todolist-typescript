import { type PropsWithChildren,type ReactNode } from "react";
// type CourseGoalProps = {
//   title: string;
//   description: string;
// }
// interface CourseGoalProps {
//     title: string;

//     children: React.ReactNode;
// }
export type CourseGoalProps = PropsWithChildren<{
    title: string;
    id:number;
    onDelete: (id:number) => void;
}>;
// const CourseGoal: React.FC<CourseGoalProps> = (props) => {
//   return <article>
//     <div>
//         <h2>
//             {props.title}   
//         </h2>
//         {props.children}
//     </div>
//     <button>Delete Goal</button>
//   </article>;
// }

// export default CourseGoal;
export default function CourseGoal(props: CourseGoalProps) {
    return <article>
      <div>
          <h2>
              {props.title}   
          </h2>
          {props.children}
      </div>
      <button onClick={() => props.onDelete(props.id)}>Delete Goal</button>
    </article>;
  }