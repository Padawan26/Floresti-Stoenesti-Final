import React from "react"
import * as styles from '../../../styles/comunicate.module.css'
import NavAlegeri from "../../../components/SideNavs/NavAlegeri"

const Hotarari = () => {
  // Înlocuiește aceste URL-uri cu URL-urile reale ale PDF-urilor tale
  const pdfLinks = [
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Hotararea-nr.-1-din-24.04.2024.pdf',
      title: 'Hotărârea nr. 1 din 24.04.2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Hotararea-nr.-2-din-24.04.2024.pdf',
      title: 'Hotărârea nr. 2 din 24.04.2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Hotarare-nr.-3-_-27.04.2024-BECC-nr.-17-pdf.pdf',
      title: 'Hotărâre nr. 3 din 27.04.2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Hotarare-nr.-4-_-27.04.2024-BECC-nr.-17-pdf.pdf',
      title: 'Hotărâre nr. 4 din 27.04.2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Hotarare-nr.-5-_-29.04.2024-BECC-nr.-17-pdf.pdf',
      title: 'Hotărâre nr. 5 din 29.04.2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Hotarare-nr.-6-_-29.04.2024-BECC-nr.-17-pdf.pdf',
      title: 'Hotărâre nr. 6 din 29.04.2024',
    },
    {
      url: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/05/Hotararea-nr.-7-din-24.05.2024.pdf',
      title: 'Hotărârea nr. 7 din 24.05.2024',
    },
  ];

  return (
    <div className="pageContainer">
    <main className={styles.comunicateContainer}>
      <h1>Hotărâri</h1>
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

export default Hotarari