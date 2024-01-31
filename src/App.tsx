import React, { useState } from "react"

function App() {
  const [input, setInput] = useState<string>("")
  const [result, setResult] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value)
  }

  const checkPalindrome = () => {
    let reversedWord: string = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversedWord += input[i];
    }
    if (input === "") {
      setResult("Please enter a word")
    }
    else if (reversedWord.toLowerCase() === input.toLowerCase()) {
      setResult(`${input} is a palindrome`)
    }
    else {
      setResult(`${input} is not a palindrome`)
    }
  }

  return (
    <>
      <h1>Palindrome checker app (React/TS)</h1>
      <p>Please type in a word and check if it's a palindrome</p>
      <ol>
        <li>Type a word in the input field below.</li>
        <li>Click the "Check Palindrome" button to determine if the word is a palindrome.</li>
        <li>The comparison is case-insensitive.</li>
      </ol>
      <input type="text" onChange={handleChange} placeholder={"Type here..."} />
      <button onClick={checkPalindrome}>Check palindrome</button>
      {result === null ? null :
        <p>
          <strong>Result:</strong> {result}
        </p>}
    </>
  )
}

export default App
