import React from "react";
import Layout from "./layout";
import ResultsTable from "./ResultsTable";
import Section from "./section";

const HomePage = ({ latestAds }) => {
  return (
    <Layout>
      <Section title="Latest items wanted" next={false}>
        <ResultsTable data={latestAds} />
      </Section>
    </Layout>
  );
};

export default HomePage;
