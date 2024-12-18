import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style';
import {StarFilled} from '@ant-design/icons'
import logo from '../../assets/images/logo_card.jpg'

const CardComponent = () => {
  return (
    <div>
        <WrapperCardStyle
            hoverable
            headStyle={{width: '200px', height:'200px'}}
            styles={{width:200}}
            style={{ width: 240 }}
            bodyStyle={{padding:'10px'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img 
                src={logo} 
                style={{width: '60px', height: '30px', position: 'absolute', top: -1, left: -1,borderTopLeftRadius: '3px'}}
            />
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span style={{marginRight:'4px'}}>
                    <span>4.9 </span><StarFilled style={{fontSize:'12px', color: 'yellow'}}/>
                </span>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{marginRight:'8px'}}>1.000.000 đ</span> 
                <WrapperPriceDiscountText>
                    -20%
                </WrapperPriceDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    </div>
  );
}

export default CardComponent;