// Mock Data for Newsroom Application
// Based on MVP specification with comprehensive sample headlines

export type NewsCategory = 'Politics' | 'Business' | 'Technology' | 'Health' | 'Sports' | 'World' | 'Local';

export type NewsSource =
  | 'CNN'
  | 'Reuters'
  | 'BBC News'
  | 'The Guardian'
  | 'NEWS'
  | 'Al Jazeera';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: NewsSource;
  category: NewsCategory;
  timestamp: string;
  imageUrl: string;
  fullContent?: string;
  author?: string;
  tags?: string[];
}

export const newsSources: { name: NewsSource; logo: string; isLive: boolean }[] = [
  { name: 'CNN', logo: '/generated/cnn-logo.png', isLive: true },
  { name: 'Reuters', logo: '/generated/reuters-logo.png', isLive: true },
  { name: 'BBC News', logo: '/generated/bbc-logo.png', isLive: true },
  { name: 'The Guardian', logo: '/generated/guardian-logo.png', isLive: true },
  { name: 'NEWS', logo: '/generated/news-logo.png', isLive: true },
  { name: 'Al Jazeera', logo: '/generated/aljazeera-logo.png', isLive: true },
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'AI Breakthroughs Revolutionize Healthcare',
    excerpt: 'New artificial intelligence systems show unprecedented accuracy in early disease detection, promising to transform medical diagnostics worldwide.',
    source: 'BBC News',
    category: 'Health',
    timestamp: '2 hours ago',
    imageUrl: '/generated/healthcare-article.jpg',
    author: 'Dr. Sarah Mitchell',
    tags: ['#Healthcare', '#AI', '#Innovation'],
    fullContent: `Groundbreaking research published today reveals that artificial intelligence systems have achieved remarkable accuracy rates in detecting early-stage diseases, potentially revolutionizing healthcare diagnostics worldwide.

The new AI algorithms, developed through a collaborative effort between leading research institutions, demonstrate the ability to identify subtle patterns in medical imaging that human clinicians might miss. In clinical trials involving over 10,000 patients, the AI systems achieved a 94% accuracy rate in early cancer detection, significantly higher than traditional screening methods.

Dr. Sarah Mitchell, lead researcher on the project, explained: "This represents a paradigm shift in how we approach preventive medicine. The AI can process vast amounts of patient data in seconds, identifying risk factors and early warning signs that would take human doctors hours or even days to analyze."

The technology uses advanced machine learning models trained on millions of anonymized patient records and medical images. It can detect anomalies across multiple medical imaging modalities, including X-rays, MRIs, and CT scans.

Healthcare providers are already beginning to integrate these AI systems into their diagnostic workflows. Major hospitals in Europe and North America have reported that the technology has helped identify diseases in patients who would have otherwise been missed by conventional screening protocols.

However, medical ethicists emphasize that AI should augment, not replace, human clinical judgment. "The technology is a powerful tool, but the final diagnostic decisions must remain with qualified healthcare professionals who can consider the full context of a patient's condition," noted Dr. James Rodriguez, a medical ethics professor.

The research team is now working on expanding the AI's capabilities to detect a broader range of conditions, including neurological disorders and cardiovascular diseases. Initial results suggest the technology could be equally effective across multiple medical specialties.

As healthcare systems worldwide face increasing patient loads and resource constraints, AI-powered diagnostic tools may provide a crucial solution for delivering high-quality care more efficiently and accessibly.`,
  },
  {
    id: '2',
    title: 'Global Leaders Meet on Climate Change',
    excerpt: 'World leaders convene for historic climate summit, seeking breakthrough agreements on emissions reduction and renewable energy investments.',
    source: 'BBC News',
    category: 'World',
    timestamp: '3 hours ago',
    imageUrl: '/generated/climate-summit.jpg',
    author: 'Maria Gonzalez',
    tags: ['#ClimateAction', '#Summit', '#Environment'],
    fullContent: `Representatives from over 190 nations have gathered at the International Climate Action Summit in Geneva, marking one of the most significant diplomatic efforts to address global climate change in recent years.

The three-day summit comes at a critical juncture, with recent scientific reports indicating that global temperatures are rising faster than previously projected. Leaders are under mounting pressure from environmental groups, scientists, and younger generations to take decisive action.

"This summit represents our collective last chance to implement meaningful change before we reach irreversible tipping points," stated UN Climate Chief Patricia Espinosa during the opening ceremony. "The decisions made here will determine the habitability of our planet for generations to come."

Key agenda items include establishing binding emissions reduction targets, mobilizing climate finance for developing nations, and accelerating the transition to renewable energy sources. Preliminary negotiations have already yielded promising signs of cooperation, with several major economies proposing ambitious new commitments.

The European Union announced a plan to achieve carbon neutrality by 2045, five years earlier than previously pledged. Meanwhile, a coalition of island nations, facing existential threats from rising sea levels, presented a joint proposal for emergency climate adaptation funding.

However, significant disagreements remain, particularly regarding the financial responsibilities of developed versus developing nations. Representatives from emerging economies argue that industrialized countries, which historically contributed most to greenhouse gas emissions, should bear a greater share of the mitigation costs.

"Climate justice must be at the heart of any agreement," emphasized Indian Environment Minister Rajesh Kumar. "Developing nations cannot be expected to sacrifice economic growth when they contributed least to the problem."

Corporate leaders attending the summit have pledged increased investments in clean technology and sustainable practices. Several major tech companies announced plans to achieve net-zero emissions across their entire supply chains within the next decade.

Environmental organizations monitoring the summit have cautiously welcomed the initial discussions but warn against hollow commitments without enforcement mechanisms. "We've seen too many ambitious declarations followed by insufficient action," noted Greenpeace International Director Marcus Chen. "What matters now is implementation and accountability."

The summit is expected to conclude with a comprehensive framework for international cooperation on climate action, though observers acknowledge that translating commitments into concrete policies will require sustained political will and public support.`,
  },
  {
    id: '3',
    title: 'New Space Telescope Discovers Exoplanent',
    excerpt: 'Astronomers using advanced space telescopes have identified potentially habitable exoplanets in distant star systems, reigniting discussions about extraterrestrial life.',
    source: 'BBC News',
    category: 'Technology',
    timestamp: '5 hours ago',
    imageUrl: '/generated/space-telescope.jpg',
    author: 'Dr. Amanda Chen',
    tags: ['#SpaceExploration', '#Science', '#Discovery'],
    fullContent: `A team of international astronomers has announced the discovery of multiple Earth-like exoplanets located within the habitable zones of their respective star systems, marking a significant milestone in the search for potentially life-supporting worlds beyond our solar system.

The discoveries were made using the next-generation James Webb Space Telescope, which has been operational for just over two years. The telescope's advanced infrared capabilities allowed scientists to analyze the atmospheric compositions of these distant worlds with unprecedented precision.

"What makes these discoveries particularly exciting is that we've detected biosignature gases in the atmospheres of three separate exoplanets," explained Dr. Amanda Chen, lead astronomer on the research team. "While this doesn't confirm the presence of life, it strongly suggests conditions that could support biological processes."

The exoplanets, designated as Kepler-452c, TRAPPIST-1h, and Proxima Centauri d, orbit within their stars' habitable zones—the region where liquid water could exist on planetary surfaces. Each planet exhibits characteristics that astronomers consider promising for potential habitability.

Kepler-452c, located approximately 1,400 light-years from Earth, appears to be roughly 1.6 times the size of our planet and receives a similar amount of energy from its sun-like star. Spectroscopic analysis revealed traces of water vapor, oxygen, and methane in its atmosphere—compounds that on Earth are associated with living organisms.

The TRAPPIST-1 system, already famous for its seven Earth-sized planets, has yielded new surprises. The recently characterized TRAPPIST-1h shows seasonal variations in atmospheric chemistry that scientists find intriguing. "These changes could indicate active geological processes, which are important for maintaining long-term habitability," noted Dr. Robert Nakamura, a planetary scientist involved in the research.

Perhaps most tantalizing is Proxima Centauri d, orbiting our nearest stellar neighbor just 4.2 light-years away. Its proximity makes it an ideal candidate for future detailed study and potential interstellar missions.

"Proxima Centauri d represents humanity's best near-term opportunity to directly investigate whether life exists beyond Earth," said Dr. Elena Rodriguez, director of the Exoplanet Research Initiative. "With current propulsion technologies, we could theoretically send robotic probes to reach this system within a human lifetime."

The discoveries have reignited public interest in space exploration and renewed calls for increased funding for astrobiology research. Space agencies worldwide are already planning next-generation missions specifically designed to study these newly discovered worlds in greater detail.

However, scientists caution against premature conclusions. "Detecting biosignature gases is exciting, but we must rule out non-biological explanations," emphasized Dr. Chen. "We need more observations and sophisticated modeling to determine whether these signals truly indicate life."

The research team is now collaborating with colleagues around the world to conduct follow-up observations and refine their analysis. Future studies will focus on detecting additional atmospheric compounds and searching for other potential indicators of biological activity.

As telescope technology continues to advance, astronomers expect to discover many more potentially habitable exoplanets in the coming years. Each discovery brings humanity closer to answering one of the most profound questions in science: Are we alone in the universe?`,
  },
  {
    id: '4',
    title: 'Olympic Qualifiers Underway',
    excerpt: 'Athletes from around the globe compete in qualifying events for the upcoming Olympic Games, with several world records already broken in preliminary rounds.',
    source: 'CNN',
    category: 'Sports',
    timestamp: '6 hours ago',
    imageUrl: '/generated/olympics-sports.jpg',
    author: 'James Anderson',
    tags: ['#Olympics', '#Sports', '#WorldRecords'],
    fullContent: `The Olympic qualifying season is in full swing, with athletes worldwide delivering stunning performances as they compete for coveted spots at the upcoming Summer Olympic Games. The qualifying events, spread across multiple continents, have already produced several world records and dramatic upsets.

In track and field, Kenya's rising star Sarah Kipchoge shattered the women's 5000-meter world record during the African Championships, finishing in 13:58.43—nearly six seconds faster than the previous record. "I knew I was in great shape, but breaking the world record in a qualifying event is beyond my wildest dreams," Kipchoge said immediately after her historic race.

Swimming events have been equally thrilling. Australian swimmer Emma Thompson set a new world record in the women's 200-meter butterfly, clocking 2:01.34 at the Oceania Trials. Her performance dethrones a record that had stood for over eight years.

"The competition level this qualifying cycle is unprecedented," noted International Olympic Committee sports director Marcus Williams. "Athletes are peaking earlier than usual, which suggests the actual Games will feature even more spectacular performances."

The gymnastics qualifying rounds have captivated audiences with displays of technical excellence and artistic innovation. Japan's Yuki Tanaka introduced a new element on the pommel horse, a complex routine that gymnastic federations are now evaluating for potential inclusion in the official code of points.

Team sports qualifications have provided their share of drama. The U.S. women's basketball team narrowly avoided elimination in the Americas Qualifier after a stunning comeback victory against Brazil. Meanwhile, France's men's handball team secured their Olympic berth with an undefeated run through the European qualifiers.

The pandemic's lingering effects on training facilities and international competition have created unique challenges for athletes. Many competitors have had to adapt their preparation strategies, training in isolation or in makeshift facilities when traditional venues were unavailable.

"This generation of Olympic athletes has shown incredible resilience," observed sports psychologist Dr. Linda Chen. "They've overcome unprecedented obstacles while still pushing the boundaries of human performance."

Developing nations have showcased impressive athletic talent during the qualifiers, with several countries earning their first-ever Olympic berths in various sports. Uganda's beach volleyball team, Ethiopia's first Olympic sailor, and Bhutan's inaugural badminton representative have all secured qualification, highlighting the growing globalization of Olympic sports.

The qualifying process has also sparked discussions about fairness and accessibility. Some athlete advocacy groups have raised concerns about the financial burden of competing in multiple qualifying events, particularly for athletes from countries with limited sports funding.

"We must ensure that Olympic qualification is based on athletic merit, not financial resources," stated Athletes Commission representative Alexandra Petrova. "The IOC and international sports federations need to provide adequate support for all athletes to compete on equal footing."

As the qualifying season enters its final months, competition for the remaining Olympic spots is intensifying. Athletes who narrowly missed qualification at earlier events are making final attempts at alternative qualifying competitions, leading to fierce rivalries and inspiring comeback stories.

The Olympic spirit of excellence, friendship, and respect is already evident in these qualifying events. Athletes from different nations are supporting each other, sharing training insights, and celebrating collective achievements while competing for individual dreams.

With the Games just months away, the world watches as these extraordinary athletes continue to redefine what's possible in human performance.`,
  },
  {
    id: '5',
    title: 'Tech Stocks Rally After Federal Reserve Decision',
    excerpt: 'Major technology companies see significant stock price increases following Federal Reserve announcements on interest rate policy and economic outlook.',
    source: 'Reuters',
    category: 'Business',
    timestamp: '7 hours ago',
    imageUrl: '/generated/climate-summit.jpg',
    author: 'Michael Chang',
    tags: ['#Finance', '#TechStocks', '#Economy'],
    fullContent: `Wall Street experienced a significant rally today, with technology stocks leading the charge after the Federal Reserve announced its decision to maintain current interest rate levels while signaling a more dovish monetary policy stance going forward.

The tech-heavy Nasdaq Composite surged 3.2%, its largest single-day gain in six months, while the broader S&P 500 index rose 2.1%. Major technology companies were among the biggest beneficiaries, with several reaching new all-time highs.

Apple shares jumped 4.5%, adding over $100 billion to its market capitalization in a single trading session. Microsoft gained 3.8%, while Alphabet and Amazon both saw increases exceeding 3%. Even smaller technology companies participated in the rally, with the Russell 2000 Technology Index climbing 2.7%.

"The Fed's decision essentially validates the market's optimism about the economy's resilience and growth prospects," explained Goldman Sachs chief economist Dr. Rebecca Foster. "Lower interest rates for longer means technology companies can continue investing heavily in innovation and expansion without significant borrowing costs."

Federal Reserve Chair Jerome Powell's press conference provided additional reassurance to investors. Powell emphasized that recent economic data suggests inflation is returning to target levels without requiring additional interest rate hikes, a scenario that many economists consider ideal for equity markets.

"We're seeing sustainable economic growth combined with moderating inflation—the so-called 'Goldilocks' scenario that markets love," Powell stated. "This gives us confidence to maintain our current policy stance while remaining vigilant about emerging risks."

The technology sector's strong performance comes amid growing optimism about artificial intelligence and cloud computing growth prospects. Several major tech companies recently reported better-than-expected quarterly earnings, with AI-related products and services driving revenue growth.

NVIDIA, a leading semiconductor manufacturer focused on AI chips, saw its stock price soar 5.8%. The company's CEO, Jensen Huang, recently projected that AI-related revenue could double within the next 18 months as enterprises accelerate their digital transformation initiatives.

Not all analysts share the market's enthusiasm. Some warn that current technology stock valuations appear stretched relative to historical norms, raising concerns about potential corrections if economic conditions deteriorate or if AI adoption proceeds more slowly than anticipated.

"While the Fed's decision is positive in the near term, investors should remember that technology valuations are pricing in significant future growth," cautioned Morgan Stanley strategist David Liu. "Any disappointment in earnings or guidance could trigger substantial volatility."

The rally extended beyond large-cap technology firms. Venture capital-backed startups in the AI and cybersecurity sectors reported increased investor interest, with several announcing new funding rounds at significantly higher valuations than previous financings.

International technology markets also benefited from the positive sentiment. Asian technology stocks rallied in overnight trading, with Japan's Nikkei 225 gaining 2.3% and South Korea's KOSPI rising 1.8%. European technology stocks opened higher as well, suggesting a global risk-on sentiment.

Currency markets reflected the Fed's dovish tilt, with the U.S. dollar weakening against major currencies. This typically benefits multinational technology companies by making their products more competitive internationally and boosting the value of overseas revenues when converted back to dollars.

Bond markets reacted as expected, with yields on longer-term Treasury bonds declining as investors adjusted their expectations for future interest rate paths. The 10-year Treasury yield fell 12 basis points to 4.23%, its lowest level in three months.

Looking ahead, market participants will closely monitor upcoming economic data releases, particularly employment figures and inflation reports. Any significant deviation from expected trends could cause the Fed to reconsider its current policy stance, potentially impacting the recent technology stock rally.

"The Fed has given markets what they wanted, but the sustainability of this rally depends on economic fundamentals continuing to support the central bank's benign outlook," concluded Foster. "Investors should enjoy the gains but remain prepared for potential volatility."`,
  },
  {
    id: '6',
    title: 'Local School District Announces New STEM Program',
    excerpt: 'District launches innovative science and technology curriculum designed to prepare students for careers in rapidly evolving technical fields.',
    source: 'NEWS',
    category: 'Local',
    timestamp: '1 day ago',
    imageUrl: '/generated/healthcare-article.jpg',
    author: 'Jennifer Martinez',
    tags: ['#Education', '#STEM', '#LocalNews'],
    fullContent: `The Metropolitan School District has unveiled an ambitious new STEM (Science, Technology, Engineering, and Mathematics) program that will be implemented across all middle and high schools beginning next academic year.

The comprehensive initiative, which received $15 million in combined state funding and private sector support, aims to equip students with practical skills in emerging technology fields including artificial intelligence, robotics, and data science.

"We're preparing our students for jobs that don't even exist yet," explained District Superintendent Dr. Patricia Williams during the program launch event. "This STEM initiative ensures our community's young people will have the knowledge and skills to thrive in tomorrow's economy."

The program features several innovative components. Each school will receive state-of-the-art STEM laboratories equipped with 3D printers, robotics kits, computer programming workstations, and virtual reality learning tools. Teachers are currently undergoing specialized training to effectively integrate these technologies into their curricula.

One unique aspect of the initiative is its industry partnership component. Local technology companies, engineering firms, and research institutions have committed to providing mentorship opportunities, internships, and real-world project experiences for participating students.

"This isn't just about teaching concepts from textbooks," noted program coordinator Dr. Marcus Johnson. "Students will work on actual challenges faced by local businesses, gaining hands-on experience that makes their education relevant and engaging."

The curriculum emphasizes project-based learning and collaborative problem-solving. Students will work in teams to design solutions for community issues, such as developing apps to address local transportation challenges or creating devices to monitor environmental conditions in neighborhood parks.

Early childhood education hasn't been overlooked in the initiative. Elementary schools will introduce age-appropriate STEM activities designed to spark curiosity and build foundational skills. "Research shows that students who develop interest in STEM subjects early are more likely to pursue these fields later," explained early education specialist Dr. Angela Torres.

The program also prioritizes inclusivity and diversity in STEM education. Special outreach efforts target underrepresented groups, including girls, minority students, and economically disadvantaged youth who traditionally face barriers to accessing quality STEM education.

"We're intentionally designing this program to be accessible to all students, regardless of their background," emphasized Williams. "Every young person in our district deserves the opportunity to explore careers in science and technology."

Parent and community response has been overwhelmingly positive. At the launch event, dozens of families toured the new STEM facilities and participated in hands-on demonstrations. Many parents expressed excitement about the enhanced educational opportunities for their children.

"My daughter has always been interested in robotics, but our previous school didn't have resources to support that interest," said parent Michael Rodriguez. "This program could be life-changing for kids like her who have the passion but need the platform."

However, some educators have raised questions about ensuring that traditional academic subjects receive adequate attention and resources. The district has committed to maintaining strong programs in humanities, arts, and social sciences while expanding STEM offerings.

"STEM education is crucial, but we're committed to developing well-rounded students," Williams assured. "The goal is enhancement, not replacement of other important subjects."

The initiative includes assessment metrics to track student engagement, skill development, and long-term outcomes. The district plans to publish annual reports measuring the program's impact on student achievement, college enrollment in STEM majors, and career placement in technical fields.

Looking forward, district leaders hope the program will serve as a model for other communities. "If we can successfully prepare our students for the future while making STEM education accessible to all, we'll have created something truly valuable that others can learn from," Williams concluded.`,
  },
];

export const trendingTopics = [
  { hashtag: '#TechNews', count: '2.5k' },
  { hashtag: '#Election2024', count: '1.8k' },
  { hashtag: '#ClimateAction', count: '1.2k' },
  { hashtag: '#RenewableEnergy', count: '945' },
];

export const categories: NewsCategory[] = [
  'Politics',
  'Technology',
  'Sports',
  'World',
  'Business',
  'Health',
  'Local',
];
