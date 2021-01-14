import React from "react";

export default function Section({ children, title, next = true }) {
  return (
    <div className="p-3 mb-4 border">
      <h4 className="mb-3">{title}</h4>
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
