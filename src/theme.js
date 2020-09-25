const lampLine = require('./assets/image/light_line.png')
const lampOn = require('./assets/image/lamp_on.png')
const lampOff = require('./assets/image/lamp_off.png')
const lampTextOff = require('./assets/image/idea_off.png')

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
}

export const lightTheme = {
    body: "#e9edf2dd",
    text: "#0e1724",
    toggleBorder: "#0e1724",
    gradient: "linear-gradient(#39598A, #79D7ED)",
    lamp: {
        line: lampLine,
        lamp: lampOff,
        text: lampTextOff
    }
};

export const darkTheme = {
    body: "#0e1724dd",
    text: "#e9edf2",
    toggleBorder: "#e9edf2",
    gradient: "linear-gradient(#091236, #1E215D)",
    lamp: {
        line: lampLine,
        lamp: lampOn,
        text: lampTextOff
    }
};
