import React, { useEffect, useState } from "react";
//import Rules from "../data/Rules";

const PricingRulesList = () => {
  const [pricingRules, setPricingRules] = useState([]);

  // Fetch the pricing rules when the component mounts
  useEffect(() => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const fetchPricingRules = async () => {
      try {
        const response = await fetch(`${serverUrl}/api/rules`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPricingRules(data);
      } catch (error) {
        console.error("There was a problem fetching the pricing rules:", error); //Remove
      }
    };

    fetchPricingRules();
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div>
      <div className="table-heading">Pricing Rules</div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Discount Price Units</th>
            <th>Discount Price</th>
          </tr>
        </thead>
        <tbody>
          {pricingRules.map((rule, index) => (
            <tr key={rule.ItemId || index}>
              <td>{rule.item} </td>
              <td> $ {rule.unitPrice} </td>
              <td>{rule.discountPriceUnits}</td>
              <td>{rule.discountPrice ? `$${rule.discountPrice}` : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingRulesList;
