module.exports = {
    siteTitle: 'Taofeek F. Obafemi-Babatunde | Software Engineer',
    siteDescription: 'Taofeek F. Obafemi-Babatunde is a software engineer with 6+ years of experience building large-scale platform infrastructure at Microsoft, specializing in CI/CD automation, service reliability, and Microsoft Graph platform engineering.',
    siteKeywords: 'Taofeek Obafemi-Babatunde, Fehintola, Fehintola Obafemi-Babatunde, fehintola obafemi, FehintolaObafemi, software engineer, platform engineer, Microsoft Graph, CI/CD, DevOps, cloud infrastructure, Bicep, PowerShell, TypeScript, C#, Microsoft Azure, Morgan State University',
    siteUrl: 'https://fehintolaobafemi.com',
    siteLanguage: 'en_US',
    googleAnalyticsID: 'UA-45666519-2',
    googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
    name: 'Taofeek F. Obafemi-Babatunde',
    location: 'Austin, TX',
    email: 'taofeekobafemibabatunde@gmail.com',
    github: 'https://github.com/FehintolaObafemi',
    socialMedia: [{
            name: 'GitHub',
            url: 'https://github.com/FehintolaObafemi',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/taofeek-obafemi-babatunde',
        },
        {
            name: 'Website',
            url: 'https://fehintola.art/',
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