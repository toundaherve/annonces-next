import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

const PostAd = () => {
  return (
    <Layout>
      <Section title="Passer une annonce" next={false}>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form>
          <div className="">
            <div className="mb-3">
              <div className="">
                <div className="mb-2">Categorie: </div>

                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Titre: </div>

                <input
                  type="text"
                  className="form-control d-block"
                  id="exampleInputTitle"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Descriptif: </div>

                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Prix: </div>

                <input
                  type="text"
                  className="form-control d-block"
                  id="exampleInputPrice"
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <div className="mb-2">Contact & Info: </div>

                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="d-grid gap-2 mb-3">
              <button className="btn btn-primary" type="button">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </Section>
    </Layout>
  );
};

export default PostAd;
