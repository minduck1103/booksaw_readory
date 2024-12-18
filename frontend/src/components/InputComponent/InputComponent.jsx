import { Input } from 'antd';
import React from 'react';

const InputComponent = ({size, placeholder,bordered,style,width, ...rests}) => {
  return (
    <div>
        <Input
            size={size}
            placeholder={placeholder} 
            bordered={bordered} 
            style={{ ...style, width}}
            {...rests}
        />
    </div>
  )
}

export default InputComponent;