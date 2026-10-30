import makeupImage from "../assets/images/pink-dose/makeup.jpg";
import creamImage from "../assets/images/pink-dose/cream.jpg";
import serumImage from "../assets/images/pink-dose/serum.jpg";
import skincareImage from "../assets/images/pink-dose/skincare.jpg";
import fragranceImage from "../assets/images/pink-dose/fragrance.jpg";
import perfumeImage from "../assets/images/pink-dose/perfume.jpg";

export const navBarList = [
  { _id: 1001, title: "Home", link: "/" },
  { _id: 1002, title: "Shop all", link: "/shop" },
  { _id: 1003, title: "Our story", link: "/about" },
  { _id: 1004, title: "Contact", link: "/contact" },
];

export const categories = [
  { title: "Makeup", image: makeupImage },
  { title: "Skincare", image: skincareImage },
  { title: "Fragrance", image: perfumeImage },
  { title: "Bath & body", image: creamImage },
  { title: "Haircare", image: serumImage },
];

export const paginationItems = [
  {
    _id: 1001,
    img: makeupImage,
    productName: "Soft-focus complexion",
    price: "320",
    color: "Makeup",
    badge: true,
    cat: "Makeup",
    rating: 4.8,
    des: "Buildable, skin-like coverage for a fresh, polished everyday look.",
  },
  {
    _id: 1002,
    img: serumImage,
    productName: "The restorative hair mask",
    price: "280",
    color: "Haircare",
    badge: true,
    cat: "Haircare",
    brand: "Act+Acre",
    rating: 4.7,
    des: "A nourishing hair-care ritual for soft, beautifully cared-for lengths.",
  },
  {
    _id: 1003,
    img: creamImage,
    productName: "Daily comfort cream",
    price: "240",
    color: "Skincare",
    badge: false,
    cat: "Skincare",
    rating: 4.8,
    des: "A comforting, cushiony cream to make your daily skin-care routine feel special.",
  },
  {
    _id: 1004,
    img: skincareImage,
    productName: "The skin ritual set",
    price: "390",
    color: "Skincare",
    badge: true,
    cat: "Skincare",
    rating: 4.9,
    des: "A considered edit of skin-care essentials for slow, feel-good routines.",
  },
  {
    _id: 1005,
    img: perfumeImage,
    productName: "A little French fragrance",
    price: "690",
    color: "Fragrance",
    badge: false,
    cat: "Fragrance",
    rating: 4.9,
    des: "A distinctive, memorable fragrance for the finishing touch to your routine.",
  },
  {
    _id: 1006,
    img: fragranceImage,
    productName: "The glow collection",
    price: "450",
    color: "Skincare",
    badge: true,
    cat: "Skincare",
    rating: 4.7,
    des: "A thoughtful collection for bringing a little more glow to your routine.",
  },
  {
    _id: 1007,
    img: makeupImage,
    productName: "Everyday makeup edit",
    price: "350",
    color: "Makeup",
    badge: false,
    cat: "Makeup",
    rating: 4.8,
    des: "Versatile makeup essentials to take your look from everyday to evening.",
  },
  {
    _id: 1008,
    img: creamImage,
    productName: "Your self-care moment",
    price: "290",
    color: "Bath & body",
    badge: false,
    cat: "Bath & body",
    rating: 4.8,
    des: "An easy, comforting addition to your at-home self-care ritual.",
  },
];

export const SplOfferData = paginationItems.slice(0, 4);
