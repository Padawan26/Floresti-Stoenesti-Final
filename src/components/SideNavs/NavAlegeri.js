import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"

export default function NavAlegeri(){
    return (
        <>
        <NavHeader />
        <nav>
            <ul className={styles.nav}>
                <li>
                    <Link
                        className={styles.link}
                        activeClassName="active"
                        to="/informatii/alegeri-locale/informatie-aep"
                        >
                            Informatie AEP
                        </Link>
                </li>
                <li>
                    <Link
                        className={styles.link}
                        activeClassName="active"
                        to="/informatii/alegeri-locale/informatii"
                        >
                            Informatii
                        </Link>
                </li>
                <li>
                    <Link
                        className={styles.link}
                        activeClassName="active"
                        to="/informatii/alegeri-locale/comunicate"
                        >
                            Comunicate
                        </Link>
                </li>
                <li>
                    <Link
                        className={styles.link}
                        activeClassName="active"
                        to="/informatii/alegeri-locale/hotarari"
                        >
                            Hotarari
                        </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}