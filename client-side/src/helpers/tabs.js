import HomePage from "../pages/HomePage";
import About from "../pages/About";
import SimpleRegistration from "../pages/SimpleRegistration";
import Login from "../pages/Login";
import Contact from "../components/contactUs/Contact";
import BusinessRegistrationPage from "../pages/BusinessRegistrationPage";
import MyCardPage from "../pages/MyCard";
import { BiHome, BiLogIn } from "react-icons/bi";
import { AiOutlineInfoCircle, AiOutlineLike } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import { MdAddBusiness } from "react-icons/md";
import CreateCardComp from "../components/cards/createCard";
import UpdateCardComp from "../components/cards/updateCard";
import AllTheCards from "../pages/AllCardsPage";

//here we create the categories and and navigate them to the pages
export const tabs = [
  {
    name: "Home",
    href: "/Home",
    displayForLoogedin: true,
    page: HomePage,
    icon: <BiHome></BiHome>,
  },
  {
    name: "About",
    href: "/about",
    displayForLoogedin: true,
    page: About,
    icon: <AiOutlineInfoCircle></AiOutlineInfoCircle>,
  },
  {
    name: "Contact Us",
    href: "/contact",
    displayForLoogedin: true,
    page: Contact,
    icon: <AiOutlineLike></AiOutlineLike>,
  },
  {
    name: "Simple Registration",
    href: "/simpleregistration",
    displayForLoogedin: false,
    page: SimpleRegistration,
    icon: <GoSignIn></GoSignIn>,
  },
  {
    name: "Business Registration",
    href: "/businessregistrationPage",
    displayForLoogedin: false,
    page: BusinessRegistrationPage,
    icon: <MdAddBusiness></MdAddBusiness>,
  },
  {
    name: "My Cards",
    href: "/my-cards",
    displayForLoogedin: true,
    hideForLoggedout: true,
    page: MyCardPage,
  },
  {
    name: "Login",
    href: "/login",
    displayForLoogedin: false,
    page: Login,
    icon: <BiLogIn></BiLogIn>,
  },
  {
    name: "Create Card",
    href: "/createCard",
    displayForLoogedin: false,
    hideForLoggedout: true,
    page: CreateCardComp,
  },
  {
    name: "Update Card",
    href: "/updateCard",
    displayForLoogedin: false,
    hideForLoggedout: true,
    page: UpdateCardComp,
  },
  {
    name: "All Cards",
    href: "/allCards",
    displayForLoogedin: true,
    hideForLoggedout: true,
    page: AllTheCards,
  },
];
