import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {

  const [spamTickets, setSpamTickets] = useState([]);

  async function blockTicket(ticket) {

    try {
      const blockTix = await axios.post("http://localhost:3001/block", ticket )

      if (blockTix.status === 200) {
        setSpamTickets(spamTickets.map((elem) => {
         
          if (elem !== ticket) {return elem}
          else if (elem === ticket) {
            elem.state = 'BLOCKED'
            return elem
          }
          
          }))

        
      }

  }
    catch (e) {
        throw new Error('Unable to Block Ticket');
    }

  }


  async function resolveTicket(ticket, id) {

    try {
      const resolveTix = await axios.put(`http://localhost:3001/reports/${id}`)

      if (resolveTix.status === 200) {
      
        setSpamTickets(spamTickets.filter((elem) => elem !== ticket))
      }

  }
    catch (e) {
        throw new Error('Unable to Resolve Ticket');
    }
  }


 
  
  async function getTickets() {

      try {
          const spamTix = await axios.get("https://raw.githubusercontent.com/morkro/coding-challenge/master/data/reports.json")
          
          setSpamTickets(spamTix.data.elements);
        
      }
      catch (e) {
          throw new Error('Unable to get tickets');
      }
  }


  useEffect(() => {

    getTickets()

  }, [])

  //
  return (

    <>
      <div className='mainbody'>
        <h1>Reports</h1>

        <div className='tickets-maincontainer'>
            {spamTickets.map((elem, idx) => {

              return (

                <div key={idx} className="ticket-container">

                      <div className='idstate-container' >
                        <div className='infodiv'>Id: {elem.id}</div>
                        <div className='infodiv'>State: {elem.state}</div>
                      </div>

                      <div className='typemsg-container'>
                        <div className='infodiv'>Type: {elem.payload.reportType}</div>
                        <div className='infodiv'>Message: {elem.payload.message}</div>
                      </div>

                      <div className='button-container'>
                        <button onClick={() => (blockTicket(elem))}>Block</button>
                        <button onClick={() => (resolveTicket(elem, elem.id))}>Resolve</button>
                      </div>
                </div>


              )
            })}
           
        </div>

      </div>
     


    </>
  );
}

export default App;
