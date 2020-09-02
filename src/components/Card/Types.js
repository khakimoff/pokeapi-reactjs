import React from "react";
import shortid from "shortid";

export default function Types(props) {
  const { types } = props;
  return (
    <>
      <p className="details_item--types">
        <b>Types:</b>
      </p>
      {types
        ? types.map((type, i) => {
            const name = type.type.name;
            return (
              <p key={shortid.generate()} className="details_item--typesItem">
                {name}
              </p>
            );
          })
        : ""}
    </>
  );
}
