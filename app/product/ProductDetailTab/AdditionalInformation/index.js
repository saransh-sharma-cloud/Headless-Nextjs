import React from "react";

const AdditionalInformation = ({ product }) => {

  const colors = product?.variations?.edges?.map((edge) => {
    return edge?.node?.attributes?.nodes
      .find((attr) => attr?.name === "color")
      ?.value.replace(/"/g, "");
  });
  
  const uniqueColors = Array.from(new Set(colors));

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "16px 30px",
              fontWeight: "bold",
            }}
          >
            Color
          </td>
          <td style={{ border: "1px solid #ddd", padding: "16px 30px" }}>
            {uniqueColors?.join(", ")}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdditionalInformation;
