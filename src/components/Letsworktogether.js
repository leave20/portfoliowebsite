import {Button, Grid, Input, makeStyles, TextField, Typography} from "@material-ui/core";
import newTheme from "../styles/Theme";


const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "79vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    secdark: {
        background: "#2F2F2F",
        color: "#FD5858"
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
        textTransform: "uppercase"

    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "29.25rem",
        height: "40rem",
        justifyContent: "space-around",
        "& h2": {
            fontSize: "26px"
        },
        "& div": {
            display: "flex",
            flexDirection: "column",
        }

    },
    input: {
        color: newTheme.palette.secondary.contrastText,
        textDecorationColor: newTheme.palette.secondary.contrastText,
        borderBottom: "2px solid #fff",
        margin: "20px"

    },
    inputArea: {
        border: "2px solid #fff",
        height: "7.2rem",
        margin: "20px"
    },
    labelForms: {
        marginLeft: "1.3rem",
        color: "white"
    },
    buttonSend: {
        width: "7.563rem",
        height: "2.813rem",
        marginLeft: "1.3rem"
    }

}))
export default function Letsworktogether({title, dark, id}) {
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.secdark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Grid className={classes.form}>
                    <Typography variant={"h2"} color="primary"> Contact</Typography>
                    <div className={classes.inputForms}>
                        <Input className={classes.input} placeholder="Name">
                        </Input>
                        <Input className={classes.input} placeholder="Name">
                        </Input>
                        <Typography className={classes.labelForms} variant={"subtitle2"}>Message</Typography>
                        <TextField
                            className={classes.inputArea}
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                    </div>

                    <Button className={classes.buttonSend} variant="contained" size="small" color="primary"
                            disableElevation>
                        Send
                    </Button>
                </Grid>
            </div>
        </div>
    )
}