import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Layout from "../components/layout";
import Section from "../components/section";

const PostAd = () => {
  const [wasValidated, setWasValidated] = useState(false);

  const validate = (values) => {
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

    setWasValidated(true);

    return errors;
  };

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <Section title="Passer une annonce" next={false}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className={`needs-validation ${wasValidated && "was-validated"}`}
          noValidate
        >
          <div className="">
            <div className="mb-3">
              <div className="">
                <div className="mb-2">Categorie: </div>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  name="category"
                  required
                >
                  <option value="">Open this select menu</option>
                  <option value="phones">Phones</option>
                  <option value="clothing">Clothing</option>
                  <option value="cars">Cars</option>
                </select>
                <div class="invalid-feedback">Please choose a category.</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Titre: </div>

                <input
                  type="text"
                  className="form-control d-block"
                  id="exampleInputTitle"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  name="title"
                  required
                />
                <div class="invalid-feedback">Please choose a title.</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Descriptif: </div>

                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  name="description"
                  required
                ></textarea>
                <div class="invalid-feedback">
                  Please provide a description.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Prix: </div>

                <input
                  type="number"
                  className="form-control d-block"
                  id="exampleInputPrice"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  name="price"
                  required
                />
                <div class="invalid-feedback">Please set your price.</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Contact & Info: </div>

                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  name="contact"
                  required
                ></textarea>
                <div class="invalid-feedback">
                  Please set your contact info.
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 mb-3">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default PostAd;
