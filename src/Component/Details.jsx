import React from 'react'
import css from "./index.module.css";


const Details = ({showDetails, books}) => {
   
  return (
    <div className={css.card}>
        <h2>Title: {books.title}</h2>
        <h2>Subtitle: {books.subtitle}</h2>
        <h3>Author: {books.author}</h3>
        <p>Published: {books.published}</p>
        <p>Website: {books.website}</p>
        <p>Pages: {books.pages}</p>
    </div>
  )
}

export default Details