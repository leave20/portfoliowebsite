import {ButtonBase, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import face1 from '../images/face1.jpg'
import newTheme from "../styles/Theme";

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh"
    },
    secdark: {
        background: "#fff",
        color: "#FD5858"
    },
    sectioncontent: {


    },
    container:{

        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center"

    },

    info:{

        maxWidth: "100%",
        "& p": {
            textAlign: "left",
            width:"30vw",
            marginLeft: "15rem",
            color:newTheme.palette.secondary.main
        }
    },comments:{

        display: "flex",
        maxWidth: "85vw",
        flexWrap: "wrap",
        justifyContent: "center",
        alignSelf:"center",
        height:"40%"
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: "40rem",
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}))
export default function Testimonials({title, dark, id}) {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.secdark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Grid container className={classes.container}>
                    <Grid className={classes.info}>
                        <Typography variant={"h2"} color="primary"> Testimonials</Typography>
                        <Typography variant={"body1"}>These are comments of what people think about me and how as a
                            person I can bring value to any project that I participate in areas like leadership, team
                            management and more.</Typography>
                    </Grid>
                    <Grid className={classes.comments}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img}
                                             src={face1} alt="img as face1"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography variant="h5" gutterBottom>
                                                Guy Hawkins
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                veniam consequat sunt nostrud amet.
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img}
                                             src={face1} alt="img as face1"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography variant="h5" gutterBottom>
                                                Guy Hawkins
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                veniam consequat sunt nostrud amet.
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img}
                                             src={face1} alt="img as face1"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography variant="h5" gutterBottom>
                                                Guy Hawkins
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                veniam consequat sunt nostrud amet.
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img}
                                             src={face1} alt="img as face1"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography variant="h5" gutterBottom>
                                                Guy Hawkins
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                veniam consequat sunt nostrud amet.
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}