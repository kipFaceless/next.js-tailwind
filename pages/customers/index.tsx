import  Head from 'next/head';
import { useState } from 'react';

export interface CustomersProps {
    
}
 
const Customers = ({data}) => {

    const [keyWord, setkeyWord] = useState ("")

  
    const filteredCustomers = data.filter((custom)=>{
        custom.name.toLowerCase().includes(keyWord)
        console.log(" filteredCustomers",  custom.name)
    });
    
    const onInputChange = (e)=>{
        e.preventDefault();
        setkeyWord(e.target.value.toLowerCase())
      
        
    }
    return (  
        <>
            <Head>
                <title>All Customers</title> 
               
                <meta name="description" content="Adding customers Place"></meta>
            </Head>
            <div className="text-4xl mb-10 flex">
             
                <span className="font-bold">All Customers</span>
            </div>

            <div className="relative bg-gray-900 p-2 text-gray-300 rounded border-blue-300 w-64 mb-7">
            <svg className="w-6 h-6 absolute left-0 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            <input type="text" placeholder="Search Customer" className="ml-7 bg-transparent focus:border-opacity-0" style={{border:"none"}} onChange={onInputChange} />
            </div>


        
             {
                 data.map(({id, name, username, email})=>(
                     <div key={id} >
                         <h3 className="text-gray-900 font-semibold ">{id} - {name}</h3>
                         <p className="text-gray-600">{email}</p>
                     </div>
                     
                 ))
             }
        </>

    );
}
 
export default Customers;

export  async function getStaticProps () {
    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        return {
           props:{
               data
           }
        }
        
    } catch (error) {
        
    }
}