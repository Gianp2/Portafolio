import { useState } from 'react';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button/Button';
import { Card } from '../components/card/card';
import Bar from '../assets/screenshots/bar.png';
import Coffe from '../assets/screenshots/coffe.png';
import InkArt from '../assets/screenshots/inkart.png';

type TCard = {
    title: string;
    img: string;
    tags: string[];
    description: string;
    buttons: {
        to: string;
        text: string;
    }[];
};

const cards_content: TCard[] = [
    {
        title: 'Bar Cocteleria // Página para bar 🍻',
        img: Bar,
        tags: ['HTML', 'CSS', 'JavaScript','Firebase'],
        description:
            'Un sitio web moderno y elegante para un bar de cócteles. Incluye un diseño atractivo, elementos interactivos y una estructura completamente adaptable a todos los dispositivos.',
        buttons: [
            { text: 'Ver sitio', to: 'https://bar1985.vercel.app/' },
            { text: 'GitHub', to: 'https://github.com/Gianp2' },
        ],
    },

    {
        title: 'Coffe LP // Landing page para cafetería ☕',
        img: Coffe,
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        description:
            'Landing page diseñada para una cafetería, con un estilo elegante, transiciones suaves y una estructura optimizada para la mejor experiencia de usuario.',
        buttons: [
            { text: 'Ver sitio', to: 'https://coffelp.vercel.app/' },
            { text: 'GitHub', to: 'https://github.com/Gianp2' },
        ],
    },
    {
        title: 'InkArt // Estudio de tatuajes ✒️',
        img: InkArt,
        tags: ['React','HTML', 'Tailwind', 'Animaciones'],
        description:
            'Sitio web dinámico y creativo para un estudio de tatuajes. Incluye animaciones fluidas, diseño interactivo y una experiencia totalmente responsive.',
        buttons: [
            { text: 'Ver sitio', to: 'https://studio-mauve-eight-58.vercel.app/' },
            { text: 'GitHub', to: 'https://github.com/Gianp2' },
        ],
    },
    
];



export const MyWork = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const handleOpen = (index: number) => {
        return () => setOpenAccordion(openAccordion !== index ? index : null);
    };

    return (
        <article className='my-work container page-height' id='my-work'>
            <h2>¡Mirá lo que puedo hacer!</h2>
            <div className='cards-container'>
                {cards_content.map((card, i) => (
                    <article key={card.title}>
                        <Card className='project-card'>
                            <h3>{card.title}</h3>
                            <img src={card.img} alt={card.title} />
                            <div className='tags'>
                                {card.tags.map((tag) => (
                                    <Card key={tag}>{tag}</Card>
                                ))}
                            </div>
                            <p title={card.description} className='w-400'>
                                {card.description}
                            </p>

                            <Accordion
                                handleOpen={handleOpen(i)}
                                open={openAccordion === i}
                                text='Ver más'
                            >
                                <div className='accordion-children'>
                                    {card.buttons.map((button) => (
                                        <Button key={button.to} href={button.to} as='a'>
                                            {button.text}
                                        </Button>
                                    ))}
                                </div>
                            </Accordion>
                        </Card>
                    </article>
                ))}
            </div>
            <p>
                ¿Querés ver más proyectos?{' '}
                <a href='https://github.com/Gianp2' target='_blank' rel='noreferrer'>
                    Visitá mi perfil de GitHub{' '}
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g clipPath='url(#clip0_796_274)'>
                            <path
                                d='M19.27 8.23255L15.4483 4.41089L14.27 5.58922L17.8217 9.14172L0 9.16672V10.8334L17.8717 10.8084L14.2692 14.4109L15.4475 15.5892L19.27 11.7676C19.7373 11.298 19.9996 10.6625 19.9996 10.0001C19.9996 9.33762 19.7373 8.70213 19.27 8.23255Z'
                                fill='#5e5bff'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_796_274'>
                                <rect width='20' height='20' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </p>
        </article>
    );
};
