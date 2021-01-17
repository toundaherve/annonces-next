import React from "react";
import Layout from "./layout";
import ResultsTable from "./ResultsTable";
import Section from "./section";

const HomePage = ({ latestAds }) => {
  return (
    <Layout>
      <Section title="Dernieres Annonces" next={false}>
        <ResultsTable data={latestAds} />
      </Section>
    </Layout>
  );
};

export default HomePage;
