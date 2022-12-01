import React from "react"
import NavComuna from "../../components/SideNavs/NavComuna"
import { StaticImage } from "gatsby-plugin-image"
import { RiExternalLinkLine } from "react-icons/ri"

const Institutii = () => {
  return (
    <div className="pageContainer">
      <main className="content">
        <div className="invatamant">
          <h1>Instituții de învățământ</h1>
          <div className="scoli">
            <div className="scoala">
              <h2>ŞCOALA GENERALĂ NR.1 FLOREŞTI</h2>
              <StaticImage
                className="img-scoala"
                src="../../images/scoala-1.jpg"
                alt="scoala floresti"
                placeholder="tracedSVG"
              />
              <p>
                Adresa: Com. Floreşti-Stoeneşti, sat Floreşti, str. Mihai
                Viteazul, nr. 150, jud. Giurgiu <br /> Director: Prof. Renţea
                Virginia <br />
                Telefon: 0246.258.222
              </p>
            </div>
            <div className="scoala">
              <h2>ŞCOALA GENERALĂ NR.2 STOENEŞTI</h2>
              <StaticImage
                className="img-scoala"
                src="../../images/scoala-2.jpg"
                alt="scoala stoenesti"
                placeholder="tracedSVG"
              />
              <p>
                Adresa: Com. Floreşti-Stoeneşti, sat Stoeneşti, str. 1 Decembrie
                1918, nr. 130, jud. Giurgiu <br />
                Director: Prof. Drăguşinoiu Constantin <br /> Telefon:
                0246.256.024
              </p>
            </div>
            <div className="scoala">
              <h2>ŞCOALA GENERALĂ NR.3 PALANCA</h2>
              <StaticImage
                className="img-scoala"
                src="../../images/scoala-3.jpg"
                alt="scoala palanca"
                placeholder="tracedSVG"
              />
              <p>
                Adresa: Com. Floreşti-Stoeneşti, sat Palanca, str. Ion Ionescu
                Brăila, nr. 15B, jud. Giurgiu <br /> Director: Prof. Drăguşinoiu
                Constantin <br /> Telefon: 0246.257.113
              </p>
            </div>
          </div>
        </div>
        <div className="cult">
          <h1>Instituții de cult</h1>
          <div className="institutii">
            <div className="institutie">
              <h2>Biserica “Buna Vestire” din satul Stoeneşti</h2>
              <article>
                <p>
                  Biserica din satul Stoeneşti, cu hramul “Buna Vestire”, care
                  poartă numele boierilor, ctitorii bisericii, are formă de
                  navă. Tabloul ctitoricesc arată că biserica n-a avut turle,
                  iar reparația ce s-a făcut în anul 1841 a distrus bolțile în
                  formă cilindrică, înlocuindu-le cu un plafon de scânduri,
                  astfel încât nici pe această cale nu se poate constata dacă va
                  fi avut sau nu turle.
                </p>
                <StaticImage
                  className="img-scoala"
                  src="../../images/biserica.jpg"
                  alt="scoala palanca"
                  placeholder="tracedSVG"
                />
                <p>
                  Exteriorul bisericii este împărțit în două rânduri de panouri
                  cel de jos cu toruri, cel de sus, cu totul deosebit, arată că
                  a fost refăcut la reparația amintită.
                </p>
                <p>
                  Cadrele ferestrelor înguste sunt de piatră, cu basa împodobită
                  cu o floare stilizată, marginea prezentând un ciubuc
                </p>
                <p>
                  Restaurarea aduce curățirea de var a acestor podoabe, care,
                  împreună cu panourile inferioare, amintesc arta de a împodobi
                  exteriorul bisericilor în secolul al XVIII-lea și este destul
                  de interesantă, deși s-a spus că exteriorul este lipsit de
                  interes.
                </p>
                <p>
                  Pridvorul deschis și sprijinit pe coloane de zid, de formă
                  rotundă, s-a închis când s-a făcut reparația din 1841, cum
                  arată inscripția Paharnicului Dumitrache.
                </p>
                <p>
                  Ctitori. De o parte şi de alta a ușii din pronaos, de-asupra
                  căreia se află înfâțișarea bisericii vechi, găsim pe ctitorul
                  principal, împreună cu cele două soții, cu copiii lor și cu
                  rudele apropiate, fiecare purtându-și inscripția explicativă:
                </p>
                <p>
                  Jupân Gavriil Drugănescul Vel Vornic de Târgoviște susține cu
                  mâna biserica înfățișată cu pridvor deschis, cum se mai
                  observă și astăzi după reparaţia stângace făcută la 1841 de
                  acel Drugănescu, Dumitrache Păharnicul, fiul lui Scarlat
                  Drugănescu din căsătoria a doua a lui Preda, fiul ctitorului,
                  cu Safta Asan.
                </p>
                <p>
                  El este zugrâvit împreună cu soţia sa, Smaranda Bălăceanu.
                  Lângă vel Vornicul Gavriil apare fiul său Gheorghe copil.
                </p>
                <p>
                  În partea cealaltă a ușii, în aceeași atitudine de
                  susținătoare a bisericii, apare jupâneasa dumnealui, Vișica,
                  împreună cu un copil: Matei. Urmează: Bălașa, Toma, Gavriil,
                  Constantin și Anghelache.
                </p>
                <p>
                  Spre colțul nord-estic, jupâneasa Marica fiica dumnealui Vel
                  Vornic Gavriil. De cealaltă parte, deci în spatele lui
                  Gavriil, spre colțul sud-vestic jupâneasa dumnealui cea
                  dintâiu Maria, cu fiica ei, Calița
                </p>
                <p>
                  Deasupra numelui Calița, însoțit de calitatea ce o are fiica
                  dumnealui Vel Vornic dă Târgoviște, întâlnim numele lui
                  Gheorghe, deși el este arătat încă o dată deasupra chipului
                  său, cum am notat mai sus. Se pare că zugravul a căutat să
                  accentueze și să precizeze în același timp că Gheorghe şi
                  Calița sunt frați din întâia căsătorie a lui Gavriil cu Maria.
                </p>
                <p>
                  În acest caz, ei ar fi frați buni cu cel zugrăvit spre colțul
                  sud-vestic: jupân Preda Drugănescu, fiul dumnealui Vel Vornic
                  Drugănescu (?) care s-au înstrăinat din anul 1710, pentru
                  învățătură, călătorind mai toată partea Ievropei, și tată-mi
                  (?) jupân Preda Drugănescu, care adecă răsări (?) fiul
                  dumnealui, și la cinstită dregătorie, în anul 1725.
                </p>
                <p>
                  Pe zidul de Sud: Jupân Theodor Drugănescul vtori comis și
                  jupâneasa dumnealui, Ioana.
                </p>
                <p>
                  Pe zidul de Nord, începând de la colț sunt zugrăviți: Jupân
                  Stoica fratele ctiitorului, jupan Vladu, vataf dă Dorobanți,
                  moșul dumnealui Vel Vornic.
                </p>
                <p>
                  Urmează o fereastră, dincolo de care, spre Răsărit, mai apar
                  două chipuri: acela al lui jupân Mihul, socrul dumnealui Vel
                  Vornic, și al lui jupân Toma Cantacuzino, Spătar, nepotul
                  dumnealui Vel Vornic”.
                </p>
                <p>
                  Pe zidul ușii de intrare, spre latura nordică, se observă două
                  chipuri bărbătești. Aceştia sunt: Ispravnicii care s-au aflat
                  la zidirea sfintei biserici, anume.. Radul cu logofătul Nica.
                </p>
                <p>
                  Reparația făcută de Păharnicul Dumitrache la 1841, care
                  constă, cum am arătat mai sus, în înlocuirea bolților
                  cilindrice ale naosului printr-un urât plafon de scânduri,
                  invederând în acest chip lipsa de meșteri a vremii aceleia
                  sau, poate, puțina dărnicie a acestui urmaș ai ctitorilor,
                  această reparație a adăugat portretele lui Dumitrache și al
                  soţiei sale, Smaranda Bălăceanu, înlocuind chipurile de
                  sfinți, sau portretele altor ctitori.
                </p>
                <p>
                  Este de remarcat, în atitudinea acestor chipuri, poza pe care
                  o iau, așezându-se unul în fața celuilalt și ținându-se de
                  mânâ așa cum ei ar fi făcut-o la fotograf. Costumele vremii
                  adaugă la deosebirea dintre ei și ceilalți. Smaranda poartă o
                  rochie grea, strânsă la mijloc, având mâneci bufante, curmate
                  la cot printr-o garnitură și terminate la încheietura mâinilor
                  prin niște mânecuțe.
                </p>
                <p>
                  Inscripțiile lungi de deasupra, prețioase din punct de vedere
                  documentar, total neestetice și în izbitor contrast cu
                  celelalte, scurte și sobre, dovedesc prețiozitatea epocii și
                  își găsesc explicația în aceia a înaintașului lor, Preda
                  Drugănescu, fost la învățătură în țări străine.
                </p>
                <p>
                  Felul cum începe inscripția, adică având la început numele de
                  familie și apoi pe cel de botez, arată moda apuseană.
                </p>
                <p>
                  Drugănescu Dumitrache Marele Paharnic vechi, din anii 1810,
                  Mai 21, fiul răposatului Marile Stolnicu Scarlat Drugănescu și
                  nepot de fiu al [răposatului] Preda Drugănescu, carile a urmat
                  după diata moșu-său, care n-au lăsat ca să se năpăstuiască
                  această sfântă biserică… cutremurile ce au fost; au
                  meremetisit-o, dărâmându-i, şi acum, înliat 1841, a făcut
                  alte… meremet de au surpat bolțile, fiind pri[mej]duite, au
                  făcut tavan sigur, cu trei stâlpi pă dinafară tămpli, iar
                  amvonul au fost înconjurat cu zid. Și au zugrăvit-o până unde
                  a fost de trebuință. Au făcut și clopotniță, cât și două
                  clopote, au și înzestrat-o cu moșia Cozleasca și… peste ziuru
                  sf. biserici, pă lângă han… răposatului Marelui Stolnecul
                  Ioan…, după cum vedem, pentru neaparatile cheltueli, adică
                  lumânări, undelemn, tămâie, odăjdii pentru preoți, cărți,
                  candele, sărindarele din toate zilile, căntăreți și meremeturi
                  ce poate să se intâmple după vremi; carile cu diata dumnealui
                  este supt epitropia nepoților și strănepoți dumn[ealui],
                  carele după vremi vor stăpâni moșia Drugănești; 1841,
                  Septemvre 21″.
                </p>
                <p>
                  Inscripția lui Dumitrache este scrisă de-asupra și de o parte
                  și alta a capului până în dreptul umerilor.
                </p>
              </article>
            </div>
            <div className="institutie">
              <h2>Fostul Muzeu de Etnografie din Stoeneşti</h2>
              <article>
                <p>
                  La 35Km nord-vest de Bucureşti, prin autostrada
                  București-Pitești şi la Km 30 pe șoseaua națională
                  București-Bolintin Vale-Potlogi, în satul Stoenești, comuna
                  Florești-Stoenești, pe malul stâng al Sabarului se află fostul
                  Muzeul de etnografie și artă populară, secție a Muzeului
                  județean “Teohari Antonescu” Giurgiu.
                </p>
                <StaticImage
                  className="img-scoala"
                  src="../../images/muzeu.jpg"
                  alt="scoala palanca"
                  placeholder="tracedSVG"
                />
                <p>
                  Acesta a fost un frumos edificiu, monument de arhitectură
                  brâncovenească, construit în anii 1710-1715 de către Gavril
                  Drugănescu, fost mare vornic de Târgoviște, în partea de sat a
                  Stoeneștilor numită Drugănești. Conacul a fost supus unor
                  repetate restaurări, cu modificări evidente în stilul
                  arhitectural, când la corpul central a mai fost adăugată o
                  aripă în partea de vest.
                </p>
                <p>
                  Între anii 1940-1942 arhitectul Gheorghe M. Cantacuzino a mai
                  adăugat în partea estică încă o aripă, iar foișorul, al cărui
                  acoperiș este susținut de opt coloane cu capiteluri sculptate
                  în relief, a fost și el puțin lărgit, creându-se proporții mai
                  echilibrate întregului monument.
                </p>
                <p>Restaurări masive au fost făcute între anii 1965-1967.</p>
                <p>
                  Expoziția de bază a muzeului a fost inaugurată în 1971, ca
                  muzeu etnografic al Câmpiei Dunării. A fost în mai multe
                  rânduri modificată, căpătând profil județean, acum fiind
                  proprietate privată [ACTUALIZARE: citiți mai jos].
                </p>
                <p>
                  Muzeul a dispus de colecții valoroase cu privire la viața
                  rurală, etnografia și arta populară de pe meleagurile Vlăsiei
                  și Burnasului, Luncii Dunării, Văii Mostiștei, șesului
                  Bărăganului.
                </p>
                <p>
                  Într-un număr de 13 săli, cu o suprafață totală de circa 600
                  mp, muzeul a prezentat exponate din colecţiile de port și
                  țesături de interior, ceramică, prelucrarea lemnului și
                  metalelor, ocupații tradiționale, industria casnică.
                </p>
                <p>
                  Respectând cu strictețe planul interior al edificiului,
                  nivelul superior a fost destinat artei populare, care
                  cuprindea colecții de obiecte selecționate, ordonate pe genuri
                  cu sublinierea evoluției și distribuției diverselor tipuri și
                  variante, cronologia, diferenţele zonale etc.
                </p>
                <p>
                  Astfel, în sala centrală au atras atenţia scoarțele din lână,
                  frumoase și variate, cu alesături geometrice sau florale, viu
                  și armonios colorate, țesăturile de in, cânepă, bumbac și
                  borangic, folosite atât la confecționarea pieselor de port,
                  cât și împodobirea interiorului, prin cromatică și
                  ornamentație făcând dovada măiestriei creatoarelor populare
                  din zona de șes.
                </p>
                <p>
                  De asemenea, costumul popular din zona Ilfov și Vlașca, având
                  la bază elementul străvechi, autohton, s-a dezvoltat în
                  decursul timpului în tipuri variate, de o rară bogăție și
                  frumusețe, dintre acestea distingându-se în mod deosebit
                  costumul femeiesc cu peșteman și catrință din zona Vlașca.
                </p>
                <p>
                  În afară de ansambluri întregi de costume femeiești și
                  bărbătești, în expoziție au mai fost expuse piese separate de
                  costurn ca: fote, catrințe, cămăși cu altiță și poale șungi,
                  marame de borangic, giubele cu găitane policrome etc.
                </p>
                <p>
                  De asemenea au mai fost și sălile unde este prezentată
                  ceramica populară, care cuprinde numeroase piese de uz casnic,
                  provenite din centrele de olari proprii zonei Ilfovului (Pisc
                  și Brătulești) dar și din Odobești - Dâmbovița, Gheboaia
                  Prahova sau cunoscutul centru ceramic Oboga din județul Olt.
                  Alături, atelierul olarului din Pisc a prezentat
                  vizitatorului, diferitele faze de prelucrare a ceramicii
                  populare.
                </p>
                <p>
                  Nivelul inferior al edificiului (demisolul) a conținut secția
                  de etnografie, dintre care două săli erau destinate
                  meșteșugului prelucrării lemnului, cu diferite unelte și
                  produse, o sală a prelucrării metalelor, iar sala centrală
                  prezintă ocupațiile tradiționale, una din coordonatele
                  esențiale ale vieții umane, expresie materială a dezvoltării
                  etnico-sociale a poporului, ele reprezentând odinioară locul
                  principal în cadrul manifestărilor de cultură populară.
                </p>
                <p>
                  O altă sală prezenta industria casnică textilă, iar o latură
                  importantă a culturii spirituale - obiceiurile - ocupau o sală
                  specială.
                </p>
                <p>
                  Prin specificul său, Muzeul de etnografie și artă populară
                  Florești-Stoenești a constituit o bună perioadă de timp un
                  punct de atracție atât pentru specialiști cât și pentru
                  publicul larg, pentru toţi cei interesați de cunoașterea
                  tezaurului cultural și artistic atât al județului Giurgiu cât
                  și al Câmpiei Dunării.
                </p>
                <p>
                  ACTUALIZARE: Acest ansamblu brâncovenesc a servit ca Muzeu de
                  Etnografie și artă populară, expoziția fiind inaugurată în
                  1971, până în anul 2004 când este retrocedat descendenților
                  familiei Știrbey, pentru ca în anul 2005 să ajungă proprietate
                  privată, fiind vândut firmei RO.GI REAL ESTATE din București.
                  Apreciindu-i valoarea artistică, considerăm salutară
                  achiziționarea în data de 20 decembrie 2012 de către Episcopia
                  Giurgiului, prin Protoieria Bolintin, și revenirea în
                  patrimoniul județean a monumentului arhitectural brâncovenesc.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="links">
          <ul style={{ listStyle: "none" }}>
            <li>
              <a
                href="https://www.facebook.com/conaculdruganescu/posts/155107906637277"
                target="_blank"
                rel="noreferrer"
              >
                <RiExternalLinkLine /> Pagina de Facebook a Conacului
                Drugănescu.
              </a>
            </li>
            <li>
              <a
                href="https://amfostacolo.ro/impresii9.php?iid=74947&d=de-vizitat-in-imprejurimile-bucurestiului--bucuresti"
                target="_blank"
                rel="noreferrer"
              >
                <RiExternalLinkLine /> Conacul Drugănescu, alt exemplu de
                arhitectură brâncovenească.
              </a>
            </li>
            <li>
              <a
                href="https://piticipepoteci.blogspot.com/2020/07/conacul-druganescu-o-oaza-verde-in.html"
                target="_blank"
                rel="noreferrer"
              >
                <RiExternalLinkLine /> Conacul Drugănescu, o oază verde în
                apropiere de București.
              </a>
            </li>
            <li>
              <a
                href="https://coltisorderomania.ro/2021/06/12/minunatiile-din-jurul-bucurestiului-conacul-druganescu/"
                target="_blank"
                rel="noreferrer"
              >
                <RiExternalLinkLine /> Minunățiile din jurul Bucureștiului -
                Conacul Drugănescu.
              </a>
            </li>
            <li>
              <a
                href="https://www.trecator.ro/europa/romania/muntenia/conacul-druganescu-de-la-stoenesti/"
                target="_blank"
                rel="noreferrer"
              >
                <RiExternalLinkLine /> Conacul Drugănescu de la Stoenești
              </a>
            </li>
          </ul>
        </div>
      </main>
      <div className="sideNav">
        <NavComuna />
      </div>
    </div>
  )
}

export default Institutii
