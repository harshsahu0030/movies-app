import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { testAction } from "./app/actions/userAction";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const LoginCode = lazy(() => import("./pages/LoginCode"));
const Main = lazy(() => import("./pages/Main"));
const OptVerification = lazy(() => import("./pages/OtpVerification"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Signup = lazy(() => import("./pages/Signup"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testAction());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* authentication */}
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/login/code" Component={LoginCode} />
          <Route path="/login/code/:id" Component={OptVerification} />
          <Route path="/register" Component={Signup} />
          <Route path="/register/code/:id" Component={OptVerification} />
          <Route path="/password/forgot" Component={ForgotPassword} />
          <Route path="/password/forgot/code/:id" Component={OptVerification} />
          <Route path="/password/reset/:id" Component={ResetPassword} />

          {/* main */}
          <Route path="/home" Component={Main} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
