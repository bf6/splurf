import React from "react";
import ProductThumbnail from "../product-thumbnail/product-thumbnail";
import ProductList from "./product-list";
import centered from "@storybook/addon-centered/react";

export default { title: "Products/List", decorators: [centered] };

const productThumbnails = [
  <ProductThumbnail
    title="Blue Dream"
    price="$7.00"
    imageUrl="https://as2.ftcdn.net/jpg/01/80/95/41/500_F_180954196_iA3nZkgSrCXnhHCQYllnKAHcKILl6kBe.jpg"
  />,
  <ProductThumbnail
    title="Red Volcano"
    price="$9.00"
    imageUrl="https://previews.123rf.com/images/mansum007/mansum0071608/mansum007160800377/61356821-art-lava-pattern-background.jpg"
  />,
  <ProductThumbnail
    title="Orange Volcano"
    price="$12.00"
    imageUrl="https://previews.123rf.com/images/mansum007/mansum0071608/mansum007160800377/61356821-art-lava-pattern-background.jpg"
  />
]

export const example1 = () => (
  <ProductList
    thumbnails={productThumbnails}
  />
);