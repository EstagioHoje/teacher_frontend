import home from '../images/home.svg'
import hybrid from '../images/hybrid.svg'
import inPerson from '../images/inPerson.svg'

export function physicalityTranslation(physicality){
  if(physicality === 'flexibe') {
    return ([
      <img src={home} alt='home-office' />,
      'Home-office'
    ])
  } else if(physicality === 'hybrid') {
    return ([
      <img src={hybrid} alt='híbrido' />,
      'Híbrido'
    ])
  } else {
    return ([
      <img src={inPerson} alt='presencial' />,
      'Presencial'
    ])
  }
}