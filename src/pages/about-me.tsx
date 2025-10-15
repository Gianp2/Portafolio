import { Card } from '../components/card/card';

export const AboutMe = () => {
  const age =
    new Date(Date.now() - new Date('2002-07-07').getTime()).getFullYear() -
    1970;

  return (
    <article id='about-me' className='about-me container page-height'>
      <section>
        <h2>Sobre mí</h2>
        <div>
          <p>
            ¡Hola! Soy <span className='color-primary w-700'>Gianluca Pasquinelli</span>, 
            un desarrollador de software en formación de {age} años, apasionado por crear soluciones web modernas, optimizadas y atractivas visualmente.
            <br />
            Mi enfoque combina código limpio, diseño funcional y tecnologías innovadoras para ofrecer experiencias digitales únicas.
          </p>
          <p>
            Si tenés un proyecto en mente o querés conversar,{' '}
            <span className='color-primary w-700'>
              ¡no dudes en contactarme!
            </span>
          </p>
        </div>
      </section>

      <section>
        <h3>Habilidades & Herramientas</h3>
        <div className='about-me__grid'>
          <div className='about-me__grid-two-thirds about-me__flex-vertical'>
            <div className='about-me__flex'>
              <Card>
                <h4>Lenguajes de programación</h4>
                <hr />
                <ul>
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>PHP</li>
                </ul>
              </Card>

              <Card>
                <h4>Frameworks / Librerías / Frontend</h4>
                <hr />
                <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                </ul>
              </Card>
            </div>

            <div>
              <Card className='about-me__languages-card'>
                <h4>Bases de datos & Backend</h4>
                <hr />
                <ul>
                  <li>MySQL</li>
                  <li>SQLite</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className='about-me__grid-one-third'>
            <Card>
              <h4>Otras herramientas & métodos</h4>
              <hr />
              <ul>
                <li>Git / GitHub</li>
                <br></br>
                <li>Figma</li>
                <br></br>
                <li>VS Code</li>
                <br></br>
                <li>Scrum / Agile</li>
                <br></br>
                <li>UML</li>
                <br></br>
                <li>CI / CD</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </article>
  );
};
