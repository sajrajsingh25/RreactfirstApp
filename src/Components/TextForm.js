import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("uppercase was clicked")
        
        let newText = text.toUpperCase();
        setText(newText)
    }

     const handleOnChange = (event  )=> {
         console.log("On change")
         setText(event.target.value)
        }

    const handleOnChange2 = (event) =>{
      setTextcolor(event.target.value)
    }

    const handlelowClick=(event)=> {
        let lowtext = text.toLowerCase();
        setText(lowtext)
    }


    
 
    const  handleredClick = (event)=>{         
      setTextcolor("")
       }
    
   const [textColor,setTextcolor] =useState("");
    const [text, setText] = useState("");
    
  return (
    <>
    <div>
      <form>
    <div className="container my-2" style={{color: props.mode ==='dark'?'white':'black'}}>
      <div className='container ' >  <img src="/public/images/Sajraj_Singh_pic.jpg" alt="Thumbnail" className="img-thumbnail  my-5" style={{ width: "100px" }}/>
      </div>
    <h1>{props.heading} </h1>
    <label htmlFor="MyBox" className="form-label" >Any Text Value</label>
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgraoundColor: props.mode ==='dark'?'grey':'white'}} id="MyBox"  rows="8"></textarea>
  </div>
</form>
<button className='btn btn-primary mx-1' onClick={handleUpClick} >Convert to UpperCase</button>

<button className='btn btn-primary' onClick={handlelowClick}>Convert to LowerCase</button>
    </div>

    <div className="container" my-2 style={{color: props.mode ==='dark'?'white':'black'}}  >
    <h1>Your text summary</h1> 
    <p>World:= {text.split(" ").length} Charchters:= {text.length}</p>
    <p> {0.008* text.split(" ").length} minutes to read</p>

    </div>

{/* <div  className="container my-5  mx-10" >
    <h2>new text</h2>
    <label htmlFor="mytext" className="form-label" >text field</label>
    <textarea className="form-control text-bg-light p-3"  value={textColor} onChange={handleOnChange2} id="mytext"  rows="5"   ></textarea>
    <button className='btn btn-danger mx-1' onClick={handleredClick} >click to covertin Red </button>
</div> */}

    </>
  )
}
