import { createContext, useContext, useState } from "react"

export const myContext = createContext()

export const PopupContextHook = () => useContext(myContext)




const PopupContext = ({ children }) => {

  const [resolutionState, setResolutionState] = useState({
    query: [],
    email: '',
    ticket_id: '',
    message: '',
  })

  const updateResolutionState = (data) => {
    setResolutionState(data)
  }




  const [filterPopup, setFilterPopup] = useState(false)
  const [passwordPopup, setPasswordPopup] = useState(false)
  const [confirmResolution, setConfirmResolution] = useState(false)
  const [successResolution, setSucessResolution] = useState(false)
  const [confirmEscalation, setConfirmEscalation] = useState(false)
  const [successEscalation, setSucessEscalation] = useState(false)
  const [signInSuccess, setSignInSuccess] = useState(false);
  const [loadingPopup, setLoadingPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorText, setErrorText] = useState("");





  const updateFilterPopup = (data) => {
    setFilterPopup(data)
  }

  const updatePasswordPopup = (data) => {
    setPasswordPopup(data)
  }

  const updateConfirmResolutionPopup = (data) => {
    setConfirmResolution(data)
  }
  const updateSuccessResolutionPopup = (data) => {
    setSucessResolution(data)
  }
  const updateSuccessEscalationPopup = (data) => {
    setSucessEscalation(data)
  }
  const updateConfirmEscalationPopup = (data) => {
    setConfirmEscalation(data)
  }
  const updateLoadingPopup = (data) => {
    setLoadingPopup(data)
  }
  const updateErrorPopup = (data) => {
    setErrorPopup(data)
  }
  const updateErrorText = (data) => {
    setErrorText(data)
  }

  const updateSignInSuccess = (data) =>{
    setSignInSuccess(data)
  }

  return (
    <myContext.Provider value={{
      filterPopup,
      updateFilterPopup,
      passwordPopup,
      updatePasswordPopup,
      confirmResolution,
      updateConfirmResolutionPopup,
      successResolution,
      updateSuccessResolutionPopup,
      confirmEscalation,
      updateConfirmEscalationPopup,
      successEscalation,
      updateSuccessEscalationPopup,
      loadingPopup,
      updateLoadingPopup,
      resolutionState,
      updateResolutionState,
      errorPopup,
      updateErrorPopup,
      errorText,
      updateErrorText,
      updateSignInSuccess,
      signInSuccess

    }}>
      {children}
    </myContext.Provider>
  )
}

export default PopupContext