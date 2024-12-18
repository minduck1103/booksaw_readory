import { Badge, Button, Col, Popover } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount, WrapperTextHeaderSmall, WrapperContentPopup} from './style';
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'

const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const handleNavigateLogin=()=>{
        navigate('/sign-in')
    }
    const handleLogout = async () => {
        await UserService.logoutUser()
    }
    const content =(
        <div>
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
            <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
        </div>
    )
  return (
    <div style={{width:'100%', background:'rgb(26,148,255)'}}>
        <WrapperHeader>
            <Col span={5}>
                <WrapperTextHeader>Readory</WrapperTextHeader>
            </Col>
            <Col span={13}>
                <ButtonInputSearch
                    size ="large"
                    bordered ={true}
                    textButton ="Tìm kiếm"
                    placeholder ="Tìm kiếm sản phẩm"
                />
            </Col>
            <Col span={6} style={{display:'flex', gap: '54px', alignItems:'center'}}>
                <WrapperHeaderAccount>
                <UserOutlined style = {{fontSize: '30px'}}/>
                {user?.name ? (
                    <>
                        <Popover content ={content} trigger = "click">
                            <div style={{cursor:'pointer'}}>{user.name}</div>
                        </Popover>
                    </>
                ) : (
                    <div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                    <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                    <div>
                        <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                    </div>
                </div>
                )}
                </WrapperHeaderAccount>
                <div>
                    <Badge count={4} size="small">
                        <ShoppingCartOutlined style = {{fontSize: '30px' , color: '#fff'}} />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
        </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
