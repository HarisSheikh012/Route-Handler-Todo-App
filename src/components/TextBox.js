import React,{useState} from "react";

function TextBox(props) {
    const [text,settext] = useState("This Is Your First Paragraph Here .... ")
    function onchangehandle(event)
    {
        settext(event.target.value);
    }
    function ConvertUpCase()
    {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={onchangehandle} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={ConvertUpCase}>Convert to Upper Case</button>
    </div>
  );
}
export default TextBox;
