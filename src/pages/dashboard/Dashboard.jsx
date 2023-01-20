import React, { useState } from "react";
import Card from "../../components/Card";
import { faUser, faUserTie, faUserGraduate, faUsers } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../../components/Searchbar";
import Table from "../../components/Table/Table";
//import Addpopup from "../../components/Addpopup";

const Dashboard = (props) => {
  const [searchItem, setSerachItem] = useState("")


  //const [adding, setAdding] = useState(false)

  return (
    <div>
      <div>
      <div id="Dashboard" className="text-gray-800 text-2xl font-semibold ml-7">
        <h1>Dashboard</h1>
      </div>

      <div id="cards" className="flex my-5 justify-center">
        <div id="card1" className="ml-7"><Card icon={faUser} type='Solicitantes' cant={props.sol}/></div>
        <div id="card2" className="ml-7"><Card icon={faUserTie} type='Doctorandos' cant={props.doctorandos}/></div>
        <div id="card3" className="ml-7"><Card icon={faUserGraduate} type='Doctores' cant={props.doctores}/></div>
        <div id="card4" className="ml-7"><Card icon={faUsers} type='General' cant={props.personas.length}/></div>
      </div>
        
      <div id="searchBar" className="flex-wrap justify-center"><Searchbar /*istoggle={adding => setAdding(adding)}*/ personas={props.personas}  search={searchItem => setSerachItem(searchItem)}/></div>

      <div id="table" className="ml-16 mt-5">
          <Table 
            personas={props.personas} 
            onDeletePerson={props.onDeletePerson} 
            search={searchItem}/>
      </div>
      
    </div>

      
    </div>
  );
};

export default Dashboard;
