import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";
import logo from "../../assets/logoLivro.png";
import lupa from "../../assets/lupa.png";
import s from "../header/header.module.scss";

export default function Header() {
    return (
        <BrowserRouter>
            <header className={s.header}>
                <section className={s.headerLogo}>
                    <img src={logo} alt="Logo" />
                    <h1>Livros Vai na Web</h1>
                </section>

                <nav className={s.headerNav}>
                    <ul className={s.headerList}>
                        <li className={s.headerItem}>
                            <a className={s.headerLink} href="/">
                                Início
                            </a>
                        </li>
                        <li className={s.headerItem}>
                            <a className={s.headerLink} href="/doados">
                                Livros Doados
                            </a>
                        </li>
                        <li className={s.headerItem}>
                            <a className={s.headerLink} href="/doar">
                                Quero Doar
                            </a>
                        </li>
                    </ul>
                </nav>

                <section className={s.headerSearch}>
                    <input type="search" name="search" id="search" placeholder="O que você procura?" />
                    <button>
                        <img src={lupa} alt="Pesquisar" />
                    </button>
                </section>
            </header>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/doados" element={<LivrosDoados />} />
                <Route path="/doar" element={<QueroDoar />} />
            </Routes>
        </BrowserRouter>
    );
}