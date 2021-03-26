import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

*:focus {
    outline:0;
}

html, body, #root {
    height: 100%;
}

body {
    -webkit-font-smooting: antialiased;
    font-smooth: always;
}

body, input, button {
    font:14px 'Roboto', sans-serif;
}

a {
    text-decoration: none;
}

 ul {
     list-style: none;
 }

 button {
     cursor: pointer;
 }

`;
