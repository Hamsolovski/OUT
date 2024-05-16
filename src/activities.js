const activities = [
    // Sport Activities
    {
        category: "sport",
        address: "Roland Garros, 75016 Paris",
        description: "Assistez au célèbre tournoi de tennis de Roland Garros, où les meilleurs joueurs du monde s'affrontent sur terre battue.",
        img: "./assets/images/sport4.avif",
        popular: 'true'
    },
    {
        category: "sport",
        address: "Piscine Molitor, 75016 Paris",
        description: "Participez à des cours de natation pour débutants dans l'emblématique piscine Molitor, un cadre luxueux et historique.",
        img: "./assets/images/sport1.webp",
        popular: 'true'
    },
    {
        category: "sport",
        address: "Mur de l'Escalade, 75014 Paris",
        description: "Testez vos compétences en escalade sur le Mur de l'Escalade, adapté à tous les niveaux, des débutants aux experts.",
        img: "./assets/images/sport2.jpg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Parc des Princes, 75016 Paris",
        description: "Rejoignez un bootcamp de fitness en groupe au Parc des Princes pour améliorer votre condition physique de manière ludique et dynamique.",
        img: "./assets/images/sport5.jpeg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "AccorHotels Arena, 75012 Paris",
        description: "Venez encourager votre équipe préférée lors d'un match de hockey sur glace à l'AccorHotels Arena, une ambiance électrisante garantie.",
        img: "./assets/images/sport3.jpg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Parc de la Villette, 75019 Paris",
        description: "Rejoignez une ligue de frisbee ultime au Parc de la Villette, un sport collectif et convivial qui allie compétition et plaisir.",
        img: "./assets/images/sport1.webp",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Bois de Vincennes, 75012 Paris",
        description: "Détendez-vous avec des séances de yoga en plein air dans le cadre paisible du Bois de Vincennes.",
        img: "./assets/images/sport3.jpg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Stade Charléty, 75013 Paris",
        description: "Assistez à un match de baseball local au Stade Charléty, un sport américain passionnant à découvrir.",
        img: "./assets/images/sport4.avif",
        popular: 'false'
    },
    {
        category: "sport",
        address: "CrossFit Louvre, 75002 Paris",
        description: "Participez à une compétition de CrossFit au CrossFit Louvre, un défi physique intense et stimulant.",
        img: "./assets/images/sport5.jpeg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Stade Sébastien Charléty, 75013 Paris",
        description: "Venez assister à un tournoi de rugby amateur au Stade Sébastien Charléty, une belle occasion de voir du sport en plein cœur de Paris.",
        img: "./assets/images/sport1.webp",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Club de l'Étoile, 75017 Paris",
        description: "Inscrivez-vous à des cours de boxe pour tous niveaux au Club de l'Étoile et apprenez les techniques de cet art martial dans une ambiance conviviale.",
        img: "./assets/images/sport3.jpg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Gymnase Japy, 75011 Paris",
        description: "Participez à des cours de Zumba en soirée au Gymnase Japy pour une séance de fitness rythmée et amusante.",
        img: "./assets/images/sport2.jpg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Piscine Pontoise, 75005 Paris",
        description: "Découvrez la natation synchronisée pour débutants à la Piscine Pontoise, une discipline gracieuse et artistique.",
        img: "./assets/images/sport4.avif",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Parc Montsouris, 75014 Paris",
        description: "Rejoignez une course à pied communautaire au Parc Montsouris et faites de l'exercice tout en rencontrant de nouvelles personnes.",
        img: "./assets/images/sport5.jpeg",
        popular: 'false'
    },
    {
        category: "sport",
        address: "Gymnase Auguste Blanqui, 75013 Paris",
        description: "Inscrivez vos enfants à des cours de basketball au Gymnase Auguste Blanqui, un excellent moyen pour eux de rester actifs et de développer des compétences en équipe.",
        img: "./assets/images/sport1.webp",
        popular: 'false'
    },

    // Culture Activities
    {
        category: "culture",
        address: "Musée du Louvre, 75001 Paris",
        description: "Explorez une exposition d'art au Musée du Louvre mettant en vedette des artistes locaux, une opportunité de découvrir des talents émergents.",
        img: "./assets/images/culture1.jpeg",
        popular: 'true'
    },
    {
        category: "culture",
        address: "Théâtre des Champs-Élysées, 75008 Paris",
        description: "Assistez à une représentation théâtrale en direct au Théâtre des Champs-Élysées, un spectacle captivant dans un cadre prestigieux.",
        img: "./assets/images/culture2.jpeg",
        popular: 'true'
    },
    {
        category: "culture",
        address: "Quartier Latin, 75005 Paris",
        description: "Participez à une visite historique du Quartier Latin et découvrez l'histoire riche et les secrets de ce quartier emblématique de Paris.",
        img: "./assets/images/culture3.webp",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Philharmonie de Paris, 75019 Paris",
        description: "Assistez à un concert de musique classique à la Philharmonie de Paris, une expérience sonore exceptionnelle dans un cadre moderne.",
        img: "./assets/images/culture1.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Bibliothèque nationale de France, 75013 Paris",
        description: "Participez à un événement de lecture et de dédicace à la Bibliothèque nationale de France, une occasion de rencontrer des auteurs et d'explorer des œuvres littéraires.",
        img: "./assets/images/culture2.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "La Villette, 75019 Paris",
        description: "Venez profiter d'un festival culturel à La Villette avec de la nourriture, de la musique et des performances artistiques, une fête pour tous les sens.",
        img: "./assets/images/culture3.webp",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Cinémathèque Française, 75012 Paris",
        description: "Assistez à une projection de film suivie d'une discussion à la Cinémathèque Française, un rendez-vous pour les cinéphiles.",
        img: "./assets/images/culture1.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Sorbonne Université, 75005 Paris",
        description: "Assistez à une conférence publique à la Sorbonne Université sur les enjeux contemporains, animée par des experts et des universitaires.",
        img: "./assets/images/culture2.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Galerie Perrotin, 75003 Paris",
        description: "Découvrez l'inauguration d'une nouvelle exposition à la Galerie Perrotin, mettant en avant le travail d'un artiste contemporain émergent.",
        img: "./assets/images/culture3.webp",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Opéra Garnier, 75009 Paris",
        description: "Assistez à une performance de ballet à l'Opéra Garnier, un spectacle de danse classique dans un cadre somptueux.",
        img: "./assets/images/culture1.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Opéra Bastille, 75012 Paris",
        description: "Profitez d'une soirée d'opéra à l'Opéra Bastille, avec des arias célèbres interprétées par des chanteurs de renommée internationale.",
        img: "./assets/images/culture2.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Cité des Sciences et de l'Industrie, 75019 Paris",
        description: "Visitez une exposition scientifique sur l'exploration spatiale à la Cité des Sciences et de l'Industrie, une aventure éducative pour tous les âges.",
        img: "./assets/images/culture3.webp",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Marché des Enfants Rouges, 75003 Paris",
        description: "Parcourez la foire artisanale au Marché des Enfants Rouges et découvrez des produits faits main uniques et créatifs.",
        img: "./assets/images/culture1.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Maison de la Radio, 75016 Paris",
        description: "Assistez à un débat sur les enjeux politiques actuels à la Maison de la Radio, animé par des journalistes et des experts.",
        img: "./assets/images/culture2.jpeg",
        popular: 'false'
    },
    {
        category: "culture",
        address: "Palais de Tokyo, 75116 Paris",
        description: "Assistez à un défilé de mode au Palais de Tokyo, mettant en vedette des créations de designers locaux et internationaux.",
        img: "./assets/images/culture3.webp",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Jardin des Plantes, 75005 Paris",
        description: "Promenez-vous dans le Jardin des Plantes, un vaste jardin botanique avec une grande variété de plantes, serres tropicales, et une ménagerie.",
        img: "./assets/images/nature1.jpeg",
        popular: 'true'
    },
    {
        category: "nature",
        address: "Bois de Boulogne, 75016 Paris",
        description: "Explorez le Bois de Boulogne, un immense parc urbain offrant des sentiers de randonnée, des lacs pour faire du canotage, et des jardins paysagers.",
        img: "./assets/images/nature2.jpeg",
        popular: 'true'
    },
    {
        category: "nature",            
        address: "Parc des Buttes-Chaumont, 75019 Paris",
        description: "Détendez-vous au Parc des Buttes-Chaumont, un parc pittoresque avec des falaises escarpées, des cascades, et des vues panoramiques sur la ville.",
        img: "./assets/images/nature3.webp",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc Monceau, 75008 Paris",
        description: "Visitez le Parc Monceau, un parc élégant du 19ème siècle avec des statues, des ponts et un grand étang, idéal pour une promenade paisible.",
        img: "./assets/images/nature1.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Bois de Vincennes, 75012 Paris",
        description: "Découvrez le Bois de Vincennes, le plus grand espace vert de Paris, offrant des sentiers de randonnée, un zoo, des jardins botaniques et un lac pour faire du bateau.",
        img: "./assets/images/nature2.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc de la Villette, 75019 Paris",
        description: "Profitez des espaces verts du Parc de la Villette, avec ses jardins thématiques, ses installations artistiques et ses événements en plein air.",
        img: "./assets/images/nature3.webp",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Jardin du Luxembourg, 75006 Paris",
        description: "Promenez-vous dans le Jardin du Luxembourg, célèbre pour ses magnifiques parterres de fleurs, ses sculptures et son grand bassin central.",
        img: "./assets/images/nature1.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc de Bercy, 75012 Paris",
        description: "Explorez le Parc de Bercy, un espace vert moderne avec des jardins à thème, des vignes, et des aires de jeux pour enfants.",
        img: "./assets/images/nature2.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc André Citroën, 75015 Paris",
        description: "Découvrez le Parc André Citroën, un parc contemporain avec des serres tropicales, des jardins en mouvement et une vue panoramique depuis le ballon captif.",
        img: "./assets/images/nature3.webp",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Jardin d'Acclimatation, 75116 Paris",
        description: "Visitez le Jardin d'Acclimatation, un parc d'attractions historique avec des jardins, des manèges et des activités pour toute la famille.",
        img: "./assets/images/nature1.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Square du Vert-Galant, 75001 Paris",
        description: "Détendez-vous au Square du Vert-Galant, un petit jardin charmant situé à la pointe de l'Île de la Cité, offrant une vue imprenable sur la Seine.",
        img: "./assets/images/nature2.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc Floral de Paris, 75012 Paris",
        description: "Explorez le Parc Floral de Paris, un grand jardin botanique avec des collections de plantes, des concerts en plein air et des aires de jeux.",
        img: "./assets/images/nature3.webp",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Jardin des Tuileries, 75001 Paris",
        description: "Promenez-vous dans le Jardin des Tuileries, un parc historique entre le Louvre et la Place de la Concorde, avec des statues, des bassins et des allées ombragées.",
        img: "./assets/images/nature1.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc Montsouris, 75014 Paris",
        description: "Détendez-vous au Parc Montsouris, un grand parc avec des pelouses, des lacs artificiels et des sentiers ombragés, parfait pour un pique-nique.",
        img: "./assets/images/nature2.jpeg",
        popular: 'false'
    },
    {
        category: "nature",
        address: "Parc de Belleville, 75020 Paris",
        description: "Profitez des vues panoramiques sur Paris depuis le Parc de Belleville, un parc en terrasses avec des jardins, des aires de jeux et des œuvres d'art.",
        img: "./assets/images/nature3.webp",
        popular: 'false'
    }
    ]
    
 export default activities;  
