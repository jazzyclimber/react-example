import React, { Component } from 'react';
import propTypes from 'prop-types'
import { Book } from './book'
import { NotHiring } from './notHiring'
import { Hiring } from './hiring'

let wrapStyle = {
     maxWidth: '900px',
     margin: '0 auto'
   }
   let libraryContainerStyle ={
     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap',
     width: '100%',
     height: '100%'
   }

class Library extends Component {

     static defaultProps = {
       books: [
         {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000 }
       ]
     }
     
     state = { 
       open: false,
       freeBookmark: true,
       hiring: false,
       data: [],
       loading: false
     }
   
     componentDidMount() {
       this.setState({loading: true})
       fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
         .then(data => data.json())
         .then(data => this.setState({data, loading: false}))
     }
   
     toggleOpenClosed = () => {
       this.setState( prevState => ({
         open: !prevState.open,
       }))
     }
   
     render() {
       console.log(this.state)
       const { books } = this.props
       
       return (
   
         <div className="content-wrapper" style={wrapStyle}>
           {this.state.hiring ? <Hiring /> : <NotHiring />}
           {this.state.loading 
            ? "loading..."
             : <div>
                 {this.state.data.map(product => {
                   return(
                     <div key={product.id}>
                       <h3>Library product of the week</h3>
                       <h4>{product.name}</h4>
                       <img src={product.image} alt={product.name} height={100} /> 
                     </div>
                   )
                 })}
             </div>
           }
           <h1>The library is {this.state.open ? 'open' : 'closed' }</h1>
           <button onClick={this.toggleOpenClosed}>change</button>
   
           <div className="library-container" style={libraryContainerStyle}>
             {books.map(
               (book, i) => <Book 
                         key={i}
                         title={book.title} 
                         author={book.author}
                         pages={book.pages}
                         freeBookmark={this.state.freeBookmark} 
                       />
             )}
           </div>
           
         </div>
     
       )
     }
   }
   Library.propTypes = {
     books: propTypes.array
   }
   Book.propTypes = {
     title: propTypes.string,
     author: propTypes.string, 
     pages: propTypes.number,
     freeBookmark: propTypes.bool
   }
   

export default Library