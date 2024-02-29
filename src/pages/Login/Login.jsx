import { Button } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { app } from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setIsLoading(true);
    const authentication = getAuth();
    let uid = "";
    signInWithEmailAndPassword(authentication, data.email, data.password)
      .then((response) => {
        uid = response.user.uid;
        sessionStorage.setItem("User Id", uid);
        sessionStorage.setItem(
          "Auth token",
          response._tokenResponse.refreshToken,
        );

        setIsLoading(false);
        toast.success("Successful Login!🎉", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Wrong Password");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("Email not found, please registe");
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl text-gray-200 text-center">Login</h5>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-200"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="mb-5 block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-200"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div className="flex justify-center flex-col mt-6">
              <Button size="large">{loading ? "loading" : "Login"}</Button>
              <div className="flex justify-between mt-1">
                <span className="text-white">Dont have an account yet?</span>
                <Link className="text-blue-500 hover:text-white" to="/register">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
