import React from 'react';
import { render } from 'react-dom';
import Header from './header'
import Library from './library'


let bookList = [
  {"title": "Awesomeness", "author": "Beej", "pages": 490},
  {"title": "White Fang", "author": "Beej", "pages": 490},
  {"title": "Blue Sun", "author": "Beej", "pages": 490},
  {"title": "Blue Sun", "author": "Beej", "pages": 490},
  {"title": "Green Mile", "author": "Sam", "pages": 490},
  {"title": "Green Mile", "author": "Sam", "pages": 490},
  {"title": "Green Mile", "author": "Sam", "pages": 490},
]











// class FavoriteColorForm extends Component {
//   state = { value: '' }
  
//   newColor = e =>
//     this.setState({ value: e.target.value })

//   submit = e => {
//     console.log(`Sew Color: ${this.state.value}`)
//     e.preventDefault()
//   }

//   render() {
    
//     return (
//       <form action="" onSubmit={this.submit}>
//         <label htmlFor="">Favorite Color:
//           <input 
//             type="color" 
//             onChange= {this.newColor}
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }



render(
  <>
    {/* <FavoriteColorForm /> */}
  <Header 
    heading="My new heading"
    subText="This is also going to be really effing sweet...Really"
  />
  <Library 
    books={bookList} 
  />
  </>,
  document.getElementById('root')
)
