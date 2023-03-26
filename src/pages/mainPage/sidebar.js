import './sidebar.css'
import logo from '../../images/logo.svg'
import '../../images/jobOffers.svg'
import '../../images/handWithPencil.svg'
import '../../images/reportEvaluation.svg'
import '../../images/dataManagement.svg'

export function Sidebar({ logOut, changeServiceOnScreen, buttonsToShow }) {
  const buttonsList = [];
  buttonsToShow.forEach((button) => {
    buttonsList.push(
      <button onClick={() => changeServiceOnScreen(button.service)}>
        <img src={require(button.imgSrc)} alt={button.imgAlt} />
        <p>{button.imgAlt}</p>
      </button>
    )
  });
  return (
    <div className='sidebar'>
      <img className='logoImage' src={logo} alt='Estágio Hoje' />
      <div className='buttonsArea'>
        {buttonsList}
      </div>
      <div className='logOut'>
        <button onClick={() => logOut(false)}>&lt; Sair</button>
      </div>
    </div>
  )
}