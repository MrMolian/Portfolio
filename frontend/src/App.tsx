import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import osClayContent from "../content/projects/osclay.md?raw";

function App() {
    return (
        <main>
            <a className="skip-link" href="#main-content">Skip to content</a>

            <section className="hero" id="main-content" aria-labelledby="intro-title">
                <img className="hero__image" src="/founder-hero.png" alt="Abstract brushed-metal sculpture, generated as a visual interpretation of precision and motion" />
                <div className="hero__shade" aria-hidden="true" />
                <header className="hero__nav">
                    <a className="hero__monogram" href="#intro-title" aria-label="Moaad Barkache home">MB</a>
                    <nav aria-label="Primary navigation">
                        <a href="#about">Profile</a>
                        <a href="#projects">Work</a>
                        <a href="#connect">Contact</a>
                    </nav>
                    <p>Brussels, Belgium</p>
                </header>
                <div className="hero__statement">
                    <p className="hero__eyebrow">Founder / Physicist / Builder</p>
                    <h1 id="intro-title">Moaad<br /><i>Barkache</i></h1>
                    <p className="hero__location">A personal body of work<br />informed by curiosity.</p>
                </div>
                <a className="hero__scroll" href="#about">Explore <span aria-hidden="true">↓</span></a>
            </section>

            <section className="profile" id="about" aria-labelledby="about-title">
                <p className="section-label">01 / Profile</p>
                <div className="profile__copy">
                    <h2 id="about-title">The pursuit of a better <em>question.</em></h2>
                    <p>I am Moaad, a Belgian tech entrepreneur, co-founder of OsClay, and physicist. I build at the intersection of curiosity, craft, and conviction.</p>
                </div>
                <dl className="profile__facts">
                    <div><dt>Based</dt><dd>Belgium</dd></div>
                    <div><dt>Focus</dt><dd>Technology &amp; physics</dd></div>
                    <div><dt>Now</dt><dd>Building OsClay</dd></div>
                </dl>
            </section>

            <section className="work" id="projects" aria-labelledby="work-title">
                <header className="section-heading">
                    <p className="section-label">02 / Selected work</p>
                    <h2 id="work-title">What I am<br /><em>building.</em></h2>
                </header>

                <article className="project" aria-labelledby="osclay-title">
                    <div className="project__visual">
                        <img src="/osclay-logo.png" alt="OsClay logo" />
                        <p>01 / Current</p>
                    </div>
                    <div className="project__body">
                        <div className="project__title-row">
                            <h3 id="osclay-title">OsClay</h3>
                            <a href="https://osclay.com" target="_blank" rel="noreferrer" aria-label="Visit OsClay">↗</a>
                        </div>
                        <p className="project__role">Co-founder / Current</p>
                        <div className="project__content">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{osClayContent}</ReactMarkdown>
                        </div>
                    </div>
                </article>
            </section>

            <section className="contact" id="connect" aria-labelledby="contact-title">
                <p className="section-label">03 / Contact</p>
                <h2 id="contact-title">For the things<br />worth <em>making.</em></h2>
                <a className="contact__email" href="mailto:contact@moaadb.com">contact@moaadb.com <span aria-hidden="true">↗</span></a>
                <div className="contact__links">
                    <a href="https://www.linkedin.com/in/moaad-barkache" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
                    <a href="https://www.instagram.com/baba_momo911" target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
                    <a href="https://www.youtube.com/@MrMolian" target="_blank" rel="noreferrer">YouTube <span>↗</span></a>
                    <a href="https://x.com/moaadontop" target="_blank" rel="noreferrer">X <span>↗</span></a>
                </div>
            </section>

            <footer>
                <p>© {new Date().getFullYear()} Moaad Barkache</p>
                <p>Made in Belgium</p>
                <a href="#intro-title">Back to top ↑</a>
            </footer>
        </main>
    );
}

export default App;
