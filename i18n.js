const TRANSLATIONS = {
  'nav.home':    { es: 'Inicio',             en: 'Home',            fr: 'Accueil',          de: 'Startseite',       it: 'Home',            ca: 'Inici',             zh: '首页',        ja: 'ホーム',              pt: 'Início' },
  'nav.projects':{ es: 'Proyectos',          en: 'Projects',        fr: 'Projets',          de: 'Projekte',         it: 'Progetti',        ca: 'Projectes',         zh: '项目',        ja: 'プロジェクト',        pt: 'Projetos' },
  'nav.studies': { es: 'Estudios y Trabajo', en: 'Studies & Work',  fr: 'Études & Travail', de: 'Studium & Arbeit', it: 'Studi e Lavoro',  ca: 'Estudis i Treball', zh: '学习与工作',   ja: '学業と仕事',          pt: 'Estudos e Trabalho' },
  'nav.hobbies': { es: 'Aficiones',          en: 'Hobbies',         fr: 'Loisirs',          de: 'Hobbys',           it: 'Hobby',           ca: 'Aficions',          zh: '爱好',        ja: '趣味',                pt: 'Passatempos' },
  'nav.play':    { es: 'Jugar',              en: 'Play',            fr: 'Jouer',            de: 'Spielen',          it: 'Gioca',           ca: 'Jugar',             zh: '游戏',        ja: 'ゲーム',              pt: 'Jogar' },
  'nav.contact': { es: 'Contacto',           en: 'Contact',         fr: 'Contact',          de: 'Kontakt',          it: 'Contatti',        ca: 'Contacte',          zh: '联系',        ja: 'お問い合わせ',        pt: 'Contacto' },

  // ── Contact page ───────────────────────────────────────────────────────────
  'contact.heading':      { es: 'Contacto',  en: 'Contact',  fr: 'Contact',  de: 'Kontakt',  it: 'Contatti',  ca: 'Contacte',  zh: '联系',  ja: 'お問い合わせ',  pt: 'Contacto' },
  'contact.intro':        { es: '¿Tienes una propuesta, pregunta o simplemente quieres saludar? Rellena el formulario y te responderé lo antes posible.', en: 'Have a proposal, a question or just want to say hi? Fill in the form and I\'ll get back to you as soon as possible.', fr: 'Tu as une proposition, une question ou tu veux juste dire bonjour ? Remplis le formulaire et je te répondrai dès que possible.', de: 'Hast du einen Vorschlag, eine Frage oder willst einfach Hallo sagen? Füll das Formular aus und ich melde mich so schnell wie möglich.', it: 'Hai una proposta, una domanda o vuoi semplicemente salutare? Compila il modulo e ti risponderò il prima possibile.', ca: 'Tens una proposta, una pregunta o simplement vols saludar? Omple el formulari i et respondré el més aviat possible.', zh: '有建议、问题或只是想打个招呼？填写表单，我会尽快回复你。', ja: 'ご提案、ご質問、またはただ挨拶したい場合は、フォームに記入してください。できるだけ早くご返信します。', pt: 'Tens uma proposta, uma pergunta ou apenas queres dizer olá? Preenche o formulário e responderei o mais rápido possível.' },
  'contact.label.name':   { es: 'Nombre',    en: 'Name',     fr: 'Nom',      de: 'Name',     it: 'Nome',      ca: 'Nom',       zh: '姓名',  ja: 'お名前',        pt: 'Nome' },
  'contact.label.email':  { es: 'Email',     en: 'Email',    fr: 'Email',    de: 'E-Mail',   it: 'Email',     ca: 'Correu',    zh: '邮箱',  ja: 'メール',        pt: 'Email' },
  'contact.label.subject':{ es: 'Asunto',    en: 'Subject',  fr: 'Sujet',    de: 'Betreff',  it: 'Oggetto',   ca: 'Assumpte',  zh: '主题',  ja: '件名',          pt: 'Assunto' },
  'contact.label.msg':    { es: 'Mensaje',   en: 'Message',  fr: 'Message',  de: 'Nachricht',it: 'Messaggio', ca: 'Missatge',  zh: '消息',  ja: 'メッセージ',    pt: 'Mensagem' },
  'contact.ph.name':      { es: 'Tu nombre', en: 'Your name',fr: 'Ton nom',  de: 'Dein Name',it: 'Il tuo nome',ca: 'El teu nom',zh: '你的姓名',ja: 'お名前',      pt: 'O teu nome' },
  'contact.ph.email':     { es: 'tu@email.com', en: 'you@email.com', fr: 'toi@email.com', de: 'du@email.com', it: 'tu@email.com', ca: 'tu@email.com', zh: 'you@email.com', ja: 'you@email.com', pt: 'tu@email.com' },
  'contact.ph.subject':   { es: 'Asunto del mensaje', en: 'Message subject', fr: 'Sujet du message', de: 'Betreff der Nachricht', it: 'Oggetto del messaggio', ca: 'Assumpte del missatge', zh: '消息主题', ja: 'メッセージの件名', pt: 'Assunto da mensagem' },
  'contact.ph.msg':       { es: 'Escribe tu mensaje...', en: 'Write your message...', fr: 'Écris ton message...', de: 'Schreib deine Nachricht...', it: 'Scrivi il tuo messaggio...', ca: 'Escriu el teu missatge...', zh: '写下你的消息...', ja: 'メッセージを入力してください...', pt: 'Escreve a tua mensagem...' },
  'contact.submit':       { es: 'Enviar mensaje',  en: 'Send message',    fr: 'Envoyer le message',  de: 'Nachricht senden',  it: 'Invia messaggio',   ca: 'Enviar missatge',   zh: '发送消息',  ja: 'メッセージを送る',    pt: 'Enviar mensagem' },
  'contact.sending':      { es: 'Enviando…',       en: 'Sending…',        fr: 'Envoi en cours…',     de: 'Wird gesendet…',    it: 'Invio in corso…',   ca: 'Enviant…',          zh: '发送中…',   ja: '送信中…',             pt: 'A enviar…' },
  'contact.success':      { es: '¡Mensaje enviado! Te responderé pronto.', en: 'Message sent! I\'ll get back to you soon.', fr: 'Message envoyé ! Je te répondrai bientôt.', de: 'Nachricht gesendet! Ich melde mich bald.', it: 'Messaggio inviato! Ti risponderò presto.', ca: 'Missatge enviat! Et respondré aviat.', zh: '消息已发送！我会尽快回复你。', ja: 'メッセージが送信されました！すぐに返信します。', pt: 'Mensagem enviada! Responderei em breve.' },
  'contact.error':        { es: 'Algo salió mal. Inténtalo de nuevo.', en: 'Something went wrong. Please try again.', fr: 'Quelque chose s\'est mal passé. Réessaie.', de: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.', it: 'Qualcosa è andato storto. Riprova.', ca: 'Alguna cosa ha anat malament. Torna-ho a intentar.', zh: '出了点问题，请再试一次。', ja: 'エラーが発生しました。もう一度お試しください。', pt: 'Algo correu mal. Tenta novamente.' },

  'footer': {
    es: 'Francesc Guillemat Arrabal \u2014 2026',
    en: 'Francesc Guillemat Arrabal \u2014 2026',
    fr: 'Francesc Guillemat Arrabal \u2014 2026',
    de: 'Francesc Guillemat Arrabal \u2014 2026',
    it: 'Francesc Guillemat Arrabal \u2014 2026',
    ca: 'Francesc Guillemat Arrabal \u2014 2026',
    zh: 'Francesc Guillemat Arrabal \u2014 2026',
    ja: 'Francesc Guillemat Arrabal \u2014 2026',
    pt: 'Francesc Guillemat Arrabal \u2014 2026',
  },

  // ── Index ──────────────────────────────────────────────────────────────────
  'index.subtitle': {
    es: 'Desarrollador de Aplicaciones Web',
    en: 'Web Application Developer',
    fr: 'Développeur d\'Applications Web',
    de: 'Webentwickler',
    it: 'Sviluppatore di Applicazioni Web',
    ca: 'Desenvolupador d\'Aplicacions Web',
    zh: 'Web应用开发者',
    ja: 'Webアプリケーション開発者',
    pt: 'Desenvolvedor de Aplicações Web',
  },

  'index.btn.projects': { es: 'Ver proyectos', en: 'View Projects',  fr: 'Voir les projets', de: 'Projekte ansehen', it: 'Vedi progetti',   ca: 'Veure projectes', zh: '查看项目',    ja: 'プロジェクトを見る',   pt: 'Ver projetos' },
  'index.btn.contact':  { es: 'Contactar',      en: 'Contact',        fr: 'Contacter',        de: 'Kontaktieren',     it: 'Contattami',     ca: 'Contactar',       zh: '联系我',      ja: 'お問い合わせ',        pt: 'Contactar' },

  'index.skills.label': { es: 'Tecnologias', en: 'Technologies', fr: 'Technologies', de: 'Technologien', it: 'Tecnologie', ca: 'Tecnologies', zh: '技术', ja: '技術', pt: 'Tecnologias' },

  'index.about.heading': { es: 'Sobre mi', en: 'About me', fr: 'À propos', de: 'Über mich', it: 'Su di me', ca: 'Sobre mi', zh: '关于我', ja: '自己紹介', pt: 'Sobre mim' },
  'index.about.text': {
    es: 'Soy Francesc Guillemat, un estudiante de DAW, estoy centrado en la creación de páginas web o programas. También realizo tareas de mantenimiento o administración de servicios al igual que aplicaciones web a medida para solucionar problemas o necesidades.<br>En lo personal, me centro siempre en dar el mejor resultado para el cliente y que este satisfecho. Soy una persona paciente dispuesta a hacer lo posible por ayudar y resolver problemas.',
    en: 'I\'m Francesc Guillemat, a Web Application Development student focused on building websites and programs. I also handle maintenance and service administration, as well as custom web applications to solve specific problems.<br>On a personal level, I always strive to deliver the best result for the client. I\'m a patient person, ready to do whatever it takes to help and solve problems.',
    fr: 'Je suis Francesc Guillemat, un étudiant en développement d\'applications web, axé sur la création de sites et de programmes. Je réalise aussi des tâches de maintenance et d\'administration, ainsi que des applications web sur mesure pour résoudre des problèmes.<br>Sur le plan personnel, je me concentre toujours sur la satisfaction du client. Je suis une personne patiente, prête à faire le maximum pour aider et résoudre des problèmes.',
    de: 'Ich bin Francesc Guillemat, ein Student der Webapplikationsentwicklung, der sich auf die Erstellung von Websites und Programmen konzentriert. Ich führe auch Wartungs- und Verwaltungsaufgaben sowie maßgeschneiderte Webanwendungen zur Problemlösung durch.<br>Persönlich strebe ich stets das beste Ergebnis für den Kunden an. Ich bin eine geduldige Person, bereit alles zu tun, um zu helfen und Probleme zu lösen.',
    it: 'Sono Francesc Guillemat, uno studente di Sviluppo di Applicazioni Web, concentrato sulla creazione di siti web e programmi. Mi occupo anche di manutenzione e amministrazione di servizi, nonché di applicazioni web personalizzate per risolvere problemi specifici.<br>A livello personale, mi impegno sempre a offrire il miglior risultato per il cliente. Sono una persona paziente, pronta a fare tutto il necessario per aiutare e risolvere i problemi.',
    ca: 'Soc Francesc Guillemat, un estudiant de DAW, centrat en la creació de pàgines web o programes. També realitzo tasques de manteniment o administració de serveis, així com aplicacions web a mida per solucionar problemes o necessitats.<br>A nivell personal, sempre em centro a donar el millor resultat al client i que estigui satisfet. Soc una persona pacient disposada a fer el possible per ajudar i resoldre problemes.',
    zh: '我是Francesc Guillemat，一名Web应用开发专业的学生，专注于网站和程序的创建。我也负责维护和服务管理工作，以及定制Web应用程序来解决特定问题。<br>在个人方面，我始终致力于为客户提供最好的结果。我是一个有耐心的人，随时准备尽一切努力帮助和解决问题。',
    ja: '私はFrancesc Guillematです。Webアプリケーション開発を学んでいる学生で、ウェブサイトやプログラムの作成に取り組んでいます。保守・サービス管理業務や、特定の問題を解決するためのカスタムWebアプリケーションも担当しています。<br>個人的には、常にクライアントに最高の結果を提供することを心がけています。問題の解決や支援のために最善を尽くす、忍耐強い人間です。',
    pt: 'Sou Francesc Guillemat, um estudante de Desenvolvimento de Aplicações Web, focado na criação de sites e programas. Realizo também tarefas de manutenção e administração de serviços, bem como aplicações web à medida para resolver problemas.<br>A nível pessoal, concentro-me sempre em dar o melhor resultado ao cliente. Sou uma pessoa paciente, disposta a fazer o possível para ajudar e resolver problemas.',
  },

  'index.about.location':    { es: 'Ubicacion', en: 'Location', fr: 'Lieu',    de: 'Standort', it: 'Posizione', ca: 'Ubicació', zh: '位置',   ja: '所在地',    pt: 'Localização' },
  'index.about.age':         { es: 'Edad',      en: 'Age',      fr: 'Âge',     de: 'Alter',    it: 'Età',       ca: 'Edat',     zh: '年龄',   ja: '年齢',      pt: 'Idade' },
  'index.about.langs':       { es: 'Idiomas',   en: 'Languages',fr: 'Langues', de: 'Sprachen', it: 'Lingue',    ca: 'Idiomes',  zh: '语言',   ja: '言語',      pt: 'Idiomas' },
  'index.about.langs.value': { es: 'Català, Castellano, Inglés', en: 'Catalan, Spanish, English', fr: 'Catalan, Espagnol, Anglais', de: 'Katalanisch, Spanisch, Englisch', it: 'Catalano, Spagnolo, Inglese', ca: 'Català, Castellà, Anglès', zh: '加泰罗尼亚语、西班牙语、英语', ja: 'カタルーニャ語、スペイン語、英語', pt: 'Catalão, Espanhol, Inglês' },
  'index.about.role':        { es: 'Rol',       en: 'Role',     fr: 'Rôle',    de: 'Rolle',    it: 'Ruolo',     ca: 'Rol',      zh: '角色',   ja: '役割',      pt: 'Função' },
  'index.about.role.value':  { es: 'Desarrollador Web', en: 'Web Developer', fr: 'Développeur Web', de: 'Webentwickler', it: 'Sviluppatore Web', ca: 'Desenvolupador Web', zh: 'Web开发者', ja: 'Web開発者', pt: 'Desenvolvedor Web' },
  'index.about.github':      { es: 'GitHub',    en: 'GitHub',   fr: 'GitHub',  de: 'GitHub',   it: 'GitHub',    ca: 'GitHub',   zh: 'GitHub', ja: 'GitHub',    pt: 'GitHub' },

  'index.preview.heading':       { es: 'Proyectos destacados', en: 'Featured Projects',   fr: 'Projets en vedette',    de: 'Ausgewählte Projekte',  it: 'Progetti in evidenza',  ca: 'Projectes destacats',  zh: '精选项目',      ja: '注目のプロジェクト',  pt: 'Projetos em destaque' },
  'index.preview.all':           { es: 'Ver todos \u2192',     en: 'View all \u2192',     fr: 'Voir tous \u2192',      de: 'Alle ansehen \u2192',   it: 'Vedi tutti \u2192',     ca: 'Veure tots \u2192',    zh: '查看全部 \u2192', ja: 'すべて見る \u2192',   pt: 'Ver todos \u2192' },
  'index.preview.link':          { es: 'Ver proyecto \u2192',  en: 'View project \u2192', fr: 'Voir le projet \u2192', de: 'Projekt ansehen \u2192',it: 'Vedi progetto \u2192',  ca: 'Veure projecte \u2192',zh: '查看项目 \u2192',  ja: 'プロジェクトを見る \u2192', pt: 'Ver projeto \u2192' },

  'index.preview.web.title':     { es: 'Actualizacion Web Instituto', en: 'School Website Update',   fr: 'Mise à Jour du Site Web',    de: 'Schul-Website-Aktualisierung', it: 'Aggiornamento Sito Istituto', ca: 'Actualització Web Institut',  zh: '学校网站更新',     ja: '学校ウェブサイト更新',   pt: 'Atualização do Site da Escola' },
  'index.preview.web.desc':      { es: 'Implementacion completa de la web del instituto con WordPress, backend Linux y enfoque en seguridad y rendimiento.', en: 'Full implementation of the school website with WordPress, Linux backend, and a focus on security and performance.', fr: 'Implémentation complète du site de l\'école avec WordPress, backend Linux et accent sur la sécurité et les performances.', de: 'Vollständige Implementierung der Schulwebsite mit WordPress, Linux-Backend und Fokus auf Sicherheit und Performance.', it: 'Implementazione completa del sito dell\'istituto con WordPress, backend Linux e focus su sicurezza e prestazioni.', ca: 'Implementació completa del web de l\'institut amb WordPress, backend Linux i enfocament en seguretat i rendiment.', zh: '使用WordPress、Linux后端完整实现学校网站，注重安全性和性能。', ja: 'WordPress、Linuxバックエンドを使用した学校ウェブサイトの完全実装。セキュリティとパフォーマンスに重点。', pt: 'Implementação completa do site da escola com WordPress, backend Linux e foco em segurança e desempenho.' },

  'index.preview.poka.title':    { es: 'Empresa IOT Poka',  en: 'IoT Company Poka',  fr: 'Entreprise IoT Poka',  de: 'IoT-Unternehmen Poka',  it: 'Azienda IoT Poka',  ca: 'Empresa IOT Poka',  zh: 'IoT公司Poka',   ja: 'IoT企業Poka',   pt: 'Empresa IoT Poka' },
  'index.preview.poka.desc':     { es: 'Sistema IOT con ESP32 y Node-RED para reducir el consumo energetico del centro, con dashboard en tiempo real.', en: 'IoT system with ESP32 and Node-RED to reduce school energy consumption, with a real-time dashboard.', fr: 'Système IoT avec ESP32 et Node-RED pour réduire la consommation d\'énergie de l\'école, avec un tableau de bord en temps réel.', de: 'IoT-System mit ESP32 und Node-RED zur Reduzierung des Schulenergieverbrauchs, mit Echtzeit-Dashboard.', it: 'Sistema IoT con ESP32 e Node-RED per ridurre il consumo energetico della scuola, con dashboard in tempo reale.', ca: 'Sistema IOT amb ESP32 i Node-RED per reduir el consum energètic del centre, amb dashboard en temps real.', zh: '使用ESP32和Node-RED的IoT系统，减少学校能耗，提供实时仪表板。', ja: 'ESP32とNode-REDを使用したIoTシステム。学校のエネルギー消費削減とリアルタイムダッシュボード。', pt: 'Sistema IoT com ESP32 e Node-RED para reduzir o consumo de energia da escola, com dashboard em tempo real.' },

  'index.preview.viorcam.title': { es: 'Viorcam Pedidos',  en: 'Viorcam Orders',  fr: 'Commandes Viorcam',  de: 'Viorcam Bestellungen',  it: 'Ordini Viorcam',  ca: 'Viorcam Comandes',  zh: 'Viorcam订单',  ja: 'Viorcam注文',   pt: 'Viorcam Encomendas' },
  'index.preview.viorcam.desc':  { es: 'Aplicacion de gestion de pedidos para empresa real, sustituyendo el papel por un sistema digital con catalogo y precios en vivo.', en: 'Order management app for a real company, replacing pen and paper with a digital system featuring a live catalogue and prices.', fr: 'Application de gestion des commandes pour une vraie entreprise, remplaçant le papier par un système numérique avec catalogue et prix en direct.', de: 'Auftragsverwaltungs-App für ein echtes Unternehmen, die Stift und Papier durch ein digitales System mit Live-Katalog und Preisen ersetzt.', it: 'App di gestione ordini per un\'azienda reale, sostituendo carta e penna con un sistema digitale con catalogo e prezzi in tempo reale.', ca: 'Aplicació de gestió de comandes per a empresa real, substituint el paper per un sistema digital amb catàleg i preus en viu.', zh: '为真实企业开发的订单管理应用，用实时目录和价格的数字系统替代纸张。', ja: '実企業向け注文管理アプリ。紙とペンをライブカタログと価格のデジタルシステムに置き換え。', pt: 'Aplicação de gestão de encomendas para empresa real, substituindo o papel por um sistema digital com catálogo e preços em tempo real.' },

  'index.cta.label':   { es: 'Contacto',                     en: 'Contact',                  fr: 'Contact',                       de: 'Kontakt',                    it: 'Contatti',                  ca: 'Contacte',                   zh: '联系',          ja: 'お問い合わせ',                           pt: 'Contacto' },
  'index.cta.heading': { es: '¿Tienes un proyecto en mente?', en: 'Have a project in mind?',  fr: 'Tu as un projet en tête\u00a0?', de: 'Hast du ein Projekt geplant?',it: 'Hai un progetto in mente?', ca: 'Tens un projecte en ment?',  zh: '有项目想法？',   ja: 'プロジェクトのアイデアがありますか？',       pt: 'Tens um projeto em mente?' },
  'index.cta.sub':     { es: 'Estoy disponible para proyectos freelance, practicas o colaboraciones. Hablamos.', en: 'I\'m available for freelance projects, internships, or collaborations. Let\'s talk.', fr: 'Je suis disponible pour des projets freelance, des stages ou des collaborations. Parlons-en.', de: 'Ich bin verfügbar für Freelance-Projekte, Praktika oder Zusammenarbeit. Lass uns reden.', it: 'Sono disponibile per progetti freelance, tirocini o collaborazioni. Parliamone.', ca: 'Estic disponible per a projectes freelance, pràctiques o col·laboracions. Parlem.', zh: '我可以接受自由职业项目、实习或合作。我们谈谈吧。', ja: 'フリーランスプロジェクト、インターンシップ、またはコラボレーションに対応しています。お気軽にご連絡ください。', pt: 'Estou disponível para projetos freelance, estágios ou colaborações. Vamos conversar.' },
  'index.cta.btn':     { es: 'Escribeme',                    en: 'Write to me',              fr: 'Écris-moi',                     de: 'Schreib mir',                it: 'Scrivimi',                  ca: 'Escriu-me',                  zh: '写信给我',      ja: 'メッセージを送る',                        pt: 'Escreve-me' },

  // ── Projects ───────────────────────────────────────────────────────────────
  'projects.heading': { es: 'Proyectos', en: 'Projects', fr: 'Projets', de: 'Projekte', it: 'Progetti', ca: 'Projectes', zh: '项目', ja: 'プロジェクト', pt: 'Projetos' },

  'projects.web.title': {
    es: 'Actualización Web Instituto',
    en: 'School Website Update',
    fr: 'Mise à Jour du Site Web',
    de: 'Schul-Website-Aktualisierung',
    it: 'Aggiornamento Sito Istituto',
    ca: 'Actualització Web Institut',
    zh: '学校网站更新',
    ja: '学校ウェブサイト更新',
    pt: 'Atualização do Site da Escola',
  },
  'projects.web.desc': {
    es: 'En el curso 2024-2025 hicimos yo y 2 compañeros mas una implementación completa de la web del instituto. Preparando todo el backend y frontend, teniendo en cuenta lo visual y la seguridad.<br><br>El objetivo principal fue crear una web más funcional, atractiva y responsiva, utilizando WordPress como nuevo sistema de gestión de contenidos. Este cambio permite integrar tecnologías modernas, facilitar el mantenimiento y asegurar un rendimiento óptimo para todos. El proyecto incluye un servidor Linux sin interfaz gráfica para simular un entorno de producción real.',
    en: 'In the 2024-2025 school year, two classmates and I completed a full implementation of the school website, handling both backend and frontend with a focus on design and security.<br><br>The main goal was to create a more functional, attractive and responsive website using WordPress as the new CMS. This integrates modern technologies, simplifies maintenance and ensures optimal performance. The project includes a headless Linux server to simulate a real production environment.',
    fr: 'Durant l\'année scolaire 2024-2025, deux camarades et moi avons réalisé une implémentation complète du site web de l\'école, en gérant le backend et le frontend avec un souci du design et de la sécurité.<br><br>L\'objectif principal était de créer un site plus fonctionnel, attrayant et réactif avec WordPress comme nouveau CMS. Cela intègre des technologies modernes et garantit des performances optimales. Le projet inclut un serveur Linux sans interface graphique pour simuler un environnement de production réel.',
    de: 'Im Schuljahr 2024-2025 haben ich und 2 Mitschüler eine vollständige Neuimplementierung der Schulwebsite vorgenommen, mit Backend, Frontend, Design und Sicherheit.<br><br>Das Hauptziel war eine funktionalere, attraktivere und responsive Website mit WordPress als neuem CMS. Dies integriert moderne Technologien, vereinfacht die Wartung und gewährleistet optimale Leistung. Das Projekt umfasst einen headless Linux-Server zur Simulation einer echten Produktionsumgebung.',
    it: 'Nel corso scolastico 2024-2025, io e 2 compagni abbiamo realizzato un\'implementazione completa del sito web dell\'istituto, curando sia il backend che il frontend con attenzione al design e alla sicurezza.<br><br>L\'obiettivo principale era creare un sito più funzionale, attraente e reattivo, utilizzando WordPress come nuovo CMS. Questo integra tecnologie moderne, semplifica la manutenzione e garantisce prestazioni ottimali. Il progetto include un server Linux headless per simulare un ambiente di produzione reale.',
    ca: 'En el curs 2024-2025, jo i 2 companys vam fer una implementació completa del web de l\'institut. Preparant tot el backend i frontend, tenint en compte el visual i la seguretat.<br><br>L\'objectiu principal va ser crear un web més funcional, atractiu i responsiu, utilitzant WordPress com a nou sistema de gestió de continguts. Aquest canvi permet integrar tecnologies modernes, facilitar el manteniment i assegurar un rendiment òptim per a tothom. El projecte inclou un servidor Linux sense interfície gràfica per simular un entorn de producció real.',
    zh: '在2024-2025学年，我和2位同学完成了学校网站的完整实现，负责前端和后端开发，注重设计和安全性。<br><br>主要目标是使用WordPress作为新的CMS，创建一个更具功能性、吸引力和响应性的网站。这集成了现代技术，简化了维护并确保最佳性能。该项目包括一台无头Linux服务器，用于模拟真实的生产环境。',
    ja: '2024-2025年度、私は2人のクラスメートとともに学校ウェブサイトの完全な実装を行い、デザインとセキュリティに重点を置いてバックエンドとフロントエンドの両方を担当しました。<br><br>主な目標は、WordPressを新しいCMSとして使用して、より機能的で魅力的なレスポンシブなウェブサイトを作成することでした。これにより現代的な技術が統合され、メンテナンスが簡素化され、最適なパフォーマンスが確保されます。プロジェクトには、実際の本番環境をシミュレートするためのヘッドレスLinuxサーバーが含まれます。',
    pt: 'No ano letivo 2024-2025, eu e 2 colegas fizemos uma implementação completa do site da escola, gerindo o backend e o frontend com foco no design e na segurança.<br><br>O objetivo principal foi criar um site mais funcional, atraente e responsivo, usando WordPress como novo CMS. Isso integra tecnologias modernas, simplifica a manutenção e garante desempenho ideal. O projeto inclui um servidor Linux headless para simular um ambiente de produção real.',
  },
  'projects.web.link':  { es: 'Ver Documentación', en: 'View Documentation', fr: 'Voir la Documentation', de: 'Dokumentation ansehen', it: 'Vedi Documentazione', ca: 'Veure Documentació', zh: '查看文档', ja: 'ドキュメントを見る', pt: 'Ver Documentação' },

  'projects.poka.title': { es: 'Empresa IOT Poka', en: 'IoT Company Poka', fr: 'Entreprise IoT Poka', de: 'IoT-Unternehmen Poka', it: 'Azienda IoT Poka', ca: 'Empresa IOT Poka', zh: 'IoT公司Poka', ja: 'IoT企業Poka', pt: 'Empresa IoT Poka' },
  'projects.poka.desc': {
    es: 'En este proyecto implementamos tecnologías IOT para reducir el consumo de energía del centro. Utilizamos un ESP32 que está conectado al servidor que contiene el Node Red. Cuando detecta movimiento ilumina el led y hace que el buzzer emita un sonido. Además, envia una señal al servidor ISARD, donde está alojada la web de la empresa y se pueden ver en tiempo real los movimientos que detecte el sensor. Con la implementación de la tecnología IOT podremos reducir significativamente el consumo de energía en el instituto.',
    en: 'In this project we implemented IoT technologies to reduce energy consumption at school. We used an ESP32 connected to a Node-RED server. When motion is detected, an LED lights up and a buzzer sounds. A signal is also sent to the ISARD server where the company website is hosted and real-time motion data can be viewed. IoT implementation can significantly reduce energy consumption.',
    fr: 'Dans ce projet, nous avons implémenté des technologies IoT pour réduire la consommation d\'énergie de l\'établissement. Nous avons utilisé un ESP32 connecté à un serveur Node-RED. Lorsqu\'un mouvement est détecté, une LED s\'allume et un buzzer retentit. Un signal est envoyé au serveur ISARD où le site est hébergé et les données de mouvement en temps réel sont visibles.',
    de: 'In diesem Projekt haben wir IoT-Technologien implementiert, um den Energieverbrauch der Schule zu reduzieren. Wir verwendeten einen ESP32, der mit einem Node-RED-Server verbunden ist. Bei Bewegungserkennung leuchtet eine LED auf und ein Summer ertönt. Ein Signal wird an den ISARD-Server gesendet, wo die Unternehmenswebsite gehostet wird und Echtzeit-Bewegungsdaten angezeigt werden können.',
    it: 'In questo progetto abbiamo implementato tecnologie IoT per ridurre il consumo energetico della scuola. Abbiamo utilizzato un ESP32 collegato al server con Node-RED. Quando rileva un movimento, il LED si accende e il buzzer emette un suono. Viene inoltre inviato un segnale al server ISARD, dove è ospitato il sito aziendale e i movimenti rilevati dal sensore possono essere visualizzati in tempo reale.',
    ca: 'En aquest projecte vam implementar tecnologies IOT per reduir el consum d\'energia del centre. Vam usar un ESP32 connectat al servidor que conté el Node Red. Quan detecta moviment, il·lumina el led i fa que el buzzer emeti un so. A més, envia un senyal al servidor ISARD, on està allotjat el web de l\'empresa i es poden veure en temps real els moviments que detecti el sensor.',
    zh: '在这个项目中，我们实施了IoT技术以减少学校的能源消耗。我们使用了连接到Node-RED服务器的ESP32。当检测到运动时，LED亮起，蜂鸣器发出声音。同时向ISARD服务器发送信号，可以实时查看传感器检测到的运动数据。',
    ja: 'このプロジェクトでは、学校のエネルギー消費を削減するためにIoT技術を実装しました。Node-REDサーバーに接続したESP32を使用しました。動きが検出されるとLEDが点灯し、ブザーが鳴ります。企業ウェブサイトがホストされているISARDサーバーにシグナルが送信され、センサーが検出した動きをリアルタイムで確認できます。',
    pt: 'Neste projeto implementamos tecnologias IoT para reduzir o consumo de energia da escola. Utilizamos um ESP32 conectado a um servidor Node-RED. Quando deteta movimento, um LED acende e um buzzer soa. Um sinal é também enviado ao servidor ISARD, onde o site da empresa está alojado e os dados de movimento em tempo real podem ser visualizados.',
  },
  'projects.poka.link': { es: 'Ver Documentación', en: 'View Documentation', fr: 'Voir la Documentation', de: 'Dokumentation ansehen', it: 'Vedi Documentazione', ca: 'Veure Documentació', zh: '查看文档', ja: 'ドキュメントを見る', pt: 'Ver Documentação' },

  'projects.viorcam.title': { es: 'Viorcam Pedidos', en: 'Viorcam Orders', fr: 'Commandes Viorcam', de: 'Viorcam Bestellungen', it: 'Ordini Viorcam', ca: 'Viorcam Comandes', zh: 'Viorcam订单', ja: 'Viorcam注文', pt: 'Viorcam Encomendas' },
  'projects.viorcam.desc': {
    es: 'En este proyecto me he centrado en solucionar un problema real y simple como puede ser la creación y organización de pedidos, en la empresa que lo he implementado se usaba papel y boligrafo para crear y apuntar los pedidos, ahora con el mismo programa puedes acceder a todo el catálogo y ver los precios en vivo mientras añades y creas pedidos para los clientes.<br><br>Todo lo creado en la aplicación se almacena en una base de datos JSON que nos permite acceder a los pedidos creados en cualquier momento.',
    en: 'This project solves a real and simple problem: order creation and management. At the company where I implemented it, orders were tracked with pen and paper. Now the app lets you browse the full catalogue, see live prices, and create orders for customers.<br><br>All data is stored in a JSON database, allowing orders to be accessed at any time.',
    fr: 'Ce projet résout un problème réel et simple : la création et la gestion des commandes. Dans l\'entreprise où je l\'ai déployé, les commandes étaient notées à la main. Désormais, l\'application permet de parcourir le catalogue, de voir les prix en direct et de créer des commandes.<br><br>Toutes les données sont stockées dans une base de données JSON, permettant d\'y accéder à tout moment.',
    de: 'Dieses Projekt löst ein einfaches, aber reales Problem: die Erstellung und Verwaltung von Bestellungen. In dem Unternehmen, wo ich es eingesetzt habe, wurden Bestellungen mit Stift und Papier notiert. Jetzt ermöglicht die App, den gesamten Katalog zu durchsuchen, Live-Preise zu sehen und Bestellungen zu erstellen.<br><br>Alle Daten werden in einer JSON-Datenbank gespeichert, die jederzeit abgerufen werden kann.',
    it: 'In questo progetto mi sono concentrato sulla soluzione di un problema reale e semplice: la creazione e l\'organizzazione degli ordini. Nell\'azienda dove l\'ho implementato si usava carta e penna. Ora con la stessa app puoi accedere all\'intero catalogo e vedere i prezzi in tempo reale mentre aggiungi e crei ordini per i clienti.<br><br>Tutto ciò che viene creato nell\'applicazione viene archiviato in un database JSON che ci permette di accedere agli ordini in qualsiasi momento.',
    ca: 'En aquest projecte m\'he centrat a solucionar un problema real i simple com és la creació i organització de comandes. A l\'empresa on l\'he implementat s\'usava paper i bolígraf; ara amb el mateix programa pots accedir a tot el catàleg i veure els preus en viu mentre afegeixes i crees comandes per als clients.<br><br>Tot el que es crea a l\'aplicació s\'emmagatzema en una base de dades JSON que ens permet accedir a les comandes creades en qualsevol moment.',
    zh: '这个项目解决了一个真实而简单的问题：订单的创建和管理。在我实施的公司中，订单是用纸和笔记录的。现在应用程序允许浏览完整目录、查看实时价格并为客户创建订单。<br><br>所有数据存储在JSON数据库中，可以随时访问订单。',
    ja: 'このプロジェクトは、注文の作成と管理という現実的でシンプルな問題を解決します。導入した会社では、注文は紙とペンで管理されていました。今はアプリでカタログ全体を閲覧し、リアルタイムの価格を確認しながらお客様の注文を作成できます。<br><br>すべてのデータはJSONデータベースに保存され、いつでも注文にアクセスできます。',
    pt: 'Este projeto resolve um problema real e simples: a criação e gestão de encomendas. Na empresa onde o implementei, as encomendas eram registadas com papel e caneta. Agora a aplicação permite consultar o catálogo completo, ver preços em tempo real e criar encomendas.<br><br>Todos os dados são guardados numa base de dados JSON, permitindo aceder às encomendas a qualquer momento.',
  },
  'projects.viorcam.link': { es: 'Ver Documentación', en: 'View Documentation', fr: 'Voir la Documentation', de: 'Dokumentation ansehen', it: 'Vedi Documentazione', ca: 'Veure Documentació', zh: '查看文档', ja: 'ドキュメントを見る', pt: 'Ver Documentação' },

  // ── Studies ────────────────────────────────────────────────────────────────
  'studies.heading':  { es: 'Estudios', en: 'Studies',      fr: 'Études',    de: 'Studium',   it: 'Studi',      ca: 'Estudis',   zh: '学历',   ja: '学歴',    pt: 'Estudos' },
  'studies.work':     { es: 'Trabajo',  en: 'Work',         fr: 'Travail',   de: 'Arbeit',    it: 'Lavoro',     ca: 'Treball',   zh: '工作',   ja: '仕事',    pt: 'Trabalho' },

  'studies.eso.title':      { es: 'ESO Estudios Secundarios Obligatorios', en: 'Secondary Education (ESO)',          fr: 'Enseignement Secondaire Obligatoire',  de: 'Mittlere Reife (ESO)',                it: 'Scuola Secondaria Obbligatoria (ESO)', ca: 'ESO Educació Secundària Obligatòria', zh: '义务中学教育(ESO)',     ja: '義務中等教育(ESO)',                    pt: 'Ensino Secundário Obrigatório (ESO)' },
  'studies.eso.tag':        { es: 'Completat',  en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', it: 'Completato', ca: 'Completat',  zh: '已完成', ja: '修了',    pt: 'Concluído' },
  'studies.smx.title':      { es: 'Sistemes Microinformatics i Xarxes', en: 'Microcomputer Systems & Networks', fr: 'Systèmes Microinformatiques & Réseaux', de: 'Mikroinformatik & Netzwerke', it: 'Sistemi Microinformatici e Reti', ca: 'Sistemes Microinformàtics i Xarxes', zh: '微型计算机系统与网络', ja: 'マイクロコンピュータシステム＆ネットワーク', pt: 'Sistemas Microinformáticos e Redes' },
  'studies.smx.tag':        { es: 'Completat',  en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', it: 'Completato', ca: 'Completat',  zh: '已完成', ja: '修了',    pt: 'Concluído' },
  'studies.daw.title':      { es: 'Desenvolupament d\'Aplicacions Web', en: 'Web Application Development', fr: 'Développement d\'Applications Web', de: 'Webapplikationsentwicklung', it: 'Sviluppo di Applicazioni Web', ca: 'Desenvolupament d\'Aplicacions Web', zh: 'Web应用开发', ja: 'Webアプリケーション開発', pt: 'Desenvolvimento de Aplicações Web' },
  'studies.daw.tag':        { es: 'En curs',    en: 'In progress', fr: 'En cours',  de: 'Laufend',       it: 'In corso',   ca: 'En curs',    zh: '进行中', ja: '進行中',  pt: 'Em curso' },
  'studies.practice.title': { es: 'Prácticas en Empresa', en: 'Work Experience', fr: 'Stage en Entreprise', de: 'Betriebspraktikum', it: 'Tirocinio in Azienda', ca: 'Pràctiques en Empresa', zh: '企业实习', ja: '企業インターンシップ', pt: 'Estágio em Empresa' },
  'studies.practice.tag':   { es: 'Completado', en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', it: 'Completato', ca: 'Completat',  zh: '已完成', ja: '修了',    pt: 'Concluído' },
  'studies.tech.title':     { es: 'Técnico Informático', en: 'IT Technician', fr: 'Technicien Informatique', de: 'IT-Techniker', it: 'Tecnico Informatico', ca: 'Tècnic Informàtic', zh: 'IT技术员', ja: 'ITテクニシャン', pt: 'Técnico de Informática' },
  'studies.tech.tag':       { es: 'Completado', en: 'Completed',   fr: 'Terminé',   de: 'Abgeschlossen', it: 'Completato', ca: 'Completat',  zh: '已完成', ja: '修了',    pt: 'Concluído' },

  // ── Hobbies ────────────────────────────────────────────────────────────────
  'hobbies.heading': { es: 'Aficiones',       en: 'Hobbies',         fr: 'Loisirs',         de: 'Hobbys',        it: 'Hobby',          ca: 'Aficions',       zh: '爱好',   ja: '趣味',      pt: 'Passatempos' },
  'hobbies.recs':    { es: 'Recomendaciones', en: 'Recommendations', fr: 'Recommandations', de: 'Empfehlungen',  it: 'Consigli',       ca: 'Recomanacions',  zh: '推荐',   ja: 'おすすめ',  pt: 'Recomendações' },

  'hobbies.music.title': { es: 'Musica', en: 'Music', fr: 'Musique', de: 'Musik', it: 'Musica', ca: 'Música', zh: '音乐', ja: '音楽', pt: 'Música' },
  'hobbies.music.desc': {
    es: 'Me gusta escuchar música todo el tiempo que puedo. También escucho de todo tipo de géneros. Colecciono vinilos ya que creo que es la mejor manera de poder disftutar de la música y que sea tuya.',
    en: 'I love listening to music whenever I can, across all kinds of genres. I collect vinyl records because I believe it\'s the best way to truly enjoy and own your music.',
    fr: 'J\'adore écouter de la musique dès que je le peux, tous genres confondus. Je collectionne les vinyles car c\'est selon moi la meilleure façon de profiter de la musique et de la posséder vraiment.',
    de: 'Ich höre so oft wie möglich Musik und genieße dabei alle möglichen Genres. Ich sammle Schallplatten, da ich glaube, dass dies die beste Art ist, Musik wirklich zu genießen und zu besitzen.',
    it: 'Mi piace ascoltare musica ogni volta che posso, di tutti i generi. Colleziono dischi in vinile perché credo sia il modo migliore per godersi davvero la musica e farla propria.',
    ca: 'M\'agrada escoltar música tot el temps que puc. També escolto de tot tipus de gèneres. Col·lecciono vinilos ja que crec que és la millor manera de poder gaudir de la música i que sigui teva.',
    zh: '我喜欢随时听音乐，涵盖各种类型。我收集黑胶唱片，因为我认为这是真正享受和拥有音乐的最佳方式。',
    ja: '時間があればいつでも音楽を聴くのが好きです。あらゆるジャンルを楽しんでいます。レコードを集めています。音楽を本当に楽しみ、自分のものにする最高の方法だと思うからです。',
    pt: 'Adoro ouvir música sempre que posso, de todos os géneros. Coleciono discos de vinil porque acredito que é a melhor forma de realmente apreciar e possuir música.',
  },

  'hobbies.coding.title': { es: 'Programació', en: 'Programming', fr: 'Programmation', de: 'Programmierung', it: 'Programmazione', ca: 'Programació', zh: '编程', ja: 'プログラミング', pt: 'Programação' },
  'hobbies.coding.desc': {
    es: 'Me gusta programar y crear cosas que puedan arreglar problemas o simplemente sean divertidas. Programo con Java principalmente, pero tambén pruebo otros lenguajes para saber un poco de todo.',
    en: 'I enjoy programming and building things that solve problems or are just fun. I mainly code in Java, but I also try other languages to broaden my knowledge.',
    fr: 'J\'aime programmer et créer des choses qui résolvent des problèmes ou qui sont simplement amusantes. Je code principalement en Java, mais j\'essaie aussi d\'autres langages pour apprendre.',
    de: 'Ich programmiere gerne und baue Dinge, die Probleme lösen oder einfach Spaß machen. Ich programmiere hauptsächlich in Java, probiere aber auch andere Sprachen aus.',
    it: 'Mi piace programmare e creare cose che risolvono problemi o che sono semplicemente divertenti. Programmo principalmente in Java, ma provo anche altri linguaggi per ampliare le mie conoscenze.',
    ca: 'M\'agrada programar i crear coses que puguin arreglar problemes o simplement siguin divertides. Programo amb Java principalment, però també provo altres llenguatges per saber una mica de tot.',
    zh: '我喜欢编程和创建能解决问题或者只是有趣的东西。我主要用Java编码，但也尝试其他语言来拓展知识。',
    ja: 'プログラミングと、問題を解決したり楽しいものを作ることが好きです。主にJavaでコーディングしていますが、知識を広げるために他の言語も試しています。',
    pt: 'Gosto de programar e criar coisas que resolvam problemas ou que sejam simplesmente divertidas. Programo principalmente em Java, mas também experimento outras linguagens.',
  },

  'hobbies.tech.title': { es: 'Tecnologia', en: 'Technology', fr: 'Technologie', de: 'Technologie', it: 'Tecnologia', ca: 'Tecnologia', zh: '技术', ja: 'テクノロジー', pt: 'Tecnologia' },
  'hobbies.tech.desc': {
    es: 'Me gusta provar diferentes tecnologias nuevas e informarme sobre ellas. También pruebo a ver los limites de la inteligencia artificial para aprender a sacar el máximo provecho y poder optimizar proyectos.',
    en: 'I enjoy trying new technologies and learning about them. I also explore the limits of artificial intelligence to get the most out of it and optimize projects.',
    fr: 'J\'aime tester de nouvelles technologies et me renseigner à leur sujet. J\'explore également les limites de l\'intelligence artificielle pour en tirer le meilleur parti et optimiser des projets.',
    de: 'Ich probiere gerne neue Technologien aus und lerne über sie. Ich erforsche auch die Grenzen der künstlichen Intelligenz, um das Beste aus ihr herauszuholen und Projekte zu optimieren.',
    it: 'Mi piace provare nuove tecnologie e informarmi su di esse. Esploro anche i limiti dell\'intelligenza artificiale per imparare a sfruttarla al massimo e ottimizzare i progetti.',
    ca: 'M\'agrada provar diferents tecnologies noves i informar-me sobre elles. També provo de veure els límits de la intel·ligència artificial per aprendre a treure el màxim profit i poder optimitzar projectes.',
    zh: '我喜欢尝试新技术并学习它们。我也探索人工智能的极限，以从中获得最大收益并优化项目。',
    ja: '新しいテクノロジーを試して学ぶことが好きです。人工知能の限界を探り、最大限に活用してプロジェクトを最適化することも取り組んでいます。',
    pt: 'Gosto de experimentar novas tecnologias e aprender sobre elas. Também exploro os limites da inteligência artificial para tirar o máximo partido e otimizar projetos.',
  },

  'hobbies.ow.title': { es: 'Outer Wilds', en: 'Outer Wilds', fr: 'Outer Wilds', de: 'Outer Wilds', it: 'Outer Wilds', ca: 'Outer Wilds', zh: 'Outer Wilds', ja: 'Outer Wilds', pt: 'Outer Wilds' },
  'hobbies.ow.desc': {
    es: 'Es uno de esos juegos que solo puedes jugar una vez en la vida. Vas aprendiendo como funciona un sistema entero, los secretos que esconde y la historia detras de cada rincón que exploras. Todo tiene sentido y es una gran red de incognitas y misterios. <br><br>Tiene uno de los finales mas emotivos, bonitos y emocionantes. Una experiencia que recomiendo a todo el mundo, disfrutad cada rincon y no dudeis en hablar con cada personaje y disfrutar de un malvadisco con ellos <br>22 minutos dan para mucho.',
    en: 'It\'s one of those games you can only experience once in a lifetime. You gradually learn how an entire solar system works, its secrets, and the story behind every corner you explore. Everything fits together — it\'s a vast web of unknowns and mysteries.<br><br>It has one of the most emotional, beautiful and thrilling endings. An experience I recommend to everyone — explore every corner, talk to every character, and enjoy a marshmallow with them.<br>22 minutes can go a long way.',
    fr: 'C\'est l\'un de ces jeux qu\'on ne peut vivre qu\'une seule fois. Vous apprenez progressivement comment fonctionne tout un système solaire, ses secrets, et l\'histoire derrière chaque recoin exploré. Tout s\'emboîte — c\'est un vaste réseau d\'inconnues et de mystères.<br><br>Il possède l\'une des fins les plus émouvantes et belles. Une expérience que je recommande à tous — explorez chaque recoin, parlez à chaque personnage et savourez un chamallow avec eux.<br>22 minutes peuvent mener très loin.',
    de: 'Es ist eines dieser Spiele, die man nur einmal im Leben erleben kann. Man lernt nach und nach, wie ein ganzes Sonnensystem funktioniert, seine Geheimnisse und die Geschichte hinter jeder Ecke. Alles passt zusammen – ein riesiges Netz aus Unbekannten und Mysterien.<br><br>Es hat eines der emotionalsten und aufregendsten Enden. Eine Erfahrung, die ich jedem empfehle – erkundet jede Ecke, sprecht mit jedem Charakter und genießt ein Marshmallow mit ihnen.<br>22 Minuten können sehr weit führen.',
    it: 'È uno di quei giochi che puoi vivere solo una volta nella vita. Impari gradualmente come funziona un intero sistema solare, i suoi segreti e la storia dietro ogni angolo esplorato. Tutto si incastra — è una vasta rete di incognite e misteri.<br><br>Ha uno dei finali più emozionanti e belli. Un\'esperienza che consiglio a tutti — esplorate ogni angolo, parlate con ogni personaggio e godetevi un marshmallow con loro.<br>22 minuti possono andare molto lontano.',
    ca: 'És un d\'aquells jocs que només pots jugar una vegada a la vida. Vas aprenent com funciona un sistema sencer, els secrets que amaga i la història darrere de cada racó que explores. Tot té sentit i és una gran xarxa d\'incògnites i misteris.<br><br>Té un dels finals més emotius, bonics i emocionants. Una experiència que recomano a tothom — gaudiu cada racó i no dubteu a parlar amb cada personatge i gaudir d\'un malví amb ells.<br>22 minuts donen per molt.',
    zh: '这是那种一生只能体验一次的游戏。你逐渐了解整个太阳系的运作方式、它的秘密，以及你探索的每个角落背后的故事。一切都融为一体——这是一个巨大的未知数和谜团网络。<br><br>它有着最感人、最美丽、最令人兴奋的结局之一。我向所有人推荐这段经历——探索每个角落，与每个角色交谈，和他们一起享用棉花糖。<br>22分钟可以走很长的路。',
    ja: '一生に一度しか体験できないゲームです。太陽系全体の仕組み、その秘密、探索するすべての角の裏にある物語を少しずつ学んでいきます。すべてがつながっている——未知と謎の広大なネットワークです。<br><br>最も感動的で美しくスリリングなエンディングの一つを持っています。すべての人に勧めたい体験です——すべての角を探索し、すべてのキャラクターと話し、彼らとマシュマロを楽しんでください。<br>22分は遠くまで行けます。',
    pt: 'É um desses jogos que só se pode viver uma vez na vida. Aprende-se gradualmente como funciona um sistema solar inteiro, os seus segredos e a história por trás de cada canto explorado. Tudo se encaixa — é uma vasta rede de incógnitas e mistérios.<br><br>Tem um dos finais mais emotivos, bonitos e emocionantes. Uma experiência que recomendo a todos — explorem cada canto, falem com cada personagem e desfrutem de um marshmallow com eles.<br>22 minutos podem ir muito longe.',
  },
  'hobbies.ow.link': { es: 'Ver Tienda Oficial', en: 'View Official Store', fr: 'Voir la Boutique Officielle', de: 'Offiziellen Shop besuchen', it: 'Vedi Store Ufficiale', ca: 'Veure Botiga Oficial', zh: '查看官方商店', ja: '公式ストアを見る', pt: 'Ver Loja Oficial' },

  // ── Game ───────────────────────────────────────────────────────────────────
  'game.controls': {
    es: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0o\u00a0\u00a0\u00a0Arriba\u00a0/\u00a0Abajo\u00a0\u00a0\u00a0para mover\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Pulsa cualquier tecla para empezar',
    en: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0or\u00a0\u00a0\u00a0Up\u00a0/\u00a0Down\u00a0\u00a0\u00a0to move\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Press any key to start',
    fr: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0ou\u00a0\u00a0\u00a0Haut\u00a0/\u00a0Bas\u00a0\u00a0\u00a0pour bouger\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Appuie sur n\'importe quelle touche',
    de: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0oder\u00a0\u00a0\u00a0Hoch\u00a0/\u00a0Runter\u00a0\u00a0\u00a0zum Bewegen\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Beliebige Taste drücken',
    it: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0o\u00a0\u00a0\u00a0Su\u00a0/\u00a0Giù\u00a0\u00a0\u00a0per muoversi\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Premi qualsiasi tasto per iniziare',
    ca: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0o\u00a0\u00a0\u00a0Amunt\u00a0/\u00a0Avall\u00a0\u00a0\u00a0per moure\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Prem qualsevol tecla per començar',
    zh: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0或\u00a0\u00a0\u00a0上\u00a0/\u00a0下\u00a0\u00a0\u00a0移动\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0按任意键开始',
    ja: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0または\u00a0\u00a0\u00a0上\u00a0/\u00a0下\u00a0\u00a0\u00a0で移動\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0任意のキーを押してください',
    pt: 'W\u00a0/\u00a0S\u00a0\u00a0\u00a0ou\u00a0\u00a0\u00a0Cima\u00a0/\u00a0Baixo\u00a0\u00a0\u00a0para mover\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0Pressione qualquer tecla',
  },
  'game.overlay': {
    es: 'Pulsa cualquier tecla para empezar',
    en: 'Press any key to start',
    fr: 'Appuie sur n\'importe quelle touche',
    de: 'Beliebige Taste drücken zum Starten',
    it: 'Premi qualsiasi tasto per iniziare',
    ca: 'Prem qualsevol tecla per començar',
    zh: '按任意键开始',
    ja: '任意のキーを押してください',
    pt: 'Pressione qualquer tecla para começar',
  },
  'game.back': { es: 'Volver al inicio', en: 'Back to home', fr: 'Retour à l\'accueil', de: 'Zurück zur Startseite', it: 'Torna alla home', ca: 'Tornar a l\'inici', zh: '返回首页', ja: 'ホームに戻る', pt: 'Voltar ao início' },
};

const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de', 'it', 'ca', 'zh', 'ja', 'pt'];

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

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('lang')) {
    const base = (navigator.language || '').toLowerCase().split('-')[0];
    const detected = SUPPORTED_LANGS.includes(base) ? base : 'es';
    localStorage.setItem('lang', detected);
  }
  applyTranslations(getLang());
});
