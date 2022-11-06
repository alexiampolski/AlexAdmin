import './home.scss'
import  Sidebar from '../../components/sidebar/Sidebar'
import  Navbar  from '../../components/navbar/Navbar'
import styled from 'styled-components';
import {mobile} from '../../responsive'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const Container = styled.div`
  ${mobile({ })}
  
`
const percentage = 66;
export const Home = () => {
  return (
    <Container>
      <div className='home'>
          <Sidebar/>
          <div className="homeContainer">
            <Navbar/>
            <div className='others'>
              <div className='circulatbar'>
                  <CircularProgressbarWithChildren
                      value={75}
                      strokeWidth={6}
                      background
                      backgroundPadding={2}
                      //counterClockwise
                      styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        pathColor: "#f00",
                        trailColor: "gold" //transparent"
                      })}
                  >
                    <div style={{ width: "87%" }}>
                        <CircularProgressbar 
                                    value={percentage} 
                                    strokeWidth={5}
                                    //text={`${percentage}%`}
                                    styles={buildStyles({
                                      textColor: "red",
                                      pathColor: "turquoise",
                                      trailColor: "gold",
                                      textSize: "14px",       

                                      //rotation: 0.5 + (1 - percentage / 100) / 2
                                      //pathTransitionDuration: 0.15,
                                      //trailColor: "transparent",
                                      //strokeLinecap: "butt"
                                    })}              
                          />
                        </div>

                    </CircularProgressbarWithChildren>
                    <div className="legend">
                        <div style={{ fontSize: 12, 
                                      margin: 5, 
                                      color:'red'}}>
                            <strong color='red'>66%</strong>
                        </div>
                        <div style={{ fontSize: 12, margin: 5, color:'turquoise'}}>
                            <strong color='red'>50%</strong>
                        </div>
                      </div>
              </div> 

              <div className='circulatbar'  >
                         <CircularProgressbar 
                                    value={percentage} 
                                    strokeWidth={50}
                                    //text={`${percentage}%`}
                                    styles={buildStyles({
                                      textColor: "red",
                                      pathColor: "turquoise",
                                      trailColor: "gold",
                                     // textSize: "14px",       ..
                                      //rotation: 0.5 + (1 - percentage / 100) / 2
                                      //pathTransitionDuration: 0.15,
                                      //trailColor: "transparent",
                                      strokeLinecap: "butt"
                                    })}              
                          />

                    <div className="legend">
                        <div style={{ fontSize: 10, 
                                        margin: 5, 
                                        color:'red'}}>
                              <strong color='red'>66%</strong>
                          </div>
                          <div style={{ fontSize: 10, margin: 5, color:'turquoise'}}>
                              <strong color='red'>50%</strong>
                          </div>
                     </div>
              </div> 

            </div>
         
          </div>
      </div>
    </Container>
  )
}
