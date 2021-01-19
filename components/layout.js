import React from "react";
import { categories } from "./PostAdPage";
import Section from "./section";

const Layout = ({
  leftAside = true,
  rightAside = true,
  breadcrumb = true,
  children,
  location = "",
}) => {
  return (
    <div className="container-lg">
      <div>
        <div className="mt-2 mb-3">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a
                className="nav-link active btn btn-dark"
                aria-current="page"
                href="/postad"
              >
                Post an item wanted
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="fw-bolder display-3">
            <a href="/" className="link-dark">
              WANT3D
            </a>
          </h2>
        </div>
      </div>

      <div className="row justify-content-center p-3 mb-4 bg-light">
        <form
          className=" col-12 col-lg-10 d-flex"
          action="/result"
          method="get"
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search items wanted..."
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
              {location && (
                <li className="breadcrumb-item active">{location}</li>
              )}
            </ol>
          </nav>
        </div>
      )}

      <div className="row">
        {leftAside && (
          <div className="d-none d-sm-block col-12 col-sm-3 col-lg-2">
            <Section title="Categories" headingSize="h5" next={false}>
              <ul className="list-unstyled">
                {categories.map((category, idx) => (
                  <li key={idx} className="pb-1">
                    <a
                      href={`/category?category=${category.toLocaleLowerCase()}`}
                    >{`${category}`}</a>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        )}

        <div className="col-12 col-sm-9 col-lg-7">{children}</div>

        {rightAside && (
          <div className="d-sm-none d-lg-block col-12 col-lg-3">
            <div className="border p-3 mb-4">
              <p className="my-4 h5 fw-normal">
                WANT3D is a platform where you can say what you want and how
                much you are ready to pay for it.
              </p>
            </div>

            {[1, 2, 3].map((n) => (
              <div key={n} className="p-3 mb-3 bg-light">
                <h6 className="mb-1">Ads space</h6>
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
