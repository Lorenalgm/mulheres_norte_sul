import React from 'react';
import Header from '../../components/Header';
import Speaker from '../../components/Speaker';
import Event from '../../components/Event';
import Footer from '../../components/Footer';
import './styles.css';
import woman from '../../assets/woman.png';

function Home(){
    return(
        <div className="container">
            <section className="section-hero">
                <Header />

                <div className="hero-content">
                    <h1>Mulheres na computação</h1>
                    <h2>De norte a sul</h2>

                    <a className="button" href="#">Quero participar</a>
                </div>
            </section>

            <section className="section-about">
                <div className="about-content">
                    <h1>Sobre</h1>
                    <p>Evento de <strong>incentivo à meninas na computação</strong> realizado pelos 
                        projetos Meninas na Computação - UNIFAP e Gurias da Computação - UNIPAMPA</p>

                    <span>100% online e gratuito</span>
                </div>
                
                <img src={woman} alt="Vetor de mulher utilizando computador" />
            </section>
            
            <section className="section-calendar">
                <h1 id="calendar-title">Agenda de eventos</h1>
                <Event date="28/08" time="18h" type="Bate papo" title="Projetos de incentivo à meninas na computação" />
                <Event date="28/08" time="18h" type="Bate papo" title="Projetos de incentivo à meninas na computação" />
                <Event date="28/08" time="18h" type="Bate papo" title="Projetos de incentivo à meninas na computação" />
            </section>
            
            <section className="section-speakers">
                <Speaker 
                    name="Luana Mendes" 
                    position="Engenheira de software na IBM" 
                    profile="https://avatars0.githubusercontent.com/u/19291466?s=460&v=4"
                    link="https://forms.gle/KGVqppoL3otP7MKC6" 
                />

                <Speaker 
                    name="Paula Lima" 
                    position="Professora na UNIFAP" 
                    profile="https://avatars0.githubusercontent.com/u/19291466?s=460&v=4"
                    link="https://forms.gle/KGVqppoL3otP7MKC6" 
                />

                <Speaker 
                    name="Fernanda Silva" 
                    position="Desenvolvedora no Google" 
                    profile="https://avatars0.githubusercontent.com/u/19291466?s=460&v=4"
                    link="https://forms.gle/KGVqppoL3otP7MKC6" 
                />

            </section>

            <Footer />
        </div>
    );
}

export default Home;