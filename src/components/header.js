import React from "react";
import Image from "../components/image"
import { Link } from "gatsby"

function header() {
return (
    <div style={{backgroundColor: "black", width: "100%", height: "100%"}}>
    <header className="nav">
        <div style={{textAlign: "center"}}>
        <table style={{height: "100%", width: "100%"}}>
            <tr>
                <td style={{width: "10%"}}>
                  <Link to="/music/">Music</Link>
                </td>
                <td style={{width: "10%"}}>
                    <Link to="/artists/">Artists</Link>
                </td>
                <td style={{width: "10%"}}>
                    <Image />
                </td>
                <td style={{width: "10%"}}>
                   <Link to="/videos/">Videos</Link>
                </td>
                <td style={{width: "20%"}}>
                    <Link to="/contact/">Contact</Link>
                </td>
            </tr>
        </table>
        </div>
             </header>
    </div>
)
}

export default header