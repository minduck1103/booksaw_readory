import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width:200px;
    & img{
    height: 200px;
    width: 200px;
    }
    position: relative;
`

export const StyleNameProduct = styled.div`
    font-weight:400;
    font-size: 12px;
    line-height: 16px;
    color: rbg(56,56,61);
`
export const WrapperReportText = styled.div`
    font-size:11px;
    color: rbg(128,128,137);
    display:flex;
    align-items:center;
    margin: 6px 0 4px;
`
export const WrapperPriceText = styled.div`
    color: rgb(255, 26, 26);
    font-size:16px;
    font-weight:500;
`
export const WrapperPriceDiscountText = styled.span`
    color: rgb(255, 26, 26);
    font-size:11px;
    font-weight:500;
`
export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height:24px;
    color: rgb(120, 120, 120);
`