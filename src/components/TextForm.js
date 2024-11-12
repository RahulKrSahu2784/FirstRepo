import React, {useState} from 'react'



export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
       // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
       // console.log("Uppercase was clicked:" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked:" + text);
         let newText= text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to LowerCase", "success");
     }

     const handleClearClick = () => {
         let newText=('');
         setText(newText)
         props.showAlert("Text Cleared", "success");
     }


    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success");
    }
   
    //setText("New Text");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text?.split(" ").length} Minutes Read </p>
            <h3 >Preview</h3>
            <h6>{text.length>0?text:"Enter Something in the Textbox Above to Preview it here"}</h6>
        </div>
        </>
    )
}
