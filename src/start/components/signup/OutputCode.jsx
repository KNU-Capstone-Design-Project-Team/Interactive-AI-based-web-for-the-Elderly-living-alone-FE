import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";

export default function OutputCode() {
    const { processState, setProcessState} = useContext(ProcessStateContext);
    return(
        <div>코드줌</div>
    )
};