import React, { useState,useEffect } from 'react';
import InputForm from '../../components/InputForm/InputForm';
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style';
import imageLogo from '../../assets/images/lolo_tiki.png'
import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import * as message from '../../components/MessageComponent/MessageComponent'


const SignUpPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const handleOnchangeEmail = (value)=>{
    setEmail(value)
  }
  const handleOnchangePassword = (value)=>{
    setPassword(value)
  }
  const handleOnchangeConfirmPassword = (value)=>{
    setConfirmPassword(value)
  }


  const handleNavigateSignIn = () =>{
  navigate('/sign-in')
}

const mutation = useMutationHooks(
    data => UserService.signUpUser(data)
  )
  const {data, isLoading, isSuccess, isError} = mutation
  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleNavigateSignIn();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);
  
const handleSignUp =() =>{
  mutation.mutate(email,password,confirmPassword)
}
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center',background:'rgba(0,0,0,0.53)', height:'100vh'}}>
      <div style={{display:'flex',width:'800px', height:'445px', borderRadius:'6px', background:'#fff'}}>
      <WrapperContainerLeft>
        <div style={{ marginLeft: '30px',marginBottom: '20px', textAlign: 'left' }}>
          <h1 style={{ margin: '0' }}>Xin chào,</h1>
          <p style={{ margin: '0' }}>Đăng nhập hoặc Tạo tài khoản</p>
        </div>
        <div style={{ marginLeft: '-32px', marginRight: 'auto', width: '100%' }}>
          <InputForm style={{marginBottom:'10px'}} placeholder="nguyenvana@gmail.com" value={email} onChange={handleOnchangeEmail}/>
          <div style={{ position: 'relative' }}>
            <span 
              onClick={() => setIsShowPassword(!isShowPassword)} 
              style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
              {
                isShowPassword ? 
                  <EyeFilled /> : 
                  <EyeInvisibleFilled />
              }
            </span>
            <InputForm placeholder="password" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
          </div>

          <div style={{ position: 'relative' }}>
            <span 
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)} 
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}>
              {
                isShowConfirmPassword ? (
                  <EyeFilled />) :( 
                  <EyeInvisibleFilled />)
              }
            </span>
            <InputForm 
              placeholder="confirm password" 
              type={isShowConfirmPassword ? "text" : "password"} 
              value={confirmPassword} onChange={handleOnchangeConfirmPassword}// Đúng
            />
          </div>
          {data?.status === 'ERR' && <span style={{color:'red'}}>{data?.message}</span>}
          <LoadingComponent isLoading={isLoading}>
            <ButtonComponent
                  disabled ={!email.length || !password.length || !confirmPassword.length}
                  onClick={handleSignUp}
                  size={40}
                  styleButton={{
                      background: 'rgb(255, 57, 69)',
                      height: '48px',
                      width: '100%',
                      border: 'none',
                      borderRadius: '4px',
                      margin:'26px 0 10px'
                  }}
                  textButton={'Đăng ký'}
                  styleTextButton={{ color: '#fff', fontSize:'15px', fontWeight:'700'}}
              ></ButtonComponent>
          </LoadingComponent>
        </div>
        <p>
          Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn} style={{cursor:'pointer'}}>Đăng nhập ngay</WrapperTextLight>
        </p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={imageLogo} preview={false} alt="image-logo" height='203px' width='203px'/>
        <h4>Mua sắm tại Readory</h4>
        <h5>Siêu ưu đãi mỗi ngày</h5>
      </WrapperContainerRight>
      </div>
    </div>
  );
}

export default SignUpPage;