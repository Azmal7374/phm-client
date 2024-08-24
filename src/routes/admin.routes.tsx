
import AcademicDepartment from "../pages/admin/academicManageMent/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManageMent/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManageMent/AcademicSemester";
import CareateAcademicDepartment from "../pages/admin/academicManageMent/CareateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManageMent/CreateAcademicFaculty";
import CreateAcademicSemeter from "../pages/admin/academicManageMent/CreateAcademicSemeter";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudents from "../pages/admin/userManagement/CreateStudents";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import OfferedCourse from "../pages/faculty/OfferedCourse";


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
                name: 'Create Student',
                path:'create-student',
                element:<CreateStudents/>
            },
            {
                name: 'Students',
                path:'students-data',
                element:<StudentData/>
            },
            {
                path:'students-data/:studentId',
                element:<StudentDetails/>
            },
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
            
        ]
    },

    {
        name: 'Course Management',
        children: [
          {
            name: 'Semester Registration',
            path: 'semester-registration',
            element: <SemesterRegistration />,
          },
          {
            name: 'Registered Semesters',
            path: 'registered-semesters',
            element: <RegisteredSemesters />,
          },
          {
            name: 'Create Course',
            path: 'create-course',
            element: <CreateCourse />,
          },
          {
            name: 'Courses',
            path: 'courses',
            element: <Courses />,
          },
          {
            name: 'Offer Course',
            path: 'offer-course',
            element: <OfferCourse />,
          },
          {
            name: 'Offered Courses',
            path: 'offered-courses',
            element: <OfferedCourse />,
          },
        ],
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