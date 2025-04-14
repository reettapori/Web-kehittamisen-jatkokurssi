import React, { useState } from 'react';
import Modal from './Modal'; // Importoi modal-komponentti

const Footer = () => {
    const [isTermsOpen, setTermsOpen] = useState(false);
    const [isPrivacyOpen, setPrivacyOpen] = useState(false);

    return (
        <footer className="bg-[#88a0c2] text-white p-4 flex flex-col items-center">
            <p className="mb-2">Tekijä: Reetta</p>
            <nav className="flex space-x-8">
                <button
                    onClick={() => setTermsOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Sivun käyttöehdot
                </button>
                <button
                    onClick={() => setPrivacyOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Tietosuoja
                </button>
            </nav>

            {/* Käyttöehdot Modal */}
            <Modal
                isOpen={isTermsOpen}
                onClose={() => setTermsOpen(false)}
                title="Käyttöehdot"
            >
                <strong className="block text-black mb-2">Sivun käyttöehdot</strong>
                <p>Sivustoa käytettäessä käyttäjän tulee noudattaa annettuja ohjeita ja sääntöjä.</p>
                <p>Käyttäjä sitoutuu toimimaan vastuullisesti ja kunnioittamaan muiden oikeuksia.</p>
                <p>Sivustolla esiintyvä sisältö on tekijänoikeuden alaista, ja sen luvaton käyttö on kiellettyä.</p>
            </Modal>

            {/* Tietosuoja Modal */}
            <Modal
                isOpen={isPrivacyOpen}
                onClose={() => setPrivacyOpen(false)}
                title="Tietosuoja"
            >
                 <strong className="block text-black mb-2">Tietosuoja</strong>
                <p>Sivusto kerää käyttäjätietoja vain toimintojen toteuttamiseen tarvittavissa määrin.</p>
                <p>Kaikki kerätty tieto käsitellään turvallisesti ja luottamuksellisesti.</p>
                <p>Käyttäjällä on oikeus pyytää tietojensa poistamista milloin tahansa.</p>
            </Modal>
        </footer>
    );
};

export default Footer;
