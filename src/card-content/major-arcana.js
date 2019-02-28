const majorArcana = [
  {
  id: 1,
  name: `The Fool`,
  rank: 0,
  description: `This is the card of beginnings. It tells us that everything has a starting point, and often it's the very first step that's the hardest. The card also conveys an innocence and lack of knowledge. Mistakes will be made, but remember that his is how we learn.`,
  revDescription: `What happens if we can't summon the courage to take our first steps? Or what happens when we blunder ahead without knowledge? The fool might be prodding us to go ahead and make the first mistake, or to think before we act.`,
  keywords: [`free`, `faithful`, `innocent`, `curious`, `mercurial`],
  },

  {
  id: 2,
  name: `The Magician`,
  rank: 1,
  description: `We have everything we need to succeed. We aren't just endowed with the knowledge, we have the will to use it. The Magician respects action and has all of the elements at hand to perform it.`,
  revDescription: `What happens if we use our power too aggressively? What happens when we take shortcuts instead of learning from the difficult path?`,
  keywords: ['self-empowered', 'active', 'willful', 'knowledgeable'],
  },

  {
  id: 3,
  name: `The High Priestess`,
  rank: 2,
  description: `Silence surrounds this card. The High Priestess seeks knowledge, but it's the knowledge that requires careful thought and reflection. She asks us to slow down and think before we act.`,
  revDescription: `There are always secrets, but what happens if we obsess over them? What happens if we ignore them? What happens if we choose to ignore the things boiling inside of us?`,
  keywords: [`intuitive`, `wise`, `mystical`, `self-reflective`],
  },

  {
  id: 4,
  name: `The Empress`,
  rank: 3,
  description: `We all have an innate connection to a maternal figure, an Empress who has guided us and kept us healthy. This card, much like a mother, reminds us to take care of ourselves and the people around us.`,
  revDescription: `What happens when we put ourselves before others? What happens when we put others before ourselves? We can always find a way to do both.`,
  keywords: [`nurturing`, `giving`, `natural`, `self-caring`, `creative`],
  },

  {
  id: 5,
  name: `The Emperor`,
  rank: 4,
  description: `He comes cloaked in an air of authority when he arrives. The Emperor represents order and clarity. He wants structure and he demands we approach our lives with level-headed awareness.`,
  revDescription: `Where do dictators come from? What happens when there's nobody to lead? Too much or too little order can become a detriment in our lives.`,
  keywords: [`protective`, `organized`, `orderly`, `fathering`],
  },

  {
  id: 6,
  name: `The Hierophant`,
  rank: 5,
  description: `The Hierophant revels in both academic and spiritual spaces. He knows that sometimes knowledge comes from without, from mentors or classes. He also asks us to remember our religious experiences and how they bind us together.`,
  revDescription: `When does dogma become overbearing? What happens when an academic believes he has learned everything? We can't forget that knowledge is boundless and even a mentor will never understand everything.`,
  keywords: [`guiding`, `knowledgeable`, `didactic`, `spiritual`],
  },

  {
  id: 7,
  name: `The Lovers`,
  rank: 6,
  description: `We need people in our lives to love and cherish us. It's with the help of others that we can learn more about ourselves. The Lovers want us to make connections, strengthen our relationships, and find joy in our friends.`,
  revDescription: `How can passion be destructive or occluding? What happens when that passion is one sided? We can't maintain one-sided relationships no matter how hard we work at them.`,
  keywords: [`desirous`, `joyful`, `friendly`, `gregarious`],
  },

  {
  id: 8,
  name: `The Chariot`,
  rank: 7,
  description: `Imagine a powerful instrumental that heralds the return of a hero. This is the Chariot, the strength of will we all need in order to push through and accomplish a task. More than that, we need to measure our personal growth before the Chariot will drive us home to victory.`,
  revDescription: `What happens if we let our past success determine our self worth? Can we become overconfident? We can't forget that there will always be challenges and victory isn't always assured.`,
  keywords: [`willful`, `triumphant`, `grown`, `confident`],
  },

  {
  id: 9,
  name: `Strength`,
  rank: 8,
  description: `Strength has one of the warmest greeting in all tarot. She asks us to find the wellspring within ourselves where dedication and perseverance flows. That spring isn't brute power, it's even tempered and only flows when we can understand and love ourselves.`,
  revDescription: `What happens when we can't take care of ourselves? What happens when we choose not to take a stand? Knowing our limitations is important, but who do we hurt when we choose not to overcome them?`,
  keywords: [`disciplined`, `powerful`, `strong fortitude`, `loving`, `perservering`],
  },

  {
  id: 10,
  name: `The Hermit`,
  rank: 9,
  description: ``,
  revDescription: ``,
  keywords: [],
  },

  {
  id: 11,
  name: `The Wheel of Fortune`,
  rank: 10,
  description: ``,
  revDescription: ``,
  keywords: [],
  },

  {
  id: 12,
  name: `Justice`,
  rank: 11,
  description: `Choices shouldn't always be taken lightly. This card asks us to shed our biases and deliberate. With its help we can judge without malice or favoritism and come to a decision worth fighting for.`,
  revDescription: `What happens when our judgement clouds our senses? What happens when our verdict comes down too heavily? Our choices shouldn't linger or become arbitrary.`,
  keywords: [`fair`, `decisive`, `objective`, `deliberate`],
  },

  {
  id: 13,
  name: `The Hanged Man`,
  rank: 12,
  description: `Sometimes all we need is a shift in perspective. It can be uncomfortable, sometimes it can feel like our world has flipped completely upside down. The Hanged Man asks us to persevere because there's no knowledge or experience without sacrifice.`,
  revDescription: `What happens when we abandon all of our beliefs? What happens when we refuse to let them go? There is always a way to adapt to a new reality without total self-sacrifice.`,
  keywords: [`enlightened`, `sacrificial`, `upside-down`, `radical`],
  },

  {
  id: 14,
  name: `Death`,
  rank: 13,
  description: `Don't fear Death. This card appeared to remind us that beginnings only come from endings. At times we need to set aside the old things and embrace the new. After all, without Death there would be no life, and without change we'd stand still forever.`,
  revDescription: `Will we get left behind if we hold onto something too strongly? Can something or someone stay forever? Sometimes if we dwell on the things that ought to be buried we only end up hurting ourselves.`,
  keywords: [`transformative`, `trusting`, `renewing`],
  },

  {
  id: 15,
  name: `Temperance`,
  rank: 14,
  description: `We've occasionally been thrust into the role of the moderator, and this card embraces that ideal. She understands the power of compromise, that only by blending two competing halves can she create a whole. She does this carefully, deliberately, and at times with just a touch of creativity.`,
  revDescription: `What happens without balance? How can we survive if we're living to an extreme? Sometimes it's important to slow down, stop what we're doing, and refocus.`,
  keywords: [`healthy`, `renewed`, `harmonious`, `moderate`, `creative`],
  },

  {
  id: 16,
  name: `The Devil`,
  rank: 15,
  description: `The Devil ought to frighten you. It follows you everywhere, reminds you constantly of your failings, your addictions, your vices and necessities. Don't despair, instead redefine your limitations and make them your strengths.`,
  revDescription: `How have we been selfish? In what ways have we chosen material pleasures over our inner growth? Which impulses and desires cloud our better judgement? We can't curb our worst tendencies until we understand why we follow them.`,
  keywords: [`dependant`, `addictive`, `materialistic`, `instinctive`, `fearful`],
  },

  {
  id: 17,
  name: `The Tower`,
  rank: 16,
  description: `Not every change happens slowly or easily. Sometimes they're swift, painful, and dramatic. The Tower represents this kind of catastrophe and wants us to learn from the mistakes that led to it, or might be leading towards it.`,
  revDescription: `What can we do to avoid catastrophe? How can we learn difficult lessons? Disasters can be avoided, but sometimes they're important teachers.`,
  keywords: [`destructive`, `sacrificial`, `sudden`, `transformative`, `painful`],
  },

  {
  id: 18,
  name: `The Star`,
  rank: 17,
  description: `This card conveys one message: there is always hope. We've never gone so far over the brink that we can't find something good or something wondrous or something that can keep us going. Never give up!`,
  revDescription: `What happens if we give in to despair? How often do we place all our hopes on the slimmest chances? It's important to temper our expectations realistically without giving up.`,
  keywords: [`hopeful`, `open`, `faithful`, `peaceful`],
  },

  {
  id: 19,
  name: `The Moon`,
  rank: 18,
  description: `The Moon holds sway over the shadow world, places that might be real or might not, the things we see in our dreams. She sees the creative powers trapped in our minds and wants us to unleash them.`,
  revDescription: `Can we delve too deep into our own fantasies? What do we lose if we lock away our creative impulses? Let's enjoy our fantastical sides without giving into them completely.`,
  keywords: [`self-reflective`, `mysterious`, `mystical`, `emotional`, `creative`],
  },

  {
  id: 20,
  name: `The Sun`,
  rank: 19,
  description: `Bask in the vibrant rays of the Sun. Somewhere, at times trapped within us, there's a vibrancy waiting to escape. When it finally does remember to just enjoy it.`,
  revDescription: `What happens if we over indulge ourselves when things are good? What happens if we avoid taking care of ourselves? Knowing when to rest can be more important than knowing when to work.`,
  keywords: [`beautiful`, `vital`, `energetic`, `joyful`, `healthy`],
  },

  {
  id: 21,
  name: `Judgement`,
  rank: 20,
  description: `Sometimes we discover a chance to reinvent ourselves. This card wants to confidently hold our hands and guide us through our transformation. To do this we need to be truthful, we need to understand what makes us strong and how we've failed. There's no future without reconciling with the past.`,
  revDescription: `What happens when we hang onto our guilt? What happens when we're afraid of change? What happens if we try to force a change? The past is the past, learn to live with it and carry on.`,
  keywords: [`forgiving`, `hopeful`, `transformative`],
  },

  {
  id: 22,
  name: `The World`,
  rank: 21,
  description: `Let's take a moment to step back and realize, just realize, everything around us. All the things within us, all the things without. Everything we have, the people we're with, the people we are, we can be grateful for all of it whether it came by chance or hard work. The World wants us to see all of these things and thank them one by one for being part of our lives.`,
  revDescription: `What are we ignoring when we want the next new, shiny thing? How can we better appreciate the things that we have? What are we giving up simply through the act of desire? We've been taught how to want, sometimes it's important to set that want aside and enjoy the things we have.`,
  keywords: [`completed`, `resolute`, `whole`, `grateful`],
  }

]

export default majorArcana.map(card => new Object({...card, suit: "Major Arcana"}))
