export interface Project {
    id: string;
    title: string;
    desc: string;
    image: string;
    link: string;
    techStack: string[];
}

export const projects: Project[] = [
    {
        id: 'PRJ_01',
        title: 'IROSHI',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137327/36032ed7-4d72-49c9-b2e1-d4683abb6e19.png",
        desc: 'Top-down roguelike action game with handcrafted combat and enemy systems.',
        link: 'https://idkwhystudios.itch.io/iroshi',
        techStack: ['Godot', 'GDScript', 'Aseprite']
    },
    {
        id: 'PRJ_02',
        title: 'LUMILOOP',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137449/4234b050-ea2a-40e9-869d-f54c84d17004.png",
        desc: 'Puzzle-platformer focused on spatial reasoning. Built for Hackade ’25 (CSI TKMCE).',
        link: 'https://idkwhystudios.itch.io/lumiloop',
        techStack: ['Godot', 'GDScript', 'Aseprite']
    },
    {
        id: 'PRJ_03',
        title: 'FIXTURES',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137545/ad96f32a-1dd5-4c42-92df-4b7c9ac3c6af.png",
        desc: 'Web-based tournament management system with CRUD operations and role handling.',
        link: 'https://trunkcat.github.io/fixtures/',
        techStack: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
        id: 'PRJ_04',
        title: 'FULLPLATE',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137449/4234b050-ea2a-40e9-869d-f54c84d17004.png",
        desc: '2D cooking and restaurant management game with backend-driven logic.',
        link: 'https://github.com/trunkcat/fullplate',
        techStack: ['LibGDX', 'Node.js', 'Oak']
    },
    {
        id: 'PRJ_05',
        title: 'H.E.A.R.T',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137327/36032ed7-4d72-49c9-b2e1-d4683abb6e19.png",
        desc: 'Frontend system for explainable housing analysis and risk assessment. Built for TKMIT Codex ’26.',
        link: 'https://github.com/Swassyman/heart-frontend',
        techStack: ['SvelteKit', 'Node.js', 'MongoDB']
    },
    {
        id: 'PRJ_06',
        title: 'PAWNDER',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137742/a67f5e8f-ba8b-4445-a157-bd03b4f6c85f.png",
        desc: 'Geolocation-based stray animal reporting and adoption platform with heatmaps and emergency contacts.',
        link: 'https://github.com/Swassyman/pawnder-backend',
        techStack: ['Kotlin', 'Node.js', 'Express', 'PostgreSQL']
    },
    {
        id: 'PRJ_07',
        title: 'GD CREDITS',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137327/36032ed7-4d72-49c9-b2e1-d4683abb6e19.png",
        desc: 'Reusable credits splash screen module for Godot 4.5 projects.',
        link: 'https://github.com/Swassyman/GD-Credits',
        techStack: ['GDScript']
    },
    {
        id: 'PRJ_08',
        title: 'ROOMBOX SERVER',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137327/36032ed7-4d72-49c9-b2e1-d4683abb6e19.png",
        desc: 'Backend server implementation for Roombox communication and control.',
        link: 'https://github.com/Swassyman/roombox-server',
        techStack: ['Python']
    },
    {
        id: 'PRJ_09',
        title: 'LAWFULAI',
        image: "https://res.cloudinary.com/dc3mkvyxy/image/upload/v1771137327/36032ed7-4d72-49c9-b2e1-d4683abb6e19.png",
        desc: 'AI-powered legal advice chatbot developed for SCTCE Hackathon ’24.',
        link: 'https://github.com/Swassyman/lawful-ai#',
        techStack: ['FastAPI', 'HTML', 'CSS', 'JavaScript']
    }
];
