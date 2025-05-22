"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { EMAIL_REGEX } from "@/src/constants/regex";
import { loginUser } from "@/src/redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/src/constants/routes";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, error, loading } = useSelector((state) => state.auth);

  const router = useRouter();

  const dispatch = useDispatch();

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (user) return router.push(HOME_ROUTE);
    

    if (error)
      toast.error(error, {
        autoClose: 750,
      });
  }, [user, error, router]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
      <form onSubmit={handleSubmit(submitForm)} className="py-6">
        <div className="pb-1">
          <label htmlFor="email" className="font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address.",
              },
            })}
            className="w-full border rounded py-1 px-2 my-1"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="pb-1 relative">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password length must be greater than 6.",
              },
            })}
            className="w-full border rounded py-1 px-2 my-1"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9"
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <div className="py-4">
          <input
            type="submit"
            disabled={loading}
            value={loading ? "Submitting..." : "Login"}
            className="w-full bg-primary hover:opacity-90 text-white py-1 rounded disabled:opacity-80"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
