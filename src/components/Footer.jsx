import FuncComponent from './compon_lab4/FuncComponent';
import ClassComponent from './compon_lab4/ClassComponent';
import "../css/headerstyle.css";
const Footer =() =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                <FuncComponent />
                <ClassComponent />
                </div>
            </div>
        </footer>
    );
}
export default Footer;