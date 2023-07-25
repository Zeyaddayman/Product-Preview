import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../rtk/reducers/side-bar-reducer";
import close from '../images/icon-close.svg';
import links from "./Links";
import './Sidebar.css';


function Sidebar() {
    const sidebar = useSelector((state) => state.sidebar);
    const dispatch = useDispatch();

    if (sidebar) return (
        <>
        <div onClick={() => dispatch(changeStatus())} className="overlay"></div>
        <div className="side-bar">
            <div className="container">
                <span onClick={() => dispatch(changeStatus())}><img src={close} alt="close" /></span>
                <ul>
                    {links.map((link) => <li key={link}>{link}</li>)}                
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar;