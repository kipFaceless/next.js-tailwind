import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import styles from "../styles/Content.module.css"
import Login from "../pages/login";



const Layout = ({children}) => {

    const control = true
    { if(control) { return ( 
        <>
        <Navbar />

        <div className={styles.content} >
              <Dashboard  /> <span className="bg-white bg-opacity-50 rounded shadow-md p-11 "  style={{margin : "100px",  height:"auto", width:"100%"}}>{children}</span>
          
          </div>
       
        </>

     );}
    }

    { if(!control) { return ( 
        <>
            <Login/>      
        </>

     );}
    }
}
 
export default Layout;