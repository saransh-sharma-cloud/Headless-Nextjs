export const colors = [
  { name: "Black", color: "#000000" },
  { name: "Pink", color: "#FFC0CB" },
  { name: "White", color: "#fff" },
  { name: "Blue", color: "#0000FF" },
  { name: "Grey", color: "#808080" },
];

 export const mapColors = (colorName) => {
    const matchedColor = colors?.find((color) => color?.name === colorName);
    return matchedColor ? matchedColor?.color : null;
  };

export const calculateDiscountPercentage = (regularPrice, salePrice) => {
  if (!regularPrice || !salePrice) return null; 
  const regularPriceNum = parseFloat(regularPrice.replace(/[^0-9.-]+/g, ""));
  const salePriceNum = parseFloat(salePrice.replace(/[^0-9.-]+/g, ""));

  if (isNaN(regularPriceNum) || isNaN(salePriceNum) || regularPriceNum <= 0) {
    return null;
  }

  const discount = ((regularPriceNum - salePriceNum) / regularPriceNum) * 100;
  return Math.round(discount);
};
