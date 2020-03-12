import React from "react";
import ProductThumbnail from "./product-thumbnail";
import centered from "@storybook/addon-centered/react";

export default { title: "Products/Thumbnail", decorators: [centered] };

export const example1 = () => (
  <ProductThumbnail
    title="Blue Dream"
    price="$7.00"
    imageUrl="https://as2.ftcdn.net/jpg/01/80/95/41/500_F_180954196_iA3nZkgSrCXnhHCQYllnKAHcKILl6kBe.jpg"
  />
);

export const example2 = () => (
  <ProductThumbnail
    title="Red Volcano"
    price="$9.00"
    imageUrl="https://previews.123rf.com/images/mansum007/mansum0071608/mansum007160800377/61356821-art-lava-pattern-background.jpg"
  />
);
