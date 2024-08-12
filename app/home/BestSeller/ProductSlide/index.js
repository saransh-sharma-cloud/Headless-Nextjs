import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { mapColors } from "@/app/utils";

const ProductSlide = ({
  item,
  selectedImages,
  selectedPrices,
  handleColorChange,
}) => {
  const currentPrice = selectedPrices[item?.id] || item.initialPrice;
  const primaryImage =
    selectedImages[item?.id] || item.featuredImage?.node?.mediaItemUrl;
  const secondaryImage = item?.variations?.edges[1]?.node?.image?.mediaItemUrl;

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box className="product-image-container">
        {currentPrice.onSale && (
          <Grid className="discount-badge">
            {currentPrice?.discountPercentage}% off
          </Grid>
        )}
        <Link href={`/product/${item?.slug}`} passHref>
          <img src={primaryImage} alt={item?.name} className="normal-image" />
        </Link>
        {secondaryImage && (
          <>
            <Link href={`/product/${item?.slug}`} passHref>
              <img
                src={secondaryImage}
                alt={item?.name}
                className="hover-image"
              />
            </Link>
            <Box className="hover-image">
              <Button
                variant="contained"
                size="small"
                className="add-to-cart-button"
              >
                Add To Cart{" "}
                <ShoppingBagOutlinedIcon sx={{ marginLeft: "5px" }} />
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Typography variant="h6" sx={{ margin: "10px" }}>
        {item?.name}
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="10px"
        marginBottom="10px"
      >
        <Typography
          variant="body1"
          sx={{
            textDecoration: currentPrice?.onSale ? "line-through" : "none",
            color: currentPrice?.onSale ? "grey" : "inherit",
          }}
        >
          {currentPrice?.regularPrice}
        </Typography>
        {currentPrice?.onSale && (
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "red" }}>
            {currentPrice?.price}
          </Typography>
        )}
      </Grid>
      <Grid container justifyContent="center">
        {item?.variations?.edges.map((variationEdge, index) => (
          <div key={index}>
            {variationEdge?.node?.attributes?.nodes?.map(
              (attribute, attributeIndex) => {
                const color = mapColors(attribute?.value?.replace(/"/g, ""));
                return color ? (
                  <Grid
                    key={`${index}-${attributeIndex}`}
                    className="color-swatch"
                    sx={{ backgroundColor: color }}
                    onClick={() =>
                      handleColorChange(
                        item?.id,
                        variationEdge?.node.image.mediaItemUrl,
                        variationEdge.node.price,
                        variationEdge.node.regularPrice,
                        variationEdge.node.onSale
                      )
                    }
                  />
                ) : null;
              }
            )}
          </div>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSlide;
