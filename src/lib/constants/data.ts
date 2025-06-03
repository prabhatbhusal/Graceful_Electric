import { navbar } from '@/@types/navbar.types';
import { FooterSection } from '@/@types/common.types';
import { Testimonial } from '@/@types/common.types';
import { Feature } from '@/@types/common.types';
import { GalleryImage } from '@/@types/common.types';
import { Stats } from '@/@types/common.types';


export const Navbar: navbar[] = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    }, {
        id: 2,
        title: "About",
        url: '/about'
    },
    {
        id: 3,
        title: "Services",
        url: '/services',
    },
    {
        id: 4,
        title: "Gallery",
        url: '/gallery',
    },
    {
        id: 5,
        title: "Contact",
        url: '/contact',
    }
]

export const footer: FooterSection[] = [
    {
        id: 1,
        title: 'Services',
        item: [
            { name: 'Troubleshooting' },
            { name: 'Remodeling' },
            { name: 'Panel Replacement' },
            { name: 'Electrical Vehicle Chargers' },
            { name: 'Commercial Circuit additions' },
            { name: 'Small Tenant Improvements' },
        ]
    },
    {
        id: 2,
        title: 'Service Area',
        item: [
            { name: 'Redmond' },
            { name: 'Bend' },
            { name: 'Tumalo' },
            { name: 'Terrebonne' },
            { name: 'Culver' },
            { name: 'Powell Butte' },
            { name: 'Crooked River Ranch' },
            { name: 'Alfalfa' },

        ]
    },
    {
        id: 3,
        title: 'Legal',
        item: [
            { name: 'Privacy Policy' },
            { name: 'Terms of Use' },
            { name: 'License Info' },
        ]
    },
    
]



export const reviews: Testimonial[] = [
    {
        name: 'David H',
        rating: 5,
        message: 'Jacob did a great job. He was able to install the outlet very quickly. Extremely professional and I could not be happier with his work.',
        service: 'Install Electrical Switches, Outlets, or Fixture'
    },
    {
        name: 'Joy B',
        rating: 5,
        message: 'I would proudly refer anyone looking for an expert electrician who truly puts people first and money second to book with Jacob. I just can’t say enough great...',
        service: 'Upgrade an Electrical Panel'
    },
    {
        name: 'John S',
        rating: 5,
        message: 'Grace Electric is absolutely wonderful to deal with. Jacob is professional, personable and just all around pleasant. The work was done with the upmost car...',
        service: 'Upgrade an Electrical Panel'
    },
    {
        name: 'David H',
        rating: 5,
        message: 'Jacob did a great job. He was able to install the outlet very quickly. Extremely professional and I could not be happier with his work.',
        service: 'Install Electrical Switches, Outlets, or Fixture'
    },
    {
        name: 'Joy B',
        rating: 5,
        message: 'I would proudly refer anyone looking for an expert electrician who truly puts people first and money second to book with Jacob. I just can’t say enough great...',
        service: 'Upgrade an Electrical Panel'
    },
    {
        name: 'John S',
        rating: 5,
        message: 'Grace Electric is absolutely wonderful to deal with. Jacob is professional, personable and just all around pleasant. The work was done with the upmost car...',
        service: 'Upgrade an Electrical Panel'
    }
];

export const Features: Feature[] = [
    {
        id: 1,
        title: 'Licensed & Insured',
        description: 'Fully certified for residential and commercial electrical work — your safety is our priority.',
        url: '/icons/insurance.svg', // Replace with your url reference or path
    },
    {
        id: 2,
        title: 'Fast & Dependable',
        description: 'We show up on time and get the job done right — no delays, no excuses.',
        url: '/icons/quick.svg', // Replace with your url reference or path
    },
    {
        id: 3,
        title: 'Transparent Pricing',
        description: 'Clear, upfront estimates with no hidden fees — just honest, fair work.',
        url: '/icons/money.svg', // Replace with your url reference or path
    },
    {
        id: 4,
        title: 'Quality Workmanship',
        description: 'We use top-grade materials and follow strict safety codes on every project.',
        url: '/icons/reliability.svg' // Replace with your url reference or path
    },
];



export const Gallery: GalleryImage[] = [
    {
        id: 1,
        src: '/gallery/image1.png',
        alt: 'Electrical panel with multiple breakers and wiring'
    },
    {
        id: 2,
        src: '/gallery/image2.png',
        alt: 'Electrician measuring voltage in a distribution board'
    },
    {
        id: 3,
        src: '/gallery/image3.png',
        alt: 'Technician working on a large electrical cabinet'
    },
    {
        id: 4,
        src: '/gallery/image4.png',
        alt: 'Electrician inspecting and working on electrical systems'
    },
    {
        id: 5,
        src: '/gallery/image5.png',
        alt: 'Electrical tools including pliers and a multimeter'
    }
];
export const stats:Stats[] = [
    {
        id: 1,
        value: "300+",
        label: "Successful Projects"
    },
    {
        id: 2,
        value: "5+",
        label: "Experienced Staff"
    },
    {
        id: 3,
        value: "5+",
        label: "Years Experience"
    },
    {
        id: 4,
        value: "300+",
        label: "Satisfied Clients"
    }
];

export const image=[
{   id:'01',
    title:'RESIDENTIAL SERVICES',
    src:'/gallery/residential.png',
    alt:'Residential Services Image'

},
{   id:'02',
    title:'COMMERCIAL SERVICES',
    src:'/gallery/commercial.png',
    alt:'Residential Services Image'

},
{   id:'03',
    title: 'INDUSTRIAL SERVICES',
    src: '/gallery/industrial.png',
    alt: 'Industrial Services Image'
}]
export const about=[
    {
        id: 1,
        title: "ABOUT ",
        title1: " GRACE ELECTRICAL",
        content: "Grace Electric LLC is a fully licensed and insured electrical company gratefully serving Central Origen. With 5+ years of industry experience, we specialize in residential, commercial, and emergency electrical services. Our team is committed to safety, precision, and customer satisfaction — whether it's a small repair or a full-scale installation.",
        content1:"From the first wire to the final switch, we focus on doing the job right the first time. At Grace Electric, we don't just deliver power — we deliver peace of mind.",
        url:'/images/about.png'
    },
    {
        id: 2,
        title: "OUR ",
        title1:"MISSION & VALUES",
        content: "Grace Electric LLC is a fully licensed and insured electrical company gratefully serving Central Origen. With 5+ years of industry experience, we specialize in residential, commercial, and emergency electrical services. Our team is committed to safety, precision, and customer satisfaction — whether it's a small repair or a full-scale installation.",
        content1:"From the first wire to the final switch, we focus on doing the job right the first time. At Grace Electric, we don't just deliver power — we deliver peace of mind.",
        url:'/images/mission.png'
    }
]