import React, { useState } from "react";
import { useFormik } from "formik";
import useModalLoading from "../hooks/useModalLoading";
import PostAdPage from "./PostAdPage";

function validate(values) {
  const errors = {};

  if (!values.category) {
    errors.firstName = "Required";
  }

  if (!values.title) {
    errors.firstName = "Required";
  }

  if (!values.description) {
    errors.firstName = "Required";
  }

  if (!values.price) {
    errors.firstName = "Required";
  }

  if (!values.contact) {
    errors.firstName = "Required";
  }

  return errors;
}

function handleAdCreation(ad, onSuccess, onFailed) {
  fetch(`http://192.168.1.68:3000/api/annonce`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onFailed(err);
    });
}

const PostAdPageContainer = () => {
  const [wasValidated, setWasValidated] = useState(false);
  const modalLoading = useModalLoading();
  const [status, setStatus] = useState("form");

  const formik = useFormik({
    initialValues: {
      category: "",
      title: "",
      description: "",
      price: "",
      contact: "",
    },
    validate,
    onSubmit: (values) => {
      modalLoading.current.show();

      handleAdCreation(
        values,
        (resp) => {
          setTimeout(() => {
            setStatus("success");
            window.scrollTo(0, 0);
            modalLoading.current.hide();
            // alert(JSON.stringify(resp, null, 2));
          }, 2000);
        },
        (err) => {
          setTimeout(() => {
            setStatus("error");
            window.scrollTo(0, 0);
            modalLoading.current.hide();
            // alert(JSON.stringify(err, null, 2));
          }, 2000);
        }
      );
    },
  });

  const handleSubmit = (e) => {
    setWasValidated(true);
    formik.handleSubmit(e);
  };

  return (
    <PostAdPage
      handleSubmit={handleSubmit}
      handleChange={formik.handleChange}
      values={formik.values}
      wasValidated={wasValidated}
      setWasValidated={setWasValidated}
      status={status}
      setStatus={setStatus}
    />
  );
};

export default PostAdPageContainer;
