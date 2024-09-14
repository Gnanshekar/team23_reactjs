import { createContext, useState } from "react";
import run from "../config/Gemini";

export const context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("")
    const [recenPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPrompt] = useState([])
    const [showResults,setShowResults] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultsData, setResultsData] = useState("")
    


    const onSent = async (prompt) => {
        setResultsData("");
        setLoading(true);
        setShowResults(true)
        setRecentPrompt(input)
        const response = await run(input)
        setResultsData(response)
        setLoading(false)
        setInput("")
    }

    // onSent("what is reactjs")

    const contextValue = {
        input,setInput,
        recenPrompt,setRecentPrompt,
        prevPrompt,setPrevPrompt,
        showResults,setShowResults,
        loading,setLoading,
        resultsData, setResultsData,
        onSent
    }

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;