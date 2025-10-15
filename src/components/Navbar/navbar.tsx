import { Button } from '../Button/Button';
import arrow from '../../assets/right-arrow.svg';
import './style.css';
import { useState } from 'react';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        setOpen(!open);
    };
    return (
        <div className='container layout'>
            <span className='francy my-name'>Gianluca</span>
            <button
                onClick={onClick}
                className='hamburguer-menu'
            >
                <span className={`${open && 'open'}`}></span>
            </button>
            <nav className={`${open && 'open'}`}>
                <ul>
                    <li>
                        <a
                            target='_self'
                            href='#about-me'
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            target='_self'
                            href='#my-work'
                        >
                            Mi trabajo
                        </a>
                    </li>
                    <li>
                        <a
                            target='_self'
                            href='#contact'
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <Button
                            as='a'
                            href='https://drive.google.com/file/d/1IhxqT2acioB85Vg-_gACmg7r81V8ZIHY/view?usp=sharing'
                            className='cv-cat'
                        >
                            Curriculum {' '}
                            <img
                                src={arrow}
                                alt=''
                            />
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
