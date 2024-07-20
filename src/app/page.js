import Header from "./component/Header";
import Footer from "./component/Footer";
import TaskInput from "./component/TaskInput";
import Task from "./component/Task";


export default function Home() {
  const tasks =[] = [
    { id: 1, name: "Read a book", isDone: true },
    { id: 2, name: "Take a shower", isDone: false },
    { id: 3, name: "Sleep", isDone: false },
  ];
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task {...tasks[0]}/>
        <Task {...tasks[1]}/>
        <Task {...tasks[2]}/>
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Phetmongkhon Rungrat" studentId="660610781"/>
    </div>
  );
}