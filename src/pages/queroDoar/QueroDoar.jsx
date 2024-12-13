import s from '../queroDoar/queroDoar.module.scss'
import iconeLivro from '../../assets/iconeLivro.png'

export default function QueroDoar(){
    return(
        <main>
            <section className={s.sectionDoacao}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                <form action='#' className={s.formBox}>
                    <div>
                        <img src={iconeLivro} alt=''/>
                        <h2>Informações sobre o livro</h2>
                    </div>

                    <input className={s.formInput} type='text' name='title' id='title' placeholder='Título' />
                    <input className={s.formInput} type='text' name='category' id='category' placeholder='Categoria' />
                    <input className={s.formInput} type='text' name='author' id='author' placeholder='Autor' />
                    <input className={s.formInput} type='text' name='link' id='link' placeholder='Link da Imagem' />
                    <input type='submit' value="Doar" className={s.buttonDoar}/>
                </form>
            </section>
        </main>
    )
}