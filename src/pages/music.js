import React from "react";
import Image from "../components/image"
import { Link } from "gatsby"

function music() {
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
                  &nbsp;
                </td>
                <td style={{width: "10%"}}>
                    Artists
                </td>
                <td style={{width: "10%"}}>
                  &nbsp;
                </td>
                <td style={{width: "10%"}}>
                    <Image />
                </td>
                <td style={{width: "10%"}}>
                  &nbsp;
                </td>
                <td style={{width: "10%"}}>
                    Videos
                </td>
                <td style={{width: "10%"}}>
                  &nbsp;
                </td>
                <td style={{width: "20%"}}>
                    Contact
                </td>
            </tr>
        </table>
        </div>
             </header>
    </div>
)
}

export default music