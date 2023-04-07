import { useState, useEffect } from "react";
import MediaCard from "./card.js";
import Filters from "./utils/filters.js";
import axios from "axios";
import AnnualTotals from './utils/annualTotals.js';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [ searchBooks, setSearchBooks ] = useState([])
  const [ filters, setFilters ] = useState({ searchTerm: '' })
  const [ sortBy, setSortBy ] = useState('createdAt')
  const [ sortedArray, setSortedArray ] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get("https://annualmediaserver.onrender.com/api/books");
        console.log(data, "render data");
        setBooks(Object.values({ ...data }));
      } catch (err) {
        console.log(err, "catch error");
      }
    };
    getBooks();
  }, []);

  useEffect(() => {
    const getServerBooks = async () => {
      try {
        const { data } = await axios.get("https://annualmediaserver.onrender.com/api/movies");
        console.log(data, "movies from render server");
      } catch (err) {
        console.log(err, "catch error");
      }
    };
    getServerBooks();
  }, []);

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value };
    console.log(newObj);
    setFilters(newObj);
  };
  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  };

  const whichSort = (array, sortBy) => {
    if (sortBy === 'Genre' || sortBy === 'Title' || sortBy === 'CreatedAt' || sortBy === 'Year') {
      return array.sort((a,b)=> (a[sortBy] < b[sortBy] ? 1 : -1))
    } else {
      return array.sort((a,b)=> (a[sortBy] > b[sortBy] ? 1 : -1))
    }
  }

  useEffect(() => {
    setSortedArray(whichSort(books, sortBy))
  }, [sortBy, books])

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setSearchBooks((sortedArray ? sortedArray : whichSort(books, sortBy)).filter(book => {
      return regexSearch.test(book.title)
    }))
  }, [filters, sortBy, sortedArray, books])

  return (
    <>
      
      <Filters id="matchesFilters" handleFilterChange={handleFilterChange} handleSortBy={handleSortBy} {...filters}/>
      <div className='totals'>
      <h3> You have read <AnnualTotals arr={books} year={2023} /> books this year</h3>
      </div>
      <div className="matchesGrid">
        { (filters.searchTerm !== '' ? searchBooks : sortedArray ).map(book => { 
          return <MediaCard key={book.id} image={book.poster} { ...book } />
        })}
      </div>

      {/* <div>
        {books.map((book) => {
          return (
            <MediaCard
              key={book.id}
              title={book.title}
              year={book.year}
              genre={book.genre}
              image={book.poster}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default Books;
