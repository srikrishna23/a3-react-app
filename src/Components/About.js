import {React,useState} from 'react'
import Navbar from './Navbar'

export default function About(props) {
    
    const [btnText,setBtnText] = useState("Enable Dark")
    const [btnColor,setBtnColor] = useState()
    const [myStyle,setmyStyle] = useState({
        color: 'black',
        backgroundColor : 'lavender',
        borderRadius : '12px',
        border : '2px solid purple'
    })
    const kitty1 = {
        color: 'white',
            backgroundColor : '#0174BE',
            borderRadius : '12px',
            border : '2px dotted lavender',
    }
    const kitty2 = {
        color: 'black',
        backgroundColor : 'lavender',
        borderRadius : '12px',
        border : '2px solid purple',
    }
    // const toggleTheme = ()=>{
    //     if(props.mode==="dark"){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor : '#1e2b58',
    //             borderRadius : '12px',
    //             border : '2px dotted lavender'
    //         });
    //         setBtnColor("info");
    //         setBtnText("Enable Light");
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor : 'lavender',
    //             borderRadius : '12px',
    //             border : '2px solid purple'
    //         });
    //         setBtnColor("primary");
    //         setBtnText("Enable Dark");
    //     }
    // }
  return (
    
    <div className='container' style={(props.mode==='dark')?kitty1:kitty2}>
        <h3 className={`mx-1 my-2 text-${(props.mode==='dark')?'light':'dark'}`} >About</h3>
        <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={(props.mode==='dark')?kitty2:kitty1}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={(props.mode==='dark')?kitty2:kitty1}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={(props.mode==='dark')?kitty2:kitty1}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <button type="button" className={`btn btn-${btnColor} my-5 mx-1`} onClick={toggleTheme}>{btnText}</button> */}

    </div>
  )
}
