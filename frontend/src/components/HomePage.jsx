import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './styles/homepage.css'
import {useDispatch, useSelector} from 'react-redux'
import { setBook } from './Redux/DetailsSlice';
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


function HomePage() {
    const input=useSelector(state => state.detailsSlice.input);
    const dispatch=useDispatch()
    const [books, setBooks] = useState([]);
    useEffect(()=>{
      axios.get('http://localhost:8080/book').then((res)=>{
        setBooks(res.data);
        console.log(books)
      })
    }, [])
    const navigate = useNavigate();
    const handelOnClick= (bookData)=> {
      dispatch(
        setBook(bookData)
      )
      console.log(bookData)
      navigate('/book')
    }
  return (
    <div className='container' >
    <div className="row ">
        {
          books.filter((book)=>{
            if(input === ''){
              return book
            }
            else if (book.title.toLowerCase().includes(input.toLowerCase())){
              return book
            }
          })
          .map((book)=>{
            return(
                  <div className='col-sm-6 col-md-4 col-lg-3 book-container ' >
                    <div className='book'>
                        <img src={require(`../${book.imageLink}`)} alt='' onClick={()=>{
                    handelOnClick(book)
                  }} />
                        <div className='book-contant'>
                          <p className='author'>{book.author}</p>
                          <p className={(book.title).length <= 17 ? 'title': 'big-title'}>{book.title} {book.year}</p>
                          <p>Language: {book.language}</p>
                          <div className='cart-sec'>
                          <FaHeart />
                          <p className='price' >{book.pages} <span>$</span></p>
                          <FaCartPlus onClick={
                            ()=>{
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
                            }
                          } size={30} />
                          </div>
                        </div>
                    </div>
                  </div>
            )
          })
        }
    </div>
    </div>
        
        
  )
}

export default HomePage
