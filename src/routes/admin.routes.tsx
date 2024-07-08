
import AcademicSemester from "../pages/admin/academicManageMent/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudents from "../pages/admin/CreateStudents";


export const adminPaths = [
    {
        name: 'Dashboard',
        path:'dashboard',
        element:<AdminDashboard/>
    },
    {
        name:'Academic Management',
        children: [
            {
                name: 'Academic Semester',
                path:'academic-semester',
                element: <AcademicSemester/>
            },
        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path:'create-admin',
                element: <CreateAdmin/>
            },
            {
                name: 'Create Faculty',
                path:'create-faculty',
                element: <CreateFaculty/>
            },
            {
                name: 'Create Student',
                path:'create-student',
                element:<CreateStudents/>
            },
        ]
    },
    // {
    //     name: 'Course Management',
    //     children: [
    //         {
    //             name: 'Offered Course',
    //             path:'/admin/offered-course',
    //             element: <CreateAdmin/>
    //         },
    //     ]
    // }
]



