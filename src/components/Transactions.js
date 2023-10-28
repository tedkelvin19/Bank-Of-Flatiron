import TransactionItem from "./TransactionItem"


export default function Transactions({transactions}){
    return(
        <table>
            <tr className="thead">
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            {transactions.map(transaction =>{
                return <TransactionItem 
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
                key={transaction.id}
                />
            })}
        </table>
    )
}