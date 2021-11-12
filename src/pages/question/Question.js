
import data from './data'
import React, { useEffect, useState } from 'react';
import Paginate from './Paginate';
// import ReactPaginate from 'react-paginate';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import "./question.css"
import { isSubmitted } from './data';
import SubmitButton from './SubmitButton';
import MyTimer from './MyTimer';
// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    

function Question({ itemsPerPage }) {
    console.log(isSubmitted.isSubmitted)
    let savedAnswer=0;
   let visitedQuestion=0;
    
    const questions= useState(data);
    const [pageNumber, setPageNumber] = useState(0);
 
    const [flag, setFlag] = useState(false);


//   const [submitButtonClicked,setSubmitButtonClicked]=useState(false)
    
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber);
        setFlag(true);
        questions[pageNumber].visited = true;
       
        // setVisitedQuestion(...visitedQuestion + pageNumber)
    }
    // const setVisited = (id) => {
    //     questions[id].visited = true;
    // }
    if(!isSubmitted.isSubmitted){
        for (let i=0;i<questions.length;i++){
        
                if( data[i].visited)
                {
                    visitedQuestion ++
                }
                if(data[i].answered){
                    savedAnswer ++
                }
            
        }
    }

    // const remainingTime=()=>{
    //     return new Date().toLocaleTimeString()
    // }

    const totalQues=questions.length;
    const handleChange=(option_id,question)=>{
        question.options.map(p => {
                if(p.id === option_id){
                    p.isSelected = true;
                    setFlag(!flag);
                }
                else{
                    p.isSelected = false;
                }
        })   
        
        question.answered=true;       
     
}
        const questionPaper=data;

    useEffect(() => {
        console.log("Cahnge detected")
        console.log(flag)
       
    
    }, [questionPaper,flag]);


   
    // const [selectedAnswers, setSelectedAnswers] = useState();

    const questionsPerPage = 1;
    const pagesVisited=pageNumber * questionsPerPage;
     

    const displayQuestions=questionPaper
    .slice(pagesVisited, pagesVisited + questionsPerPage) 
    .map(question => {
        return (
        <ul key={question.id}>
            <h2><li>({question.id}){question.question}</li></h2>
            <div className={isSubmitted.isSubmitted?"radio radio-disabled":"radio"}>
                    {question.options.map(option => {
                                return (
                                <div key={option.id} className="option">
                                    <label className="form-control">
                                    <input type="radio"  
                                            className={isSubmitted.isSubmitted?"radio-disabled":null}
                                            name={question.id} 
                                            value={option.id} 
                                            onChange={()=>{
                                                if(!isSubmitted.isSubmitted){ 
                                                    handleChange(option.id,question)
                                                }}}
                                            checked={option.isSelected}
                                           
                                            />
                                    {option.option}</label>
                                </div>
                                )
                            })}
            </div>
        </ul>
        )})
    
        const [timeLeft,setTimeLeft]=useState(isSubmitted.timeLeft)
        const submitButtonFunction=()=>{
            setTimeLeft(0)
        }
        const time = new Date();
        time.setSeconds(time.getSeconds() + timeLeft); // 5 sec timer

  return (
    <>
        <div className="container"> 
            {displayQuestions}
            <div>
              <MyTimer expiryTimestamp={time} />
            </div>
        </div>

  
        <div className="container"> 
            <Paginate   questions={questionPaper} 
                        itemsPerPage={questionsPerPage} 
                        paginate={paginate}
                        />
        </div>

        <div className=" bottom">
            <PreviousButton 
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                paginate={paginate}

            />
            <NextButton 
                pageNumber={pageNumber}
                totalQues={totalQues}
                paginate={paginate}
            />
    </div>
       
    <div className=" bottom">
            <h2>
                Saved Answer : {savedAnswer}
                <br/>
                Visited :{visitedQuestion }
            </h2>
        </div>
        <div className=" bottom">
        <SubmitButton data={questions} submitButtonFunction={submitButtonFunction}/>
        </div>
        
    </>
  );
}

export default Question;