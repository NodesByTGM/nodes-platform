import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useVerifyTransactionQuery } from "../../api";
import { PayStackIcon, Modal, Loader } from "../../components";
import { loginUser } from "../../api/reducers/userSlice";
import { useDispatch } from "react-redux";
const PaystackComponent = ({ user }) => {
  const { plan } = useParams();
  const dispatch = useDispatch();

  const [reference, setReference] = useState(null);

  const {
    data: verificationData,
    refetch: verificationRefetch,
    isSuccess: verificationIsSuccess,
    isError: verificationIsError,
    error: verificationError,
    isFetching: verificationLoading,
  } = useVerifyTransactionQuery({ reference: reference }, { skip: !reference });

  const PRO_PLAN = import.meta.env.VITE_PRO_PLAN;
  const BUSINESS_PLAN = import.meta.env.VITE_BUSINESS_PLAN;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY ;
  const PRO_ANNUAL_PLAN = import.meta.env.VITE_PRO_ANNUAL_PLAN ;
  const BUSINESS_ANNUAL_PLAN = import.meta.env.VITE_BUSINESS_ANNUAL_PLAN ;
  const componentProps = {
    email: user?.email,

    plan:
      plan.toLowerCase() == "pro"
        ? PRO_ANNUAL_PLAN
        : plan.toLowerCase() == "business"
        ? BUSINESS_ANNUAL_PLAN
        : plan.toLowerCase() == "pro-monthly"
        ? PRO_PLAN
        : plan.toLowerCase() == "business-monthly"
        ? BUSINESS_PLAN
        : "",
    metadata: {
      name: user?.name,
      // phone,
    },
    publicKey: PUBLIC_KEY,
    text: "Pay with Paystack",
    // icon: true,
    onSuccess: (res) => {
      if (res.status == "success") {
        setReference(res?.trxref);
        // alert(JSON.stringify(res?.trxref, null, 2));

        // toast.success("Payment successful");
      }
    },
    onClose: () => {},
  };

  useEffect(() => {
    if (reference) {
      verificationRefetch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reference]);

  useEffect(() => {
    if (verificationData) {
      dispatch(loginUser(verificationData.result));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationData]);
  useEffect(() => {
    if (verificationIsSuccess) {
      toast.success('Subscription successful')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationIsSuccess]);

  useEffect(() => {
    if (verificationIsSuccess) {
      toast.success('Subscription successful')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verificationIsSuccess]);

  useEffect(() => {
    if (verificationIsError) {
      toast.error(verificationError?.message?.message || "Something went wrong");
    }
  }, [verificationIsError, verificationError]);

  return (
    <div className="w-full">
      <pre className="hidden">{JSON.stringify(user.email, null, 2)}</pre>

      <div className="">
        <div className="relative checkout-form">
          <PaystackButton
            {...componentProps}
            className="bg-primary text-[#ffffff] font-norrmal text-sm w-full px-4 h-[48px] rounded-[8px] "
          />

          <div className="hidden absolute left-[220px] inset-y-0 flex items-center">
            {" "}
            <PayStackIcon />
          </div>
        </div>
      </div>

      <Modal
        sizeClass="sm:max-w-[506px]"
        open={verificationLoading}
        setOpen={() => {}}
      >
      <Loader />
      </Modal>
    </div>
  );
};

export default PaystackComponent;
