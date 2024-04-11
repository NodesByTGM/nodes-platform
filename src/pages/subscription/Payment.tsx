/* eslint-disable @typescript-eslint/no-explicit-any */
import React  from "react";
import { Button, Input, FormDebug, PayStackIcon } from "../../components";
import AppConfig from "../../utilities/config";
import { useFormik } from "formik";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
// import { useDashboardContext } from "../../context/hooks";
import {
  paymentSchema,
  paymentValidationType,
} from "../../utilities/validation";
// import { PaystackButton } from "react-paystack";

import PaystackComponent from "./PaystackComponent";

export default function Payment() {
  const user = useSelector((state: RootState) => state.user.user);

  // const {user}
  const handleClickForm = (values?: any) => {
    const data = {
      name: values.name,
      cardNumber: values.cardNumber,
      expDate: values.expDate,
      cvc: values.cvc,
    };
    console.log(JSON.stringify(data, null, 2));
  };

  const formik = useFormik<paymentValidationType>({
    initialValues: {
      name: "",
      cardNumber: "",
      expDate: "",
      cvc: "",
    },
    validationSchema: paymentSchema,
    validateOnBlur: true,
    onSubmit: handleClickForm,
  });

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    handleBlur,
  } = formik;



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="grid grid-cols-2 gap-8 p-6  border border-[#D6D6D6] rounded-lg  bg-[#ffffff]"
    >
      <div className="flex flex-col gap-8">
        <h3 className="font-medium text-[18px] text-[#0E0E2C]">Make payment</h3>
        <div className="flex flex-col gap-6">
          <Input
            placeholder={AppConfig.PLACEHOLDERS.Fullname}
            id="name"
            type="text"
            label="Name on Card"
            error={errors.name}
            value={values.name}
            touched={touched.name}
            onChange={handleChange("name")}
            onBlur={handleBlur}
          />

          <Input
            placeholder={AppConfig.PLACEHOLDERS.CardNumber}
            id="cardNumber"
            type="text"
            label="Card Number"
            error={errors.cardNumber}
            value={values.cardNumber}
            touched={touched.cardNumber}
            onChange={handleChange("cardNumber")}
            onBlur={handleBlur}
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              placeholder={AppConfig.PLACEHOLDERS.CardNumber}
              id="expDate"
              type="text"
              label="Expiration Date"
              error={errors.expDate}
              value={values.expDate}
              touched={touched.expDate}
              onChange={handleChange("expDate")}
              onBlur={handleBlur}
            />
            <Input
              placeholder={AppConfig.PLACEHOLDERS.CardNumber}
              id="cvc"
              type="text"
              label="CVC"
              error={errors.cvc}
              value={values.cvc}
              touched={touched.cvc}
              onChange={handleChange("cvc")}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button>
            <span className="">Make Payment</span>
          </Button>

          <p className="font-normal text-center text-[13px] text-[#212121]">
            By confirming your subscription, you allow Nodes to charge your card
            for this payment and future payments in accordance with their terms.
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="mb-8 font-medium text-[18px] text-[#0E0E2C]">
          Or choose another payment method
        </h3>
        <button
          
          className="hidden border border-[#000000] text-[#000000] font-norrmal text-sm w-full p-4 rounded-[5px]"
        >
          <div className="flex items-center justify-center gap-[10px] ">
            <PayStackIcon />
            <span className="">Continue with Paystack</span>
          </div>
        </button>

        <PaystackComponent  user={user} />

        {/* <PaystackButton  /> */}

        <pre className="hidden">{JSON.stringify(user, null, 2)}</pre>

        <FormDebug
          form={{
            values,
            errors,
            touched,
            isValid,
          }}
          className="hidden"
        />
      </div>
    </form>
  );
}
