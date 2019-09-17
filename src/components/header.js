import React from "react";
import Image from "../components/image"

function header() {
return (
    <div style={{backgroundColor: "black", width: "100%", height: "100%"}}>
    <header style={{paddingTop: "5%"}} className="nav">
        <div style={{textAlign: "center"}}>
        <table style={{height: "100%", width: "100%", marginTop: "5%"}}>
            <tr>
                <td style={{width: "10%"}}>
                    Music
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

export default header