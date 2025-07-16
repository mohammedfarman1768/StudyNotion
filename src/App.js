import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";

import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import VedioDetails from "./components/core/ViewCourse/VedioDetails";

import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Navbar from "./components/core/common/Navbar";

import { Provider, useSelector } from "react-redux";
import store from "./redux/store"; // ✅ Corrected store import
import { ACCOUNT_TYPE } from "./utils/constants";

// Component that uses redux state
function AppContent() {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signUp"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Private Routes */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="/dashboard/cart" element={<Cart />} />
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="/dashboard/add-course" element={<AddCourse />} />
              <Route path="/dashboard/instructor" element={<Instructor />} />
              <Route path="/dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="/dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        {/* View Course route */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <Route
              path="/view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
              element={<VedioDetails />}
            />
          )}
        </Route>

        {/* Catch-all error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// Wrap AppContent with Provider
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
