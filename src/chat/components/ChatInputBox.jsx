import styled from "styled-components";
import {Send} from "lucide-react";

export default function ChatInputBox(message, setMessage, onSendClicked) {
    return (
        <Wrapper>
        <input 
        placeholder="답장을 입력해주세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                onSendClicked();
            }
        }}
        />
        <Send/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    background-color: #ECECEC;
`;