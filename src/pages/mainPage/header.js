import './header.css'
import JobFilter from '../jobs/jobFilter';
import services from '../../data/services.json'

export function Header({ filterText, onFilterTextChange, onFilterDataChange }) {
  const searchBar = []
  if(location.pathname.slice(1) === 'jobOffers') {
    searchBar.push(
      <JobFilter onFilterDataChange={onFilterDataChange} />
    )
    searchBar.push(
      <input
        id='searchBar'
        name='searchBar'
        type='text'
        value={filterText}
        placeholder='Busca'
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    )
  } else if(
    location.pathname.slice(1) === 'contractApproval'
    || location.pathname.slice(1) === 'reportEvaluation'
  ) {
    searchBar.push(
      <input
        id='searchBar'
        name='searchBar'
        type='text'
        value={filterText}
        placeholder='Busca'
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    )
  }
  
  return (
    <header>
      <div className='header'>
        <h1>{services[location.pathname.split('/')[1]].text}</h1>
      </div>
      <div className='search'>
        {searchBar}
      </div>
    </header>
  )
}