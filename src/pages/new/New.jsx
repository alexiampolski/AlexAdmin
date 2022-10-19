import './new.scss'
import  Sidebar from '../../components/sidebar/Sidebar'
import  Navbar  from '../../components/navbar/Navbar'

export const New = () => {
  return (

    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        NEW
      </div>
      
    </div>
  )
}
