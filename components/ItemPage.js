import React from "react";
import Layout from "../components/layout";

const ItemPage = ({
  id,
  title,
  price,
  description,
  contact,
  createdAt,
  category,
}) => {
  return (
    <Layout>
      <div className="item row">
        <div className="col-12 col-md-12">
          <div className="p-3 mb-4 border">
            <h4 className="mb-3">{title}</h4>

            <div className="mb-4">
              <p className="mb-3">{description}</p>
            </div>

            <div className="">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Offer:</td>
                    <td>
                      <span className="fw-bold">{price}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td>{category}</td>
                  </tr>
                  <tr>
                    <td>ETA:</td>
                    <td>45min</td>
                  </tr>
                  <tr>
                    <td>Reference:</td>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <td>Published:</td>
                    <td>{createdAt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12">
          <div className="p-3 mb-4 border">
            <div>
              <h5 className="my-2">Publisher infos</h5>

              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <small>Pseudo:</small>
                    </td>
                    <td>"NAME"</td>
                  </tr>
                  <tr>
                    <td>
                      <small>City:</small>
                    </td>
                    <td>Leeds, UK</td>
                  </tr>
                  <tr>
                    <td>
                      <small>Contact:</small>
                    </td>
                    <td className="fw-bold">{contact}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12">
          <div className="p-3 mb-4 border">
            <div>
              <h5 className="my-2">Contact via email</h5>

              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Your email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>

                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemPage;
