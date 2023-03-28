import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle
} from '@mui/material';

import menu from '../../images/menu.svg'

import './jobFilter.css'
import jobs from '../../data/jobs.json'

export default function JobFilter({ onFilterDataChange }) {
  const [possibleAddress, setPossibleAddress] = useState([])
  const [minWage, setMinWage] = useState('')
  const [showFlexibe, setShowFlexibe] = useState(true)
  const [showHybrid, setShowHybrid] = useState(true)
  const [showInPerson, setShowInPerson] = useState(true)
  const [minVacancies, setMinVacancies] = useState('')
  const [weeklyHours, setWeeklyHours] = useState('')
  const [address, setAddress] = useState('anyAddress')
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    var addressList = []
    var addressOptions = [<option value='anyAddress'>Indiferente</option>]
    jobs.forEach((job) => {
      if(addressList.indexOf(job.address) === -1) {
        addressList.push(
          job.address
        )
        addressOptions.push(
          <option value={job.address}>{job.address}</option>
        )
      }
    })
    setPossibleAddress(addressOptions)
    setOpen(true)
  }

  const handleConfirm = () => {
    setAddress(document.getElementById('addressSelect').value)
    setOpen(false)
    onFilterDataChange({
      "minWage": minWage,
      "showFlexibe": showFlexibe,
      "showHybrid": showHybrid,
      "showInPerson": showInPerson,
      "minVacancies": minVacancies,
      "weeklyHours": weeklyHours,
      "address": address
    })
  };

  const handleReset = () => {
    setMinWage('')
    setShowFlexibe(true)
    setShowHybrid(true)
    setShowInPerson(true)
    setMinVacancies('')
    setWeeklyHours('')
    setAddress('anyAddress')
    setOpen(false)
    onFilterDataChange({
      "minWage": minWage,
      "showFlexibe": showFlexibe,
      "showHybrid": showHybrid,
      "showInPerson": showInPerson,
      "minVacancies": minVacancies,
      "weeklyHours": weeklyHours,
      "address": address
    })
  }

  const onNumberChange = (whereToChange, value) => {
    if(value >= 0) {
      whereToChange(value)
    }
  }

  return (
    <div>
      <button className='searchButton' onClick={handleOpen}>
        <img src={menu} alt='menu' />
        <p>Filtros</p>
      </button>
      <Dialog open={open} onClose={handleConfirm}>
        <DialogTitle className='filterTitle'>Filtre as vagas disponíveis</DialogTitle>
        <DialogContent className='filterContent'>
          <ul className='filterList'>
            <li>
              <p>Salário mínimo</p>
              <input
                id='minWage'
                name='minWage'
                type='text'
                value={minWage}
                onChange={(e) => onNumberChange(setMinWage, e.target.value)}
              />
            </li>
            <div className='lineH' />
            <li>
              <p>Local de trabalho</p>
              <div className='checkBoxes'>
                <input
                  type='checkbox'
                  onClick={() => setShowFlexibe(!showFlexibe)}
                  id='flexibe'
                  checked={showFlexibe}
                />
                <label for='flexibe'>Home-Office</label>
              </div>
              <div className='checkBoxes'>
                <input
                  type='checkbox'
                  onClick={() => setShowHybrid(!(showHybrid))}
                  id='hybrid'
                  defaultChecked={showHybrid}
                />
                <label for='hybrid'>Híbrido</label>
              </div>
              <div className='checkBoxes'>
                <input
                  type='checkbox'
                  onChange={() => setShowInPerson(!showInPerson)}
                  id='in-person'
                  checked={showInPerson}
                />
                <label for='in-person'>Presencial</label>
              </div>
            </li>
            <div className='lineH' />
            <li>
              <p>Mínimo de vagas</p>
              <input
                id='minVacancies'
                name='minVacancies'
                type='text'
                value={minVacancies}
                onChange={(e) => onNumberChange(setMinVacancies, e.target.value)}
              />
            </li>
            <div className='lineH' />
            <li>
              <p>Horas diárias</p>
              <input
                id='weeklyHours'
                name='weeklyHours'
                type='numeric'
                value={weeklyHours}
                onChange={(e) => onNumberChange(setWeeklyHours, e.target.value)}
              />
            </li>
            <div className='lineH' />
            <li>
              <p>Endereço</p>
              <select
                id='addressSelect'
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                {possibleAddress}
              </select>
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Resetar</Button>
          <Button onClick={handleConfirm}>Filtrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}