import { ContractIcon } from "./contractIcon";
import contracts from '../../data/contracts.json'

export function ContractApproval({ filterText, setContractDetailed }) {
  const listOfContractsToShow = [];
  contracts.forEach((contract) => {
    if(
      contract.company_data.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      && contract.student_data.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
      && contract.student_data.full_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }
    listOfContractsToShow.push(
      <ContractIcon 
        id={contract.id}
        student={contract.student_data.name}
        company={contract.company_data.name}
        status={contract.status}
        showDetailsOf={setContractDetailed}
      />
    )
  })
  return (
    <div className='grid'>
      {listOfContractsToShow}
    </div>
  )
}