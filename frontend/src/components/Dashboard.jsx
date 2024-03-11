import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './styles/homepage.css'
import {useDispatch, useSelector} from 'react-redux'
import { setBook } from './Redux/DetailsSlice';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Dashboard() {
    const dispatch=useDispatch()
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(()=>{
      axios.get('http://localhost:8080/book').then((res)=>{
        setBooks(res.data);
        console.log(books)
      })
    }, [count])
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
          books.map((book)=>{
            return(
                  <div className='col-sm-6 col-md-4 col-lg-3 book-container ' onClick={()=>{       
                    confirmAlert({
                        title : 'hi, choice option',
                        
                        buttons:[{
                            label:'Delete',
                            onClick:()=>{
                                axios.delete(`http://localhost:8080/book/${book.author}`)
                                setCount(count+1)
                                alert('Click Yes')
                            }
                        },{
                            label:'Update',
                            onClick:()=>{
                                const authorName=
                                prompt({
                                    title:'Write the right author name'
                                })
                                axios.put(`http://localhost:8080/book/${book.author}/${authorName}`)
                                setCount(count+1)
                            }
                        }
                    ]
                    })             
                  }}>
                    <div className='book'>
                        <img src={require(`../${book.imageLink}`)} alt='' />
                        <p className='author'>{book.author}</p>
                        <p className='title'>{book.title} {book.year}</p>
                        <p className='price'>{book.pages}$</p>
                    </div>
                  </div>
            )
          })
        }
    </div>
    </div>
        
        
  )
}

export default Dashboard
