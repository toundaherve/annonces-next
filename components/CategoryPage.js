import React from "react";
import Layout from "./layout";
import NoResultsAlert from "./NoResultsAlert";
import ResultsSummary from "./ResultsSummary";
import ResultsTable from "./ResultsTable";
import Section from "./section";

const CategoryPage = ({
  page,
  details,
  data,
  totalCount,
  query,
  limit,
  onPageClick,
  requestError,
}) => {
  const capitalized = query.charAt(0).toUpperCase() + query.substr(1);
  const hasResults = data.length > 0 ? true : false;

  const Results = () => (
    <div>
      <ResultsSummary
        totalCount={totalCount}
        limit={limit}
        data={data}
        page={page}
        query={capitalized}
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
    <Layout location={capitalized + " wants"}>
      <Section noHeading>
        {requestError.error ? (
          <FailureAlert />
        ) : hasResults ? (
          <Results />
        ) : (
          <NoResultsAlert
            query={query}
            templateMsg={`There are no items wanted yet in category "${query}".`}
          />
        )}
      </Section>
    </Layout>
  );
};

export default CategoryPage;
