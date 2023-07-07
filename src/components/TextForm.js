import React, { useState } from "react";
// import PropTypes from 'prop-types';
export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('Converted to Uppercase','success');
  };
  const handleloClick = () => {
    // console.log("lowerrcase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('Converted to Lowercase','success');
  };

  const handleonchange = (event) => {
    // console.log("no change");
    setText(event.target.value);
  };
  const handleclearclick = () => {
    // console.log("lowerrcase was clicked"+text);
    // let newText = text.toLowerCase();
    setText("");
    props.showalert('Text clear','success');
  };
  const handlecopyclick = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert('Text copied','success');
  };
  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert('Extra spaces remove','success');
  };
  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "light" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handleupClick} >
            convert to uppercase
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handleloClick}>
            convert to lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleclearclick}
          >
            clear
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handlecopyclick}
          >
            copy
          </button>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleextraspaces}
          >
            Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Yours text summary...</h1>
        <p>
          {text.split(" ").length} word and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
