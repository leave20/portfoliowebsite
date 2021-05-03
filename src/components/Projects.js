import {Card, CardContent, Grid, makeStyles, Typography,} from "@material-ui/core";
import newTheme from "../styles/Theme";
import LaunchIcon from '@material-ui/icons/Launch';
import javaDark from "../images/iconsjavablack.png";
import sqlDark from "../images/iconssqlblack.png";
import ionicDark from "../images/iconsionicblack.png";
import reactDark from "../images/iconsreactblack.png";
import mongoDark from "../images/iconsmongoblack.png";
import mongoLight from "../images/iconsmongolight.png";

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: newTheme.palette.secondary.dark,
    },
    principal: {
        outline: "1px solid red",
        display: "flex",
        width: "90rem",
        height: "60rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    block: {
        outline: "1px solid red",
        width: "85rem",
        height: "50rem",
        display: "flex",
        opacity: "98%",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    info: {
        outline: "1px solid red",
        width: "41rem",
        height: "8.5rem",
        display: "flex",
        flexDirection: "column"
    },
    board: {
        display: "flex",
        alignSelf: "center",
        outline: "1px solid red",
        width: "85rem",
        height: "40rem",
        justifyContent: "center",
        alignItems: "center"
    },
    projects: {
        display: "flex",
        flexWrap: "wrap",
        outline: "1px solid red",
        width: "80rem",
        height: "30rem"
    },
    projectitem: {
        outline: "1px solid red",
        width: "20rem",
        height: "11rem",
        borderRadius: "5px",
        background: "#fff"
    },
    itemTitle: {
        display:"flex",
        outline: "1px solid red",
        "& h6":{
            marginLeft:0
        }
    },
    linkSection:{
        outline: "1px solid red",
        width:"6rem"
    },
    itemBody: {
        outline: "1px solid red",
        "& p":{
            marginLeft:0
        }
    }

}))
export default function Projects({title, dark, id}) {

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
                                        This is a list of projects I have built in the time. As a developer I always try
                                        to learn new skills and apply to projects inmediately. I’m a true believer of
                                        always take action and test our knowledge.
                                    </Typography>
                                </div>

                            </div>

                        </div>
                        <div className={classes.board}>
                            <div className={classes.projects}>
                                <div className={classes.projectitem}>
                                    <div className={classes.itemTitle}>
                                        <Typography variant={"subtitle2"}>MERN STACK APP</Typography>
                                        <div className={classes.linkSection}>

                                        </div>
                                    </div>
                                    <div className={classes.itemBody}>
                                        <Typography variant={"caption"}>
                                            Angular, Nodejs, HTML, CSS
                                        </Typography>
                                        <Typography variant={"body1"} color={"grey[50]"}>
                                            Development of a TODO app with a Backend service hosted in heroku for
                                            something.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}