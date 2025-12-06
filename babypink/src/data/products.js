import p1 from "../img/products/product1.webp";
import p11 from "../img/products/product1-1.webp";
import p12 from "../img/products/product1-2.webp";
import p13 from "../img/products/product1-3.webp";

import p2 from "../img/products/product2.webp";
import p21 from "../img/products/product2-1.webp";
import p22 from "../img/products/product2-2.webp";

import p3 from "../img/products/product3.webp";
import p31 from "../img/products/product3-1.webp";

export const products = [
  {
    id: 1,
    title: "Pink Pajama Set",
    img: p1,
    otherImages: [ p11, p12, p13],
    desc: "Soft and comfortable pink pajama set, perfect for cozy nights",
    category: "chairs",
    price: 19.99
  },
  {
    id: 2,
    title: "Classic Pink Pajamas",
    img: p2,
    otherImages: [ p21, p22],
    desc: "Simple pink pajamas with shorts and a top, ideal for relaxing at home",
    category: "tables",
    price: 19.99
  },
  {
    id: 3,
    title: "Delicate Lingerie Set",
    img: p3,
    otherImages: [p31],
    desc: "Sheer lingerie set with bra and panties, light and feminine",
    category: "sofas",
    price: 14.99
  },
];
