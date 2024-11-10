import styled from "styled-components";

const UnderlinedInput = ({ value = '', onChange, placeholder}) => {
    const safeValue = value || ''; // value가 null일 경우 빈 문자열로 대체
    return (
        <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasValue={safeValue.length > 0} // value가 있을 때만 true
        />
    )
};

const Input = styled.input`
    width: 90%;
    height: 60px;
    font-size: 24px;
    color: #5B5B5B;
    border: none;
    border-bottom: 1.2px solid #5B5B5B;
    text-align: center;
    font-weight: ${({ hasValue }) => (hasValue ? 'bold' : 'normal')}; // 입력값이 있을 때만 bold
`;

export default UnderlinedInput;