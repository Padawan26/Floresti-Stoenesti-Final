import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/plata.module.css"

export default function Plata() {
  return (
    <main className="pageContainer">
      <div className={styles.plata}>
        <article>
          <h1>
            Ghid Ghiseul.ro - Cum poți să-ți plătești online amenzile, taxele și
            impozitele locale
          </h1>
          <p>Iată cum puteți obține online datele de acces la Ghiseul.ro:</p>
          <h2>Pasul 1</h2>
          <p>
            Accesează adresa <a href="https://www.ghiseul.ro/ghiseul/public/">www.ghiseul.ro</a>.
          </p>
          <p>
            Pe prima pagină de pe site-ul ghiseul.ro accesați secțiunea numită:
            “Solicitare date de acces”. Apasă butonul{" "}
            <a href="https://www.ghiseul.ro/ghiseul/public/credentiale">
              SOLICITĂ DATE DE ACCES
            </a>
            .
          </p>
          <StaticImage
            className={styles.tutorial}
            src="../images/pasul-1.png"
            alt="tutorial plata ghiseul.ro"
            placeholder="tracedSVG"
          />
          <h2>Pasul 2</h2>
          <p>
            Se va deschide o nouă pagină în care vei selecta opțiunea “Online,
            folosind cadrul bancar” și ți se cere să introduci CNP-ul. Tastează
            CNP-ul și apoi apasă pe butonul VERIFICĂ CNP.
          </p>
          <h2>Important!</h2>
          <ul>
            <li>
              Titularul cardului trebuie să corespundă cu solicitantul datelor
              de acces.
            </li>
            <li>
              Cardul trebuie să fie înrolat în sistemul 3DSecure la una dintre
              următoarele bănci: Banca Comercială Română, Banca Raiffeisen, BRD
              - Groupe Société Générale, AlphaBank, CEC Bank, Banca
              Transilvania, ING Bank, Garanti Bank, Bancpost, Banca Românească.
            </li>
          </ul>
          <p>
            Solicitarea este gratuită - nu se va extrage nicio sumă din contul
            dvs.
          </p>
          <p>
            Datele de acces pot fi solicitate online doar de către persoanele
            fizice.
          </p>
          <StaticImage
            className={styles.tutorial}
            src="../images/pasul-2.png"
            alt="tutorial plata ghiseul.ro"
            placeholder="tracedSVG"
          />
          <h2>Pasul 3</h2>
          <p>
            Dacă CNP-ul este valid, se va deschide o nouă pagină cu mai multe
            câmpuri obligatorii, în care trebuie să introduci:"Nume și prenume",
            "Adresa de email" "Confirmarea adresei de email", "Telefon mobil" și
            un Cod din cifre și litere. Se va bifa căsuța “Sunt de acord cu
            procesarea acestor date in scopul obținerii datelor de acces in
            Ghiseul.ro”. După ce ai completat toate aceste câmpuri, apasă
            butonul "Trimite cerere".
          </p>
          <StaticImage
            className={styles.tutorial}
            src="../images/pasul-3.png"
            alt="tutorial plata ghiseul.ro"
            placeholder="tracedSVG"
          />
          <h2>Pasul 4</h2>
          <p>
            Se deschide pagina de validare a cardului bancar personal. Cardul
            trebuie să fie înrolat în sistemul 3DSecure la una dintre
            următoarele bănci: Banca Comercială Română, Banca Raiffeisen, BRD -
            Groupe Société Générale, AlphaBank, CEC Bank, Banca Transilvania,
            ING Bank, Garanti Bank, Bancpost, Banca Românească.
          </p>
          <p>
            Trebuie să introduci numărul cardului afișat pe partea din față a
            acestuia. În josul paginii se menționează că solicitarea este
            gratuită și că nu se va extrage nicio sumă din cont. Apoi apasă
            butonul "Aprobă".
          </p>
          <h2>Pasul 5</h2>
          <p>
            Dacă datele introduse sunt corecte, se va deschide o nouă pagină cu
            mesajul: "Verificarea datelor a fost efectuată cu succes. Veți primi
            un email cu datele de acces".
          </p>
          <h2>Pasul 6</h2>
          <p>
            După ce ați obținut online datele de acces poți să intri pe prima
            pagină, să introduci userul și parola furnizate pe e-mail și să vezi
            ce obligații de plată ai.
          </p>
          <h2>Pasul 7</h2>
          <p>
            În urma autentificării cu parolă, (vezi secţiunea Autentificare cu
            parolă), utilizatorului i se va deschide secţiunea de “Obligaţii de
            plată”. În această secţiune, se pot efectua plăţi pentru diverse
            taxe. Apar toate instituţiile înscrise în sistem pentru care
            contribuabilul are de efectuat plăţi. Pentru fiecare instituţie
            apare următorul meniu: În cadrul acestui meniu apar: - numele și
            tipul instituției - link către detaliile instituției (descrise la
            capitolul “Instituții Înrolate”) - obligațiile de plată pentru
            instituțiia respectivă la data curentă - link către detaliile unei
            anumite sume datorate - butonul folosit pentru a efectua plăți.
            Făcând click pe apar şi bunurile pe care utilizatorul le deţine şi
            pentru care are de plătit (în exemplul nostru, pentru tipul de taxă
            - “TAXA TEREN EXTR.” apar detalii referitoare la “Debit”,
            “Ramasita”, “Majorari” și “Penalitati” ).
          </p>
          <StaticImage
            className={styles.tutorial}
            src="../images/pasul-7.jpg"
            alt="tutorial plata ghiseul.ro"
            placeholder="tracedSVG"
          />
          <p>
            Când se doreşte plata unor taxe obligatorii, utilizatorul poate să
            aleagă să plătească integral sau parţial o anumită taxă.
          </p>
          <p>
            În căsuţa unde sunt trecute sumele (încadrate cu roșu), se poate
            modifica suma astfel încât să corespundă dorinţei contribuabilului.
            Suma introdusă de la tastatură nu poate fi mai mare decât suma
            datorată. În căsuţa gri corespunzătoare totalului, valoarea se va
            modifica automat, aceasta nu poate fi modificată de la tastatură.
            După acţionarea butonului apare o pagină de confirmare a plăţii.
          </p>
          <StaticImage
            className={styles.tutorial}
            src="../images/pasul-8.jpg"
            alt="tutorial plata ghiseul.ro"
            placeholder="tracedSVG"
          />
          <p>
            În această pagină apar informaţii referitoare la tipurile de venit
            pentru care se efectueză plata, suma de plată, valoarea comisionului
            calculat pentru această sumă în cazul în care comisionul este
            suportat de plătitor sau 0 în cazul în care instituţia suportă acest
            comision, totalul de plată. Aceasta are rolul de a putea verifica
            dacă plata ce se doreşte a fi efectuată corespunde dorinţelor
            utilizatorului. În caz afirmativ, utilizatorul trebuie să citească
            termenii şi condiţiile de utilizare şi să bifeze câmpul “Aprob plata
            și sunt de acord cu termenii și condițiile de utilizare”, iar apoi
            se face click pe butonul "Plateste", altfel se face click pe butonul
            "Renunta".
          </p>
          <p>
            În cazul în care nu aţi bifat câmpul de aprobare al termenilor şi
            condiţiilor, la acţionarea butonului "Plateste", apare mesajul
            “Trebuie să aprobați plata!”. După acţionarea butonului "Plateste"
            se deschide portalul de plată on-line al procesatorului cu care
            colaborează instituţia.
          </p>
          <p>
            Aici se introduc datele cardului cu care se efectuează plata. La
            final se face click pe butonul Aprobă dacă utilizatorul este de
            acord cu retragerea sumei respective din contul cardului său.
            Procesatorul de plăţi electronice a luat toate măsurile pentru a
            asigura securitatea tranzacţiilor cu card prin internet. Datele de
            card pe care utilizatorul le completează şi le trimite prin internet
            sunt criptate prin protocolul SSL. Transferul datelor de card este
            strict între utilizator şi procesator, nici furnizorul sistemului de
            plată şi nici instituţia nu solicită şi nu stochează aceste
            informaţii. După executarea acestora, aplicația de procesare de
            plată afișează utilizatorului un raport final cu privire la
            efectuarea sau neefectuarea plății. În cazul efectuării plăţii
            utilizatorul primeşte un email cu dovada de plată, pe adresa de
            email trecută la prima autentificare, sau modificată de la “Profil
            utilizator” şi poate vedea suma pe care a plătit-o, data şi ora la
            care a fost efectuată plata: Pentru verificare, accesați adresa de
            email înregistrată și căutați dovada efectuării plătii. In același
            document se precizează că instituția publică a suportat integral
            comisionul tranzacției.
          </p>
          <StaticImage
            className={styles.tutorial}
            src="../images/confirmare.jpg"
            alt="tutorial plata ghiseul.ro"
            placeholder="tracedSVG"
          />
          <p>Pentru informații suplimentare accesați:</p>
          <p>
            Întrebări frecvente ghișeul.ro:
            <a href="https://www.ghiseul.ro/ghiseul/public/informatii/intrebari-frecvente">
              https://www.ghiseul.ro/ghiseul/public/informatii/intrebari-frecvente
            </a>
          </p>
          <p>
            Manual de utilizare ghișeul.ro:
            <a href="https://www.ghiseul.ro/ghiseul/public/help/Manual%20de%20utilizare%20-%20Contribuabili.pdf">
              https://www.ghiseul.ro/ghiseul/public/help/Manual%20de%20utilizare%20-%20Contribuabili.pdf
            </a>
          </p>
        </article>
      </div>
    </main>
  )
}
