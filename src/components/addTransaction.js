import {useState} from "react"
export default function Newtransaction({onSubmission}){
    const [formData,setFormData]=useState({
        date:"",
        description:"",
        category:"",
        amount:0,
        description:"",
    })
    function handleInputChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    function handleInputSubmit(e){
        e.preventDefault()
        onSubmission(formData)
        setFormData({
            date:"",
            description:"",
            category:"",
            amount:0,
            description:"",
        })
    }
    return(
        <form className="add-form" onChange={handleInputChange} onSubmit={handleInputSubmit}>
            <div className="new-inputs">
                Date:<input type="date" name="date" value={formData.date}/>
                <input type="text" placeholder="Enter Description..." name="description" value={formData.description}/>
                <input type="text" placeholder="Enter Category..." name="category" value={formData.category}/>
                <input type="number" placeholder="Enter Amount..." name="amount" value={formData.amount}/>
            </div>
            <div>
                <button id="form-btn">Add Transaction</button>
            </div>
        </form>
    )
}