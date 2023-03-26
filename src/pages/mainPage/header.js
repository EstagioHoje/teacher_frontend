import './header.css'
import services from './services.json'
import JobFilter from '../jobs/jobFilter';

export function Header({ serviceOnScreen, setDetailed, filterText, onFilterTextChange, onFilterDataChange }) {

  if(serviceOnScreen === 'dataManagement') {
    return (
      <header>
        <div className='header'>
          <button onClick={() => setDetailed('none')}>&lt; Voltar</button>
          <h1>{services[serviceOnScreen].text}</h1>
        </div>
      </header>
    )
  }

  return (
    <header>
      <div className='header'>
        <button onClick={() => setDetailed('none')}>&lt; Voltar</button>
        <h1>{services[serviceOnScreen].text}</h1>
      </div>
      <div className='search'>
        <JobFilter serviceOnScreen={serviceOnScreen} onFilterDataChange={onFilterDataChange} />
        <input
          id='searchBar'
          name='searchBar'
          type='text'
          value={filterText}
          placeholder='Busca'
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
    </header>
  )
}