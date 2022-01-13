module.exports = {
    siteTitle: 'Taofeek F. Obafemi-Babatunde | Software Engineer',
    siteDescription: 'Taofeek F. Obafemi-Babatunde is a quantum/software engineer currently based in Baltimore, MD who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteKeywords: 'Taofeek Obafemi-Babatunde, Fehintola, Fehintola Obafemi-Babatunde, fehintola obafemi, FehintolaObafemi, software engineer, front-end engineer, web developer, javascript, morgan state, machine learning, cloud computing, artificial intelligence, photographer, quantum researcher',
    siteUrl: 'https://fehintolaobafemi.com',
    siteLanguage: 'en_US',
    googleAnalyticsID: 'UA-45666519-2',
    googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
    name: 'Taofeek F. Obafemi-Babatunde',
    location: 'Baltimore, MD',
    email: 'taofeekobafemibabatunde@gmail.com',
    github: 'https://github.com/FehintolaObafemi',
    twitterHandle: 'xx_fehintola',
    socialMedia: [{
            name: 'GitHub',
            url: 'https://github.com/FehintolaObafemi',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/taofeek-obafemi-babatunde',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/fehin.tola',
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/xx_fehintola',
        },
        {
            name: 'Website',
            url: 'https://fobafemi.netlify.app/',
        },
    ],

    navLinks: [{
            name: 'About',
            url: '/#about',
        },
        {
            name: 'Experience',
            url: '/#jobs',
        },
        {
            name: 'Work',
            url: '/#projects',
        }, {
            name: 'Certification(s)',
            url: '/#certifications',
        },
        {
            name: 'Contact',
            url: '/#contact',
        },
    ],

    navHeight: 100,

    colors: {
        green: '#64ffda',
        navy: '#0a192f',
        darkNavy: '#020c1b',
    },

    srConfig: (delay = 200) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};