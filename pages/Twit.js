import react from 'react'

const Tweet =({ text,author,date}) =>{ 
    return <div>
    <h3> {text.toUpperCase()}</h3>
    <h6>{author}</h6>
    <h6>{date}</h6>
 </div>
}
 
export default Tweet