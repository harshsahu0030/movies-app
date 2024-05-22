import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useLayoutEffect } from "react";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loadUserAction } from "./app/actions/userAction";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import ChangePassword from "./pages/ChangePassword";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoutes from "./utils/PrivateRoutes";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const LoginCode = lazy(() => import("./pages/LoginCode"));
const Main = lazy(() => import("./pages/Main"));
const OptVerification = lazy(() => import("./pages/OtpVerification"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Signup = lazy(() => import("./pages/Signup"));
const Account = lazy(() => import("./pages/Account"));
const Movies = lazy(() => import("./pages/Movies"));
const Search = lazy(() => import("./pages/Search"));
const Series = lazy(() => import("./pages/Series"));
const Wishlish = lazy(() => import("./pages/Wishlish"));

const App = () => {
  //redux
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  //useEffect
  useLayoutEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          fontSize: "0.8rem",
        }}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* authentication */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/code" element={<LoginCode />} />
          <Route path="/login/code/:id" element={<OptVerification />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/register/code/:id" element={<OptVerification />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route
            path="/password/forgot/code/:id"
            element={<OptVerification />}
          />
          <Route path="/password/reset/:id" element={<ResetPassword />} />

          {/* main */}
          {isAuthenticated ? (
            <Route
              element={<PrivateRoutes isAuthenticated={isAuthenticated} />}
            >
              <Route path="/home" element={<Main />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/wishlist" element={<Wishlish />} />
              <Route path="/detail/:type/:id" element={<Details />} />
              <Route path="/account" element={<Account />} />
              <Route
                path="/account/change-password"
                element={<ChangePassword />}
              />
            </Route>
          ) : (
            ""
          )}

          {/* page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
