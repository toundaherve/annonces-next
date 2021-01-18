import React from "react";
import { categories } from "./PostAdPage";
import Section from "./section";

const Layout = ({
  leftAside = true,
  rightAside = true,
  breadcrumb = true,
  children,
}) => {
  return (
    <div className="container-lg">
      <div>
        <div className="mb-3">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/postad">
                Post an offer
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="fw-bolder">Les petites annonces</h2>
        </div>
      </div>

      <div className="row justify-content-center p-3 mb-4 bg-info">
        <form className=" col-12 col-lg-6 d-flex" action="/result" method="get">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
            required
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      {breadcrumb && (
        <div className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#1">Library</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
        </div>
      )}

      <div className="row">
        {leftAside && (
          <div className="d-none d-sm-block col-12 col-sm-3 col-lg-3">
            <Section title="Categories" headingSize="h5" next={false}>
              <ul className="list-unstyled">
                {categories.map((category, idx) => (
                  <li key={idx} className="pb-1">
                    <a
                      href={`/category?category=${category.toLocaleLowerCase()}`}
                    >{`${category} >`}</a>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        )}

        <div className="col-12 col-sm-9 col-lg-6">{children}</div>

        {rightAside && (
          <div className="d-sm-none d-lg-block col-12 col-lg-3">
            <div className="border p-3 mb-4">
              <p className="my-4 h5 fw-normal">
                Petitesannonces.sh est un site de reference pour consulter et
                publier gratuitement des annonces en Suisse romande.
              </p>
            </div>

            {[1, 2, 3].map((n) => (
              <div key={n} className="p-3 mb-3 bg-light">
                <h6 className="mb-1">Grand et lumineux 3p (83m2) Av. Wendt</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, accusamus tempora. Nemo qui voluptates distinctio
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 mt-5">
          <div className="text-center">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              mollitia, iusto recusandae eaque inventore dolorum.
            </small>
          </div>

          <div className="text-center">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              mollitia, iusto recusandae eaque inventore dolorum. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Neque, earum?
            </small>
          </div>

          <div className="text-center mt-3 ">
            <small>Copyright C 2021 Petitesannonces.ch</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
