import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudents from "../pages/admin/CreateStudents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: '/admin',
        element: <App/>,
        children: [
            {
                index: true,
                // path: 'dashboard',
                element: <AdminDashboard/>
            },
            {
                path: 'dashboard',
                element: <AdminDashboard/>
            },
            {
                path: 'create-student',
                element: <CreateStudents/>
            },
        ]
    },
    
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    
])


export default router