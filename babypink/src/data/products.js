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
    title: "name1",
    img: p1,
    otherImages: [ p11, p12, p13],
    desc: "some description",
    category: "chairs",
    price: 49.99
  },
  {
    id: 2,
    title: "name2",
    img: p2,
    otherImages: [ p21, p22],
    desc: "some description",
    category: "tables",
    price: 149.00
  },
  {
    id: 3,
    title: "name3",
    img: p3,
    otherImages: [p31],
    desc: "some description",
    category: "sofas",
    price: 399.99
  },
];
