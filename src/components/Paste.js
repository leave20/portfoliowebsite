import {makeStyles, Typography} from "@material-ui/core";
import logo from "../images/LogoBlanco.svg";
import newTheme from "../styles/Theme";


const useStyles = makeStyles(() => {
    return ({
        section: {
            background: newTheme.palette.secondary.dark,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
        },
        principal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            [newTheme.breakpoints.up('md')]: {
                display: 'flex',
                background: `url(${logo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "40%",
                backgroundPosition: 'left',
            },
            [newTheme.breakpoints.down('sm')]: {

                width: "80rem",
                height: "50rem",
            }
        },
        block: {
            display: "flex",
            [newTheme.breakpoints.up('md')]: {
                background: newTheme.palette.secondary.dark,
                width: "50%",
                height: "50rem",
                opacity: "95%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'flex-end',
                "& img": {
                    width: "15rem",
                    marginRight: "5rem"
                },
            },
            [newTheme.breakpoints.down('sm')]: {
                display: "flex",
                position: "absolute",
                "& img": {
                    width: "60vw",
                    height: "60vh"
                },
                opacity: "0.1"
            }
        },
        info: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: newTheme.palette.primary.contrastText,
            [newTheme.breakpoints.up('md')]: {
                textAlign: 'start',
                alignItems: 'flex-start',
                width: "50%",
                height: "50rem",
                "& p": {
                    width: '70%'
                }
            },
            [newTheme.breakpoints.down('sm')]: {
                width: "80%",
                position: "relative",
                justifyContent: "center",

            }
        }

    });
})
export default function Paste() {
    const classes = useStyles()
    return (
        <div className={`${classes.section}`}>
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