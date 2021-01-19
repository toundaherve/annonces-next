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
    <Layout location="Post an item wanted">
      {status === "form" && (
        <Section title="Post an item wanted" next={false}>
          <p className="mb-4">Describ the item you want to buy.</p>

          <form
            onSubmit={handleSubmit}
            className={`needs-validation ${wasValidated && "was-validated"}`}
            noValidate
          >
            <div className="">
              <div className="mb-3">
                <div className="">
                  <div className="mb-2">Category: </div>

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
                      <option key={idx} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="invalid-feedback">
                    Please choose a category for the item.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">What item do you want? </div>

                  <input
                    type="text"
                    className="form-control d-block"
                    id="exampleInputTitle"
                    value={values.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Example: Iphone 8 plus"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide the name of the item.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">Can you be more specific? </div>

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={values.description}
                    onChange={handleChange}
                    name="description"
                    required
                    placeholder="Example: Color: Jet Black, capacity 256GB, Unlocked ..."
                  ></textarea>
                  <div className="invalid-feedback">
                    Please provide a description.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">What is your budget? </div>

                  <input
                    type="number"
                    className="form-control d-block"
                    id="exampleInputPrice"
                    value={values.price}
                    onChange={handleChange}
                    name="price"
                    placeholder="Example: £300"
                    required
                  />
                  <div className="invalid-feedback">
                    Please set your budget.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="">
                  <div className="mb-2">How can sellers join you ?</div>

                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea2"
                    rows="3"
                    value={values.contact}
                    onChange={handleChange}
                    name="contact"
                    placeholder="Example: sarah@gmail.com"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please set your contact info.
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
                <button
                  className="btn btn-dark"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border">
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  ) : (
                    "Publish now"
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
          <p>Your want has been successfully published!!!</p>
          <hr />
          <p className="mb-0">
            Now you can relax... We will email you at as soon as somebody has
            what you want.
          </p>
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
