import "./resultsStyles.css"

const Results = ()=>{
    return(
        <div className="main-container">
            <div className="results-and-summary-container">
                <div className="results-container">
                    <p>Your Result</p>
                    <div className="total-score-container">
                        <p>76</p>
                        <p>of 100</p>
                    </div>
                    <p>Great</p>
                    <p>You scored higher than 65% of the people who have taken these tests.</p>
                </div>
                <div className="summary-container">
                    <p>Summary</p>
                    <div className="stats-container">
                        <div className="stat">
                            <div className="stat-category">
                                <p>Reaction</p>
                            </div>
                            <div className="stat-score">
                                <p>80/100</p>
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-category">
                                <p>Memory</p>
                            </div>
                            <div className="stat-score">
                                <p>92/100</p>
                            </div>  
                        </div>
                        <div className="stat">
                            <div className="stat-category">
                                <p>Verbal</p>
                            </div>
                            <div className="stat-score">
                               <p>60/100</p> 
                            </div>  
                        </div>
                        <div className="stat">
                            <div className="stat-category">
                                <p>Visual</p>
                            </div>
                            <div className="stat-score">
                                <p>72/100</p> 
                            </div> 
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Results