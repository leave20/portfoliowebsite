import {makeStyles, Typography,} from "@material-ui/core";
import newTheme from "../styles/Theme";
import LaunchIcon from '@material-ui/icons/Launch';


const useStyles = makeStyles(() => ({
    section: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: newTheme.palette.secondary.dark,
    },
    principal: {
        display:"none",
        [newTheme.breakpoints.up("xl")]: {
            display: "flex",
            width: "90rem",
            height: "60rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
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
        color: newTheme.palette.secondary.contrastText
    },
    board: {
        display: "flex",
        alignSelf: "center",
        width: "85rem",
        height: "40rem",
        justifyContent: "center",
        alignItems: "center"
    },
    projects: {
        display: "flex",
        flexWrap: "wrap",
        height: "28rem",
        width: "70rem",
        justifyContent: "space-evenly",
        alignItems: "center",

    },
    projectitem: {
        width: "20rem",
        height: "11rem",
        borderRadius: "5px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: " 15px"
    },
    itemTitle: {
        display: "flex",
        justifyContent: "space-between",
        width: "18rem",
        alignSelf: "center",
        "& h6": {
            marginLeft: 0
        }
    },
    linkSection: {
        display: "flex",
        width: "6.79rem",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    itemBody: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignSelf: "center",
        width: "18rem",
        "& p": {
            marginLeft: 0
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
                                            <LaunchIcon className={classes.launchIcon} fontSize={"small"}/>
                                            <Typography variant={"caption"}>Source code</Typography>
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
                                <div className={classes.projectitem}>
                                    <div className={classes.itemTitle}>
                                        <Typography variant={"subtitle2"}>MERN STACK APP</Typography>
                                        <div className={classes.linkSection}>
                                            <LaunchIcon className={classes.launchIcon} fontSize={"small"}/>
                                            <Typography variant={"caption"}>Source code</Typography>
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
                                <div className={classes.projectitem}>
                                    <div className={classes.itemTitle}>
                                        <Typography variant={"subtitle2"}>MERN STACK APP</Typography>
                                        <div className={classes.linkSection}>
                                            <LaunchIcon className={classes.launchIcon} fontSize={"small"}/>
                                            <Typography variant={"caption"}>Source code</Typography>
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
                                <div className={classes.projectitem}>
                                    <div className={classes.itemTitle}>
                                        <Typography variant={"subtitle2"}>MERN STACK APP</Typography>
                                        <div className={classes.linkSection}>
                                            <LaunchIcon className={classes.launchIcon} fontSize={"small"}/>
                                            <Typography variant={"caption"}>Source code</Typography>
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
                                <div className={classes.projectitem}>
                                    <div className={classes.itemTitle}>
                                        <Typography variant={"subtitle2"}>MERN STACK APP</Typography>
                                        <div className={classes.linkSection}>
                                            <LaunchIcon className={classes.launchIcon} fontSize={"small"}/>
                                            <Typography variant={"caption"}>Source code</Typography>
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
                                <div className={classes.projectitem}>
                                    <div className={classes.itemTitle}>
                                        <Typography variant={"subtitle2"}>MERN STACK APP</Typography>
                                        <div className={classes.linkSection}>
                                            <LaunchIcon className={classes.launchIcon} fontSize={"small"}/>
                                            <Typography variant={"caption"}>Source code</Typography>
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