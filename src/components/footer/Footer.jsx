import s from "./footer.module.scss";
import facebook from "../../assets/face.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

export default function Footer() {
    return (
        <footer className={s.footer}>
            <section className={s.sectionFooter}>
                <p>(00) 0000-0000</p>

                <nav>
                    <a href="/">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="/">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="/">
                        <img src={youtube} alt="Youtube" />
                    </a>
                    <a href="/">
                        <img src={linkedin} alt="Linkedin" />
                    </a>
                    <a href="/">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </nav>
            </section>

            <section className={s.copyright}>
                <p>Layout Desenvolvido para fins educacionais do curso VaiNaWeb - Tayná Goes</p>
            </section>
        </footer>
    );
}
