import React from 'react';
import ofice from '../assets/ofice.png';
export default function Requirements() {
  return (
    <div id="requirements" style={{ padding: '4rem' }}>
      <div className="reqHeading">
        <h2>ETTEVÕTEST</h2>
      </div>
      <div className="reqContainer">
        <div className="reqTextBox">
          <img src={ofice} style={{ width: '400px' }} alt="logo" />
          <p class="text">
            Ariego OÜ tegutseb Eesti Ehitusturul 2015. aastast. Firma on kasvanud nende aastate
            jooksul arvestatava suuruse ja käibega ehituse peatöövõtufirmaks. Ettevõtte on omandanud
            väga suured kogemused erineva otstarbega ehitiste projekteerimis- ja ehitustööde
            koordineerimisel ning juhtimisel. <br></br>Ariego OÜ professionaalsete spetsilistide käe all on
            valminud mitmed suuremad ning väiksemad kaubanduskeskused, büroo-, lao- ning eluhooned
            üle terve Eestimaa. Väärtustame ja hindame oma tellijaid, pakkudes paindlikku ning
            kvaliteetset juhtimisteenust, oleme nõu ja jõuga abiks alates projekti ideest ja
            planeerimisest kuni ehitise valmimiseni ning säästliku ja keskkonnasõbraliku
            ekspluateerimiseni. Meie eesmärgiks on usaldusliku ja meeldiva koostöö kaudu saavutada
            tellijate ja alltöövõtjate rahulolu ning rõõm iga valminud objekti üle, soovime olla
            ehitusettevõte, keda eelistatakse valida ehitustegevuste planeerimisel püsivaks
            koostööpartneriks.
          </p>
        </div>
      </div>
    </div>
  );
}
