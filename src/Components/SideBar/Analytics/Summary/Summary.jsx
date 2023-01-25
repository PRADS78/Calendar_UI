import "./Summary.scss";

const Summary = ({stat}) => {
    const summaryClassName=stat.title.toLowerCase().split(" ")

    return ( 
        <div className={`summary-container ${summaryClassName[0]+"-"+summaryClassName[1]}`}>
            <div className="summary-head">
                <img src={stat.icon} alt="summaryIcon" className="summary-icon"/>
                <div className="summary-title">
                    {stat.title}
                </div>
            </div>
            <div className="summary-content">
                {stat.content}
            </div>
        </div>
     );
}
 
export default Summary;