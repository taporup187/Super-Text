import React, { useState } from 'react'


export default function Textaria(props) {
    const [text, setText] = useState('write here');
    // setText ("on");
    const uptext = () => {
        // console.log("btn was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowtext = () => {
        // console.log("btn was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clertext = () => {
        // console.log("btn was clicked")
        let newText = "";
        setText(newText)
    }
    const copytext = () => {
        let text = document.getElementById("my-box")
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleOnchange = (event) => {
        //console.log("handleOnchange")
        setText(event.target.value)
    }
    return (
        <>

            <div className='container my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <form className='mb-3'>
                    <h1>{props.heading}</h1>
                    <div className="form-group">

                        <textarea className="form-control" rows="6" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="my-box"></textarea>
                    </div>
                </form>
                <div className="btn btn-primary m-2" title="convert to uppercase" onClick={uptext}>AA</div>
                <div className="btn btn-success m-2" title="convert to lowercase" onClick={lowtext}>aa</div>
                <div className="btn btn-primary m-2" title="copy to clipbord" onClick={copytext}><i className="fa-regular fa-copy"></i></div>
                <div className="btn btn-outline-danger  m-2" title="clear all" onClick={clertext}><i className="fa-solid fa-ban"></i></div>


                <div className="row my-3">
                    <p>No. of words: <strong>{text.split(" ").length}</strong> || No. of character:<strong>{text.length}</strong></p>
                </div>
            </div>
        </>

    )
}
