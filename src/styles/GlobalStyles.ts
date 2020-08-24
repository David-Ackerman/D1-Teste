import { createGlobalStyle } from 'styled-components';
import { GothamFontFace } from "./Fonts";

export default createGlobalStyle`
  ${GothamFontFace};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;   
  }
  body{
    background: var(--background);
  }
  *, button, input {
    outline:none;
    border: none;
    background: none;
    font-family: 'Gotham-Bold', 'Gotham-Book';
    color: var(--color-text);
  }
  ul{
    list-style: none;
  }
  :root{
    --background: #FAFBFF;
    --side-bar: #1A1731;
    --box-name: #3E3A4F;
    --icons-white: #E4E6F1;
    --true-white: #FFFFFF;
    --quantity-box: #E4E6F1;
    --quantity-box-lighter: #EBEEF6;
    --blue: #117EFF;
    --color-text: #3E4157;
    --color-text-lighter: #9196AB;
    --color-text-box: #9D9D9D;
    --table-icon: #D190DD;
    --send-icon: #C1CA4F;
    --play-icon: #35C667;
    --pen-icon: #3FA8F4;
    --bed-icon: #EBBD3E;
    --check-icon: #9FABD5;

    --color-input: #CCCFDE;
  }
`;
