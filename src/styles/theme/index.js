import { createTheme } from "@mui/material"
export const Colors = {
    primary: "#5f2c3e",
    secondary: "#24AEDF",
    success: "#4CAF50",
    light: "#aaa",
    dark: "#0e1b20",
    border: "#DDDFE1",


    dim_grey: "#696969",
    dove_grey: "#d5d5d5",
    light_grey: "rgb(230,230,230)",
    light_blue: "#F0FBFF",
    button_black: "#0d0d0d",
    body_bg: "#f3f6f9",

    white: "#fff",
    black: "#0000",
    banner_bg: "linear-gradient(58deg, rgba(14,39,73,1) 0%, rgba(97,163,251,1) 100%);",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        }

    }
});
export default theme;