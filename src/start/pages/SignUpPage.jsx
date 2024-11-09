import styled from "styled-components";
import { useContext } from "react";
import {ProcessStateContext, ProcessStateProvider} from "@/start/context/ProcessStateContext";
import SelectUserType from "@/start/components/signup/SelectUserType";
import GetInfo from "@/start/components/signup/GetInfo";
import GetBirthday from "@/start/components/signup/GetBirthday";
import GetAddress from "@/start/components/signup/GetAddress";
import GetCategory from "@/start/components/signup/GetCategory";
import GetExtraCategory from "@/start/components/signup//GetExtraCategory";
import InputCode from "@/start/components/signup/InputCode";
import OutputCode from "@/start/components/signup/OutputCode";

export default function SignUpPage() {
  const { processState } = useContext(ProcessStateContext);

  return (
      <Wrapper>
        {processState === "selectType" && <SelectUserType />}
        {processState === "getInfo" && <GetInfo />}
        {processState === "getBirthday" && <GetBirthday />}
        {processState === "getAddress" && <GetAddress />}
        {processState === "getCategory" && <GetCategory />}
        {processState === "getExtraCategory" && <GetExtraCategory />}
        {processState === "InputCode" && <InputCode />}
        {processState === "OutputCode" && <OutputCode />}
      </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
