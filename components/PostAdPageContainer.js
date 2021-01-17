import React, { useState } from "react";
import { useFormik } from "formik";
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

function makeRequest(ad, onResponse, onFailure) {
  let ok;
  fetch(`http://192.168.1.68:3000/api/annonce`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ad),
  })
    .then((response) => {
      ok = response.ok;
      return response.json();
    })
    .then((data) => {
      onResponse(ok, data);
    })
    .catch((err) => {
      onFailure(err);
    });
}

const PostAdPageContainer = () => {
  const [wasValidated, setWasValidated] = useState(false);
  const [status, setStatus] = useState("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      makeRequest(values, handleResponse, handleRequestFailure);
      setLoading(true);
    },
  });

  function handleResponse(ok, data) {
    setTimeout(() => {
      if (ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(data);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }

  function handleRequestFailure(error) {
    setTimeout(() => {
      setStatus("error");
      setError(error.message);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }

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
      error={error}
      loading={loading}
    />
  );
};

export default PostAdPageContainer;
