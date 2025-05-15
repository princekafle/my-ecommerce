const navLinks = [
  {
    route: "/",
    label: "Home",
    isAuth: false,
  },
  {
    route: "/about",
    label: "About",
    isAuth: false,
  },
  {
    route: "/products",
    label: "Products",
    isAuth: false,
  },
  {
    route: "/cart",
    label: "Cart",
    isAuth: true,
  },
  {
    route: "/news",
    label: "News",
    isAuth: true,
    subMenu: [
      {
        route: "/politics",
        label: "Politics",
      },
      {
        route: "/sports",
        label: "Sports",
      },
      {
        route: "/education",
        label: "Education",
      },
    ],
  },
  {
    route: "/contact",
    label: "Contact",
    isAuth: false,
  },
];

export default navLinks;
