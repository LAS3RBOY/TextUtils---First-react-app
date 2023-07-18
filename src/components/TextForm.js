import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUPclick = () => {
        // console.log("Upper Case was called" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", 'success')
    }
    const handleLoclick = () => {
        // console.log("Lower Case was called" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success")
    }
    const CapitalizeFirstLetter = () => {
        const newText = text.split(" ");
        const capitalizedWords = newText.map((word) => {
            const firstLetter = typeof word?.[0] === 'string' ? word[0].toUpperCase() : '';
            const restOfWord = word.slice(1);
            return `${firstLetter}${restOfWord}`;
        });
        setText(capitalizedWords.join(" "))
        props.showAlert("Each starting Alphabet has been Capitalized", "success")
    };

    const handleONchange = (event) => {
        // console.log("On Change")
        setText(event.target.value) // changes the value through which we can type and change the input
    }
    const [text, setText] = useState("");
    return (
        <>

            <div className='container'>
                <h1 className="text-center">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleONchange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUPclick}>UpperCase</button>
                <button className="btn btn-primary my-2" onClick={handleLoclick}>LowerCase</button>
                <button className="btn btn-primary my-4" onClick={CapitalizeFirstLetter}>First Letter Capitalization</button>
            </div>
            <div className="container my-4">
                <h1>
                    Your Text Summary
                </h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read Time</p>
            </div>
        </>
    )
}
// text = placeholder
//onchange = to change the input of the text area


// const CapitalizeFirstLetter = () => {
//     const newText = text.split(" ");
//     const capitalizedWords = newText.map((word) => {
//       const firstLetter = word[0].toUpperCase();
//       const restOfWord = word.slice(1);
//       return `${firstLetter}${restOfWord}`;
//     });
//     return capitalizedWords.join(" ");
//   };