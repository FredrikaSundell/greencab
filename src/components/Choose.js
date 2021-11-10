import LinkButton from './buttons/LinkButton'
import LinkButtonBack from './buttons/LinkButtonBack'
import Map from './map/Map'
import Card from './card/Card'
import ToggleSwitch from './toggleSwitch/ToggleSwitch'
import { useGlobalState } from '../store'

import { ReactComponent as StandardCarIcon } from '../assets/StandardCarIcon.svg'
import { ReactComponent as XLCarIcon } from '../assets/XLCarIcon.svg'
import { ReactComponent as GoldCarIcon } from '../assets/GoldCarIcon.svg'

function Choose() {
  const [isChildSeat, setIsChildSeat] = useGlobalState('isChildSeat')

  const [isAnimal, setIsAnimal] = useGlobalState('isAnimal')

  const [isHandicapFriendly, setIsHandicapFriendly] =
    useGlobalState('isHandicapFriendly')

  return (
    <div>
      <div className="map-container-in-search">
        <Map directions={{ from: 'Stockholm', to: 'Uppsala' }} />
      </div>
      <div className="landing-info">
        <Card>
          <div className="alt-car">
            <StandardCarIcon className="car-icons" />
            <p>
              100% Elbil Max 4 passagerare Vårt toppval med 100% garanti att få
              en elbil för din resa.
            </p>
            <div>
              <p>PRIS</p>
            </div>
          </div>
          <div className="alt-car">
            <XLCarIcon className="car-icons" />
            <p>
              Större Elbil/Hybrid Max 7 passagerare Detta alternativ passar
              större sällskap.
            </p>
            <div>
              <p>PRIS</p>
            </div>
          </div>
          <div className="alt-car">
            <GoldCarIcon className="car-icons" />
            <p>
              Elbil Business class Max 3 passagerare Lyxa till det med en nyare
              bil, som körs av våra toppchaufförer.
            </p>
            <div>
              <p>PRIS</p>
            </div>
          </div>
          <div className="options">
            <h1>TILLVAL</h1>
            <div>
              <ToggleSwitch
                label="Bilbarnsstol"
                id="toggleChildSeat"
                isToggled={isChildSeat}
                toggle={() => setIsChildSeat(!isChildSeat)}
              />
            </div>
            <div>
              <ToggleSwitch
                label="Djur tillåtna"
                id="toggleAnimals"
                isToggled={isAnimal}
                toggle={() => setIsAnimal(!isAnimal)}
              />
            </div>
            <div>
              <ToggleSwitch
                label="Handikappsanpassat"
                id="toggleHandicapFriendly"
                isToggled={isHandicapFriendly}
                toggle={() => setIsHandicapFriendly(!isHandicapFriendly)}
              />
            </div>
          </div>
          <div>
            <LinkButtonBack to="/search">Ångra desination</LinkButtonBack>
          </div>
        </Card>
      </div>
      <div className="link-button-choose">
        <LinkButton to="/confirm">Boka</LinkButton>
      </div>
    </div>
  )
}

export default Choose
