import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const InputCity = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputText.title.trim()) {
      var splitStr = inputText.title.split(',')
      if (splitStr.length !== 2) {
        alert("Bad input.. Enter city and state separated by comma!")
      } else if (splitStr[1].length !== 2) {
        alert("Bad input! Please enter state acronym (two characters)!")
      } else {
        props.addCityProps(splitStr[0].trim(), splitStr[1].trim())
        setInputText({
          title: "",
        })
      }
    } else {
      alert("Please write item")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add city and state (separated by comma)..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
      	<FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px"}}
      	/>
      </button>
    </form>
  )
}

export default InputCity