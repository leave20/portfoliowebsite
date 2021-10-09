import { makeStyles, Typography} from "@material-ui/core";
import newTheme from "../styles/Theme";
import logo from "../images/LogoBlanco.svg"
import photo from "../images/photo.png"

const useStyles = makeStyles(() => ({
    section: {
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: newTheme.palette.primary.dark,

    },
    principal: {
        display: "none",
        [newTheme.breakpoints.up("xl")]: {
            display: "flex",
            width: "90rem",
            height: "60rem",
            background: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "40rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        [newTheme.breakpoints.down("lg")]: {
            display: "flex",
            flexDirection:"column"
        }
    },
    block: {
        [newTheme.breakpoints.down("lg")]: {
            width: "50vh",
            justifyContent: "center",
            alignItems: "center",
        },
        width: "85rem",
        height: "50rem",
        background: newTheme.palette.primary.dark,
        opacity: "98%",
        display: "flex"
    },
    info: {
        [newTheme.breakpoints.down("lg")]: {
            width: "auto",
            textAlign: "center",
            justifyContent:"center",
            alignItems:"center"
        },
        width: "38rem",
        height: "50rem",
        display: "flex",
        flexDirection: "column"

    },
    title: {
        width: "15rem",
        height: "5rem",
    },
    resume: {
        [newTheme.breakpoints.down("lg")]: {
            width:"auto"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "38rem",
        height: "40rem",
        color: newTheme.palette.secondary.contrastText,
        "& h3,h6,p":{
            [newTheme.breakpoints.down("lg")]: {
                marginLeft:0,
                width:"auto"
            },
        }
    },
    picture: {
        [newTheme.breakpoints.down("lg")]: {
            display: "none"
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "47rem",
        background: `url(${photo})`,
        backgroundSize: "35rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        "& img": {
            width: "25rem"
        }
    }


}))
export default function Aboutme({title, dark, id}) {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.secdark}`}>
            <div className={classes.sectioncontent} id={id}>
                <div className={classes.principal}>
                    <div className={classes.block}>
                        <div className={classes.info}>
                            <div className={classes.title}>
                                <Typography variant={"h2"} color="primary">{title}</Typography>
                            </div>
                            <div className={classes.resume}>
                                <div>
                                    <Typography variant={"h3"}>EDUCATION</Typography>
                                    <Typography variant={"subtitle2"}>Software Technique - Institude IDAT</Typography>
                                    <Typography variant={"body1"}>
                                        Student of the software development career in one of the technological
                                        institutes of
                                        Lima-Peru
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant={"h3"}>EXPERIENCE</Typography>
                                    <Typography variant={"subtitle2"}>Software Developer Intern - Stackly Code
                                    </Typography>
                                    <Typography variant={"body1"} color={"grey[50]"}>
                                        Assist the lead developers of the project in the software design process.
                                        Improved the current system of the company implementing an API and Database
                                        design
                                        to enhance the data storage, user registration and employee registration.
                                    </Typography>
                                </div>
                            </div>

                        </div>
                        <div className={classes.picture}>
                            {/*<img src={photo} alt=""/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}