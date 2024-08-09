"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { registrationOption } from "../utils/inputValidator";
import InputComponent from "@/components/InputComponent";
import { useAppDispatch } from "@/hooks/customHook";
// import { forgotPasswordDispatch } from '@/actions/investorAction';
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuBadgeAlert } from "react-icons/lu";
import { FallingLines } from "react-loader-spinner";
import { toastError, toastSuccess } from "../utils/toastFuncs";
import Link from "next/link";

const ForgotPasssword = () => {
  const dispatch = useAppDispatch();

  type FormData = {
    email: string;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
    },
  });

  const resetForm = () => {
    reset({
      email: "",
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // dispatch(
    //   forgotPasswordDispatch(
    //     data,
    //     setIsLoading,
    //     toastSuccess,
    //     toastError,
    //     <FaRegCircleCheck className="w-[2.3rem] h-[2.3rem] text-color-primary-1" />,
    //     <LuBadgeAlert className="w-[2.3rem] h-[2.3rem] red" />,
    //     resetForm
    //   )
    // );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-[2rem]">
      <InputComponent
        placeholder={"Email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        validation={registrationOption.email}
        icon={
          <AiOutlineMail className="absolute w-[2.2rem] h-[2.2rem] top-[1rem] left-[1rem] text-color-primary-1" />
        }
      />
      <button
        disabled={isLoading}
        type="submit"
        className={`mt-[3rem] py-[1rem] flex justify-center items-center bg-color-primary-1 text-color-white w-full border border-color-blue rounded-lg transition-all duration-300 font-semibold bg-color-blue ease-in hover:-translate-y-[0.2rem] hover:shadow-xl ${
          isLoading && "opacity-75"
        }`}
      >
        {isLoading ? (
          <FallingLines height="25" width="25" color={"white"} visible={true} />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default ForgotPasssword;
