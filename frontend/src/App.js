import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonString } from './utils';
import jwt_decode from "jwt-decode";
import * as UserService from'./services/UserService'
import {useDispatch} from 'react-redux'
import axios from 'axios';

function App() {
    const dispatch = useDispatch();
    useEffect(() =>{
        const {storageData, decoded} = handleDecoded()
        if(decoded?.id){
            handleGetDetailUser(decoded?.id, storageData)
        }
                    
        }
    )},[])
    const handleDecoded = () =>{
        let storageData = localStorage.getItem('access_token')
        let decoded = {}
        if(storageData && isJsonString(storageData)){
            storageData = JSON.parse(storageData)
            decoded = jwt_decode(storageData)
        }
        return{decoded, storageData}

    UserService.axiosJWT.interceptors.request.use(function (config) {
        const { decoded} = handleDecoded()
        const currentTime = new Date()
        if(decoded?.exp < currentTime.getTime()/1000){
            const data = await UserService.refreshToken()
            config.headers['token'] = `Bearer ${data?.access_token}`
        }
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    const handleGetDetailUser = async (id,token) =>{
          const res = await UserService.getDetailsUser(id,token)
          dispatch(updateUser({...res?.data,access_token: token}) )
        }
    return (
        <Router>
            <Routes>
                {routes.map((route) => {
                    const Page = route.page;
                    const Layout = route.isShowHeader ? DefaultComponent : React.Fragment;
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
