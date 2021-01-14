import React from "react";
import Layout from "../components/layout";

const ItemPage = () => {
  return (
    <Layout>
      <div className="item row">
        <div className="col-12 col-md-12">
          <div className="p-3 mb-4 border">
            <h4 className="py-2 mb-4">Iphone 8 Plus - 64 GB - Gris sideral</h4>

            <div className="mb-4">
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas eveniet dolores placeat suscipit, velit ipsum sequi
                quas ratione id sunt voluptatem consequuntur. Distinctio porro
                ad sapiente aut. Illum inventore aliquam repellendus.
              </p>

              <p className="m-0">
                Prix: <span className="fw-bold">$750</span>
              </p>
            </div>

            <div className="mb-4">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Type d'annonce:</td>
                    <td>Premium</td>
                  </tr>
                  <tr>
                    <td>Numero de reference:</td>
                    <td>6362766728</td>
                  </tr>
                  <tr>
                    <td>Publication:</td>
                    <td>05.01.2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12">
          <div className="p-3 mb-4 border">
            <div>
              <h5 className="my-2">Informations sur l'annonceur</h5>

              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <small>Pseudo:</small>
                    </td>
                    <td>Tiger1972</td>
                  </tr>
                  <tr>
                    <td>
                      <small>Membre depuis:</small>
                    </td>
                    <td>31.10.2020</td>
                  </tr>
                  <tr>
                    <td>
                      <small>Ville:</small>
                    </td>
                    <td>Leeds, UK</td>
                  </tr>
                  <tr>
                    <td>
                      <small>Email:</small>
                    </td>
                    <td className="fw-bold">Repondre par email</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-12">
          <div className="p-3 mb-4 border">
            <div>
              <h5 className="my-2">Contacter le vendeur par email</h5>

              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Votre email address
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
                    Envoyer
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
