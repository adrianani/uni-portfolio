import createComponent from "../functions/createComponent.mjs";
import Logo from "./Header/Logo.mjs";

const html = //html
`
    <div class="wrapper"></div>
`;

const css = //css
`
    .wrapper {
        max-width: 1120px;
        width: 100%;
        padding: 0 40px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .wrapper > main {
        position: absolute;
        top: 164px;
    }
`;

const BaseLayout = createComponent(html, css);

BaseLayout.appendChild(Logo);

export default BaseLayout;