import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Boilerplate from "./components/Boilerplate";
import Home from "./screens/Home";
import Login from "./screens/authentication/Login";
import SignUp from "./screens/authentication/SignUp";
import Error from "./components/Error.jsx";
import Course from "./screens/course/Course";
import CourseHome from "./screens/course/CourseHome.jsx";
import CourseDetail from "./screens/course/CourseDetail.jsx";
import Quiz from "./screens/Public-Quiz/Quiz";
import QuizCategory from "./screens/Public-Quiz/QuizCategory";
import QuizLevel from "./screens/Public-Quiz/QuizLevel";
import DisplayQuiz from "./screens/Public-Quiz/DisplayQuiz";
import StudentRegisterForm from "./screens/public-registration-form/StudentRegisterForm.jsx";
import TrainerRegisterForm from "./screens/public-registration-form/TrainerRegisterForm.jsx";
import Dashboard from "./screens/dashboard/Dashboard";
import DashboardHome from "./screens/dashboard/DashboardHome.jsx";
import CreateCourse from "./screens/dashboard/course/CreateCourse.jsx";
import CreateQuiz from "./screens/dashboard/quiz/CreateQuiz.jsx";
import StudentRegistrationList from "./screens/dashboard/registration/studentRegistrationList/StudentRegistrationList.jsx";
import StudentRegistrationListHome from "./screens/dashboard/registration/studentRegistrationList/StudentRegistrationListHome.jsx";
import TrainerRegistrationList from "./screens/dashboard/registration/trainerRegistration/TrainerRegistrationList.jsx";
import CreateResult from "./screens/dashboard/CreateResult.jsx";
import CourseList from "./screens/dashboard/course/courseList.jsx";
import CreateQuizHome from "./screens/dashboard/quiz/CreateQuizHome.jsx";
import CreateLevel from "./screens/dashboard/quiz/CreateLevel.jsx";
import CourseListHome from "./screens/dashboard/course/CourseListHome.jsx";
import CourseUpdate from "./screens/dashboard/course/CourseUpdate.jsx";
import StudentRegistrationCourseAndSec from "./screens/dashboard/StudentRegistrationCourseAndSec.jsx";
import UpdateStudentRegistrationForm from "./screens/dashboard/registration/studentRegistrationList/UpdateStudentRegistrationForm";
import TrainerRegistrationListHome from "./screens/dashboard/registration/trainerRegistration/TrainerRegistrationListHome";
import TrainerRegistrationUpdate from "./screens/dashboard/registration/trainerRegistration/TrainerRegistrationUpdate";
import Result from "./screens/Result";
import ShowResultHome from "./screens/dashboard/ShowResult/ShowResultHome";
import UpdateShowResult from "./screens/dashboard/ShowResult/UpdateShowResult";
import ShowResult from "./screens/dashboard/ShowResult/ShowResult";
import EnrolledStudent from "./screens/dashboard/enrolledStudent/EnrolledStudent.jsx";
import AddCountries from "./screens/dashboard/AddCountries.jsx";
import AddCities from "./screens/dashboard/AddCities.jsx";
import Branch from "./screens/dashboard/Branch.jsx";
import EnrolledStudentHome from "./screens/dashboard/enrolledStudent/EnrolledStudentHome.jsx";
import UpdateEnrolledStudent from "./screens/dashboard/enrolledStudent/UpdateEnrolledStudent.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Boilerplate />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="course" element={<Course />}>
            <Route index element={<CourseHome />} />
            <Route path="course-detail" element={<CourseDetail />} />
          </Route>

          <Route path="quiz" element={<Quiz />}>
            <Route index element={<QuizCategory />} />
            <Route path="quiz-level/:id" element={<QuizLevel />} />
            <Route path="display-quiz" element={<DisplayQuiz />} />
          </Route>

          <Route
            path="student-register-form"
            element={<StudentRegisterForm />}
          />

          <Route
            path="trainer-register-form"
            element={<TrainerRegisterForm />}
          />

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="create-course" element={<CreateCourse />} />

            <Route path="create-quiz" element={<CreateQuiz />}>
              <Route index element={<CreateQuizHome />} />
              <Route path="add-level/:id" element={<CreateLevel />} />
            </Route>

            <Route path="course-list" element={<CourseList />}>
              <Route index element={<CourseListHome />} />
              <Route path="course-update" element={<CourseUpdate />} />
            </Route>

            <Route
              path="student-registration-list"
              element={<StudentRegistrationList />}
            >
              <Route index element={<StudentRegistrationListHome />} />
              <Route
                path="update-student-registration-form"
                element={<UpdateStudentRegistrationForm />}
              />
            </Route>

            <Route
              path="trainer-registration-list"
              element={<TrainerRegistrationList />}
            >
              <Route index element={<TrainerRegistrationListHome />} />
              <Route
                path="update-trainer-registration-list-form"
                element={<TrainerRegistrationUpdate />}
              />
            </Route>

            <Route path="create-result" element={<CreateResult />} />

            <Route
              path="student-registration-form-course-and-sec-control"
              element={<StudentRegistrationCourseAndSec />}
            />

            <Route path="show-result" element={<ShowResult />}>
              <Route index element={<ShowResultHome />} />
              <Route path="update-show-result" element={<UpdateShowResult />} />
            </Route>

            <Route path="enrolled-student" element={<EnrolledStudent />}>
              <Route index element={<EnrolledStudentHome />} />
              <Route
                path="update-enrolled-student"
                element={<UpdateEnrolledStudent />}
              />
            </Route>

            <Route path="add-countries" element={<AddCountries />} />
            <Route path="add-cities" element={<AddCities />} />

            <Route path="branch" element={<Branch />} />
          </Route>

          <Route path="result" element={<Result />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}
