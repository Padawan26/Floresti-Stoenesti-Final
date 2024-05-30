import React from "react"
import * as styles from '../../../styles/comunicate.module.css'
import NavAlegeri from "../../../components/SideNavs/NavAlegeri"

const Comunicate = () => {
  // Înlocuiește aceste URL-uri cu URL-urile reale ale PDF-urilor tale
  const pdfLinks = [
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Anunt-privind-numarul-de-alegatori-din-comuna-Floresti-Stoenesti.pdf',
      title: 'Anunț privind numărul de alegători din comuna Florești-Stoenești',
      date: 'Publicat pe 24 Aprilie 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Proces-Verbal-privind-completarea-BECC-NR.17-Floresti-Stoenesti-judetul-Giurgiu.pdf',
      title: 'Proces-Verbal privind completarea BECC NR.17 Florești-Stoenești, județul Giurgiu',
      date: 'Publicat pe 24 Aprilie 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Propunere-candidaura-PSD.pdf',
      title: 'Propunere-canditatura-PSD',
      date: 'Publicat pe 27 Aprilie 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/afisare-propunere-candidatura.pdf',
      title: 'Propunere-canditatura-Volt',
      date: 'Publicat pe 29 Aprilie 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Proces-Verbal-nr.70-din-07.05.2024.pdf',
      title: 'Proces-Verbal nr.70',
      date: 'Publicat pe 7 Mai 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Proces-Verbal-nr.76-din-10.05.2024.pdf',
      title: 'Proces-Verbal nr.76',
      date: 'Publicat pe 10 Mai 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/AnexaDispozitiePrimar_20240510032317.pdf',
      title: 'Anexă dispoziție primar',
      date: 'Publicat pe 10 Mai 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Comunicare-din-data-de-21.05.2024.pdf',
      title: 'Comunicare din data de 21.05.2024',
      date: 'Publicat pe 21 Mai 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Proces-Verbal-20.05.2024-Desemnare-presedinti-birouri-electorale-ale-sectiilor-de-votare.pdf',
      title: 'Proces-Verbal 20.05.2024 - Desemnare presedinti birouri electorale ale sectiilor de votare',
      date: 'Publicat pe 21 Mai 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Proces-verbal-completare-BESV-din-cadrul-BECC-17-Floresti-Stoenesti.pdf',
      title: 'Proces verbal completare BESV din cadrul BECC 17 Floresti Stoenesti',
      date: 'Publicat pe 22 Mai 2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Proces-verbal-de-afisare-din-data-de-22.05.2024.pdf',
      title: 'Proces-verbal de afișare din data de 22.05.2024',
      date: 'Publicat pe 23 Mai 2024',
    },
  ];

  return (
    <div className="pageContainer">
    <main className={styles.comunicateContainer}>
      <h1>Comunicate</h1>
      <ul className={styles.comunicateList}>
        {pdfLinks.map((link, index) => (
          <li key={index} className={styles.comunicateItem}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.comunicateLink}
            >
              {link.title}
            </a>
            {link.date && <p className={styles.comunicateDate}>{link.date}</p>} {/* Afișează data aici, dacă există */}
          </li>
        ))}
      </ul>
    </main>
    <div className="sideNav">
      <NavAlegeri />
      </div>
    </div>
  )
  
}

export default Comunicate
