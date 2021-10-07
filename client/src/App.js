import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';



function App() {

 
  const [spamTickets, setSpamTickets] = useState([]);

  async function blockTicket(ticket) {

    try {
      const blockTix = await axios.post(`${process.env.REACT_APP_API_URI}/spam`, ticket )

      if (blockTix.status === 200) {

        setSpamTickets(spamTickets.map((elem) => {
         
          if (elem === ticket) {
            elem.state = 'BLOCKED'
            return elem
          }
          else {return elem}
          }))

  }}
    catch (e) {
        throw new Error('Unable to Block Ticket');
    }

  }


  async function resolveTicket(ticket, id) {

    try {
      const resolveTix = await axios.put(`${process.env.REACT_APP_API_URI}/reports/${id}`)

      if (resolveTix.status === 200) {
          setSpamTickets(spamTickets.filter((elem) => (elem.id !== id)))
      }

  }
    catch (e) {
        throw new Error('Unable to Resolve Ticket');
    }
  }


 
  
  async function getTickets() {
   
      try {
          const spamTix = await axios.get(`${process.env.REACT_APP_API_URI}/spam`);

          const arrOfTix =  Object.keys(spamTix.data).map((key) => spamTix.data[key]).filter((elem) => elem.id !== undefined);

          //conditional for heroku deploy.
          const spamTixFromGH = await axios.get("https://raw.githubusercontent.com/morkro/coding-challenge/master/data/reports.json");
          const arrOfTixNotEmpty = arrOfTix.length === 0? spamTixFromGH : arrOfTix;
          //end of heroku only code

          setSpamTickets(arrOfTixNotEmpty);
        
      }
      catch (e) {
          throw new Error('Unable to get tickets');
      }
  }


  useEffect(() => {
    getTickets()

  }, [])

  return (

    <>
      <div className='mainbody'>
        <h1>Reports</h1>

        <div className='tickets-maincontainer'>
            {spamTickets.map((elem, idx) => {
            
                  return <div key={idx} className={`ticket-container ${elem.state === 'BLOCKED'? 'blocked' : null}`}>
                        <div className='idstate-container' >
                          <div className='infodiv'>Id: {elem.id}</div>
                          <div className='infodiv'>State: {elem.state}</div>
                        </div>
  
                        <div className='typemsg-container'>
                          <div className='infodiv'>Type: {elem.payload.reportType}</div>
                          <div className='infodiv'>Message: {elem.payload.message}</div>
                        </div>
  
                        <div className='button-container'>

                          {elem.state !== 'BLOCKED'? <button onClick={() => (blockTicket(elem))}>Block</button> : null }
                          <button onClick={() => (resolveTicket(elem, elem.id))}>Resolve</button>
                        </div>
                  </div> 
              
            })}
           
        </div>

      </div>
     


    </>
  );
}

export default App;
