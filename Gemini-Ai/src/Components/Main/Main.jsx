import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";

const Main = () => {
  const {
    input,
    setInput,
    recenPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResults,
    setShowResults,
    loading,
    setLoading,
    resultsData,
    setResultsData,
    onSent,
  } = useContext(context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello dev</span>
              </p>
              <p>How can i heip you</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful place to upcomig road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>BrainStorm team bounding activites for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Impore the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="results-tittle">
              <img src={assets.user_icon} alt="" />
              <p>{recenPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{ __html: resultsData }}></p>
              }
              
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter the promt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display incorrect information based on input key words
            you provide please double check input before searching information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
