const TRANSLATIONS = {
  'nav.home':    { es: 'Inicio',             en: 'Home',            fr: 'Accueil',       de: 'Startseite',    pt: 'Início' },
  'nav.projects':{ es: 'Proyectos',          en: 'Projects',        fr: 'Projets',       de: 'Projekte',      pt: 'Projetos' },
  'nav.studies': { es: 'Estudios y Trabajo', en: 'Studies & Work',  fr: 'Études & Travail', de: 'Studium & Arbeit', pt: 'Estudos e Trabalho' },
  'nav.hobbies': { es: 'Aficiones',          en: 'Hobbies',         fr: 'Loisirs',       de: 'Hobbys',        pt: 'Passatempos' },
  'nav.blog':    { es: 'Blog',               en: 'Blog',            fr: 'Blog',          de: 'Blog',          pt: 'Blog' },
  'nav.play':    { es: 'Jugar',              en: 'Play',            fr: 'Jouer',         de: 'Spielen',       pt: 'Jogar' },
  'nav.contact': { es: 'Contacto',          en: 'Contact',         fr: 'Contact',       de: 'Kontakt',       pt: 'Contacto' },

  // ── Contact page ───────────────────────────────────────────────────────────
  'contact.heading':     { es: 'Contacto',              en: 'Contact',              fr: 'Contact',              de: 'Kontakt',              pt: 'Contacto' },
  'contact.intro':       { es: '¿Tienes una propuesta, pregunta o simplemente quieres saludar? Rellena el formulario y te responderé lo antes posible.', en: 'Have a proposal, a question or just want to say hi? Fill in the form and I\'ll get back to you as soon as possible.', fr: 'Tu as une proposition, une question ou tu veux juste dire bonjour ? Remplis le formulaire et je te répondrai dès que possible.', de: 'Hast du einen Vorschlag, eine Frage oder willst einfach Hallo sagen? Füll das Formular aus und ich melde mich so schnell wie möglich.', pt: 'Tens uma proposta, uma pergunta ou apenas queres dizer olá? Preenche o formulário e responderei o mais rápido possível.' },
  'contact.label.name':  { es: 'Nombre',                en: 'Name',                 fr: 'Nom',                  de: 'Name',                 pt: 'Nome' },
  'contact.label.email': { es: 'Email',                 en: 'Email',                fr: 'Email',                de: 'E-Mail',               pt: 'Email' },
  'contact.label.subject':{ es: 'Asunto',               en: 'Subject',              fr: 'Sujet',                de: 'Betreff',              pt: 'Assunto' },
  'contact.label.msg':   { es: 'Mensaje',               en: 'Message',              fr: 'Message',              de: 'Nachricht',            pt: 'Mensagem' },
  'contact.ph.name':     { es: 'Tu nombre',             en: 'Your name',            fr: 'Ton nom',              de: 'Dein Name',            pt: 'O teu nome' },
  'contact.ph.email':    { es: 'tu@email.com',          en: 'you@email.com',        fr: 'toi@email.com',        de: 'du@email.com',         pt: 'tu@email.com' },
  'contact.ph.subject':  { es: 'Asunto del mensaje',   en: 'Message subject',      fr: 'Sujet du message',     de: 'Betreff der Nachricht', pt: 'Assunto da mensagem' },
  'contact.ph.msg':      { es: 'Escribe tu mensaje...', en: 'Write your message...', fr: 'Écris ton message...', de: 'Schreib deine Nachricht...', pt: 'Escreve a tua mensagem...' },
  'contact.submit':      { es: 'Enviar mensaje',        en: 'Send message',         fr: 'Envoyer le message',   de: 'Nachricht senden',     pt: 'Enviar mensagem' },
  'contact.sending':     { es: 'Enviando…',             en: 'Sending…',             fr: 'Envoi en cours…',      de: 'Wird gesendet…',       pt: 'A enviar…' },
  'contact.success':     { es: '¡Mensaje enviado! Te responderé pronto.', en: 'Message sent! I\'ll get back to you soon.', fr: 'Message envoyé ! Je te répondrai bientôt.', de: 'Nachricht gesendet! Ich melde mich bald.', pt: 'Mensagem enviada! Responderei em breve.' },
  'contact.error':       { es: 'Algo salió mal. Inténtalo de nuevo.', en: 'Something went wrong. Please try again.', fr: 'Quelque chose s\'est mal passé. Réessaie.', de: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.', pt: 'Algo correu mal. Tenta novamente.' },

  'footer': {
    es: 'Francesc Guillemat Arrabal \u2014 2026',
    en: 'Francesc Guillemat Arrabal \u2014 2026',
    fr: 'Francesc Guillemat Arrabal \u2014 2026',
    de: 'Francesc Guillemat Arrabal \u2014 2026',
    pt: 'Francesc Guillemat Arrabal \u2014 2026',
  },

  // ── Index ──────────────────────────────────────────────────────────────────
  'index.subtitle': {
    es: 'Desarrollador de Aplicaciones Web',
    en: 'Web Application Developer',
    fr: 'Développeur d\'Applications Web',
    de: 'Webentwickler',
    pt: 'Desenvolvedor de Aplicações Web',
  },

  // ── Projects ───────────────────────────────────────────────────────────────
  'projects.heading': { es: 'Proyectos', en: 'Projects', fr: 'Projets', de: 'Projekte', pt: 'Projetos' },

  'projects.web.title': {
    es: 'Actualización Web Instituto',
    en: 'School Website Update',
    fr: 'Mise à Jour du Site Web',
    de: 'Schul-Website-Aktualisierung',
    pt: 'Atualização do Site da Escola',
  },
  'projects.web.desc': {
    es: 'En el curso 2024-2025 hicimos yo y 2 compañeros mas una implementación completa de la web del instituto. Preparando todo el backend y frontend, teniendo en cuenta lo visual y la seguridad.<br><br>El objetivo principal fue crear una web más funcional, atractiva y responsiva, utilizando WordPress como nuevo sistema de gestión de contenidos. Este cambio permite integrar tecnologías modernas, facilitar el mantenimiento y asegurar un rendimiento óptimo para todos. El proyecto incluye un servidor Linux sin interfaz gráfica para simular un entorno de producción real.',
    en: 'In the 2024-2025 school year, two classmates and I completed a full implementation of the school website, handling both backend and frontend with a focus on design and security.<br><br>The main goal was to create a more functional, attractive and responsive website using WordPress as the new CMS. This integrates modern technologies, simplifies maintenance and ensures optimal performance. The project includes a headless Linux server to simulate a real production environment.',
    fr: 'Durant l\'année scolaire 2024-2025, deux camarades et moi avons réalisé une implémentation complète du site web de l\'école, en gérant le backend et le frontend avec un souci du design et de la sécurité.<br><br>L\'objectif principal était de créer un site plus fonctionnel, attrayant et réactif avec WordPress comme nouveau CMS. Cela intègre des technologies modernes et garantit des performances optimales. Le projet inclut un serveur Linux sans interface graphique pour simuler un environnement de production réel.',
    de: 'Im Schuljahr 2024-2025 haben ich und 2 Mitschüler eine vollständige Neuimplementierung der Schulwebsite vorgenommen, mit Backend, Frontend, Design und Sicherheit.<br><br>Das Hauptziel war eine funktionalere, attraktivere und responsive Website mit WordPress als neuem CMS. Dies integriert moderne Technologien, vereinfacht die Wartung und gewährleistet optimale Leistung. Das Projekt umfasst einen headless Linux-Server zur Simulation einer echten Produktionsumgebung.',
    pt: 'No ano letivo 2024-2025, eu e 2 colegas fizemos uma implementação completa do site da escola, gerindo o backend e o frontend com foco no design e na segurança.<br><br>O objetivo principal foi criar um site mais funcional, atraente e responsivo, usando WordPress como novo CMS. Isso integra tecnologias modernas, simplifica a manutenção e garante desempenho ideal. O projeto inclui um servidor Linux headless para simular um ambiente de produção real.',
  },
  'projects.web.link':  { es: 'Ver Documentación', en: 'View Documentation', fr: 'Voir la Documentation', de: 'Dokumentation ansehen', pt: 'Ver Documentação' },

  'projects.poka.title': { es: 'Empresa IOT Poka', en: 'IoT Company Poka', fr: 'Entreprise IoT Poka', de: 'IoT-Unternehmen Poka', pt: 'Empresa IoT Poka' },
  'projects.poka.desc': {
    es: 'En este proyecto implementamos tecnologías IOT para reducir el consumo de energía del centro. Utilizamos un ESP32 que está conectado al servidor que contiene el Node Red. Cuando detecta movimiento ilumina el led y hace que el buzzer emita un sonido. Además, envia una señal al servidor ISARD, donde está alojada la web de la empresa y se pueden ver en tiempo real los movimientos que detecte el sensor. Con la implementación de la tecnología IOT podremos reducir significativamente el consumo de energía en el instituto.',
    en: 'In this project we implemented IoT technologies to reduce energy consumption at school. We used an ESP32 connected to a Node-RED server. When motion is detected, an LED lights up and a buzzer sounds. A signal is also sent to the ISARD server where the company website is hosted and real-time motion data can be viewed. IoT implementation can significantly reduce energy consumption.',
    fr: 'Dans ce projet, nous avons implémenté des technologies IoT pour réduire la consommation d\'énergie de l\'établissement. Nous avons utilisé un ESP32 connecté à un serveur Node-RED. Lorsqu\'un mouvement est détecté, une LED s\'allume et un buzzer retentit. Un signal est envoyé au serveur ISARD où le site est hébergé et les données de mouvement en temps réel sont visibles.',
    de: 'In diesem Projekt haben wir IoT-Technologien implementiert, um den Energieverbrauch der Schule zu reduzieren. Wir verwendeten einen ESP32, der mit einem Node-RED-Server verbunden ist. Bei Bewegungserkennung leuchtet eine LED auf und ein Summer ertönt. Ein Signal wird an den ISARD-Server gesendet, wo die Unternehmenswebsite gehostet wird und Echtzeit-Bewegungsdaten angezeigt werden können.',
    pt: 'Neste projeto implementamos tecnologias IoT para reduzir o consumo de energia da escola. Utilizamos um ESP32 conectado a um servidor Node-RED. Quando deteta movimento, um LED acende e um buzzer soa. Um sinal é também enviado ao servidor ISARD, onde o site da empresa está alojado e os dados de movimento em tempo real podem ser visualizados.',
  },
  'projects.poka.link': { es: 'Ver Documentación', en: 'View Documentation', fr: 'Voir la Documentation', de: 'Dokumentation ansehen', pt: 'Ver Documentação' },

  'projects.viorcam.title': { es: 'Viorcam Pedidos', en: 'Viorcam Orders', fr: 'Commandes Viorcam', de: 'Viorcam Bestellungen', pt: 'Viorcam Encomendas' },
  'projects.viorcam.desc': {
    es: 'En este proyecto me he centrado en solucionar un problema real y simple como puede ser la creación y organización de pedidos, en la empresa que lo he implementado se usaba papel y boligrafo para crear y apuntar los pedidos, ahora con el mismo programa puedes acceder a todo el catálogo y ver los precios en vivo mientras añades y creas pedidos para los clientes.<br><br>Todo lo creado en la aplicación se almacena en una base de datos JSON que nos permite acceder a los pedidos creados en cualquier momento.',
    en: 'This project solves a real and simple problem: order creation and management. At the company where I implemented it, orders were tracked with pen and paper. Now the app lets you browse the full catalogue, see live prices, and create orders for customers.<br><br>All data is stored in a JSON database, allowing orders to be accessed at any time.',
    fr: 'Ce projet résout un problème réel et simple : la création et la gestion des commandes. Dans l\'entreprise où je l\'ai déployé, les commandes étaient notées à la main. Désormais, l\'application permet de parcourir le catalogue, de voir les prix en direct et de créer des commandes.<br><br>Toutes les données sont stockées dans une base de données JSON, permettant d\'y accéder à tout moment.',
    de: 'Dieses Projekt löst ein einfaches, aber reales Problem: die Erstellung und Verwaltung von Bestellungen. In dem Unternehmen, wo ich es eingesetzt habe, wurden Bestellungen mit Stift und Papier notiert. Jetzt ermöglicht die App, den gesamten Katalog zu durchsuchen, Live-Preise zu sehen und Bestellungen zu erstellen.<br><br>Alle Daten werden in einer JSON-Datenbank gespeichert, die jederzeit abgerufen werden kann.',
    pt: 'Este projeto resolve um problema real e simples: a criação e gestão de encomendas. Na empresa onde o implementei, as encomendas eram registadas com papel e caneta. Agora a aplicação permite consultar o catálogo completo, ver preços em tempo real e criar encomendas.<br><br>Todos os dados são guardados numa base de dados JSON, permitindo aceder às encomendas a qualquer momento.',
  },

  // ── Studies ────────────────────────────────────────────────────────────────
  'studies.heading':  { es: 'Estudios', en: 'Studies',      fr: 'Études',    de: 'Studium',   pt: 'Estudos' },
  'studies.work':     { es: 'Trabajo',  en: 'Work',         fr: 'Travail',   de: 'Arbeit',    pt: 'Trabalho' },

  'studies.eso.title':      { es: 'ESO Estudios Secundarios Obligatorios', en: 'Secondary Education (ESO)',         fr: 'Enseignement Secondaire Obligatoire', de: 'Mittlere Reife (ESO)',              pt: 'Ensino Secundário Obrigatório (ESO)' },
  'studies.eso.tag':        { es: 'Completat',  en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', pt: 'Concluído' },
  'studies.smx.title':      { es: 'Sistemes Microinformatics i Xarxes', en: 'Microcomputer Systems & Networks', fr: 'Systèmes Microinformatiques & Réseaux', de: 'Mikroinformatik & Netzwerke', pt: 'Sistemas Microinformáticos e Redes' },
  'studies.smx.tag':        { es: 'Completat',  en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', pt: 'Concluído' },
  'studies.daw.title':      { es: 'Desenvolupament d\'Aplicacions Web', en: 'Web Application Development', fr: 'Développement d\'Applications Web', de: 'Webapplikationsentwicklung', pt: 'Desenvolvimento de Aplicações Web' },
  'studies.daw.tag':        { es: 'En curs',    en: 'In progress', fr: 'En cours',  de: 'Laufend',       pt: 'Em curso' },
  'studies.practice.title': { es: 'Prácticas en Empresa', en: 'Work Experience',  fr: 'Stage en Entreprise', de: 'Betriebspraktikum', pt: 'Estágio em Empresa' },
  'studies.practice.tag':   { es: 'Completado', en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', pt: 'Concluído' },
  'studies.tech.title':     { es: 'Técnico Informático',  en: 'IT Technician',    fr: 'Technicien Informatique', de: 'IT-Techniker', pt: 'Técnico de Informática' },
  'studies.tech.tag':       { es: 'Completado', en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', pt: 'Concluído' },

  // ── Hobbies ────────────────────────────────────────────────────────────────
  'hobbies.heading': { es: 'Aficiones',       en: 'Hobbies',          fr: 'Loisirs',          de: 'Hobbys',           pt: 'Passatempos' },
  'hobbies.recs':    { es: 'Recomendaciones', en: 'Recommendations',  fr: 'Recommandations',  de: 'Empfehlungen',     pt: 'Recomendações' },

  'hobbies.music.title': { es: 'Musica', en: 'Music', fr: 'Musique', de: 'Musik', pt: 'Música' },
  'hobbies.music.desc': {
    es: 'Me gusta escuchar música todo el tiempo que puedo. También escucho de todo tipo de géneros. Colecciono vinilos ya que creo que es la mejor manera de poder disftutar de la música y que sea tuya.',
    en: 'I love listening to music whenever I can, across all kinds of genres. I collect vinyl records because I believe it\'s the best way to truly enjoy and own your music.',
    fr: 'J\'adore écouter de la musique dès que je le peux, tous genres confondus. Je collectionne les vinyles car c\'est selon moi la meilleure façon de profiter de la musique et de la posséder vraiment.',
    de: 'Ich höre so oft wie möglich Musik und genieße dabei alle möglichen Genres. Ich sammle Schallplatten, da ich glaube, dass dies die beste Art ist, Musik wirklich zu genießen und zu besitzen.',
    pt: 'Adoro ouvir música sempre que posso, de todos os géneros. Coleciono discos de vinil porque acredito que é a melhor forma de realmente apreciar e possuir música.',
  },

  'hobbies.coding.title': { es: 'Programació', en: 'Programming', fr: 'Programmation', de: 'Programmierung', pt: 'Programação' },
  'hobbies.coding.desc': {
    es: 'Me gusta programar y crear cosas que puedan arreglar problemas o simplemente sean divertidas. Programo con Java principalmente, pero tambén pruebo otros lenguajes para saber un poco de todo.',
    en: 'I enjoy programming and building things that solve problems or are just fun. I mainly code in Java, but I also try other languages to broaden my knowledge.',
    fr: 'J\'aime programmer et créer des choses qui résolvent des problèmes ou qui sont simplement amusantes. Je code principalement en Java, mais j\'essaie aussi d\'autres langages pour apprendre.',
    de: 'Ich programmiere gerne und baue Dinge, die Probleme lösen oder einfach Spaß machen. Ich programmiere hauptsächlich in Java, probiere aber auch andere Sprachen aus.',
    pt: 'Gosto de programar e criar coisas que resolvam problemas ou que sejam simplesmente divertidas. Programo principalmente em Java, mas também experimento outras linguagens.',
  },

  'hobbies.tech.title': { es: 'Tecnologia', en: 'Technology', fr: 'Technologie', de: 'Technologie', pt: 'Tecnologia' },
  'hobbies.tech.desc': {
    es: 'Me gusta provar diferentes tecnologias nuevas e informarme sobre ellas. También pruebo a ver los limites de la inteligencia artificial para aprender a sacar el máximo provecho y poder optimizar proyectos.',
    en: 'I enjoy trying new technologies and learning about them. I also explore the limits of artificial intelligence to get the most out of it and optimize projects.',
    fr: 'J\'aime tester de nouvelles technologies et me renseigner à leur sujet. J\'explore également les limites de l\'intelligence artificielle pour en tirer le meilleur parti et optimiser des projets.',
    de: 'Ich probiere gerne neue Technologien aus und lerne über sie. Ich erforsche auch die Grenzen der künstlichen Intelligenz, um das Beste aus ihr herauszuholen und Projekte zu optimieren.',
    pt: 'Gosto de experimentar novas tecnologias e aprender sobre elas. Também exploro os limites da inteligência artificial para tirar o máximo partido e otimizar projetos.',
  },

  'hobbies.ow.title': { es: 'Outer Wilds', en: 'Outer Wilds', fr: 'Outer Wilds', de: 'Outer Wilds', pt: 'Outer Wilds' },
  'hobbies.ow.desc': {
    es: 'Es uno de esos juegos que solo puedes jugar una vez en la vida. Vas aprendiendo como funciona un sistema entero, los secretos que esconde y la historia detras de cada rincón que exploras. Todo tiene sentido y es una gran red de incognitas y misterios. <br><br>Tiene uno de los finales mas emotivos, bonitos y emocionantes. Una experiencia que recomiendo a todo el mundo, disfrutad cada rincon y no dudeis en hablar con cada personaje y disfrutar de un malvadisco con ellos <br>22 minutos dan para mucho.',
    en: 'It\'s one of those games you can only experience once in a lifetime. You gradually learn how an entire solar system works, its secrets, and the story behind every corner you explore. Everything fits together — it\'s a vast web of unknowns and mysteries.<br><br>It has one of the most emotional, beautiful and thrilling endings. An experience I recommend to everyone — explore every corner, talk to every character, and enjoy a marshmallow with them.<br>22 minutes can go a long way.',
    fr: 'C\'est l\'un de ces jeux qu\'on ne peut vivre qu\'une seule fois. Vous apprenez progressivement comment fonctionne tout un système solaire, ses secrets, et l\'histoire derrière chaque recoin exploré. Tout s\'emboîte — c\'est un vaste réseau d\'inconnues et de mystères.<br><br>Il possède l\'une des fins les plus émouvantes et belles. Une expérience que je recommande à tous — explorez chaque recoin, parlez à chaque personnage et savourez un chamallow avec eux.<br>22 minutes peuvent mener très loin.',
    de: 'Es ist eines dieser Spiele, die man nur einmal im Leben erleben kann. Man lernt nach und nach, wie ein ganzes Sonnensystem funktioniert, seine Geheimnisse und die Geschichte hinter jeder Ecke. Alles passt zusammen – ein riesiges Netz aus Unbekannten und Mysterien.<br><br>Es hat eines der emotionalsten und aufregendsten Enden. Eine Erfahrung, die ich jedem empfehle – erkundet jede Ecke, sprecht mit jedem Charakter und genießt ein Marshmallow mit ihnen.<br>22 Minuten können sehr weit führen.',
    pt: 'É um desses jogos que só se pode viver uma vez na vida. Aprende-se gradualmente como funciona um sistema solar inteiro, os seus segredos e a história por trás de cada canto explorado. Tudo se encaixa — é uma vasta rede de incógnitas e mistérios.<br><br>Tem um dos finais mais emotivos, bonitos e emocionantes. Uma experiência que recomendo a todos — explorem cada canto, falem com cada personagem e desfrutem de um marshmallow com eles.<br>22 minutos podem ir muito longe.',
  },
  'hobbies.ow.link': { es: 'Ver Tienda Oficial', en: 'View Official Store', fr: 'Voir la Boutique Officielle', de: 'Offiziellen Shop besuchen', pt: 'Ver Loja Oficial' },

  // ── Blog ───────────────────────────────────────────────────────────────────
  'blog.heading':     { es: 'Blog', en: 'Blog', fr: 'Blog', de: 'Blog', pt: 'Blog' },
  'blog.post1.title': { es: 'Creación web Currículum', en: 'Portfolio Website Creation', fr: 'Création du Site Portfolio', de: 'Portfolio-Website erstellt', pt: 'Criação do Site Portfólio' },
  'blog.post1.sub':   { es: 'Presentación', en: 'Introduction', fr: 'Présentation', de: 'Vorstellung', pt: 'Apresentação' },
  'blog.post1.text': {
    es: 'Hoy ha sido el día en que se creó esta página web. He decidido hacerla para poder mostrar a la gente interesada un poco más de mi y no solo un currículum hecho con Canva.',
    en: 'Today is the day this website was created. I decided to build it to show interested people a little more about myself, beyond just a Canva-made CV.',
    fr: 'Aujourd\'hui est le jour où ce site web a été créé. J\'ai décidé de le faire pour montrer aux personnes intéressées un peu plus de moi, au-delà d\'un CV fait avec Canva.',
    de: 'Heute ist der Tag, an dem diese Website erstellt wurde. Ich habe mich entschieden, sie zu bauen, um interessierten Menschen etwas mehr über mich zu zeigen, über einen mit Canva erstellten Lebenslauf hinaus.',
    pt: 'Hoje foi o dia em que este site foi criado. Decidi construí-lo para mostrar às pessoas interessadas um pouco mais sobre mim, para além de um currículo feito no Canva.',
  },
  'blog.post1.tag': { es: 'Personal', en: 'Personal', fr: 'Personnel', de: 'Persönlich', pt: 'Pessoal' },

  // ── Game ───────────────────────────────────────────────────────────────────
  'game.controls': {
    es: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0o\u00a0\u00a0\u00a0Arriba\u00a0/\u00a0Abajo\u00a0\u00a0\u00a0para mover\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Pulsa cualquier tecla para empezar',
    en: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0or\u00a0\u00a0\u00a0Up\u00a0/\u00a0Down\u00a0\u00a0\u00a0to move\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Press any key to start',
    fr: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0ou\u00a0\u00a0\u00a0Haut\u00a0/\u00a0Bas\u00a0\u00a0\u00a0pour bouger\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Appuie sur n\'importe quelle touche',
    de: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0oder\u00a0\u00a0\u00a0Hoch\u00a0/\u00a0Runter\u00a0\u00a0\u00a0zum Bewegen\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Beliebige Taste drücken',
    pt: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0ou\u00a0\u00a0\u00a0Cima\u00a0/\u00a0Baixo\u00a0\u00a0\u00a0para mover\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Pressione qualquer tecla',
  },
  'game.overlay': {
    es: 'Pulsa cualquier tecla para empezar',
    en: 'Press any key to start',
    fr: 'Appuie sur n\'importe quelle touche',
    de: 'Beliebige Taste drücken zum Starten',
    pt: 'Pressione qualquer tecla para começar',
  },
  'game.back': { es: 'Volver al inicio', en: 'Back to home', fr: 'Retour à l\'accueil', de: 'Zurück zur Startseite', pt: 'Voltar ao início' },
};

function getLang() {
  return localStorage.getItem('lang') || 'es';
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const t = TRANSLATIONS[el.dataset.i18n];
    if (t && t[lang]) el.textContent = t[lang];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const t = TRANSLATIONS[el.dataset.i18nPlaceholder];
    if (t && t[lang]) el.placeholder = t[lang];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const t = TRANSLATIONS[el.dataset.i18nHtml];
    if (t && t[lang]) el.innerHTML = t[lang];
  });
  document.documentElement.lang = lang;
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => applyTranslations(getLang()));
