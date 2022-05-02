import React, { useEffect } from "react";
import { Grid } from "./Products";

export const CategoryCard = () => {
  useEffect(() => {
    // dispatch filter Products for every ID change
  }, []);
  return (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
    </Grid>
  );
};
