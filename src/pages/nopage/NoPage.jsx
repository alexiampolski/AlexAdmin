import './nopage.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export const NoPage = () => {
  return (
    <div className='nopage'>
      <Sidebar />
        <div className="nopageContainer">
          <Navbar />
            <div className='others'>
              <div className='other1'>
                404 Page Not found
              </div>
            </div>
        </div>
     </div>
  )
}