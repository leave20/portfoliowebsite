import {makeStyles} from "@material-ui/core";
import Navbar from "./components/Navbar";

import Paste from "./components/Paste";





function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Navbar dark={true}/>
            <Paste title="paste" id="paste" dark={true}/>
            {/*<Aboutme title="About me" id="about" dark={true}/>*/}
            {/*<Knowledge title="knowledge" id="knowledge" dark={true}/>*/}
            {/*<Projects title="projects" id="projects" dark={true}/>*/}
            {/*<Testimonials title="testimonials" id="testimonials" dark={true}/>*/}
            {/*<Letsworktogether title="letsworktogether" id="letsworktogether" dark={true}/>*/}
            {/*<Footer dark={true}/>*/}

        </div>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        //  ----
    }
}))
export default App;
