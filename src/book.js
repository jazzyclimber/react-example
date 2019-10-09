import React from 'react';

let bookStyle = {
  width: '33%',
  height: 'auto',
  // padding: '20px'
}


export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
     return (
       <section style={bookStyle}>
         <h2>{title}</h2>
         <p>by: {author}</p>
         <p>Pages: {pages} pages</p>
         <p>Free Bookmark Today: {freeBookmark ? 'Yes!' : 'No...' }</p>
       </section>
     )
   }