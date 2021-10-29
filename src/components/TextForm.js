import React, { useState } from "react";



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Upper-Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lower-Case", "success");
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text-box cleared", "danger");
    }

    const alternateCase = (s) => {
        let chars = s.toLowerCase().split("");
        for (let i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        return chars.join("");

    }

    const handleAlter = () => {
        let newText = alternateCase(text);
        setText(newText);
        props.showAlert("Coverted to Alternate-Case", "warning");
    }

    const inverseCase = (s) => {
        let str = '';
        let i = 0;

        while (i < s.length) {
            let ch = s.charAt(i);
            if (ch === ch.toUpperCase()) {
                ch = ch.toLowerCase();
            } else {
                ch = ch.toUpperCase();
            }

            i++;
            str += ch;
        }

        return str;
    }

    const handleInverse = () => {
        let newText = inverseCase(text);
        setText(newText);
        props.showAlert("Coverted to Inverse-Case", "warning");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div style={{ color: props.mode === "light" ? "#032658" : "white" }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === "light" ? "white" : "#032658", color: props.mode === "light" ? "#032658" : "white" }}
                        value={text} id="myBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleAlter}>AlTeRnAtInG CaSe</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleInverse}>iNVERSE cASE</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "#032658" : "white" }} >
                <h3>Text Summary:</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}