import { makeStyles, Typography} from "@material-ui/core";
import logo from "../images/LogoBlanco.svg";
import newTheme from "../styles/Theme";


const useStyles = makeStyles(() => {
    return ({
        section: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            background: newTheme.palette.secondary.dark,
            color: newTheme.palette.secondary.contrastText
        },
        principal: {
            display: "none",
            [newTheme.breakpoints.up("xl")]: {
                display: "flex",
                background: `url(${logo})`,
                width: "80rem",
                height: "50rem",
                backgroundRepeat: "no-repeat",
                backgroundSize: "40rem",
            },
            [newTheme.breakpoints.down("lg")]: {
                display: "flex",
            }
        },
        block: {
            [newTheme.breakpoints.down("lg")]: {
                display: "none"
            },
            display: "flex",
            background: newTheme.palette.secondary.dark,
            width: "40rem",
            height: "50rem",
            opacity: "98.5%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            "& img": {
                width: "15rem",
                marginRight: "5rem"
            }
        },
        info: {
            [newTheme.breakpoints.down("lg")]: {
                textAlign: "center"
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            "& h1": {
                margin: "0 auto",
                width: "25rem"
            },
            "& p": {
                margin: "0 auto",
                width: "25rem"
            }
        }

    });
})
export default function Paste({dark}) {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.secdark}`}>
            <div className={classes.principal}>
                <div className={classes.block}>
                    <img src={logo} alt=""/>
                </div>
                <div className={classes.info}>
                    <Typography variant={"h1"}>CRAIG KEM CASTRO PAIRAZAMAN</Typography>
                    <Typography variant={"body1"}>Software developer that specialize in the analysis, development and
                        design of websites, applications and business systems.</Typography>
                </div>
            </div>
        </div>
    )
}