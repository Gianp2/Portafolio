import { Button } from "../components/Button/Button";
import { SocialMediaLogos } from "../components/SocialMediaLogos/social-media-logos";
import avatar from "../assets/screenshots/avatar.png";
import "../styles/avatar.css"; 

export const Welcome = () => {
    return (
        <article className="welcome container page-height">
            <div className="welcome__heading">
                <img
                    src={avatar}
                    alt="Avatar de Gianluca Pasquinelli"
                    className="welcome__avatar"
                />
                <span className="welcome__name">Gianluca Pasquinelli</span>
                <h1 className="francy">Desarrollador Full Stack</h1>
                <SocialMediaLogos direction="horizontal" />
                <div className="welcome__available-badge">
                    <span>Disponible para trabajar</span>
                </div>
            </div>

            <p className="welcome__paragraph">
                Hola, soy Gianluca, un{" "}
                <span className="color-primary w-700">
                    Desarrollador Full Stack
                </span>{" "}
                enfocado en crear{" "}
                <span className="color-primary w-700">
                    aplicaciones web dinámicas y fáciles de usar
                </span>{" "}
                que ofrecen experiencias fluidas en todos los dispositivos. Me
                especializo en construir soluciones{" "}
                <span className="color-primary w-700">
                    eficientes, escalables y fáciles de mantener
                </span>
                . ¡Explorá mi portafolio a continuación para ver cómo hago realidad las ideas a través de la tecnología!
            </p>

            <Button
                as="a"
                href="mailto:gianpasquinelli24@gmail.com"
                className="welcome__button"
            >
                ¡Hablemos!
            </Button>

            <a
                href="mailto:gianpasquinelli24@gmail.com"
                className="welcome__mail"
            >
                gianpasquinelli24@gmail.com
            </a>

            <SocialMediaLogos
                className="welcome__vertical-line"
                direction="vertical"
            />
        </article>
    );
};
