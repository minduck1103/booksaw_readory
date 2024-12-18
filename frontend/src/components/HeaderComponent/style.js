import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap:nowrap
`
export const WrapperTextHeader = styled.div`
    font-size:35px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-family: 'Lobster', cursive;

`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    font-size: 13px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color:#fff;
    white-space: nowrap;
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover{
        background:#ccc;
        color: #fff;
    }
`