import React from "react";
import ProductDetail from "./product-detail";
import centered from "@storybook/addon-centered/react";

export default { title: "Products/Detail", decorators: [centered] };

export const example1 = () => (
  <ProductDetail
    title="Blue Paisley"
    price="$7.50"
    imageUrl="https://as2.ftcdn.net/jpg/01/80/95/41/500_F_180954196_iA3nZkgSrCXnhHCQYllnKAHcKILl6kBe.jpg"
    rating={3}
    description="In 2020, Chinese flu took the world by storm. Buy this mask and guard yourself against this deadly pathogen! Made of 100% recycled toilet paper. FDA approved to filter particles larger than 1 nanocron."
  />
);