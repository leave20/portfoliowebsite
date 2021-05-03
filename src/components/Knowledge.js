import {Grid, makeStyles, Typography} from "@material-ui/core";
import logo from '../images/logo.svg'
import newTheme from "../styles/Theme"
import mongoLight from "../images/iconsmongolight.png"
import javaDark from "../images/iconsjavablack.png"
import sqlDark from "../images/iconssqlblack.png"
import ionicDark from "../images/iconsionicblack.png"
import reactDark from "../images/iconsreactblack.png"
import mongoDark from "../images/iconsmongoblack.png"


const useStyles = makeStyles((theme) => ({
    section: {
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: newTheme.palette.secondary.contrastText
    },
    principal: {
        display: "flex",
        width: "90rem",
        height: "60rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "38rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    block: {
        width: "85rem",
        height: "50rem",
        background: newTheme.palette.secondary.contrastText,
        display: "flex",
        opacity: "98%"
    },
    info: {
        width: "38rem",
        height: "50rem",
        display: "flex",
        flexDirection: "column"
    },
    title: {
        width: "20rem",
        height: "5rem"
    },
    resume: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "38rem",
        height: "50rem",
        color: newTheme.palette.primary.dark,
    },
    technology: {
        alignSelf: "center",
        margin: ".5rem",
        width: "38rem",
        flexWrap: "wrap",
        height: "15rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            width: "8rem"
        },
    },
    firstTech: {
        display: "flex",
        justifyContent: "space-around",
        width: "18.5rem",
        "& img:hover": {
            opacity: "95%",
            cursor: "pointer"
        }
    },
    secondTech: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "-5rem",
        width: "28rem",
        "& img:hover": {
            opacity: "95%",
            cursor: "pointer"
        }
    },
    picture: {
        display: "flex",
        justifyContent: "center",
        width: "47rem"
    }
}))
export default function Knowledge({title, dark, id}) {
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
                                    <Typography variant={"subtitle2"}>Every knowledge is important</Typography>
                                    <Typography variant={"body1"}>
                                        Over the years, both in my student time and work field, I have been able to
                                        master certain technologies, always depending on the needs of my clients. Such
                                        technologies are: Java, SQL, ionic, React, Angular
                                    </Typography>
                                </div>
                                <div className={classes.technology}>
                                    <div className={classes.firstTech}>
                                        <img src={javaDark} alt={`java is ${javaDark}`}/>
                                        <img src={sqlDark} alt={`sql is ${sqlDark}`}/>
                                    </div>

                                    <div className={classes.secondTech}>
                                        <img src={ionicDark} alt={`ionic is ${ionicDark}`}/>
                                        <img src={reactDark} alt={`react is ${reactDark}`}/>
                                        <img src={mongoDark} alt={`mongo is ${mongoLight}`}/>
                                    </div>
                                </div>
                                <div>
                                    <Typography variant={"body1"}>
                                        Currently, I continue learning other technologies but I always keep updating my
                                        main skills as a developer due to a constant usage of them in the mayority of
                                        projects that I collaborate.
                                    </Typography>
                                    <Typography variant={"body1"}>
                                        I have a solid background in Java ecosystem making me flexible between web and
                                        mobile projects and I’m pretty sure that I would be a nice fit to any team
                                        working in this ecosystem.
                                    </Typography>
                                </div>

                            </div>

                        </div>
                        <div className={classes.picture}>
                            <img src={logo} alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}