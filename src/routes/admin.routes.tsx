
import AcademicDepartment from "../pages/admin/academicManageMent/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManageMent/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManageMent/AcademicSemester";
import CareateAcademicDepartment from "../pages/admin/academicManageMent/CareateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManageMent/CreateAcademicFaculty";
import CreateAcademicSemeter from "../pages/admin/academicManageMent/CreateAcademicSemeter";
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
                name: 'Create A.Semester',
                path:'create-academic-semester',
                element: <CreateAcademicSemeter/>
            },,
            {
                name: 'Academic Semester',
                path:'academic-semester',
                element: <AcademicSemester/>
            },
            {
                name: 'Create A.Faculty',
                path:'create-academic-faculty',
                element: <CreateAcademicFaculty/>
            },,
            {
                name: 'Academic Faculty',
                path:'academic-faculty',
                element:<AcademicFaculty/>
            },
            {
                name: 'Create A.Department',
                path:'create-academic-department',
                element: <CareateAcademicDepartment/>
            },,
            {
                name: 'Academic Department',
                path:'academic-deaprtment',
                element:<AcademicDepartment/>
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



//! Hard coded way
//* programital way