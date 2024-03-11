import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/cart.css';

function Cart() {
  const [books,setBooks]= useState([]);
  const [count,setCount]= useState(0)
  let total=0
  useEffect(() => {
    axios.get('http://localhost:8080/cart').then((res) =>{
      setBooks(res.data)
      console.log(books)
    })
  },[count] );
  return (
    <div className='cart'>
      {
        books.map((book)=>{
          total += book.pages
          console.log(typeof(book.pages))
          return(
            <div className='cartContant'>
                        <img src={require(`../${book.imageLink}`)} alt='' />
                        <div className='contant'>
                          <p className='author'>{book.author}</p>
                          <p className='title'>{book.title} {book.year}</p>
                          <p className='price'>{book.pages}$</p>
                          <button className='btn btn-secondary' onClick={()=>{
                            total -= book.pages;
                            setCount(count+1)
                            axios.delete(`http://localhost:8080/cart/${book.author}`)
                          }}>Delete Item</button>
                        </div>
                        
            </div>
          )
        })
      }
      <p className=' m-4 p-3 border'>Total is {total} $</p>
    </div>
  )
}

export default Cart
