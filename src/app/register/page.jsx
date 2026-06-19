"use client";

import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function RegisterPage() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log(data);
  };

  return (
    <div className="py-15 pb-30 md:pb-45 xl:pb-35   xl:py-15 flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
        {/* register form logo */}
        <div className="flex flex-col text-center mb-5">
          <div className=" flex mb-1 md:mb-2 justify-center font-bold text-teal-600">
            <Image
              className=""
              src={"/Images/logo.png"}
              alt="logo"
              height={200}
              width={200}
            ></Image>
          </div>
          {/* register form title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              Register
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Create your Doc appointment account
            </p>
          </div>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          {/* name */}
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input
              className={
                "  w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
              }
              placeholder="Enter your full name"
            />

            <FieldError />
          </TextField>

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

          {/* user photo URL */}
          <TextField isRequired name="photoURL" type="url">
            <Label>Photo URL</Label>
            <Input
              className={
                "w-full focus:bg-[#e6f4f7] border border-slate-200 focus:border-teal-500 outline-none"
              }
              placeholder="https://example.com/photo.jpg"
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

            <Description>
              Minimum 6 characters, 1 uppercase and 1 lowercase letter
            </Description>

            <FieldError />
          </TextField>

          {/* register button */}
          <Button
            type="submit"
            className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl"
          >
            Register
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-sm text-slate-400">OR</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* google sign up */}
        <button
          variant="bordered"
          className="w-full h-12 rounded-xl font-medium btn"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* login page link */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-teal-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
