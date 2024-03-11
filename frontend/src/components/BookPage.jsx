import React from 'react'
import {useSelector } from 'react-redux'
import './styles/bookPage.css'
import axios from 'axios'

function BookPage() {

  const book=useSelector(state => state.detailsSlice.book);

  
  
  return (
      <>
        <div className='all-data row m-5 ' >
        <img src={require(`../${book.imageLink}`)} alt='' className='image col-12 col-md-4 ' />
         <div className='p-2 contant col-12 col-sm-4 '>
         <p className='author'> {book.author}  </p>
         <p className='author'> {book.country}</p>
          <p className='title'>{book.title} - {book.year}</p>
          <p>Language: {book.language}</p>
          <p>Number of pages: {book.pages}</p>
          <p className='price'>Price : {book.pages}<span>$</span></p>
          <button className='btn btn-light' onClick={()=>{
            axios.post('http://localhost:8080/cart', {
              author:book.author,
              country:book.country,
              imageLink:book.imageLink,
              language:book.language,
              link:book.link,
              pages:book.pages,
              title:book.title,
              year:book.year
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

          }}>ADD TO CART</button>
          </div >
          <div className='col-12 col-sm-4'>
            <p className='test'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sit odit doloremque quam laudantium numquam tempore reiciendis recusandae quisquam saepe ab! Minus animi sit libero vel modi numquam consequuntur nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius porro quam distinctio laborum earum harum, minima doloremque commodi a hic magni quia soluta dolor officia maxime dicta odit repellat vitae.
            </p>
          </div>
          
         
           
          <div>

          </div>
        </div>
      </>
  )
}

export default BookPage
