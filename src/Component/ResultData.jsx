import React from 'react'

const ResultData = ({ results, addedBookList, onEdit}) => {
    
  return (
    <div>
        {
            results.map((book)=>(
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <img src={book.img} alt="i" />
                    <button onClick={()=> addedBookList(book)}>Add Book</button>
                    <button onClick={()=> onEdit(book)}>Edit Book</button>
                </div>
            )
            )
        };
    </div>
  )
}

export default ResultData