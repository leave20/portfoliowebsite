import {makeStyles} from "@material-ui/core";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Knowledge from "./components/Knowledge";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Letsworktogether from "./components/Letsworktogether";
import Paste from "./components/Paste";
import Footer from "./components/Footer";
import newTheme from "./styles/Theme";




function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar dark={true}/>
            <Paste title="paste" id="paste" dark={true}/>
            <Aboutme title="About me" id="about" dark={true}/>
            <Knowledge title="knowledge" id="knowledge" dark={true}/>
            <Projects title="projects" id="projects" dark={true}/>
            <Testimonials title="testimonials" id="testimonials" dark={true}/>
            <Letsworktogether title="letsworktogether" id="letsworktogether" dark={true}/>
            <Footer dark={true}/>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        //  ----
    }
}))
export default App;
