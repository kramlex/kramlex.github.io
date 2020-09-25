import {faGithub, faGoogle, faInstagram, faTelegram} from '@fortawesome/free-brands-svg-icons';

export const titleTexts = [
    3500,
    `I'm Junior frontend developer `, 1000, `I'm ` , 1000,
    `I'm student at NSU 🤓`, 1000, `I'm `, 1000,
    `I'm interested in UI/UX design`, 1000, `I `, 1000,
    `I practice in machine learning` , 1000, `I `, 1000,
    `I live in Omsk`, 1000, `I live in Omsk Ooops 🤭`, 1500, `I live in Novosibirsk`, 1000,
    `I play sport mafia`, 1000, `I'm `, 1000,
]

export const EXTERNAL_LINKS = {
    github : {
        link: 'https://github.com/kramlex',
        icon: ['fab', 'github'],
        faIcon: faGithub
    },
    gmail : {
        link: 'mailto:mark.dubkov@gmail.com',
        icon: ['fab', 'google'],
        faIcon: faGoogle
    },
    instagram: {
        link: 'https://instagram.com/d__marq',
        icon: ['fab', 'instagram'],
        faIcon: faInstagram
    },
    telegram: {
        link: 'https://tlgg.ru/kramlex',
        icon: ['fab', 'telegram'],
        faIcon: faTelegram
    },
}