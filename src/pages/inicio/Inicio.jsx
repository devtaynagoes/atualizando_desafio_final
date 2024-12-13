import s from "./inicio.module.scss";
import Comunidade from "../../assets/comunidade.png";
import Leitura from "../../assets/leitura.png";
import Unidos from "../../assets/unidos.png";
import Justica from "../../assets/justica.png";

export default function Inicio() {
    return (
        <main className="s.Main">
            <section className={s.sectionFirst}>
                <h2>Venha fazer parte da maior rede de doação</h2>
            </section>

            <section className={s.sectionInfo}>
                <h2>Por que devo doar?</h2>

                <section className={s.sectionCards}>
                    <article>
                        <img src={Comunidade} alt="imagem" />
                        <p>
                        Oferece livros a quem não tem acesso, ajudando a reduzir a
                        exclusão social.
                        </p>
                    </article>

                <article>
                    <img src={Leitura} alt="imagem" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>

                <article>
                    <img src={Unidos} alt="imagem" />
                    <p>
                    Fornece conhecimento e inspiração, permitindo que indivíduos
                    transformem suas vidas.
                    </p>
                </article>

                <article>
                    <img src={Justica} alt="imagem" />
                    <p>
                    Garante que todos, independentemente de sua condição, tenham
                    oportunidades de aprendizado.
                    </p>
                </article>
                </section>
            </section>
        </main>
    );
}
