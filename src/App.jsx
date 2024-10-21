import { RouterProvider } from 'react-router-dom'
import router from './router'
import Successful_PasswordChange from './popUps/forgotPassword/changePassword/success_passwordChange/Successful_PasswordChange'
import Staff_Card from './components/staff_card/Staff_Card'


function App() {

  return (
    <>
      <RouterProvider router={router} />
      {/* <Staff_Card /> */}
    </>
  )
}

export default App
