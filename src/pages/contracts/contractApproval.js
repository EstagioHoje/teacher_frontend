// import contracts from '../../data/contracts.json'

import { useState, useEffect } from "react";
import { Header } from "../mainPage/header";
import { Sidebar } from "../mainPage/sidebar";
import { getAllContracts } from '../../actions/teacher';
import { InlineIcon } from "../../components/inlineIcon";

export function ContractApproval({ logOut }) {
  const listOfContractsToShow = [];
  const [filterText, setFilterText] = useState('')
  const [contracts, setContracts] = useState();

  useEffect(() => {
    (async () => {
      let contracts = await getAllContracts()
      if(contracts !== null) {
        if(contracts.data[0] !== null) {
          setContracts(contracts.data[0])
        }
      }
    }
    )()
  }, []);

  contracts.forEach((contract) => {
    if(
      contract.company_data.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      && contract.student_data.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      && contract.student_data.full_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }
    listOfContractsToShow.push(
      <InlineIcon
        id={contract.id}
        student={contract.student_data.name}
        company={contract.company_data.name}
        status={contract.status}
      />
    )
  })

  return (
    <div>
      <Sidebar logOut={logOut} />
      <div className='page'>
        <Header 
          filterText={filterText} 
          onFilterTextChange={setFilterText}
        />
        <div className='grid'>
          {listOfContractsToShow}
        </div>
      </div>
    </div>
  )
}