import React from "react";
import { HashLoader } from "react-spinners";

function Loading(){
    return(
        <div className="flex items-center justify-center h-screen">
            <HashLoader color="#36d7b7" />
        </div>
    )
}

export default Loading