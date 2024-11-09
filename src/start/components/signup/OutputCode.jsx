import { useState, useContext } from "react";
import { ProcessStateContext } from "@/start/context/ProcessStateContext";

export default function OutputCode() {
    const { processState, setProcessState} = useContext(ProcessStateContext);
    return(
        <div>ㅎㅇ</div>
    )
};