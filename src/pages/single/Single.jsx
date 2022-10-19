import './single.scss'
import  Sidebar from '../../components/sidebar/Sidebar'
import  Navbar  from '../../components/navbar/Navbar'

export const Single = () => {
  return (

    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
      </div>
      
    </div>
  )
}
