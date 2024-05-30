import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as styles from '../../styles/declaratii.module.css';

const declaratiiData = [
  {
    an: 2022,
    persoane: [
      {
        nume: 'Dumitrescu Marius-Iulian',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1322089_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1352536_a.pdf',
        },
      },
      {
        nume: 'Lazăr Constantin',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/06/2455306_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/06/2455344_a.pdf',
        },
      },
      {
        nume: 'Antonescu Gheorghe Gioni',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/1690330_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/03/1690360_a.pdf',
        },
      },
      {
        nume: 'Voicu Doina-Dumitra',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1450131_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1451910_a.pdf',
        },
      },
      {
        nume: 'Vasile Florin-Orlando',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2619880_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2620303_a.pdf',
        },
      },
      {
        nume: 'Cazacu Andrei-Daniel',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1468136_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1468130_a.pdf',
        },
      },
      {
        nume: 'Crîngea Ștefan',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1473824_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1473836_a.pdf',
        },
      },
      {
        nume: 'Răducu Florin',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1434078_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1435968_a.pdf',
        },
      },
      {
        nume: 'Matache Andrei',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2563236_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2563609_a.pdf',
        },
      },
      {
        nume: 'Pantazi Constantin',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2561566_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2562502_a.pdf',
        },
      },
      {
        nume: 'Codreanu Nicolae',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2607968_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/06/2457352_a.pdf',
        },
      },
      {
        nume: 'Marin Florin-Valentin',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2619109_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2618853_a.pdf',
        },
      },
      {
        nume: 'Croitoru Florin-Ionuț',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2702574_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2704176_a.pdf',
        },
      },
      {
        nume: 'Oneață Florin',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2667537_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2669498_a.pdf',
        },
      },
      {
        nume: 'Panait Liliana-Florentina',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2537265_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2023/07/2538337_a.pdf',
        },
      },
      // adaugă mai multe persoane și documente pentru alți ani
    ],
  },
  {
    an: 2023,
    persoane: [
      {
        nume: 'Dumitrescu Marius-Iulian',
        documente: {
          avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1322089_a.pdf',
          interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1352536_a.pdf',
        },
      },
    ]
    },
    {
      an: 2024,
      persoane: [
        {
          nume: 'Dumitrescu Marius-Iulian',
          documente: {
            avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1322089_a.pdf',
            interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1352536_a.pdf',
          },
        },
      ]
      },
      {
        an: 2025,
        persoane: [
          {
            nume: 'Dumitrescu Marius-Iulian',
            documente: {
              avere: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1322089_a.pdf',
              interes: 'https://staging.floresti-stoenesti.ro/wp-content/uploads/2022/12/1352536_a.pdf',
            },
          },
        ]
        }

  // adaugă mai multe obiecte pentru alți ani
];

const Declaratii = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <Container>
      <h1 className={styles.heading}>Selectează un an:</h1>
      <Row className="justify-content-between">
        {declaratiiData.map((item, index) => (
          <Col key={index} xs="auto" className="mx-auto">
            <Button onClick={() => handleYearClick(item.an)} className="year-button">
              {item.an}
            </Button>
          </Col>
        ))}
      </Row>

      {selectedYear && (
        <div className={styles.selectedYear}>
          <h2>Anul {selectedYear}</h2>
          {declaratiiData.find((item) => item.an === selectedYear).persoane.map((persoana, index) => (
            <div key={index} className={styles.personBox}>
              <div className={styles.personName}>{persoana.nume}</div>
              <div className={styles.documentSection}>
                <a href={persoana.documente.avere} className={styles.documentLink} target="_blank" rel="noopener noreferrer">
                  Declarație de avere
                </a>
                <a href={persoana.documente.interes} className={styles.documentLink} target="_blank" rel="noopener noreferrer">
                  Declarație de interese
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Declaratii;