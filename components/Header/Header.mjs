import createElement from "../../functions/createComponent.mjs";
import Logo from "./Logo.mjs";

const html = // html 
`
<header id="header"></header>
`;

const Header = createElement(html);

Header.appendChild(Logo)

export default Header;