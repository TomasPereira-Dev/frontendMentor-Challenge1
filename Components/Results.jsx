import "./resultsStyles.css"

const Results = ()=>{
    return(
        <div className="main-container">
            <div className="results-and-summary-container">
                <div className="result-container">
                    <p className="result-title"><strong>Your Result</strong></p>
                    <div className="total-score-container">
                        <p><strong>76</strong> of 100</p>
                    </div>
                    <div className="result-text">
                        <h2><strong>Great</strong></h2>
                        <p className="result-text-message">You scored higher than 65% of the people who have taken these tests.</p>
                    </div>
                </div>
                <div className="summary-container">
                    <p><strong>Summary</strong></p>
                    <div className="stats-container">
                        <div className="stat">
                            <div className="stat-category reaction-category">
                                <img src="src/assets/icon-reaction.svg"></img>
                                <p>Reaction</p>
                            </div>
                            <div className="stat-score">
                                <p><strong>80</strong> / 100</p>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-category memory-category">
                            <img src="src/assets/icon-memory.svg"></img>
                                <p>Memory</p>
                            </div>
                            <div className="stat-score">
                                <p><strong>92</strong> / 100</p>
                            </div>  
                        </div>
                        <div className="stat">
                            <div className="stat-category verbal-category">
                            <img src="src/assets/icon-verbal.svg"></img>
                                <p>Verbal</p>
                            </div>
                            <div className="stat-score">
                               <p><strong>60</strong> / 100</p> 
                            </div>  
                        </div>
                        <div className="stat">
                            <div className="stat-category visual-category">
                            <img src="src/assets/icon-visual.svg"></img>
                                <p>Visual</p>
                            </div>
                            <div className="stat-score">
                                <p><strong>72</strong> / 100</p> 
                            </div> 
                        </div>
                        <button>Continue</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Results