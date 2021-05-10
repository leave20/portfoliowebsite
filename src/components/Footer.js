import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    section: {
        height:"135px"
    },
    secdark:{
        background:"#1d1d1d",
        color:"#FD5858"
    }
}))

export default function Footer({dark,id}){
    const classes=useStyles()
    return(
        <div className={`${classes.section} ${dark && classes.secdark}`}>
            <div className={classes.sectioncontent} id={id}>

            </div>
        </div>
    )
}