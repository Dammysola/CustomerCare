import React, { useEffect, useState } from 'react'
import Style from '../mainLayout/MainLayout.module.css'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'
import Performance_Details from '../pages/performance/performance_details/Performance_Details'
import ForgotPassword from "../popUps/forgotPassword/ForgotPassword"
import Confirm_Resolution from "../popUps/resolution/Confirm_Resolution"
import Successful_Resolution from "../popUps/resolution/successful_resolution/Successful_Resolution"
import { PopupContextHook } from '../PopupContext'
import Escalate_Query from '../popUps/escalateQuery/Escalate_Query'
import Successful_escalation from "../popUps/escalateQuery/Successful_escalation"
import Loading from '../popUps/loading/Loading'
import Error from '../popUps/error/Error'





const MainLayout = () => {

  const location = useLocation();
  
  const showNavbar = location.pathname !== "/" && location.pathname !== "/changePassword";

  const {filterPopup, passwordPopup, confirmResolution, successResolution,
    errorPopup, confirmEscalation, successEscalation, loadingPopup} = PopupContextHook()


  return (
    
    <div id={Style.wrapper}>
      {/* {showNavbar && <CustomerCaSignIn/>} */}

      {filterPopup && <Performance_Details/>}

      {passwordPopup && <ForgotPassword/>}

      {showNavbar && <NavBar/>}

      {confirmResolution && <Confirm_Resolution/>}
      
      {successResolution && <Successful_Resolution/>}

      {confirmEscalation && <Escalate_Query/>}

      {successEscalation && <Successful_escalation/>}

      {loadingPopup && <Loading/>}

      {errorPopup && <Error/>}
      <div><Outlet /></div >
    </div>
  )
}

export default MainLayout