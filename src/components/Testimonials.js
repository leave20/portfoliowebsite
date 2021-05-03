import {ButtonBase, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import face1 from '../images/face1.jpg'
import newTheme from "../styles/Theme";

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        background: "#fff",
        color: "#FD5858"

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

            </div>
        </div>
    )
}