import React from 'react'
import "./question.css"
export default function Paginate({questions, itemsPerPage, paginate,setVisited}) {

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(questions.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    // console.log(questions[0].visited)
   
    return (
        <div>

            <ul className="page-button-contrainer">
                { pageNumbers.map(number => (
                    <li key={number} className="page-item">
                       
                        <button 
                            className={questions[number].visited && questions[number].answered ?
                                        "page-link-answered":questions[number].visited?
                                        "page-link-visited":"page-link"
                                        } 
                                onClick={() =>
                                     paginate(number)
                                     
                                     }> 
                            {number+1}
                        </button>
                        
                    </li>
                ))} 
                
                  
            </ul>
        </div>
    )
}
