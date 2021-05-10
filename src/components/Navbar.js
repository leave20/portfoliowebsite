import {useState} from "react";
import {Link} from 'react-scroll'
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    makeStyles,
    Toolbar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import logo from '../images/path865.png'
import CloseIcon from '@material-ui/icons/Close';
import newTheme from "../styles/Theme";


const links = [
    {
        id: "about",
        text: "About me",

    },
    {
        id: "knowledge",
        text: "Knowledge"
    },
    {

        id: "letsworktogether",
        text: "Let´s work together"
    },
    {
        id: "testimonials",
        text: "Testimonials"
    },
    {
        id: "projects",
        text: "Projects"
    }
]


const useStyles = makeStyles((theme) => ({

    root: {
        [theme.breakpoints.down("sm")]: {
            background: newTheme.palette.secondary.main,
        },
        height: "70px",
        background: newTheme.palette.secondary.dark,
        color: newTheme.palette.primary.main,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "flex-start",
        },
    },
    logo: {
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        display: "none",
        height: "3.5rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    },
    menu: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        justifyItems: "center",
        width: "100vw",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: newTheme.palette.secondary.light,
            fontSize: "1.25rem",
            fontWeight: "regular",
            marginLeft: theme.spacing(3),

        },
        "&>:nth-child(3)": {
            outline: "1px solid red",
            padding: "0.625em",
            fontWeight: "bold",
        },
        "& a:hover": {
            cursor: "pointer",
            color: newTheme.palette.primary.main,
            borderBottom: "1px solid #FD5858"
        }

    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: newTheme.palette.primary.main,
            position: "absolute",
            top: 5,
            right: 20
        },
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "50vw"
        },
        "& h5": {
            margin: theme.spacing(2, 0, 0, 0),
            color: newTheme.palette.primary.main,


        },
        "& h5:hover": {
            color: "#fff",
            background: "#2F2F2F",
            cursor: "pointer"
        }
    },
    cancelIcon: {
        height: "5vh",

    }

}))
export default function Navbar() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    return (
        <>
            <AppBar position="sticky" className={`${classes.root} `}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <List className={classes.menu}>
                        {
                            links.map(({id, text}, index) => (
                                <Link key={index} to={id} spy={true} smooth={true} activeClass="active" duration={500}
                                      offset={-70.5}>{text}</Link>
                            ))
                        }
                    </List>
                    <IconButton edge="end" className={classes.menubutton} onClick={() => setOpen(!open)}>
                        <MenuIcon fontSize="large"/>
                    </IconButton>

                </Toolbar>

            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <IconButton onClick={() => setOpen(false)} color="primary">
                    <CloseIcon className={classes.cancelIcon} fontSize="large"/>
                </IconButton>
                <Divider/>
                {
                    links.map(({id, text}, index) => (
                        <Link
                            className={classes.sidebar}
                            key={index}
                            to={id}
                            spy={true}
                            smooth={true}
                            activeClass="active"
                            duration={500}
                            offset={-70.5}>
                            <ListItem component="h5">
                                {text}
                            </ListItem>
                        </Link>
                    ))
                }
            </Drawer>
        </>
    )
}