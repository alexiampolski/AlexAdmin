import './login.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export const Login = () => {
  return (
    <div className='login'>
      <Sidebar />
        <div className="loginContainer">
          <Navbar />
          Login
        </div>
     </div>
  )
}
