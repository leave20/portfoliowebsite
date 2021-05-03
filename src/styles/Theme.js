import {createMuiTheme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";





const newTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#FD5858",
                dark: "#1d1d1d"
            },
            secondary: {
                main: grey[900],
                dark: "#2F2F2F",
                light: "#BDBDBD",
                contrastText: grey[50]
            }
        },
        typography: {
            h1: {
                margin: " 0 auto",
                fontSize: "2.5rem",
                fontWeight: "bold"
            },
            h2: {
                fontSize: "2.5rem",
                textTransform: "uppercase",

            },
            h3: {
                fontSize: "2rem",
                color: grey[50]
            },
            subtitle2: {
                fontSize: "16px",
                marginLeft: "5rem",

            },
            body1: {
                marginLeft: "5rem",
                fontWeight: "normal",

            }

        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1460,
            },
        },

    })
;

export default newTheme