import makeupImage from "../assets/images/pink-dose/makeup.jpg";
import creamImage from "../assets/images/pink-dose/cream.jpg";
import serumImage from "../assets/images/pink-dose/serum.jpg";
import skincareImage from "../assets/images/pink-dose/skincare.jpg";
import fragranceImage from "../assets/images/pink-dose/fragrance.jpg";
import perfumeImage from "../assets/images/pink-dose/perfume.jpg";

export const categories = [
  { title: "Makeup", image: makeupImage },
  { title: "Fragrance", image: perfumeImage },
  { title: "Face Care", image: skincareImage },
  { title: "Body & Bath", image: creamImage },
  { title: "Haircare", image: serumImage },
];

export const paginationItems = [
  {
    _id: 1001,
    img: makeupImage,
    imageAlt: "Editorial makeup photography",
    productName: "Diorshow 5 Couleurs",
    brand: "Dior",
    price: "810",
    sourcePriceEur: 75,
    sourceUrl:
      "https://www.sephora.fr/p/diorshow-5-couleurs---edition-limitee--palette-yeux-5-fards-a-paupieres-836257.html",
    color: "Makeup",
    badge: true,
    cat: "Makeup",
    des: "A five-shade eye palette from Dior, listed in Sephora France's makeup edit.",
  },
  {
    _id: 1002,
    img: serumImage,
    imageAlt: "Editorial hair-care photography",
    productName: "Airwrap Co-anda2x™",
    brand: "Dyson",
    price: "7009",
    sourcePriceEur: 649,
    sourceUrl:
      "https://www.sephora.fr/p/airwrap-co-anda2x%E2%84%A2---multi-styler-sechant-cheveux-raides-a-ondule-831304.html",
    color: "Haircare",
    badge: true,
    cat: "Haircare",
    des: "Dyson's Airwrap Co-anda2x multi-styler, listed in Sephora France's haircare edit.",
  },
  {
    _id: 1003,
    img: creamImage,
    imageAlt: "Editorial skin-care photography",
    productName: "Sugarmint Trio",
    brand: "Rhode",
    price: "810",
    sourcePriceEur: 75,
    sourceUrl:
      "https://www.sephora.fr/p/sugarmint-trio---coffret-soin-visage--edition-limitee--P1000216004.html",
    color: "Face Care",
    badge: true,
    cat: "Face Care",
    des: "A limited-edition Rhode face-care set listed in Sephora France's skincare edit.",
  },
  {
    _id: 1004,
    img: perfumeImage,
    imageAlt: "Editorial fragrance photography",
    productName: "YSL LIBRE Santal Couture",
    brand: "Yves Saint Laurent",
    price: "1480",
    sourcePriceEur: 137,
    sourceUrl:
      "https://www.sephora.fr/p/ysl-libre-santal-couture---eau-de-parfum-femme-florale-boisee-822753.html",
    color: "Fragrance",
    badge: false,
    cat: "Fragrance",
    des: "A floral woody Eau de Parfum from Yves Saint Laurent, listed at Sephora France.",
  },
  {
    _id: 1005,
    img: creamImage,
    imageAlt: "Editorial body and bath photography",
    productName: "MIST & MATCH",
    brand: "Sephora Collection",
    price: "216",
    sourcePriceEur: 19.99,
    sourceUrl:
      "https://www.sephora.fr/p/mist-et-match----coffret-trio-de-brumes-parfumees-corps-et-cheveux-P1000215844.html",
    color: "Body & Bath",
    badge: true,
    cat: "Body & Bath",
    des: "A Sephora Collection trio of fragranced mists for body and hair.",
  },
  {
    _id: 1006,
    img: makeupImage,
    imageAlt: "Editorial makeup photography",
    productName: "ALL THAT GLIMMERS",
    brand: "Sephora Collection",
    price: "194",
    sourcePriceEur: 17.99,
    sourceUrl:
      "https://www.sephora.fr/p/all-that-glimmers---9-eyeshadow-palette-800325.html",
    color: "Makeup",
    badge: false,
    cat: "Makeup",
    des: "A nine-pan eyeshadow palette from Sephora Collection.",
  },
  {
    _id: 1007,
    img: serumImage,
    imageAlt: "Editorial hair-care photography",
    productName: "Detox shampoo",
    brand: "OUAI",
    price: "189",
    sourcePriceEur: 17.5,
    sourceUrl:
      "https://www.sephora.fr/p/detox-shampoo---shampoing-detox-514570.html",
    color: "Haircare",
    badge: false,
    cat: "Haircare",
    des: "OUAI Detox shampoo, listed in Sephora France's haircare edit.",
  },
  {
    _id: 1008,
    img: skincareImage,
    imageAlt: "Editorial skin-care photography",
    productName: "Triple care BB milk",
    brand: "Erborian",
    price: "215",
    sourcePriceEur: 19.9,
    sourceUrl:
      "https://www.sephora.fr/p/triple-care-bb-milk---soin-concentre-effet-peau-de-bebe-824189.html",
    color: "Face Care",
    badge: false,
    cat: "Face Care",
    des: "Erborian's Triple care BB milk, listed in Sephora France's face-care edit.",
  },
  {
    _id: 1009,
    img: fragranceImage,
    imageAlt: "Editorial fragrance photography",
    productName: "Vanilla Canyon",
    brand: "PHLUR",
    price: "1026",
    sourcePriceEur: 95,
    sourceUrl:
      "https://www.sephora.fr/p/vanilla-canyon---eau-de-parfum-819810.html",
    color: "Fragrance",
    badge: false,
    cat: "Fragrance",
    des: "An Eau de Parfum from PHLUR, listed in Sephora France's fragrance edit.",
  },
  {
    _id: 1010,
    img: creamImage,
    imageAlt: "Editorial body and bath photography",
    productName: "Livin' A Vida Cheirosa",
    brand: "Sol de Janeiro",
    price: "431",
    sourcePriceEur: 39.9,
    sourceUrl:
      "https://www.sephora.fr/p/livin--a-vida-cheirosa---coffret-de-brumes-parfumees-P1000215983.html",
    color: "Body & Bath",
    badge: true,
    cat: "Body & Bath",
    des: "A Sol de Janeiro set of fragranced mists, listed in Sephora France's body and bath edit.",
  },
];

export const SplOfferData = paginationItems.slice(0, 4);
