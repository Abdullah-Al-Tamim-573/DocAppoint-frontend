"use client";

import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { handleLogIn } from "@/Services/Form Submit/Authentication/LogIn";

let LoginPage = () => {
  const router = useRouter();

  return (
    <div className="pt-5 pb-40 md:pb-45 xl:pb-35   xl:py-15 flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
        {/* login form logo */}
        <div className="flex flex-col text-center mb-5">
          <div className=" flex mb-1 md:mb-2 justify-center font-bold text-teal-600">
            <Image
              
              src={"/Images/logo.png"}
              alt="logo"
              height={200}
              width={200}
            ></Image>
          </div>
          {/* logIn form title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              LogIn
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Please logIn your account
            </p>
          </div>
        </div>

        <Form
          onSubmit={(e) => handleLogIn(e, router)}
          className="flex flex-col gap-5"
        >
         

          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              className={
                " w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
              }
              placeholder="john@example.com"
            />
            <FieldError />
          </TextField>


          {/* password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Must contain one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Must contain one lowercase letter";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              className={
                " w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
              }
              placeholder="Enter your password"
            />

            

            <FieldError />
          </TextField>

          {/* logIn button */}
          <Button
            type="submit"
            className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl"
          >
            LogIn
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-sm text-slate-400">OR</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* google sign in */}
        <button
          variant="bordered"
          className="w-full h-12 rounded-xl font-medium btn"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* login page link */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Don't have an account? {" "}
          <Link
            href="/register"
            className="text-teal-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};


export default LoginPage