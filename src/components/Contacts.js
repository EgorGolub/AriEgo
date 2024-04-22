import React from 'react';
import Location from '../assets/Addressloc.png';
import Phone from '../assets/Smartphonephone.png';
import Mail from '../assets/At signmail.png';
import Info from '../assets/Informationi.png';
import Jobswork from '../assets/Permanent Jobwork.png';

export default function Contacts() {
  return (
    <section id="contacts">
      <div class="contacts-page">
        <div class="top-container">
          <h2>KONTAKT</h2>
        </div>
        <div class="top-container">
          <p>TEKKIS KÜSIMUS? VÕTA JULGELT ÜHENDUST! +372 55 41 116</p>
        </div>
        <div class="left-column w-50">
          <div class="contact-row">
            <div class="img-container">
              <img src={Location} alt="location" style={{ width: '40px' }} />
            </div>
            <div class="info-container">
              <p>Rakvere 15 Jõhvi, 41533 Ida-Virumaa</p>
            </div>
          </div>
          <div class="contact-row">
            <div class="img-container">
              <img src={Phone} alt="phone" style={{ width: '40px' }} />
            </div>
            <div class="info-container">
              <p>Maksim Golub / Tegevjuht +372 53 314 144</p>
            </div>
          </div>
          <div class="contact-row">
            <div class="img-container">
              <img src={Mail} alt="mail" style={{ width: '40px' }} />
            </div>
            <div class="info-container">
              <p>
                <a href="mailto:info@ariego.ee">info@ariego.ee</a>
              </p>
            </div>
          </div>
          <div class="contact-row">
            <div class="img-container">
              <img src={Info} alt="ariego" style={{ width: '40px' }} />
            </div>
            <div class="info-container">
              <p>Reg. nr. 12826001</p>
            </div>
          </div>
          <div class="contact-row">
            <div class="img-container">
              <img src={Jobswork} alt="ariego" style={{ width: '40px' }} />
            </div>

            <div class="info-container">
              <p>Ehitustööd, ehitusmaterjalid, konsulteerimine</p>
            </div>
          </div>
        </div>
        <div class="right-column w-50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.3828532058!2d27.403614677343512!3d59.35994900856913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4694656264e6e10f%3A0xc491a26188fdc116!2sRakvere%2015%2C%20J%C3%B5hvi%2C%2041533%20Ida-Viru%20maakond!5e0!3m2!1sru!2see!4v1713331449423!5m2!1sru!2see"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
