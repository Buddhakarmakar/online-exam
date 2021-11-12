
const Display =(question) => {
    // const question=question;
    console.log(question)
    return (
        <ul key={question.id} >
            <h2><li>({question.id})</li></h2>
            <h3><li>{question.question}</li></h3>
            <div className="radio">
                    {question.options.map(option => {
                                return (
                                <div key={option.id}>
                                    <input type="radio" 
                                            name={question.id} 
                                            value={option.id} 
                                            // checked={option.isSelected}
                                            />
                                    <label>{option.option}</label>
                                </div>
                                )
                            })}
            </div>
        </ul>
    )

}

export default Display;