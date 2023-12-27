// interface MyProps {
//     id: number;
//     name: string;
//     exerciseCount: number;
// }

interface CoursePartBase {
    id: number;
    name: string;
    exerciseCount: number;
    type: string;
}

interface CourseNormalPart extends CoursePartBase {
    type: "normal";
    description: string;
}
interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase {
    type: "submission";
    description: string;
    exerciseSubmissionLink: string;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;

const Header = ({ name }: { name: string }) => {
    return (
        <h1>{name}</h1>
    )
}

const Part = ({ name, exerciseCount }: { name: string, exerciseCount: number }) => {
    return (
        <div>
            {name} {exerciseCount}
        </div>
    )
}
const Content = ({ courseParts }: { courseParts: Array<CoursePart> }) => {
    return (
        <div>
            <ul>
                {courseParts.map(item => <Part name={item.name} exerciseCount={item.exerciseCount} key={item.id} />)}
            </ul>
        </div>
    )
}

const Total = ({ courseParts }: { courseParts: Array<CoursePart> }) => {
    return (
        <div>
            {courseParts.reduce((total, item) => total + item.exerciseCount, 0)}
        </div>
    )
}
const App = () => {
    const courseName = "Half Stack application development";

    // 属性不一样
    const courseParts: CoursePart[] = [
        {
            id: 1,
            name: "Fundamentals",
            exerciseCount: 10,
            description: "This is the leisured course part",
            type: "normal"
        },
        {
            id: 2,
            name: "Advanced",
            exerciseCount: 7,
            description: "This is the harded course part",
            type: "normal"
        },
        {
            id: 3,
            name: "Using props to pass data",
            exerciseCount: 7,
            groupProjectCount: 3,
            type: "groupProject"
        },
        {
            id: 4,
            name: "Deeper type usage",
            exerciseCount: 14,
            description: "Confusing description",
            exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
            type: "submission"
        }
    ]

    return (

        <div>
            <Header name={courseName} />
            <Content courseParts={courseParts} />
            <Total courseParts={courseParts} />
        </div>
    );
};

export default App;