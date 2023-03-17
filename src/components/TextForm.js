import React, {useState} from 'react'

export default function TextForm(props){
    const [text, setText] = useState('');

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = () => {
      setText('');
      props.showAlert("Text cleared", "success");
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert("Extra Spaces Removed", "success");
    };

    const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
    };

    const handleSentClick = () =>{
        let p1 = text.substring(0,1).toUpperCase();
        let p2 = text.substring(1,text.length).toLowerCase();
        setText(p1 + p2);
        props.showAlert("Converted to Sentence Case", "success");

    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
        
    }

    return (
      <>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="10"
              placeholder="Enter Text Here"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
            UPPERCASE
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleSentClick}
          >
            Sentence Case
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy
          </button>
          <button
            className="btn btn-danger mx-2 my-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
        <div
          className="container my-3 "
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes read
          </p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox to preview"}
          </p>
        </div>
      </>
    );
}