import styled from "styled-components";
import PersonalAlarm from "@/supervisor/alarm/components/PersonalAlarm";

export default function AlarmPage() {
  const todayAlarmList = [
    ("고희연", 75),
    ("김채은", 0),
    ("이혜빈", 32.5),
    ("차예원", 50),
  ];
  return (
    <Wrapper>
      <AlarmList>
        <PersonalAlarm></PersonalAlarm>
      </AlarmList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
  max-height: 80vh;
  padding-right: 15px;
  box-sizing: border-box;
  width: 280px;
`;
