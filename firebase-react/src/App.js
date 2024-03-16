import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';

// Create a BrowserRouter instance with routes
const myRouter = createBrowserRouter([
  { path: '', Component: Dashboard, children:[
    {path:'', Component:StudentList},
    {path:'addStudent', Component:AddStudent},
    {path:'studentList',Component:StudentList},
    {path:'updatestudent', Component:UpdateStudent}
  ] }
]);

// Define the App component
function App() {
  return (
    <>
      {/* Provide the router to the application */}
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App;
