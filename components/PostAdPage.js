import React, { useState } from "react";

import Layout from "./layout";
import Section from "./section";

export const categories = [
  "Clothes",
  "Shoes",
  "Electronics",
  "Sports Gear",
  "Automobiles",
  "Video games",
  "Other",
];

const PostAdPage = ({
  handleSubmit,
  handleChange,
  values,
  wasValidated,
  status,
  error,
  loading,
}) => {
  return (
    <Layout>
      {status === "form" && (
        <Section title="Passer une annonce" next={false}>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <form
            onSubmit={handleSubmit}
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
                    value={values.category}
                    onChange={handleChange}
                    name="category"
                    required
                  >
                    <option value="">Open this select menu</option>
                    {categories.map((category, idx) => (
                      <option value={category.toLowerCase()}>{category}</option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    Please choose a category.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">Titre: </div>

                  <input
                    type="text"
                    className="form-control d-block"
                    id="exampleInputTitle"
                    value={values.title}
                    onChange={handleChange}
                    name="title"
                    required
                  />
                  <div className="invalid-feedback">Please choose a title.</div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">Descriptif: </div>

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={values.description}
                    onChange={handleChange}
                    name="description"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
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
                    value={values.price}
                    onChange={handleChange}
                    name="price"
                    required
                  />
                  <div className="invalid-feedback">Please set your price.</div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">Contact & Info: </div>

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea2"
                    rows="3"
                    value={values.contact}
                    onChange={handleChange}
                    name="contact"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please set your contact info.
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border">
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </div>
          </form>
        </Section>
      )}

      {status === "success" && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <p>Your offer have been created successfully !!!</p>
          <hr />
          <p className="mb-0"></p>
        </div>
      )}

      {status === "error" && (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Sorry !</h4>
          <p>The operation could not be performed: {error}</p>
          <hr />
          <p className="mb-0">Retry later !</p>
        </div>
      )}
    </Layout>
  );
};

export default PostAdPage;
