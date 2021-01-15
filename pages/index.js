import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";

const HomePage = () => {
  return (
    <Layout>
      <Section title="Dernieres Annonces">
        <ul className="list-unstyled">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <li key={n} className="p-1">
              <a href="/item">Maison 3,4 pieces avec garage</a>
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
};

export default HomePage;
