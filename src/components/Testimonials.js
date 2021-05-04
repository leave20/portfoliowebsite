import {ButtonBase, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import face1 from '../images/face1.jpg'
import newTheme from "../styles/Theme";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        background: "#fff",
        color: "#FD5858",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    principal: {
        display: "flex",
        width: "90rem",
        height: "60rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    block: {
        width: "85rem",
        height: "50rem",
        display: "flex",
        opacity: "98%",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    info: {
        width: "41rem",
        height: "15rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    resume: {
        color: newTheme.palette.primary.dark
    },
    board:{
        display: "flex",
        alignSelf: "center",
        width: "85rem",
        height: "40rem",
        justifyContent: "center",
        alignItems: "center"
    }

}))
export default function Testimonials({title, dark, id}) {
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
                                    <Typography variant={"body1"}>
                                        These are comments of what people think about me and how as a person I can bring
                                        value to any project that I participate in areas like leadership, team
                                        management and more.
                                    </Typography>
                                </div>

                            </div>

                        </div>
                        <div className={classes.board}>
                            <a className="twitter-timeline" data-lang="en"
                               href="https://twitter.com/TwitterDev/lists/national-parks?ref_src=twsrc%5Etfw">Ver mas</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}