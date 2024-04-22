import React from 'react';
import gallery1 from '../assets/MySpacepep.png';
import gallery2 from '../assets/Homedom.png';
import gallery3 from '../assets/Editruk.png';
import Teenused from '../components/Teenused';

export default function About() {
  return (<>
    <div id="description" style={{ backgroundColor: '#f4f4f4' }}>
      <div id="descBg">
        <div className="descContainer">
          <div className="descHeading">
            <div className="descHeadingColor">
              <h2>MEIE KOHTA JA TEENUSED</h2>
            </div>
          </div>
          <div className="descBoxes">
            <div className="descBox">
              <img src={gallery1} alt="logo" />
              <h3>TEENUSED</h3>
              <ul>
                <li> Vundamendi soojustamine</li>
                <li> Sokli ja sillutusriba taastamine</li>
                <li> Fassaadi soojustamine ja viimistlus</li>
                <li> Katusetööd</li>
                <li> Siseviimistlustööd</li>
                <li> Eramajade ehitamine</li>
                <li> Hoonete remont ja rekonstrueerimine</li>
              </ul>
            </div>
            <div className="descBox">
              <img src={gallery2} alt="logo" />
              <h3>ÜLDEHITUS</h3>
              <p className="teenused">
                Üldehitus hõlmab erinevate hoonete ehitust alates äri- ja büroohoonetest, kuni
                avalike ja elukondlike ning spetsiifiliste tööstushooneteni. Meie ettevõtte pakub
                ehituse peatöövõtu raames kvaliteetset terviklahendust vastavalt tellija
                vajadustele: ettevalmistus, ehitus, sisustus ja garantiiaegne teenindus.
              </p>
            </div>
            <div className="descBox">
              <img src={gallery3} alt="logo" />
              <h3>INNOVATIIVSUS</h3>
              <p className="teenused">
                Areneva ja innovatiivse organisatsioonina panustame õppimisele ja juhtimissüsteemi
                pidevale parendamisele, sest vaid nii suudame tagada projektide edukuse ja ettevõtte
                jätkusuutlikkuse. Meie meeskonna moodustavad ehituslikku kõrgharidust ja
                aastatepikkust ehitusjuhtimise kogemust omavad spetsialistid.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     <Teenused />
     </>
  );
}
