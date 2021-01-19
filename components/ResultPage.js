import React from "react";
import FailureAlert from "./FailureAlert";
import Layout from "./layout";
import NoResultsAlert from "./NoResultsAlert";
import ResultsSummary from "./ResultsSummary";
import ResultsTable from "./ResultsTable";
import Section from "./section";

const ResultPage = ({
  page,
  totalCount,
  data,
  query,
  limit,
  onPageClick,
  requestError,
}) => {
  const hasResults = data.length > 0 ? true : false;

  const Results = () => (
    <div>
      <ResultsSummary
        totalCount={totalCount}
        limit={limit}
        data={data}
        page={page}
        query={query}
      />

      <ResultsTable
        data={data}
        page={page}
        totalCount={totalCount}
        limit={limit}
        onPageClick={onPageClick}
      />
    </div>
  );

  return (
    <Layout location={"Results " + query}>
      <Section noHeading>
        {requestError.error ? (
          <FailureAlert />
        ) : hasResults ? (
          <Results />
        ) : (
          <NoResultsAlert query={query} />
        )}
      </Section>
    </Layout>
  );
};

export default ResultPage;
