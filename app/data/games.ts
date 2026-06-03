export const GAMES = [
  // WEEK 1
  {
    id: 1,
    difficulty: 1,
    vocab: "common",
    week: 1,
    day: 1,
    groups: [
      {
        skill: "abstraction",
        words: ["Red", "Blue", "Green", "Yellow"],
        correct: "Basic colors",
        options: ["Basic colors", "Paint brands", "Flags", "Emotions"],
        insight: {
          pattern: "Simple categorization",
          explanation: "These are all basic color words.",
          generalization:
            "The simplest connections often come from shared category.",
          adaptive: {
            correct: "You found the clearest shared category.",
            wrong: "Start by looking for the simplest shared trait.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Heart", "Dove", "Rose", "Olive"],
        correct: "Symbols of love or peace",
        options: [
          "Plants",
          "Symbols of love or peace",
          "Religious icons",
          "Garden items",
        ],
        insight: {
          pattern: "Symbolic meaning",
          explanation:
            "These objects often represent love, peace, or gentleness.",
          generalization:
            "Symbols carry meaning beyond what they physically are.",
          adaptive: {
            correct: "You saw beyond the literal objects.",
            wrong: "Think about what these objects represent.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Book", "Cook", "Look", "Hook"],
        correct: "Words that rhyme",
        options: ["Words that rhyme", "Kitchen words", "Action words", "Objects"],
        insight: {
          pattern: "Sound pattern",
          explanation: "These words share the same ending sound.",
          generalization:
            "Sometimes a connection is based on sound, not meaning.",
          adaptive: {
            correct: "You listened for the pattern.",
            wrong: "Try saying the words aloud.",
          },
        },
      },
    ],
  },

  {
    id: 2,
    difficulty: 2,
    vocab: "common",
    week: 1,
    day: 2,
    groups: [
      {
        skill: "abstraction",
        words: ["Hammer", "Saw", "Drill", "Wrench"],
        correct: "Tools",
        options: ["Tools", "Garage brands", "Construction jobs", "Machines"],
        insight: {
          pattern: "Functional category",
          explanation: "Each word names something used to build or repair.",
          generalization: "Objects can be grouped by what they are used for.",
          adaptive: {
            correct: "You grouped by function.",
            wrong: "Think about what these things help someone do.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Crown", "Throne", "Scepter", "Orb"],
        correct: "Symbols of monarchy",
        options: [
          "Furniture",
          "Symbols of monarchy",
          "Museum objects",
          "Religious items",
        ],
        insight: {
          pattern: "Power symbolism",
          explanation:
            "These objects are associated with kings, queens, and royal authority.",
          generalization: "Some objects become visual shorthand for power.",
          adaptive: {
            correct: "You recognized a symbolic system.",
            wrong: "Look for what these objects stand for.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Run", "Jump", "Play", "Work"],
        correct: "Words that can be nouns or verbs",
        options: [
          "Exercise words",
          "Words that can be nouns or verbs",
          "School activities",
          "Daily chores",
        ],
        insight: {
          pattern: "Part-of-speech flexibility",
          explanation:
            "Each word can act as more than one part of speech depending on context.",
          generalization:
            "English words often shift roles depending on how they are used.",
          adaptive: {
            correct: "You noticed grammar flexibility.",
            wrong: "Think about how each word behaves in a sentence.",
          },
        },
      },
    ],
  },

  {
    id: 3,
    difficulty: 3,
    vocab: "common",
    week: 1,
    day: 3,
    groups: [
      {
        skill: "abstraction",
        words: ["Square", "Circle", "Triangle", "Oval"],
        correct: "Geometric shapes",
        options: [
          "Geometric shapes",
          "Design styles",
          "Architecture terms",
          "Art supplies",
        ],
        insight: {
          pattern: "Shape category",
          explanation: "These words describe basic geometric forms.",
          generalization:
            "Abstract grouping often focuses on form rather than use.",
          adaptive: {
            correct: "You focused on structure.",
            wrong: "Look at what these are as forms.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Fire", "Water", "Earth", "Air"],
        correct: "Classical elements",
        options: [
          "Weather words",
          "Classical elements",
          "Natural disasters",
          "Energy sources",
        ],
        insight: {
          pattern: "Philosophical symbolism",
          explanation:
            "These are traditionally treated as basic elements in many old systems of thought.",
          generalization:
            "Some categories come from culture and philosophy, not just science.",
          adaptive: {
            correct: "You recognized an old symbolic framework.",
            wrong: "Think about older systems of meaning.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Light", "Match", "Ring", "Play"],
        correct: "Words with multiple meanings",
        options: [
          "Sports terms",
          "Words with multiple meanings",
          "Objects",
          "Music words",
        ],
        insight: {
          pattern: "Polysemy",
          explanation:
            "Each word can mean different things depending on context.",
          generalization: "Many words hold several meanings at once.",
          adaptive: {
            correct: "You recognized layered meaning.",
            wrong: "Try placing each word in different sentences.",
          },
        },
      },
    ],
  },

  {
    id: 4,
    difficulty: 4,
    vocab: "mixed",
    week: 1,
    day: 4,
    groups: [
      {
        skill: "abstraction",
        words: ["Jaguar", "Mustang", "Beetle", "Charger"],
        correct: "Car names borrowed from animals or concepts",
        options: [
          "Animals",
          "Car names borrowed from animals or concepts",
          "Sports teams",
          "Luxury brands",
        ],
        insight: {
          pattern: "Borrowed naming",
          explanation:
            "These are car names that borrow meaning from animals or powerful ideas.",
          generalization:
            "Names often gain force by borrowing meaning from another domain.",
          adaptive: {
            correct: "You saw through the surface meaning.",
            wrong:
              "These look like one category, but function as names in another.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Skull", "Hourglass", "Grave", "Scythe"],
        correct: "Symbols of mortality",
        options: [
          "Halloween objects",
          "Symbols of mortality",
          "Tools",
          "Ancient artifacts",
        ],
        insight: {
          pattern: "Mortality symbolism",
          explanation:
            "These objects often represent death, time, or human limits.",
          generalization: "Symbols cluster around deep human themes.",
          adaptive: {
            correct: "You recognized the symbolic layer.",
            wrong:
              "Look for what these objects suggest emotionally or culturally.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Lead", "Wind", "Tear", "Row"],
        correct: "Words with multiple pronunciations",
        options: [
          "Action words",
          "Words with multiple pronunciations",
          "Emotional words",
          "Outdoor words",
        ],
        insight: {
          pattern: "Pronunciation ambiguity",
          explanation:
            "Each spelling can be pronounced in more than one way.",
          generalization:
            "Written language can hide sound-based ambiguity.",
          adaptive: {
            correct: "You noticed sound shifting beneath spelling.",
            wrong: "Try reading each word two different ways.",
          },
        },
      },
    ],
  },

  {
    id: 5,
    difficulty: 5,
    vocab: "mixed",
    week: 1,
    day: 5,
    groups: [
      {
        skill: "abstraction",
        words: ["Apple", "Amazon", "Shell", "Target"],
        correct: "Brands named after everyday words",
        options: [
          "Tech companies",
          "Brands named after everyday words",
          "Retailers",
          "Companies founded before 2000",
        ],
        insight: {
          pattern: "Naming abstraction",
          explanation:
            "These brands use familiar everyday words as company names.",
          generalization:
            "A name can feel memorable because it borrows from common language.",
          adaptive: {
            correct: "You focused on naming structure.",
            wrong:
              "You may have focused on industry instead of naming pattern.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Scale", "Gavel", "Blindfold", "Sword"],
        correct: "Symbols of justice",
        options: [
          "Courtroom objects",
          "Symbols of justice",
          "Weapons",
          "Government buildings",
        ],
        insight: {
          pattern: "Institutional symbolism",
          explanation:
            "These objects are associated with law, judgment, and fairness.",
          generalization:
            "Institutions often rely on symbols to communicate ideals.",
          adaptive: {
            correct: "You recognized symbolic meaning inside a system.",
            wrong: "Think about the idea these objects point toward.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Undo", "Unfair", "Unreal", "Unhappy"],
        correct: "Words using the prefix un-",
        options: [
          "Negative emotions",
          "Words using the prefix un-",
          "Fantasy words",
          "Action words",
        ],
        insight: {
          pattern: "Prefix structure",
          explanation:
            "Each word begins with the prefix un-, which changes or reverses meaning.",
          generalization:
            "Word parts can reveal meaning before the whole word is understood.",
          adaptive: {
            correct: "You noticed word structure.",
            wrong: "Look at the beginning of each word.",
          },
        },
      },
    ],
  },

  {
    id: 6,
    difficulty: 6,
    vocab: "advanced",
    week: 1,
    day: 6,
    groups: [
      {
        skill: "abstraction",
        words: ["Novice", "Expert", "Mentor", "Apprentice"],
        correct: "Roles in learning or mastery",
        options: [
          "Job titles",
          "Roles in learning or mastery",
          "School grades",
          "Personality types",
        ],
        insight: {
          pattern: "Learning roles",
          explanation:
            "These words describe positions people can occupy while learning or teaching.",
          generalization:
            "Vocabulary can map relationships within growth and expertise.",
          adaptive: {
            correct: "You understood the learning relationship.",
            wrong:
              "Think about where each person stands in a learning process.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Phoenix", "Seed", "Dawn", "Spring"],
        correct: "Symbols of renewal",
        options: [
          "Natural things",
          "Symbols of renewal",
          "Mythological ideas",
          "Seasons",
        ],
        insight: {
          pattern: "Renewal symbolism",
          explanation:
            "Each word suggests rebirth, growth, or a new beginning.",
          generalization:
            "Symbols can connect different domains through shared emotional meaning.",
          adaptive: {
            correct: "You recognized a shared symbolic idea.",
            wrong: "Look for the feeling or idea these words evoke.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Run", "Break", "Drive", "Fly"],
        correct: "Words with idiomatic meanings",
        options: [
          "Travel words",
          "Words with idiomatic meanings",
          "Sports actions",
          "Mechanical verbs",
        ],
        insight: {
          pattern: "Idiomatic flexibility",
          explanation:
            "These words appear in phrases where the meaning is not purely literal.",
          generalization:
            "Language often stretches words beyond their basic definitions.",
          adaptive: {
            correct: "You recognized figurative language.",
            wrong: "Think beyond the literal action.",
          },
        },
      },
    ],
  },

  {
    id: 7,
    difficulty: 7,
    vocab: "advanced",
    week: 1,
    day: 7,
    groups: [
      {
        skill: "abstraction",
        words: ["Autodidact", "Polymath", "Savant", "Prodigy"],
        correct: "Words describing unusual learners or thinkers",
        options: [
          "Historical figures",
          "Words describing unusual learners or thinkers",
          "Academic subjects",
          "Occupations",
        ],
        insight: {
          pattern: "Cognitive identity",
          explanation:
            "These words describe people with distinctive relationships to knowledge or talent.",
          generalization:
            "Advanced vocabulary often names not just things, but ways of being.",
          adaptive: {
            correct: "You recognized a conceptual category of thinkers.",
            wrong:
              "Even if some words are unfamiliar, look for the type of person they describe.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Labyrinth", "Mirror", "Mask", "Threshold"],
        correct: "Symbols of identity or transformation",
        options: [
          "Household objects",
          "Symbols of identity or transformation",
          "Stage props",
          "Ancient architecture",
        ],
        insight: {
          pattern: "Transformational symbolism",
          explanation:
            "These images often suggest self-discovery, change, or crossing into a new state.",
          generalization:
            "Abstract symbols can point toward inner experiences.",
          adaptive: {
            correct: "You recognized symbolic depth.",
            wrong:
              "Think about what these objects suggest in stories or myths.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Luddite", "Maverick", "Iconoclast", "Contrarian"],
        correct: "Words for people who resist or challenge norms",
        options: [
          "Political offices",
          "Words for people who resist or challenge norms",
          "Artists",
          "Ancient philosophers",
        ],
        insight: {
          pattern: "Social stance vocabulary",
          explanation:
            "These words describe people who push against common expectations or systems.",
          generalization:
            "Vocabulary can reveal how people position themselves toward society.",
          adaptive: {
            correct: "You saw the shared social stance.",
            wrong:
              "Look for how each word describes a person’s relationship to norms.",
          },
        },
      },
    ],
  },

  // WEEK 2
  {
    id: 8,
    difficulty: 1,
    vocab: "common",
    week: 2,
    day: 1,
    groups: [
      {
        skill: "abstraction",
        words: ["Fork", "Knife", "Spoon", "Plate"],
        correct: "Dining items",
        options: [
          "Kitchen tools",
          "Dining items",
          "Metal objects",
          "Restaurant supplies",
        ],
        insight: {
          pattern: "Shared environment",
          explanation:
            "These objects are commonly used together during meals.",
          generalization:
            "Objects are often grouped by context rather than structure.",
          adaptive: {
            correct: "You recognized the shared setting.",
            wrong:
              "Think about where these objects are commonly used together.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Torch", "Beacon", "Lantern", "Candle"],
        correct: "Symbols of guidance or illumination",
        options: [
          "Fire sources",
          "Symbols of guidance or illumination",
          "Camping tools",
          "Ancient inventions",
        ],
        insight: {
          pattern: "Guidance symbolism",
          explanation:
            "Light is often used symbolically to represent wisdom, direction, or hope.",
          generalization:
            "Symbols often emerge from practical human experiences.",
          adaptive: {
            correct: "You saw beyond literal function.",
            wrong: "Think about what light represents metaphorically.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Cat", "Hat", "Map", "Tap"],
        correct: "Short rhyming words",
        options: [
          "Household words",
          "Short rhyming words",
          "Children’s words",
          "Objects",
        ],
        insight: {
          pattern: "Sound structure",
          explanation:
            "These words connect through shared sound patterns.",
          generalization:
            "Language often creates memory through rhythm and sound.",
          adaptive: {
            correct: "You recognized phonetic similarity.",
            wrong: "Try listening for matching sounds.",
          },
        },
      },
    ],
  },

  {
    id: 9,
    difficulty: 2,
    vocab: "common",
    week: 2,
    day: 2,
    groups: [
      {
        skill: "abstraction",
        words: ["North", "South", "East", "West"],
        correct: "Cardinal directions",
        options: [
          "Compass points",
          "Cardinal directions",
          "Travel routes",
          "Map features",
        ],
        insight: {
          pattern: "Orientation system",
          explanation:
            "These words create a shared system for navigation.",
          generalization:
            "Humans build abstract systems to organize space.",
          adaptive: {
            correct: "You recognized a directional framework.",
            wrong: "Think about systems for navigation.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Anchor", "Compass", "Star", "Map"],
        correct: "Symbols of navigation or direction",
        options: [
          "Sailing tools",
          "Symbols of navigation or direction",
          "Adventure objects",
          "Historical artifacts",
        ],
        insight: {
          pattern: "Directional symbolism",
          explanation:
            "These objects often represent finding one’s path.",
          generalization:
            "Physical navigation frequently becomes symbolic navigation.",
          adaptive: {
            correct: "You recognized symbolic direction.",
            wrong:
              "Think about what these objects metaphorically help people do.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Paint", "Watch", "Drink", "Drive"],
        correct: "Words that are nouns and verbs",
        options: [
          "Creative actions",
          "Words that are nouns and verbs",
          "Daily routines",
          "Movement words",
        ],
        insight: {
          pattern: "Flexible grammar",
          explanation:
            "These words shift roles depending on sentence context.",
          generalization:
            "English often allows words to function across categories.",
          adaptive: {
            correct: "You recognized grammatical flexibility.",
            wrong: "Think about how the word functions in a sentence.",
          },
        },
      },
    ],
  },

  {
    id: 10,
    difficulty: 3,
    vocab: "mixed",
    week: 2,
    day: 3,
    groups: [
      {
        skill: "abstraction",
        words: ["Quartz", "Granite", "Marble", "Slate"],
        correct: "Stone materials",
        options: [
          "Building materials",
          "Stone materials",
          "Ancient objects",
          "Minerals",
        ],
        insight: {
          pattern: "Material classification",
          explanation: "These words identify types of natural stone.",
          generalization:
            "Classification systems often emerge from material properties.",
          adaptive: {
            correct: "You grouped by material identity.",
            wrong: "Focus on what these are physically made of.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Key", "Threshold", "Gate", "Door"],
        correct: "Symbols of transition or access",
        options: [
          "Household objects",
          "Symbols of transition or access",
          "Architectural terms",
          "Security items",
        ],
        insight: {
          pattern: "Threshold symbolism",
          explanation:
            "These objects often symbolize entering a new stage or understanding.",
          generalization:
            "Crossing boundaries is a recurring symbolic theme.",
          adaptive: {
            correct: "You recognized symbolic transition.",
            wrong: "Think about what these objects allow someone to do.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Read", "Bass", "Minute", "Object"],
        correct: "Words with multiple pronunciations and meanings",
        options: [
          "Academic terms",
          "Words with multiple pronunciations and meanings",
          "Musical words",
          "Reading words",
        ],
        insight: {
          pattern: "Language ambiguity",
          explanation:
            "These spellings change meaning depending on pronunciation.",
          generalization:
            "Language often layers meaning inside identical forms.",
          adaptive: {
            correct: "You noticed hidden variation inside spelling.",
            wrong: "Try sounding the words differently.",
          },
        },
      },
    ],
  },

  {
    id: 11,
    difficulty: 4,
    vocab: "mixed",
    week: 2,
    day: 4,
    groups: [
      {
        skill: "abstraction",
        words: ["Jaguar", "Python", "Cougar", "Falcon"],
        correct: "Animal names used for products or systems",
        options: [
          "Predators",
          "Animal names used for products or systems",
          "Zoo animals",
          "Sports mascots",
        ],
        insight: {
          pattern: "Borrowed identity",
          explanation:
            "Animal names are often reused to imply power, speed, or elegance.",
          generalization:
            "Brands and systems borrow symbolic traits through naming.",
          adaptive: {
            correct: "You saw the naming layer beneath the literal animals.",
            wrong: "Think about where else these names are used.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Mirror", "Mask", "Labyrinth", "Shadow"],
        correct: "Symbols of identity or self-discovery",
        options: [
          "Stage objects",
          "Symbols of identity or self-discovery",
          "Fantasy themes",
          "Psychology terms",
        ],
        insight: {
          pattern: "Inner symbolism",
          explanation:
            "These images often represent hidden identity or transformation.",
          generalization:
            "Symbols frequently point toward internal experiences.",
          adaptive: {
            correct: "You recognized symbolic psychology.",
            wrong:
              "Think about what these objects represent emotionally.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Cold", "Sharp", "Bright", "Heavy"],
        correct: "Words with literal and metaphorical uses",
        options: [
          "Descriptive words",
          "Words with literal and metaphorical uses",
          "Scientific terms",
          "Weather words",
        ],
        insight: {
          pattern: "Metaphorical extension",
          explanation:
            "These words can describe both physical traits and abstract ideas.",
          generalization:
            "Language often extends physical experience into abstract thought.",
          adaptive: {
            correct: "You recognized metaphorical flexibility.",
            wrong:
              "Try using the words in emotional or abstract contexts.",
          },
        },
      },
    ],
  },

  {
    id: 12,
    difficulty: 5,
    vocab: "advanced",
    week: 2,
    day: 5,
    groups: [
      {
        skill: "abstraction",
        words: ["Cipher", "Code", "Rune", "Glyph"],
        correct: "Systems or symbols carrying hidden meaning",
        options: [
          "Ancient writing",
          "Systems or symbols carrying hidden meaning",
          "Fantasy language",
          "Programming terms",
        ],
        insight: {
          pattern: "Encoded meaning",
          explanation:
            "These words relate to systems designed to conceal or carry meaning.",
          generalization:
            "Humans constantly create symbolic systems for preserving knowledge.",
          adaptive: {
            correct: "You recognized concealed communication.",
            wrong:
              "Think about symbols that carry hidden information.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Augury", "Omen", "Portent", "Harbinger"],
        correct: "Words related to signs or foretelling",
        options: [
          "Religious rituals",
          "Words related to signs or foretelling",
          "Ancient occupations",
          "Mythological creatures",
        ],
        insight: {
          pattern: "Foretelling symbolism",
          explanation:
            "These words all relate to interpreting signs about the future.",
          generalization:
            "Humans naturally search for patterns to predict what comes next.",
          adaptive: {
            correct: "You recognized the shared idea of prediction.",
            wrong: "Think about signs that point toward future events.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Syntax", "Lexicon", "Idiom", "Dialect"],
        correct: "Words related to language systems",
        options: [
          "Academic subjects",
          "Words related to language systems",
          "Ancient texts",
          "Writing styles",
        ],
        insight: {
          pattern: "Language structure",
          explanation:
            "These words describe systems and behaviors inside language.",
          generalization:
            "Language itself can become an object of study and categorization.",
          adaptive: {
            correct: "You recognized language as a system.",
            wrong: "Think about how language is organized or studied.",
          },
        },
      },
    ],
  },

  {
    id: 13,
    difficulty: 6,
    vocab: "advanced",
    week: 2,
    day: 6,
    groups: [
      {
        skill: "abstraction",
        words: ["Relic", "Artifact", "Totem", "Talisman"],
        correct: "Objects carrying symbolic or historical significance",
        options: [
          "Museum items",
          "Objects carrying symbolic or historical significance",
          "Religious tools",
          "Ancient decorations",
        ],
        insight: {
          pattern: "Meaningful objects",
          explanation:
            "These objects matter because of the meaning people attach to them.",
          generalization:
            "Value often comes from symbolism rather than utility.",
          adaptive: {
            correct: "You focused on significance rather than function.",
            wrong: "Think about why these objects matter to people.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Phoenix", "Threshold", "Dawn", "Seed"],
        correct: "Symbols of renewal or becoming",
        options: [
          "Nature symbols",
          "Symbols of renewal or becoming",
          "Ancient myths",
          "Poetic imagery",
        ],
        insight: {
          pattern: "Transformation symbolism",
          explanation:
            "These images all suggest growth, rebirth, or emergence.",
          generalization:
            "Many symbols center around cycles of transformation.",
          adaptive: {
            correct: "You recognized symbolic rebirth.",
            wrong: "Think about beginnings and transformation.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Literal", "Figurative", "Implicit", "Explicit"],
        correct: "Words describing how meaning is communicated",
        options: [
          "Philosophy terms",
          "Words describing how meaning is communicated",
          "Grammar rules",
          "Writing genres",
        ],
        insight: {
          pattern: "Modes of meaning",
          explanation:
            "These words describe different ways language conveys ideas.",
          generalization:
            "Meaning is shaped not just by words, but by how they are interpreted.",
          adaptive: {
            correct: "You recognized conceptual language structure.",
            wrong: "Think about how communication itself works.",
          },
        },
      },
    ],
  },

  {
    id: 14,
    difficulty: 7,
    vocab: "advanced",
    week: 2,
    day: 7,
    groups: [
      {
        skill: "abstraction",
        words: ["Paradox", "Enigma", "Riddle", "Contradiction"],
        correct: "Concepts involving unresolved meaning or tension",
        options: [
          "Logic terms",
          "Concepts involving unresolved meaning or tension",
          "Ancient puzzles",
          "Philosophy schools",
        ],
        insight: {
          pattern: "Cognitive tension",
          explanation:
            "These ideas challenge the mind by resisting simple resolution.",
          generalization:
            "Complex thinking often begins where certainty breaks down.",
          adaptive: {
            correct: "You recognized intellectual ambiguity.",
            wrong: "Think about ideas that resist easy answers.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Labyrinth", "Mirror", "Veil", "Threshold"],
        correct: "Symbols of transformation or hidden understanding",
        options: [
          "Architectural terms",
          "Symbols of transformation or hidden understanding",
          "Fantasy imagery",
          "Religious rituals",
        ],
        insight: {
          pattern: "Transformational symbolism",
          explanation:
            "These symbols often appear in stories about discovery, identity, or change.",
          generalization:
            "Symbolic systems frequently map internal human experiences.",
          adaptive: {
            correct: "You recognized symbolic depth.",
            wrong:
              "Think about inner transformation rather than literal objects.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Iconoclast", "Maverick", "Contrarian", "Heretic"],
        correct: "Words for people who challenge accepted systems",
        options: [
          "Political roles",
          "Words for people who challenge accepted systems",
          "Religious leaders",
          "Historical archetypes",
        ],
        insight: {
          pattern: "Oppositional identity",
          explanation:
            "These words describe people who reject or disrupt accepted norms.",
          generalization:
            "Language often encodes social relationships to power and conformity.",
          adaptive: {
            correct: "You recognized a shared stance toward systems.",
            wrong:
              "Think about how these people relate to authority or norms.",
          },
        },
      },
    ],
  },
    // WEEK 3 GOES HERE
{
  id: 15,
  difficulty: 1,
  vocab: "common",
  week: 3,
  day: 1,
  groups: [
    {
      skill: "abstraction",
      words: ["Bridge", "Tunnel", "Road", "Path"],
      correct: "Ways of moving from one place to another",
      options: [
        "Transportation tools",
        "Ways of moving from one place to another",
        "Architectural designs",
        "Travel locations",
      ],
      insight: {
        pattern: "Connection systems",
        explanation:
          "These structures or routes help people move between locations.",
        generalization:
          "Humans constantly build systems that connect separated spaces.",
        adaptive: {
          correct: "You recognized the shared purpose.",
          wrong: "Think about what these things allow people to do.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Flame", "Beacon", "Torch", "Lantern"],
      correct: "Symbols of guidance or illumination",
      options: [
        "Ancient tools",
        "Symbols of guidance or illumination",
        "Camping equipment",
        "Danger signals",
      ],
      insight: {
        pattern: "Illumination symbolism",
        explanation:
          "Light often symbolizes knowledge, hope, or direction.",
        generalization:
          "Human cultures frequently use light as a metaphor for understanding.",
        adaptive: {
          correct: "You recognized symbolic guidance.",
          wrong: "Think about what light represents metaphorically.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Bake", "Call", "Paint", "Watch"],
      correct: "Words that are both nouns and verbs",
      options: [
        "Creative actions",
        "Words that are both nouns and verbs",
        "Daily routines",
        "Household words",
      ],
      insight: {
        pattern: "Flexible grammar",
        explanation:
          "These words can function as actions or objects depending on context.",
        generalization:
          "English often allows words to shift roles dynamically.",
        adaptive: {
          correct: "You recognized grammatical flexibility.",
          wrong: "Think about how the word behaves in a sentence.",
        },
      },
    },
  ],
},

{
  id: 16,
  difficulty: 2,
  vocab: "common",
  week: 3,
  day: 2,
  groups: [
    {
      skill: "abstraction",
      words: ["Compass", "Map", "Star", "Guide"],
      correct: "Things that help with direction",
      options: [
        "Travel items",
        "Things that help with direction",
        "Adventure tools",
        "Ancient discoveries",
      ],
      insight: {
        pattern: "Orientation systems",
        explanation:
          "These things help people navigate physically or mentally.",
        generalization:
          "Humans rely on frameworks to avoid becoming lost.",
        adaptive: {
          correct: "You saw the navigational pattern.",
          wrong: "Think about what helps someone find their way.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Seed", "Spring", "Dawn", "Bloom"],
      correct: "Symbols of beginnings or renewal",
      options: [
        "Nature words",
        "Symbols of beginnings or renewal",
        "Gardening terms",
        "Seasonal events",
      ],
      insight: {
        pattern: "Renewal symbolism",
        explanation:
          "These words suggest growth, emergence, or rebirth.",
        generalization:
          "Natural cycles often become symbols for human transformation.",
        adaptive: {
          correct: "You recognized symbolic rebirth.",
          wrong: "Think about growth and new beginnings.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Cold", "Sharp", "Heavy", "Bright"],
      correct: "Words with literal and metaphorical meanings",
      options: [
        "Scientific terms",
        "Words with literal and metaphorical meanings",
        "Weather words",
        "Descriptive adjectives",
      ],
      insight: {
        pattern: "Metaphorical extension",
        explanation:
          "These words describe both physical qualities and abstract ideas.",
        generalization:
          "Language extends physical experience into conceptual thinking.",
        adaptive: {
          correct: "You recognized metaphorical layering.",
          wrong: "Think about emotional or abstract uses of these words.",
        },
      },
    },
  ],
},

{
  id: 17,
  difficulty: 3,
  vocab: "mixed",
  week: 3,
  day: 3,
  groups: [
    {
      skill: "abstraction",
      words: ["Blueprint", "Framework", "Prototype", "Charrette"],
      correct: "Words related to collaborative design or planning",
      options: [
        "Architecture tools",
        "Words related to collaborative design or planning",
        "Construction stages",
        "Engineering terms",
      ],
      insight: {
        pattern: "Design systems",
        explanation:
          "These words relate to organizing or shaping ideas into structure.",
        generalization:
          "Complex creation often begins with collaborative planning.",
        adaptive: {
          correct: "You recognized systems of design.",
          wrong: "Think about how ideas become organized structures.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Threshold", "Gate", "Key", "Door"],
      correct: "Symbols of transition or access",
      options: [
        "Household objects",
        "Symbols of transition or access",
        "Security systems",
        "Architectural terms",
      ],
      insight: {
        pattern: "Transition symbolism",
        explanation:
          "These objects symbolize entering a new phase or understanding.",
        generalization:
          "Crossing boundaries is one of humanity’s deepest symbolic themes.",
        adaptive: {
          correct: "You recognized symbolic transition.",
          wrong: "Think about entering or unlocking something new.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Lead", "Tear", "Wind", "Bass"],
      correct: "Words with multiple pronunciations",
      options: [
        "Action words",
        "Words with multiple pronunciations",
        "Musical terms",
        "Emotional words",
      ],
      insight: {
        pattern: "Pronunciation ambiguity",
        explanation:
          "These spellings change meaning depending on pronunciation.",
        generalization:
          "Written language can conceal multiple spoken meanings.",
        adaptive: {
          correct: "You recognized hidden sound variation.",
          wrong: "Try reading the words aloud differently.",
        },
      },
    },
  ],
},

{
  id: 18,
  difficulty: 4,
  vocab: "mixed",
  week: 3,
  day: 4,
  groups: [
    {
      skill: "abstraction",
      words: ["Gaia", "Atlas", "Nyx", "Chronos"],
      correct: "Figures from Greek mythology",
      options: [
        "Ancient rulers",
        "Figures from Greek mythology",
        "Constellations",
        "Philosophical ideas",
      ],
      insight: {
        pattern: "Mythic systems",
        explanation:
          "These figures belong to ancient Greek systems of storytelling and meaning.",
        generalization:
          "Myths organize human fears, hopes, and natural forces into narrative form.",
        adaptive: {
          correct: "You recognized a mythological framework.",
          wrong: "Think about ancient symbolic storytelling.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Mirror", "Mask", "Shadow", "Veil"],
      correct: "Symbols of hidden identity",
      options: [
        "Stage props",
        "Symbols of hidden identity",
        "Mystery themes",
        "Religious imagery",
      ],
      insight: {
        pattern: "Identity symbolism",
        explanation:
          "These images often suggest concealed truth or self-discovery.",
        generalization:
          "Symbolic systems frequently explore hidden aspects of identity.",
        adaptive: {
          correct: "You recognized symbolic psychology.",
          wrong: "Think about concealment and self-perception.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Literal", "Implicit", "Explicit", "Figurative"],
      correct: "Words describing modes of meaning",
      options: [
        "Philosophy terms",
        "Words describing modes of meaning",
        "Grammar concepts",
        "Academic categories",
      ],
      insight: {
        pattern: "Communication structure",
        explanation:
          "These words describe different ways language conveys ideas.",
        generalization:
          "Meaning depends not only on words, but on interpretation.",
        adaptive: {
          correct: "You recognized conceptual language structure.",
          wrong: "Think about how meaning itself is communicated.",
        },
      },
    },
  ],
},

{
  id: 19,
  difficulty: 5,
  vocab: "advanced",
  week: 3,
  day: 5,
  groups: [
    {
      skill: "abstraction",
      words: ["Relic", "Totem", "Effigy", "Artifact"],
      correct: "Objects carrying symbolic significance",
      options: [
        "Museum objects",
        "Objects carrying symbolic significance",
        "Religious tools",
        "Ancient decorations",
      ],
      insight: {
        pattern: "Meaningful objects",
        explanation:
          "These objects gain importance because of the meaning people assign them.",
        generalization:
          "Symbolic value often outweighs practical utility.",
        adaptive: {
          correct: "You focused on significance rather than function.",
          wrong: "Think about why humans preserve certain objects.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Labyrinth", "Threshold", "Cipher", "Veil"],
      correct: "Symbols of hidden understanding",
      options: [
        "Fantasy imagery",
        "Symbols of hidden understanding",
        "Architectural ideas",
        "Mystery objects",
      ],
      insight: {
        pattern: "Hidden meaning symbolism",
        explanation:
          "These symbols frequently appear in stories about discovery and transformation.",
        generalization:
          "Human beings use symbols to represent invisible inner experiences.",
        adaptive: {
          correct: "You recognized symbolic depth.",
          wrong: "Think about mystery, discovery, and transformation.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Syntax", "Lexicon", "Idiom", "Dialect"],
      correct: "Words related to language systems",
      options: [
        "Writing styles",
        "Words related to language systems",
        "Academic disciplines",
        "Ancient texts",
      ],
      insight: {
        pattern: "Language structure",
        explanation:
          "These terms describe systems or behaviors inside language.",
        generalization:
          "Language itself can become an object of analysis and classification.",
        adaptive: {
          correct: "You recognized language as a structured system.",
          wrong: "Think about how language is organized or studied.",
        },
      },
    },
  ],
},

{
  id: 20,
  difficulty: 6,
  vocab: "advanced",
  week: 3,
  day: 6,
  groups: [
    {
      skill: "abstraction",
      words: ["Palimpsest", "Vestige", "Relic", "Remnant"],
      correct: "Words related to traces of the past",
      options: [
        "Ancient writing",
        "Words related to traces of the past",
        "Historical records",
        "Museum collections",
      ],
      insight: {
        pattern: "Residual meaning",
        explanation:
          "These words describe surviving fragments or echoes of earlier things.",
        generalization:
          "Human understanding often emerges through traces and memory.",
        adaptive: {
          correct: "You recognized the shared idea of remnants.",
          wrong: "Think about things that survive from earlier times.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Phoenix", "Dawn", "Seed", "Threshold"],
      correct: "Symbols of becoming or renewal",
      options: [
        "Nature imagery",
        "Symbols of becoming or renewal",
        "Ancient myths",
        "Religious symbols",
      ],
      insight: {
        pattern: "Transformation symbolism",
        explanation:
          "These symbols suggest emergence, rebirth, or transformation.",
        generalization:
          "Many symbolic systems revolve around cycles of renewal.",
        adaptive: {
          correct: "You recognized symbolic transformation.",
          wrong: "Think about beginnings, emergence, and change.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Paradox", "Enigma", "Contradiction", "Riddle"],
      correct: "Concepts involving unresolved meaning",
      options: [
        "Philosophy terms",
        "Concepts involving unresolved meaning",
        "Ancient puzzles",
        "Logic systems",
      ],
      insight: {
        pattern: "Cognitive tension",
        explanation:
          "These concepts challenge the mind by resisting simple resolution.",
        generalization:
          "Complex thinking often begins where certainty breaks down.",
        adaptive: {
          correct: "You recognized intellectual ambiguity.",
          wrong: "Think about ideas that resist easy answers.",
        },
      },
    },
  ],
},

{
  id: 21,
  difficulty: 7,
  vocab: "advanced",
  week: 3,
  day: 7,
  groups: [
    {
      skill: "abstraction",
      words: ["Apotheosis", "Catharsis", "Transcendence", "Metamorphosis"],
      correct: "Words related to profound transformation",
      options: [
        "Religious rituals",
        "Words related to profound transformation",
        "Ancient philosophies",
        "Psychological states",
      ],
      insight: {
        pattern: "Transformational concepts",
        explanation:
          "These words describe deep change, elevation, or emotional release.",
        generalization:
          "Human language develops rich vocabulary around transformation and growth.",
        adaptive: {
          correct: "You recognized conceptual transformation.",
          wrong: "Think about major inner or outer change.",
        },
      },
    },

    {
      skill: "symbolic",
      words: ["Labyrinth", "Mirror", "Threshold", "Veil"],
      correct: "Symbols of inner transformation",
      options: [
        "Architectural concepts",
        "Symbols of inner transformation",
        "Fantasy imagery",
        "Ancient objects",
      ],
      insight: {
        pattern: "Transformational symbolism",
        explanation:
          "These symbols often appear in stories about identity, growth, and hidden truth.",
        generalization:
          "Symbolic systems frequently map invisible inner experiences.",
        adaptive: {
          correct: "You recognized symbolic depth.",
          wrong: "Think about inward journeys rather than physical objects.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Histrionic", "Affected", "Melodramatic", "Theatrical"],
      correct: "Words related to exaggerated performance or emotion",
      options: [
        "Personality disorders",
        "Words related to exaggerated performance or emotion",
        "Acting techniques",
        "Emotional states",
      ],
      insight: {
        pattern: "Performative expression",
        explanation:
          "These words describe exaggerated or highly performative behavior.",
        generalization:
          "Language often captures the boundary between authenticity and performance.",
        adaptive: {
          correct: "You recognized performative exaggeration.",
          wrong: "Think about emotional expression that feels overly dramatic.",
        },
      },
    },
  ],
},
{
  id: 22,
  difficulty: 1,
  vocab: "common",
  week: 4,
  day: 1,
  groups: [
    {
      skill: "abstraction",
      words: ["Footprint", "Fingerprint", "Stain", "Scratch"],
      correct: "Marks left behind",
      options: ["Marks left behind", "Things on paper", "Outdoor clues", "Accidents"],
      insight: {
        pattern: "Visible traces",
        explanation: "Each word names evidence that something touched or affected a surface.",
        generalization: "Sometimes we understand what happened by reading what remains.",
        adaptive: {
          correct: "You noticed evidence left behind.",
          wrong: "Think about what these things leave on a surface.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Curtain", "Blind", "Hood", "Shroud"],
      correct: "Things that conceal or cover",
      options: ["Window items", "Things that conceal or cover", "Clothing words", "Theater objects"],
      insight: {
        pattern: "Concealment symbolism",
        explanation: "These words all suggest hiding something from view.",
        generalization: "Covering and revealing are basic patterns in symbolic thinking.",
        adaptive: {
          correct: "You saw the shared idea of concealment.",
          wrong: "Think about what these objects do to visibility.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Mark", "Clue", "Hint", "Signal"],
      correct: "Words for signs that point to meaning",
      options: ["Mystery words", "Words for signs that point to meaning", "School words", "Warning words"],
      insight: {
        pattern: "Meaning cues",
        explanation: "Each word suggests information that helps someone infer something.",
        generalization: "Language often points indirectly rather than stating everything outright.",
        adaptive: {
          correct: "You recognized signs as meaning carriers.",
          wrong: "Think about words that help someone figure something out.",
        },
      },
    },
  ],
},

{
  id: 23,
  difficulty: 2,
  vocab: "common",
  week: 4,
  day: 2,
  groups: [
    {
      skill: "abstraction",
      words: ["Delete", "Erase", "Remove", "Clear"],
      correct: "Words meaning to take away",
      options: ["Computer actions", "Words meaning to take away", "Cleaning words", "Editing tools"],
      insight: {
        pattern: "Removal actions",
        explanation: "Each word describes making something no longer present.",
        generalization: "Some patterns are built around absence instead of presence.",
        adaptive: {
          correct: "You recognized the shared action of removal.",
          wrong: "Think about what happens after each action.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Curtain", "Cloak", "Screen", "Cover"],
      correct: "Symbols of hiding or protection",
      options: ["Fabric items", "Symbols of hiding or protection", "Stage objects", "Household things"],
      insight: {
        pattern: "Protective concealment",
        explanation: "These objects can hide something or protect it from view.",
        generalization: "Concealment can signal secrecy, safety, or control.",
        adaptive: {
          correct: "You saw the symbolic role of covering.",
          wrong: "Think about what these things prevent people from seeing.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Edit", "Revise", "Amend", "Polish"],
      correct: "Words related to improving text or ideas",
      options: ["Writing improvements", "Legal terms", "Cleaning actions", "School tasks"],
      insight: {
        pattern: "Revision language",
        explanation: "These words all describe improving or changing something already made.",
        generalization: "Creation often continues through revision.",
        adaptive: {
          correct: "You recognized the revision pattern.",
          wrong: "Think about what happens after a first draft.",
        },
      },
    },
  ],
},

{
  id: 24,
  difficulty: 3,
  vocab: "mixed",
  week: 4,
  day: 3,
  groups: [
    {
      skill: "abstraction",
      words: ["Archive", "Ledger", "Dossier", "Index"],
      correct: "Systems for storing or organizing information",
      options: ["Office supplies", "Systems for storing or organizing information", "Library rooms", "Historical objects"],
      insight: {
        pattern: "Information systems",
        explanation: "These words describe ways information can be stored, tracked, or organized.",
        generalization: "Knowledge becomes useful when it can be arranged and retrieved.",
        adaptive: {
          correct: "You recognized organization as the shared function.",
          wrong: "Think about how information is kept and found.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Vault", "Seal", "Latch", "Hatch"],
      correct: "Symbols of guarded access",
      options: ["Storage objects", "Symbols of guarded access", "Metal objects", "Mechanical parts"],
      insight: {
        pattern: "Protected access",
        explanation: "These words suggest something that can be closed, guarded, or opened only with permission.",
        generalization: "Hidden knowledge often appears behind symbols of protection.",
        adaptive: {
          correct: "You saw access as the shared symbolic idea.",
          wrong: "Think about what keeps something closed or protected.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Tone", "Voice", "Register", "Diction"],
      correct: "Words related to style of expression",
      options: ["Music terms", "Words related to style of expression", "Speech sounds", "Grammar rules"],
      insight: {
        pattern: "Expression style",
        explanation: "These words describe how something is said, not just what is said.",
        generalization: "Meaning changes when style changes.",
        adaptive: {
          correct: "You recognized language style.",
          wrong: "Think about the manner of expression.",
        },
      },
    },
  ],
},

{
  id: 25,
  difficulty: 4,
  vocab: "mixed",
  week: 4,
  day: 4,
  groups: [
    {
      skill: "abstraction",
      words: ["Pentimento", "Afterimage", "Residue", "Imprint"],
      correct: "Evidence of something that was there before",
      options: ["Art techniques", "Evidence of something that was there before", "Visual mistakes", "Memory words"],
      insight: {
        pattern: "Hidden traces",
        explanation: "These words suggest something remains visible after the original moment has passed.",
        generalization: "The past often survives as a trace rather than a full presence.",
        adaptive: {
          correct: "You recognized the trace beneath the surface.",
          wrong: "Think about what remains after something changes or disappears.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Facade", "Persona", "Disguise", "Costume"],
      correct: "Ways of presenting or hiding identity",
      options: ["Clothing words", "Ways of presenting or hiding identity", "Theater terms", "Social roles"],
      insight: {
        pattern: "Constructed identity",
        explanation: "These words suggest an outer presentation that may hide something underneath.",
        generalization: "Identity can be performed, protected, or disguised.",
        adaptive: {
          correct: "You saw identity as something constructed.",
          wrong: "Think about how someone appears versus who they are.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Subtext", "Allusion", "Inference", "Implication"],
      correct: "Words related to indirect meaning",
      options: ["Literary devices", "Words related to indirect meaning", "Logic terms", "Hidden messages"],
      insight: {
        pattern: "Indirect meaning",
        explanation: "These words point to meaning that is suggested rather than stated directly.",
        generalization: "Much of communication happens beneath the surface of words.",
        adaptive: {
          correct: "You recognized meaning beneath the literal layer.",
          wrong: "Think about ideas that are hinted rather than directly said.",
        },
      },
    },
  ],
},

{
  id: 26,
  difficulty: 5,
  vocab: "advanced",
  week: 4,
  day: 5,
  groups: [
    {
      skill: "abstraction",
      words: ["Efface", "Expunge", "Redact", "Excise"],
      correct: "Words meaning to remove from a record or surface",
      options: ["Editing marks", "Words meaning to remove from a record or surface", "Legal actions", "Medical procedures"],
      insight: {
        pattern: "Erasure language",
        explanation: "These words describe removing, cutting away, or obscuring something.",
        generalization: "What is removed can shape meaning as strongly as what remains.",
        adaptive: {
          correct: "You recognized the shared idea of erasure.",
          wrong: "Think about words that make something disappear from view or record.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Fog", "Mist", "Haze", "Smoke"],
      correct: "Symbols of obscured perception",
      options: ["Weather conditions", "Symbols of obscured perception", "Airborne things", "Natural events"],
      insight: {
        pattern: "Obscured vision",
        explanation: "These words all suggest difficulty seeing clearly.",
        generalization: "Unclear vision often becomes a symbol for uncertainty or confusion.",
        adaptive: {
          correct: "You recognized the symbolism of obscurity.",
          wrong: "Think about what these things do to perception.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Ambivalent", "Equivocal", "Opaque", "Oblique"],
      correct: "Words describing unclear or indirect meaning",
      options: ["Negative emotions", "Words describing unclear or indirect meaning", "Visual qualities", "Argument styles"],
      insight: {
        pattern: "Ambiguity vocabulary",
        explanation: "These words describe meaning that is uncertain, indirect, or hard to see through.",
        generalization: "Language has many ways to describe unclear meaning because ambiguity is common.",
        adaptive: {
          correct: "You recognized the shared uncertainty.",
          wrong: "Think about language that resists direct interpretation.",
        },
      },
    },
  ],
},

{
  id: 27,
  difficulty: 6,
  vocab: "advanced",
  week: 4,
  day: 6,
  groups: [
    {
      skill: "abstraction",
      words: ["Hellion", "Firebrand", "Agitator", "Instigator"],
      correct: "People who stir up disruption",
      options: ["Political roles", "People who stir up disruption", "Youthful personalities", "Criminal labels"],
      insight: {
        pattern: "Disruptive roles",
        explanation: "These words describe people who provoke disorder, rebellion, or conflict.",
        generalization: "Every social order develops language for those who disturb it.",
        adaptive: {
          correct: "You recognized disruption as the shared role.",
          wrong: "Think about people who stir things up.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Spark", "Fuse", "Rupture", "Quake"],
      correct: "Symbols of sudden disruption",
      options: ["Physical events", "Symbols of sudden disruption", "Danger signs", "Energy words"],
      insight: {
        pattern: "Disruption symbolism",
        explanation: "These words suggest sudden change, breakage, or instability.",
        generalization: "Small triggers can symbolize large transformations.",
        adaptive: {
          correct: "You recognized symbolic disruption.",
          wrong: "Think about sudden breaks from stability.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Provocation", "Dissent", "Rebuke", "Defiance"],
      correct: "Words related to resisting or challenging authority",
      options: ["Debate terms", "Words related to resisting or challenging authority", "Legal actions", "Emotional reactions"],
      insight: {
        pattern: "Resistance vocabulary",
        explanation: "These words describe ways people push back against power, rules, or expectations.",
        generalization: "Language maps the tension between order and resistance.",
        adaptive: {
          correct: "You recognized resistance as the shared concept.",
          wrong: "Think about acts of challenge or refusal.",
        },
      },
    },
  ],
},

{
  id: 28,
  difficulty: 7,
  vocab: "advanced",
  week: 4,
  day: 7,
  groups: [
    {
      skill: "abstraction",
      words: ["Parallax", "Refraction", "Distortion", "Mirage"],
      correct: "Ways perception can shift or mislead",
      options: ["Optical effects", "Ways perception can shift or mislead", "Scientific measurements", "Visual errors"],
      insight: {
        pattern: "Unstable perception",
        explanation: "These words describe ways reality can appear altered depending on position, medium, or conditions.",
        generalization: "What we perceive is shaped by how and where we look.",
        adaptive: {
          correct: "You recognized perception as unstable.",
          wrong: "Think about how seeing can be changed or misled.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Marionette", "Scaffold", "Suture", "Seam"],
      correct: "Symbols of visible construction or control",
      options: ["Theater objects", "Symbols of visible construction or control", "Building materials", "Repair tools"],
      insight: {
        pattern: "Constructed reality",
        explanation: "These words suggest that something has been assembled, controlled, or held together.",
        generalization: "Sometimes the hidden structure becomes visible at the seams.",
        adaptive: {
          correct: "You recognized construction beneath appearance.",
          wrong: "Think about what shows how something is made or controlled.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Ellipsis", "Aposiopesis", "Euphemism", "Circumlocution"],
      correct: "Ways language hides, softens, or withholds meaning",
      options: ["Grammar marks", "Ways language hides, softens, or withholds meaning", "Rhetorical mistakes", "Speech patterns"],
      insight: {
        pattern: "Withheld meaning",
        explanation: "These words describe ways language can leave things unsaid, softened, or indirect.",
        generalization: "Silence and indirection can carry as much meaning as direct speech.",
        adaptive: {
          correct: "You recognized hidden meaning in language.",
          wrong: "Think about language that avoids saying something directly.",
        },
      },
    },
  ],
},
];