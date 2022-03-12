import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
    box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
    margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
    width: 100%;
    height: 100%;
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
    line-height: 1.5;
    content-visibility: auto;
    }
    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }

    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
    isolation: isolate;
    }

    @media screen and (min-width: 320px) {
        html {
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
    }
    @media screen and (min-width: 1000px) {
        html {
            font-size: 18px;
        }
    }

 `;
export default GlobalStyle;
