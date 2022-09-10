import './App.css';
import React, {useState} from 'react';
import MockData from './MOCK_DATA.json'
import ReactPaginate from "react-paginate"

function App() {

  const [users, setUsers] = useState(MockData.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 10
  const pageVisited = userPerPage * pageNumber
  const displayUser = users.slice(pageVisited, pageVisited + userPerPage)
    .map((user)=>{
      return (
        <div className='user'>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.gender}</p>
          <p>{user.email}</p>
        </div>

        )})

  const pageCount = Math.ceil(users.length / userPerPage)
  function changePage({selected}){
    setPageNumber(selected)
  }

  return (
    <div className="App">
       {displayUser}
       <ReactPaginate 
       previousLabel={"prev"}
       nextLabel={"next"}
       pageCount={pageCount}
       onPageChange={changePage}
       containerClassName={"paginate-btn"}
       previousLinkClassName={"prev-btn"}
       nextLinkClassName={"next-btn"}
       disabledClassName={"disabled"}
       activeClassName={"active"}
       />
    </div>
  );
}

export default App;
