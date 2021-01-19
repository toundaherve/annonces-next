import React from "react";

export default function Section({
  children,
  title,
  headingSize = "h4",
  next = false,
  noHeading = false,
}) {
  return (
    <div className="p-3 mb-4 border bg-white">
      {!noHeading && <h4 className={`${headingSize} mb-3`}>{title}</h4>}
      {children}
      {next && (
        <>
          {" "}
          <b>'>>'</b> <a href="#3">Voir plus de {title}</a>
        </>
      )}
    </div>
  );
}
