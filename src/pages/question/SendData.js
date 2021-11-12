
import React from 'react'
import CheckAnswer from './CheckAnswer';

export default function SendData(data) {
    // console.log(data)
    //to save dta to local pc
    // const handleSaveToPC = (jsonData,filename) => {
    //     const fileData = JSON.stringify(jsonData);
    //     const blob = new Blob([fileData], {type: "text/plain"});
    //     const url = URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.download = `${filename}.js`;
    //     link.href = url;
    //     link.click();
    //   }

      
    return (
        <div>
            <button className="page-answer-script">
                Show Answer  Script</button>
            <h1>
                {
                   <CheckAnswer answer_data={data}/>
                }
            </h1>
                {/* {handleSaveToPC(data,"mydata")} */}
            {/* {
                data.forEach(question=>{
                    <h1 key={question.id}>
                            {question.question}
                    </h1>
                })
            } */}
        </div>
    )
}
