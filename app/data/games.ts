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
        words: ["Maze", "Reflection", "Mask", "Crossroads"],
        correct: "Symbols of identity or transformation",
        options: [
          "Visual objects",
          "Symbols of identity or transformation",
          "Stage props",
          "Places and props",
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
        words: ["Warren", "Double", "Scrim", "Limen"],
        correct: "Symbols of transformation or hidden understanding",
        options: [
          "Theater terms",
          "Symbols of transformation or hidden understanding",
          "Animal homes",
          "Boundary images",
        ],
        insight: {
          pattern: "Transformational symbolism",
          explanation:
            "These symbols suggest concealed paths, doubled selves, hidden layers, and crossing points.",
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
      words: ["Deep", "Flat", "Warm", "Sweet"],
      correct: "Words with literal and metaphorical meanings",
      options: [
        "Taste words",
        "Words with literal and metaphorical meanings",
        "Spatial descriptions",
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
      words: ["Portal", "Causeway", "Passage", "Turnstile"],
      correct: "Symbols of transition or access",
      options: [
        "Transit objects",
        "Symbols of transition or access",
        "Security systems",
        "Architectural terms",
      ],
      insight: {
        pattern: "Transition symbolism",
        explanation:
          "These objects and structures suggest crossing from one state or place into another.",
        generalization:
          "Crossing boundaries is one of humanity’s deepest symbolic themes.",
        adaptive: {
          correct: "You recognized symbolic transition.",
          wrong: "Think about crossing, entering, or moving through.",
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
      words: ["Denotation", "Connotation", "Nuance", "Ambiguity"],
      correct: "Words describing layers of meaning",
      options: [
        "Dictionary features",
        "Words describing layers of meaning",
        "Grammar rules",
        "Debate techniques",
      ],
      insight: {
        pattern: "Meaning layers",
        explanation:
          "These words describe how meaning can be direct, suggested, subtle, or uncertain.",
        generalization:
          "Meaning depends not only on words, but on the layers readers bring to them.",
        adaptive: {
          correct: "You recognized layered meaning.",
          wrong: "Think about how words can carry more than one kind of meaning.",
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
      words: ["Puzzle Box", "Keyhole", "Cipher", "Scrim"],
      correct: "Symbols of hidden understanding",
      options: [
        "Puzzle objects",
        "Symbols of hidden understanding",
        "Security objects",
        "Theater objects",
      ],
      insight: {
        pattern: "Hidden meaning symbolism",
        explanation:
          "These symbols suggest hidden information, obscured views, or clues waiting to be unlocked.",
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
      words: ["Phoneme", "Morpheme", "Semantics", "Pragmatics"],
      correct: "Words related to language systems",
      options: [
        "Speech sounds only",
        "Words related to language systems",
        "Academic disciplines",
        "Writing tools",
      ],
      insight: {
        pattern: "Language structure",
        explanation:
          "These terms describe units and systems that shape how language works.",
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
      words: ["Bud", "Sprout", "Sapling", "Chrysalis"],
      correct: "Images of growth or transformation",
      options: [
        "Nature imagery",
        "Images of growth or transformation",
        "Gardening stages",
        "Seasonal symbols",
      ],
      insight: {
        pattern: "Transformation symbolism",
        explanation:
          "These images suggest emergence, development, and change from one state into another.",
        generalization:
          "Many symbolic systems revolve around cycles of renewal.",
        adaptive: {
          correct: "You recognized growth as transformation.",
          wrong: "Think about development from an early form into something changed.",
        },
      },
    },

    {
      skill: "linguistic",
      words: ["Conundrum", "Aporia", "Koan", "Quandary"],
      correct: "Concepts involving unresolved meaning",
      options: [
        "Philosophy terms",
        "Concepts involving unresolved meaning",
        "Meditation practices",
        "Difficult choices",
      ],
      insight: {
        pattern: "Cognitive tension",
        explanation:
          "These concepts challenge the mind because they resist quick or simple resolution.",
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
      words: ["Cocoon", "Crucible", "Pilgrimage", "Rite"],
      correct: "Symbols of inner transformation",
      options: [
        "Religious rituals only",
        "Symbols of inner transformation",
        "Travel experiences",
        "Protective containers",
      ],
      insight: {
        pattern: "Transformational symbolism",
        explanation:
          "These images suggest testing, passage, and the reshaping of identity.",
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
      options: ["Words related to improving text or ideas", "Legal terms", "Cleaning actions", "School tasks"],
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
{
  id: 29,
  difficulty: 1,
  vocab: "mixed",
  week: 5,
  day: 1,
  groups: [
    {
      skill: "abstraction",
      words: ["Adroit", "Skillful", "Nimble", "Dexterous"],
      correct: "Words describing capable performance",
      options: [
        "Words describing capable performance",
        "Words about speed",
        "Words about intelligence",
        "Words about movement",
      ],
      insight: {
        pattern: "Human ability",
        explanation:
          "These words describe someone who acts with skill, grace, or clever control.",
        generalization:
          "Language often distinguishes simple effort from practiced ability.",
        adaptive: {
          correct: "You recognized words of skillful action.",
          wrong: "Think about someone doing something with practiced ease.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Compass", "Guide", "Beacon", "North Star"],
      correct: "Symbols of direction and guidance",
      options: [
        "Travel tools",
        "Symbols of direction and guidance",
        "Outdoor objects",
        "Navigation mistakes",
      ],
      insight: {
        pattern: "Guidance symbolism",
        explanation:
          "These words suggest orientation, direction, or help finding a path.",
        generalization:
          "Humans often use images of direction to describe wisdom and purpose.",
        adaptive: {
          correct: "You saw the shared idea of guidance.",
          wrong: "Think about what helps someone find their way.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Teach", "Learn", "Study", "Practice"],
      correct: "Words related to acquiring knowledge",
      options: [
        "School actions",
        "Words related to acquiring knowledge",
        "Words about memory",
        "Words about performance",
      ],
      insight: {
        pattern: "Learning process",
        explanation:
          "These words describe different parts of gaining knowledge or ability.",
        generalization:
          "Skill usually develops through repeated cycles of learning and practice.",
        adaptive: {
          correct: "You recognized the learning pattern.",
          wrong: "Think about how ability is developed over time.",
        },
      },
    },
  ],
},

{
  id: 30,
  difficulty: 2,
  vocab: "mixed",
  week: 5,
  day: 2,
  groups: [
    {
      skill: "abstraction",
      words: ["Peccadillo", "Foible", "Quirk", "Idiosyncrasy"],
      correct: "Minor flaws or unusual traits",
      options: [
        "Major failures",
        "Minor flaws or unusual traits",
        "Personality strengths",
        "Social roles",
      ],
      insight: {
        pattern: "Small imperfections",
        explanation:
          "These words describe little faults, habits, or unusual personal traits.",
        generalization:
          "Human identity is often shaped by small imperfections as much as virtues.",
        adaptive: {
          correct: "You recognized the shared idea of minor imperfection.",
          wrong: "Think about flaws that are small rather than serious.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Crack", "Chip", "Scratch", "Dent"],
      correct: "Signs of imperfection",
      options: [
        "Repair words",
        "Signs of imperfection",
        "Marks of ownership",
        "Construction flaws",
      ],
      insight: {
        pattern: "Visible imperfection",
        explanation:
          "These words name small marks that show something is not flawless.",
        generalization:
          "Imperfection often becomes visible through small surface changes.",
        adaptive: {
          correct: "You saw the shared mark of imperfection.",
          wrong: "Think about small damage or visible flaws.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Oddity", "Peculiarity", "Eccentricity", "Trait"],
      correct: "Words describing distinctive characteristics",
      options: [
        "Negative labels",
        "Words describing distinctive characteristics",
        "Medical terms",
        "Hidden talents",
      ],
      insight: {
        pattern: "Individual difference",
        explanation:
          "These words describe qualities that make a person or thing distinctive.",
        generalization:
          "Language helps us notice difference without always judging it harshly.",
        adaptive: {
          correct: "You recognized language of distinctiveness.",
          wrong: "Think about what makes someone or something unusual.",
        },
      },
    },
  ],
},

{
  id: 31,
  difficulty: 3,
  vocab: "mixed",
  week: 5,
  day: 3,
  groups: [
    {
      skill: "abstraction",
      words: ["Indignant", "Aggrieved", "Resentful", "Outraged"],
      correct: "Words related to perceived injustice",
      options: [
        "Words related to perceived injustice",
        "Words related to sadness",
        "Words related to confusion",
        "Words related to surprise",
      ],
      insight: {
        pattern: "Moral emotion",
        explanation:
          "These words describe anger or hurt that comes from feeling something is unfair.",
        generalization:
          "Some emotions are reactions not just to events, but to judgments about right and wrong.",
        adaptive: {
          correct: "You recognized emotion tied to unfairness.",
          wrong: "Think about anger that comes from feeling wronged.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Torch", "Banner", "Whistle", "Megaphone"],
      correct: "Symbols of public protest or speaking out",
      options: [
        "Crowd objects",
        "Symbols of public protest or speaking out",
        "Emergency tools",
        "Performance props",
      ],
      insight: {
        pattern: "Public response",
        explanation:
          "These objects can symbolize people making their voices heard.",
        generalization:
          "When people feel wronged, they often seek visible ways to protest or respond.",
        adaptive: {
          correct: "You connected outrage to public expression.",
          wrong: "Think about objects used when people speak out together.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Fair", "Equal", "Just", "Impartial"],
      correct: "Words related to fairness",
      options: [
        "Legal words only",
        "Words related to fairness",
        "Words about similarity",
        "Words about politeness",
      ],
      insight: {
        pattern: "Fairness vocabulary",
        explanation:
          "These words describe ideals of balanced or unbiased treatment.",
        generalization:
          "Human communities rely on shared language for fairness and justice.",
        adaptive: {
          correct: "You recognized fairness as the shared concept.",
          wrong: "Think about words used when judging whether treatment is right.",
        },
      },
    },
  ],
},

{
  id: 32,
  difficulty: 4,
  vocab: "mixed",
  week: 5,
  day: 4,
  groups: [
    {
      skill: "abstraction",
      words: ["Arduous", "Grueling", "Laborious", "Strenuous"],
      correct: "Words describing difficult effort",
      options: [
        "Words describing difficult effort",
        "Words describing pain",
        "Words describing speed",
        "Words describing failure",
      ],
      insight: {
        pattern: "Demanding effort",
        explanation:
          "These words describe tasks that require energy, endurance, or sustained work.",
        generalization:
          "Effort has its own vocabulary because difficulty can take many forms.",
        adaptive: {
          correct: "You recognized difficult effort.",
          wrong: "Think about work that takes endurance.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Mountain", "Summit", "Climb", "Trail"],
      correct: "Symbols of challenge and perseverance",
      options: [
        "Outdoor words",
        "Symbols of challenge and perseverance",
        "Travel locations",
        "Nature features",
      ],
      insight: {
        pattern: "Challenge symbolism",
        explanation:
          "These words often symbolize effort, progress, and overcoming difficulty.",
        generalization:
          "Physical journeys often become metaphors for inner effort.",
        adaptive: {
          correct: "You saw the metaphor of effort.",
          wrong: "Think about images used to represent hard work or progress.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Persist", "Endure", "Strive", "Persevere"],
      correct: "Words describing sustained effort",
      options: [
        "Words describing sustained effort",
        "Words describing competition",
        "Words describing waiting",
        "Words describing success",
      ],
      insight: {
        pattern: "Persistence language",
        explanation:
          "These words describe continuing despite difficulty.",
        generalization:
          "Human growth often depends less on ease than on sustained effort.",
        adaptive: {
          correct: "You recognized persistence.",
          wrong: "Think about continuing when something is hard.",
        },
      },
    },
  ],
},

{
  id: 33,
  difficulty: 5,
  vocab: "advanced",
  week: 5,
  day: 5,
  groups: [
    {
      skill: "abstraction",
      words: ["Turncoat", "Defector", "Renegade", "Traitor"],
      correct: "People who abandon a former allegiance",
      options: [
        "People who abandon a former allegiance",
        "Military ranks",
        "Political leaders",
        "Independent thinkers",
      ],
      insight: {
        pattern: "Broken allegiance",
        explanation:
          "These words describe people who leave, betray, or turn against a former side.",
        generalization:
          "Language around loyalty often reveals how strongly groups value belonging.",
        adaptive: {
          correct: "You recognized the shared break in allegiance.",
          wrong: "Think about someone leaving or betraying a former side.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Banner", "Flag", "Standard", "Emblem"],
      correct: "Symbols of group identity or allegiance",
      options: [
        "Decorative objects",
        "Symbols of group identity or allegiance",
        "Military equipment",
        "National objects only",
      ],
      insight: {
        pattern: "Belonging symbols",
        explanation:
          "These objects often represent loyalty to a group, cause, or identity.",
        generalization:
          "Groups use symbols to make belonging visible.",
        adaptive: {
          correct: "You recognized symbols of allegiance.",
          wrong: "Think about objects people rally around.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Allegiance", "Loyalty", "Fealty", "Devotion"],
      correct: "Words describing commitment to a cause or person",
      options: [
        "Words describing commitment to a cause or person",
        "Words describing affection only",
        "Religious words",
        "Legal obligations",
      ],
      insight: {
        pattern: "Commitment vocabulary",
        explanation:
          "These words describe attachment, duty, or faithfulness to someone or something.",
        generalization:
          "Commitment can be emotional, social, political, or moral.",
        adaptive: {
          correct: "You recognized the language of commitment.",
          wrong: "Think about words for staying faithful to a person or cause.",
        },
      },
    },
  ],
},

{
  id: 34,
  difficulty: 6,
  vocab: "advanced",
  week: 5,
  day: 6,
  groups: [
    {
      skill: "abstraction",
      words: ["Enraptured", "Captivated", "Mesmerized", "Spellbound"],
      correct: "States of intense fascination",
      options: [
        "States of intense fascination",
        "States of confusion",
        "States of fear",
        "States of celebration",
      ],
      insight: {
        pattern: "Absorbed attention",
        explanation:
          "These words describe being deeply held by wonder, beauty, or fascination.",
        generalization:
          "Attention can feel almost physical when something fully captures the mind.",
        adaptive: {
          correct: "You recognized intense fascination.",
          wrong: "Think about being completely absorbed by something.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Aurora", "Comet", "Eclipse", "Constellation"],
      correct: "Natural phenomena that inspire wonder",
      options: [
        "Astronomy terms",
        "Natural phenomena that inspire wonder",
        "Night sky objects only",
        "Ancient omens",
      ],
      insight: {
        pattern: "Wonder imagery",
        explanation:
          "These sights often create awe because they feel rare, vast, or mysterious.",
        generalization:
          "Human wonder often begins when ordinary perception meets something vast.",
        adaptive: {
          correct: "You recognized images of wonder.",
          wrong: "Think about sights that make people stop and stare.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Awe", "Wonder", "Marvel", "Astonishment"],
      correct: "Words describing amazement",
      options: [
        "Words describing amazement",
        "Words describing happiness",
        "Words describing fear",
        "Words describing beauty",
      ],
      insight: {
        pattern: "Amazement vocabulary",
        explanation:
          "These words describe reactions to something surprising, beautiful, or extraordinary.",
        generalization:
          "Language gives us many ways to name moments that exceed expectation.",
        adaptive: {
          correct: "You recognized amazement.",
          wrong: "Think about the feeling of being deeply surprised or impressed.",
        },
      },
    },
  ],
},

{
  id: 35,
  difficulty: 7,
  vocab: "advanced",
  week: 5,
  day: 7,
  groups: [
    {
      skill: "abstraction",
      words: ["Destiny", "Providence", "Fortune", "Fate"],
      correct: "Concepts related to predetermined outcomes",
      options: [
        "Concepts related to predetermined outcomes",
        "Words about luck only",
        "Religious ideas only",
        "Words about success",
      ],
      insight: {
        pattern: "Fate concepts",
        explanation:
          "These words describe forces or ideas that suggest life may be shaped beyond personal control.",
        generalization:
          "Human beings have long used language to debate chance, choice, and destiny.",
        adaptive: {
          correct: "You recognized the language of fate.",
          wrong: "Think about words for what seems meant to happen.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Thread", "Shears", "Loom", "Spindle"],
      correct: "Symbols associated with The Fates",
      options: [
        "Textile tools",
        "Symbols associated with The Fates",
        "Household objects",
        "Ancient inventions",
      ],
      insight: {
        pattern: "Fate symbolism",
        explanation:
          "In myth, life is often imagined as a thread that can be spun, measured, and cut.",
        generalization:
          "Symbols make abstract ideas like mortality and destiny easier to grasp.",
        adaptive: {
          correct: "You recognized the mythic symbolism of fate.",
          wrong: "Think about life imagined as something woven or cut.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Inevitable", "Foreordained", "Predestined", "Inescapable"],
      correct: "Words describing unavoidable outcomes",
      options: [
        "Words describing unavoidable outcomes",
        "Words describing punishment",
        "Words describing planning",
        "Words describing certainty in science",
      ],
      insight: {
        pattern: "Unavoidability language",
        explanation:
          "These words describe events or outcomes that seem impossible to avoid.",
        generalization:
          "The tension between freedom and inevitability is one of humanity’s oldest questions.",
        adaptive: {
          correct: "You recognized unavoidable outcomes.",
          wrong: "Think about events that cannot be escaped or changed.",
        },
      },
    },
  ],
},

// WEEK 6
{
  id: 36,
  difficulty: 1,
  vocab: "common",
  week: 6,
  day: 1,
  groups: [
    {
      skill: "abstraction",
      words: ["Boast", "Assertion", "Claim", "Declaration"],
      correct: "Confident statements of position",
      options: [
        "Confident statements of position",
        "Private doubts",
        "Legal documents",
        "Questions that invite debate",
      ],
      insight: {
        pattern: "Assertive expression",
        explanation:
          "These words describe statements or acts of saying something with confidence.",
        generalization:
          "Confidence often shows up first in how directly someone states a position.",
        adaptive: {
          correct: "You recognized confident expression.",
          wrong: "Think about words for putting a position forward.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Trumpet", "Spotlight", "Podium", "Marquee"],
      correct: "Images of public attention",
      options: [
        "Performance equipment",
        "Images of public attention",
        "Theater architecture",
        "Objects used in ceremonies",
      ],
      insight: {
        pattern: "Attention symbolism",
        explanation:
          "These images suggest being seen, heard, announced, or placed before an audience.",
        generalization:
          "Public symbols can turn private confidence into shared attention.",
        adaptive: {
          correct: "You saw the public-attention pattern.",
          wrong: "Think about what draws an audience's focus.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["State", "Announce", "Declare", "Proclaim"],
      correct: "Verbs for making something known",
      options: [
        "Verbs for making something known",
        "Ways to whisper",
        "Words about hiding information",
        "Verbs for changing your mind",
      ],
      insight: {
        pattern: "Announcement verbs",
        explanation:
          "These verbs all describe putting information, belief, or intention into words.",
        generalization:
          "Language gives different levels of force to the act of saying something openly.",
        adaptive: {
          correct: "You noticed the shared act of announcing.",
          wrong: "Think about verbs for saying something publicly or clearly.",
        },
      },
    },
  ],
},

{
  id: 37,
  difficulty: 2,
  vocab: "common",
  week: 6,
  day: 2,
  groups: [
    {
      skill: "abstraction",
      words: ["Unfazed", "Calm", "Composed", "Steady"],
      correct: "Remaining unaffected under pressure",
      options: [
        "Remaining unaffected under pressure",
        "Moving quickly",
        "Feeling uncertain",
        "Avoiding responsibility",
      ],
      insight: {
        pattern: "Composure under pressure",
        explanation:
          "These words describe staying even, settled, or emotionally steady when things intensify.",
        generalization:
          "Composure is not the absence of pressure; it is a response to pressure.",
        adaptive: {
          correct: "You recognized steadiness under strain.",
          wrong: "Think about words for not being thrown off.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Harbor", "Lighthouse", "Breakwater", "Ballast"],
      correct: "Images of steadiness under pressure",
      options: [
        "Coastal vacation places",
        "Images of steadiness under pressure",
        "Navigation tools only",
        "Objects that create speed",
      ],
      insight: {
        pattern: "Stability imagery",
        explanation:
          "These images suggest shelter, balance, guidance, or protection when conditions are rough.",
        generalization:
          "Symbols of stability often come from things that hold firm against force.",
        adaptive: {
          correct: "You recognized stability imagery.",
          wrong: "Think about what stays useful when conditions get rough.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Poise", "Control", "Balance", "Restraint"],
      correct: "Terms for self-command",
      options: [
        "Terms for self-command",
        "Words about physical size",
        "Financial measurements",
        "Types of movement",
      ],
      insight: {
        pattern: "Self-command vocabulary",
        explanation:
          "These words describe managing yourself instead of being pulled around by the moment.",
        generalization:
          "Self-control often looks quiet, but it can be one of the strongest responses.",
        adaptive: {
          correct: "You found the self-command connection.",
          wrong: "Think about words for keeping yourself steady.",
        },
      },
    },
  ],
},

{
  id: 38,
  difficulty: 3,
  vocab: "intermediate",
  week: 6,
  day: 3,
  groups: [
    {
      skill: "abstraction",
      words: ["Misconstrue", "Misread", "Misinterpret", "Misjudge"],
      correct: "Forms of misunderstanding",
      options: [
        "Forms of misunderstanding",
        "Ways to memorize",
        "Forms of agreement",
        "Methods of translation",
      ],
      insight: {
        pattern: "Misreading meaning",
        explanation:
          "Each word describes getting the meaning, intention, or situation wrong.",
        generalization:
          "Misunderstanding often begins when a signal is real but the interpretation is off.",
        adaptive: {
          correct: "You recognized the misunderstanding pattern.",
          wrong: "Look for the shared prefix and the mistaken reading behind it.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Echo", "Static", "Smudge", "Prism"],
      correct: "Signals that distort or blur perception",
      options: [
        "Art supplies",
        "Signals that distort or blur perception",
        "Sounds only",
        "Objects that clarify meaning",
      ],
      insight: {
        pattern: "Distortion imagery",
        explanation:
          "These images suggest a message or image that changes as it travels or is seen.",
        generalization:
          "When perception is distorted, even accurate signals can become hard to trust.",
        adaptive: {
          correct: "You saw the distortion pattern.",
          wrong: "Think about what changes a signal before it reaches you.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Ambiguous", "Vague", "Obscure", "Unclear"],
      correct: "Words describing uncertain meaning",
      options: [
        "Words describing uncertain meaning",
        "Words describing loud sound",
        "Words describing exact proof",
        "Words for strong emotion",
      ],
      insight: {
        pattern: "Unclear meaning",
        explanation:
          "These words describe language or meaning that is difficult to pin down.",
        generalization:
          "Unclear language increases the space where misunderstanding can grow.",
        adaptive: {
          correct: "You recognized uncertainty in meaning.",
          wrong: "Think about words that make meaning less definite.",
        },
      },
    },
  ],
},

{
  id: 39,
  difficulty: 4,
  vocab: "intermediate",
  week: 6,
  day: 4,
  groups: [
    {
      skill: "abstraction",
      words: ["Scrupulous", "Integrity", "Honor", "Conscience"],
      correct: "Words related to inner moral standards",
      options: [
        "Words related to inner moral standards",
        "Words about social popularity",
        "Legal punishments",
        "Forms of public praise",
      ],
      insight: {
        pattern: "Character vocabulary",
        explanation:
          "These words point to honesty, careful conduct, and an inner sense of what is right.",
        generalization:
          "Character is often measured by what people preserve when pressure rises.",
        adaptive: {
          correct: "You recognized the inner-standards thread.",
          wrong: "Think about words for conscience, honesty, and honorable conduct.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Pillar", "Foundation", "Keystone", "Plumb Line"],
      correct: "Images of structural soundness and alignment",
      options: [
        "Construction materials only",
        "Images of structural soundness and alignment",
        "Decorative architecture",
        "Objects that hide weakness",
      ],
      insight: {
        pattern: "Structural principle imagery",
        explanation:
          "These images suggest uprightness, support, alignment, and the parts that hold a structure together.",
        generalization:
          "We often borrow building images to describe the invisible structure of values.",
        adaptive: {
          correct: "You saw the structural metaphor for character.",
          wrong: "Think about what helps something stand true and hold together.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Courtesy", "Civility", "Tact", "Decorum"],
      correct: "Words for considerate social conduct",
      options: [
        "Words for considerate social conduct",
        "Words describing clever tricks",
        "Words about physical strength",
        "Words for public attention",
      ],
      insight: {
        pattern: "Social grace vocabulary",
        explanation:
          "These words describe respectful, careful, or socially appropriate behavior toward others.",
        generalization:
          "Character is not only what someone believes; it also appears in how they treat people.",
        adaptive: {
          correct: "You recognized considerate conduct.",
          wrong: "Think about words for polite, respectful, socially careful behavior.",
        },
      },
    },
  ],
},

{
  id: 40,
  difficulty: 5,
  vocab: "advanced",
  week: 6,
  day: 5,
  groups: [
    {
      skill: "abstraction",
      words: ["Traduce", "Slander", "Defame", "Vilify"],
      correct: "Words meaning to damage someone's reputation",
      options: [
        "Words meaning to damage someone's reputation",
        "Words meaning to forgive someone",
        "Ways to praise publicly",
        "Forms of private disagreement",
      ],
      insight: {
        pattern: "Reputation attack",
        explanation:
          "These words describe attacking, lowering, or damaging how someone is seen by others.",
        generalization:
          "Judgment can become harmful when it shifts from evaluating actions to destroying reputation.",
        adaptive: {
          correct: "You recognized reputation-damaging language.",
          wrong: "Think about words for harming how others see someone.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Poison", "Whisper", "Venom", "Rumor"],
      correct: "Images of subtle harm spread through words",
      options: [
        "Images of subtle harm spread through words",
        "Medical treatments",
        "Objects used in celebrations",
        "Signs of honest debate",
      ],
      insight: {
        pattern: "Hidden injury imagery",
        explanation:
          "These images suggest harm that moves quietly through speech, suggestion, or reputation.",
        generalization:
          "Some forms of harm spread quietly because words can carry damage from person to person.",
        adaptive: {
          correct: "You saw the subtle-harm symbolism.",
          wrong: "Think about harm that travels through speech or reputation.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Acerbic", "Caustic", "Scathing", "Barbed"],
      correct: "Words describing harsh criticism",
      options: [
        "Words describing harsh criticism",
        "Words describing careful kindness",
        "Words about physical speed",
        "Words for uncertain meaning",
      ],
      insight: {
        pattern: "Cutting language",
        explanation:
          "These words describe criticism or speech that feels sharp, severe, or intentionally cutting.",
        generalization:
          "Language can carry force even when nothing physical happens.",
        adaptive: {
          correct: "You recognized harsh criticism.",
          wrong: "Think about words that describe sharp or cutting criticism.",
        },
      },
    },
  ],
},

{
  id: 41,
  difficulty: 6,
  vocab: "advanced",
  week: 6,
  day: 6,
  groups: [
    {
      skill: "abstraction",
      words: ["Quiver", "Tremble", "Shudder", "Shake"],
      correct: "Physical reactions to fear or intensity",
      options: [
        "Physical reactions to fear or intensity",
        "Ways to speak clearly",
        "Forms of careful planning",
        "Actions that create silence",
      ],
      insight: {
        pattern: "Body under pressure",
        explanation:
          "These words describe small or visible movements caused by fear, cold, emotion, or force.",
        generalization:
          "Pressure often appears in the body before it becomes a clear thought.",
        adaptive: {
          correct: "You recognized the bodily reaction pattern.",
          wrong: "Think about what the body does under fear or strain.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Stampede", "Avalanche", "Wildfire", "Deluge"],
      correct: "Overwhelming forces that spread beyond control",
      options: [
        "Weather events only",
        "Overwhelming forces that spread beyond control",
        "Quiet natural cycles",
        "Tools for stopping movement",
      ],
      insight: {
        pattern: "Escalation imagery",
        explanation:
          "Each image suggests motion or force that grows dangerous once it begins spreading.",
        generalization:
          "Escalation becomes dangerous when momentum outruns control.",
        adaptive: {
          correct: "You recognized runaway escalation.",
          wrong: "Think about forces that become overwhelming as they spread.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Panic", "Alarm", "Dread", "Terror"],
      correct: "Words related to fear responses",
      options: [
        "Words related to fear responses",
        "Words describing confidence",
        "Words about moral standards",
        "Words for public announcements",
      ],
      insight: {
        pattern: "Fear vocabulary",
        explanation:
          "These words describe fear as it rises from warning to intense distress.",
        generalization:
          "Escalation is not only external; emotions can intensify in stages too.",
        adaptive: {
          correct: "You recognized the fear-response thread.",
          wrong: "Think about feelings that grow when danger seems near.",
        },
      },
    },
  ],
},

{
  id: 42,
  difficulty: 7,
  vocab: "advanced",
  week: 6,
  day: 7,
  groups: [
    {
      skill: "abstraction",
      words: ["Salvation", "Redemption", "Deliverance", "Reprieve"],
      correct: "Forms of rescue or release from danger",
      options: [
        "Forms of rescue or release from danger",
        "Words about public attention",
        "Forms of legal judgment",
        "Words about unclear meaning",
      ],
      insight: {
        pattern: "Rescue vocabulary",
        explanation:
          "These words describe being saved, released, restored, or spared from danger or ruin.",
        generalization:
          "Endurance often depends on the moment when danger gives way to the possibility of rescue.",
        adaptive: {
          correct: "You recognized rescue and release.",
          wrong: "Think about words for being saved from danger or ruin.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Lifeline", "Foothold", "Ascent", "Clearing"],
      correct: "Images of gaining ground after difficulty",
      options: [
        "Images of gaining ground after difficulty",
        "Objects used for public speaking",
        "Signs of reputation damage",
        "Forms of distorted perception",
      ],
      insight: {
        pattern: "Recovery imagery",
        explanation:
          "These images suggest a way through: support, purchase, upward movement, or space after being trapped.",
        generalization:
          "Symbols of recovery often show a person finding just enough ground to continue.",
        adaptive: {
          correct: "You recognized images of recovery.",
          wrong: "Think about images that suggest getting through difficulty.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Myriad", "Countless", "Innumerable", "Multitudinous"],
      correct: "Words meaning too many to count",
      options: [
        "Words meaning too many to count",
        "Words describing exact measurement",
        "Words for small mistakes",
        "Words about moral conduct",
      ],
      insight: {
        pattern: "Abundance vocabulary",
        explanation:
          "These words describe quantities so large they feel impossible or impractical to count.",
        generalization:
          "Language stretches when ordinary counting cannot capture the scale of what is present.",
        adaptive: {
          correct: "You recognized countless abundance.",
          wrong: "Think about words for quantities too large to count.",
        },
      },
    },
  ],
},

// WEEK 7
{
  id: 43,
  difficulty: 1,
  vocab: "mixed",
  week: 7,
  day: 1,
  groups: [
    {
      skill: "abstraction",
      words: ["Valley", "Canyon", "Ravine", "Coulee"],
      correct: "Low landforms shaped by flowing water",
      options: [
        "Low landforms shaped by flowing water",
        "Things that help someone move upward",
        "Words for joyful moods",
        "Ways to measure trends",
      ],
      insight: {
        pattern: "Landform category",
        explanation:
          "Valleys, canyons, ravines, and coulees are low places or channels shaped by water and erosion.",
        generalization:
          "An unfamiliar word can become clearer when it sits beside easier examples from the same category.",
        adaptive: {
          correct: "You used the familiar landforms to unlock the new one.",
          wrong: "Think about terrain, channels, and the movement of water.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Ladder", "Staircase", "Ramp", "Elevator"],
      correct: "Things that help someone move upward",
      options: [
        "Tools for measuring depth",
        "Things that help someone move upward",
        "Quiet places in nature",
        "Words for personal preference",
      ],
      insight: {
        pattern: "Upward movement aids",
        explanation:
          "Each item helps a person go higher or reach a higher level.",
        generalization:
          "Physical objects often make an abstract idea, like progress or ascent, easier to see.",
        adaptive: {
          correct: "You recognized the upward movement pattern.",
          wrong: "Think about what these objects help someone do.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Ascend", "Mount", "Rise", "Soar"],
      correct: "Verbs for moving upward",
      options: [
        "Verbs for moving upward",
        "Words meaning to speak too long",
        "Ways to show resistance",
        "Terms for written references",
      ],
      insight: {
        pattern: "Directional verbs",
        explanation:
          "These verbs all describe upward motion, either literally or figuratively.",
        generalization:
          "Language often borrows physical movement to describe growth, improvement, or hope.",
        adaptive: {
          correct: "You found the shared upward action.",
          wrong: "Think about direction and motion.",
        },
      },
    },
  ],
},

{
  id: 44,
  difficulty: 2,
  vocab: "mixed",
  week: 7,
  day: 2,
  groups: [
    {
      skill: "abstraction",
      words: ["Joyous", "Blissful", "Radiant", "Beatific"],
      correct: "Words for deep happiness or serenity",
      options: [
        "Words for deep happiness or serenity",
        "Words for stubborn refusal",
        "Landforms shaped by water",
        "Things that signal a trend",
      ],
      insight: {
        pattern: "Happiness vocabulary",
        explanation:
          "These words describe happiness, peace, or a glowing sense of delight.",
        generalization:
          "Emotional vocabulary can differ by intensity, from simple happiness to almost serene joy.",
        adaptive: {
          correct: "You recognized the shared feeling of deep gladness.",
          wrong: "Think about words that describe a bright or peaceful happiness.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Garland", "Music", "Feast", "Dance"],
      correct: "Images of celebration",
      options: [
        "Images of celebration",
        "Parts of a measuring display",
        "Ways to shorten writing",
        "Signs of blocked access",
      ],
      insight: {
        pattern: "Celebration imagery",
        explanation:
          "Garlands, music, feasts, and dancing often appear when people celebrate together.",
        generalization:
          "Some objects and actions become shorthand for a shared emotional setting.",
        adaptive: {
          correct: "You saw the celebration pattern.",
          wrong: "Think about what might appear at a joyful gathering.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Idyllic", "Serene", "Pastoral", "Picturesque"],
      correct: "Words for peaceful, beautiful scenes",
      options: [
        "Words for peaceful, beautiful scenes",
        "Words for harsh criticism",
        "Verbs for choosing",
        "Things used to mislead people",
      ],
      insight: {
        pattern: "Scenic description",
        explanation:
          "These words describe places or scenes that feel peaceful, beautiful, rural, or visually pleasing.",
        generalization:
          "A setting can carry emotional meaning through the kind of language used to describe it.",
        adaptive: {
          correct: "You recognized the peaceful scene vocabulary.",
          wrong: "Think about words used to describe a beautiful quiet place.",
        },
      },
    },
  ],
},

{
  id: 45,
  difficulty: 3,
  vocab: "mixed",
  week: 7,
  day: 3,
  groups: [
    {
      skill: "abstraction",
      words: ["Penchant", "Preference", "Inclination", "Taste"],
      correct: "A personal liking or leaning",
      options: [
        "A personal liking or leaning",
        "A public warning sign",
        "A piece of added text",
        "A type of landform",
      ],
      insight: {
        pattern: "Preference vocabulary",
        explanation:
          "These words describe what someone tends to like, choose, or be drawn toward.",
        generalization:
          "A person's choices often reveal an underlying leaning before they explain it directly.",
        adaptive: {
          correct: "You recognized the language of personal liking.",
          wrong: "Think about words for what someone naturally favors.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Magnet", "Lure", "Bait", "Siren"],
      correct: "Things that attract or draw attention",
      options: [
        "Things that attract or draw attention",
        "Objects used for climbing",
        "Words that mean brief",
        "Ways to refuse pressure",
      ],
      insight: {
        pattern: "Attraction imagery",
        explanation:
          "Each word suggests something that pulls attention, interest, or movement toward it.",
        generalization:
          "Images of attraction can help explain why some choices feel almost automatic.",
        adaptive: {
          correct: "You found the pull behind the images.",
          wrong: "Think about what these things do to attention or desire.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Prefer", "Favor", "Choose", "Select"],
      correct: "Verbs for choosing one thing over others",
      options: [
        "Verbs for choosing one thing over others",
        "Verbs for hiding meaning",
        "Words for scenic beauty",
        "Words for sudden trend changes",
      ],
      insight: {
        pattern: "Choice verbs",
        explanation:
          "These verbs describe selecting, liking, or choosing one option instead of another.",
        generalization:
          "Preference becomes visible when a person repeatedly chooses one thing over another.",
        adaptive: {
          correct: "You recognized the choice pattern.",
          wrong: "Think about actions that show preference.",
        },
      },
    },
  ],
},

{
  id: 46,
  difficulty: 4,
  vocab: "mixed",
  week: 7,
  day: 4,
  groups: [
    {
      skill: "abstraction",
      words: ["Bellwether", "Indicator", "Barometer", "Gauge"],
      correct: "Things that signal a broader trend",
      options: [
        "Things that signal a broader trend",
        "Words for peaceful happiness",
        "Objects that block entry",
        "Extra text added to a document",
      ],
      insight: {
        pattern: "Trend signal vocabulary",
        explanation:
          "These words can describe something used to read, predict, or measure a larger trend.",
        generalization:
          "One clear signal can help us understand a wider pattern that is still unfolding.",
        adaptive: {
          correct: "You recognized the broader-trend signal.",
          wrong: "Think about words for things that reveal a larger pattern.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Needle", "Dial", "Meter", "Readout"],
      correct: "Parts or displays that show a measurement",
      options: [
        "Things used to celebrate",
        "Parts or displays that show a measurement",
        "Hard-to-catch qualities",
        "Words for indirect references",
      ],
      insight: {
        pattern: "Measurement display",
        explanation:
          "Needles, dials, meters, and readouts help show a level, amount, or change.",
        generalization:
          "Signals become useful when they can be read clearly.",
        adaptive: {
          correct: "You saw the measurement-display pattern.",
          wrong: "Think about where a person would look to read a measurement.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Spike", "Dip", "Surge", "Slump"],
      correct: "Words for sharp movement in a trend",
      options: [
        "Words for sharp movement in a trend",
        "Verbs for moving upward only",
        "Words meaning too many to count",
        "Landforms carved by water",
      ],
      insight: {
        pattern: "Trend movement",
        explanation:
          "These words describe noticeable upward or downward movement in a value, pattern, or trend.",
        generalization:
          "Trend language turns change into a shape we can understand.",
        adaptive: {
          correct: "You recognized the trend movement vocabulary.",
          wrong: "Think about words used for noticeable changes in charts, numbers, or patterns.",
        },
      },
    },
  ],
},

{
  id: 47,
  difficulty: 5,
  vocab: "advanced",
  week: 7,
  day: 5,
  groups: [
    {
      skill: "abstraction",
      words: ["Prolix", "Wordy", "Rambling", "Long-winded"],
      correct: "Using more words than needed",
      options: [
        "Using more words than needed",
        "Speaking in a very brief way",
        "Pointing indirectly to another text",
        "Refusing to change under pressure",
      ],
      insight: {
        pattern: "Overlong expression",
        explanation:
          "These words describe speech or writing that uses too many words or wanders too long.",
        generalization:
          "More words do not always create more meaning; sometimes length makes thought harder to follow.",
        adaptive: {
          correct: "You recognized the overlong-expression pattern.",
          wrong: "Think about writing that keeps going after the point is clear.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Footnote", "Appendix", "Addendum", "Endnote"],
      correct: "Supplementary text added to a main work",
      options: [
        "Supplementary text added to a main work",
        "Objects that attract attention",
        "Ways to measure a trend",
        "Images of celebration",
      ],
      insight: {
        pattern: "Added text",
        explanation:
          "Footnotes, appendices, addenda, and endnotes add extra information around a main text.",
        generalization:
          "Some writing expands by adding supporting material rather than changing the main line.",
        adaptive: {
          correct: "You recognized the added-text category.",
          wrong: "Think about text that sits beside or after the main piece.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Concise", "Terse", "Brief", "Succinct"],
      correct: "Short and to the point",
      options: [
        "Short and to the point",
        "Hard to catch or locate",
        "Deeply joyful or serene",
        "Personal likings or leanings",
      ],
      insight: {
        pattern: "Economy of expression",
        explanation:
          "These words describe language that is short, efficient, and direct.",
        generalization:
          "A precise thought can become stronger when unnecessary words are removed.",
        adaptive: {
          correct: "You recognized the concise-language pattern.",
          wrong: "Think about words for speech or writing that gets to the point quickly.",
        },
      },
    },
  ],
},

{
  id: 48,
  difficulty: 6,
  vocab: "advanced",
  week: 7,
  day: 6,
  groups: [
    {
      skill: "abstraction",
      words: ["Obdurate", "Stubborn", "Unyielding", "Inflexible"],
      correct: "Refusing to change or give way",
      options: [
        "Refusing to change or give way",
        "Words for peaceful scenery",
        "Things that reveal measurement",
        "Ways to write briefly",
      ],
      insight: {
        pattern: "Stubborn stance",
        explanation:
          "These words describe someone or something that resists change, persuasion, or pressure.",
        generalization:
          "A stance can become a pattern when refusal hardens into habit.",
        adaptive: {
          correct: "You recognized the refusal-to-yield pattern.",
          wrong: "Think about words for someone who will not bend or change.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Wall", "Lock", "Barricade", "Deadbolt"],
      correct: "Images of blocked access or resistance",
      options: [
        "Images of blocked access or resistance",
        "Images of peaceful celebration",
        "Ways to point indirectly",
        "Tools for reading a trend",
      ],
      insight: {
        pattern: "Resistance imagery",
        explanation:
          "Walls, locks, barricades, and deadbolts suggest blocked movement or refusal to open.",
        generalization:
          "Physical barriers often become symbols for emotional or intellectual resistance.",
        adaptive: {
          correct: "You saw the blocked-access imagery.",
          wrong: "Think about objects that keep something from passing through.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Resist", "Refuse", "Withstand", "Oppose"],
      correct: "Verbs for standing against pressure",
      options: [
        "Verbs for standing against pressure",
        "Verbs for choosing a favorite",
        "Words for scenic beauty",
        "Words meaning overly long",
      ],
      insight: {
        pattern: "Resistance verbs",
        explanation:
          "These verbs describe pushing back, not accepting, or standing firm under pressure.",
        generalization:
          "Resistance can be an action, not only a personality trait.",
        adaptive: {
          correct: "You recognized the action of resisting.",
          wrong: "Think about actions that stand against force or pressure.",
        },
      },
    },
  ],
},

{
  id: 49,
  difficulty: 7,
  vocab: "advanced",
  week: 7,
  day: 7,
  groups: [
    {
      skill: "abstraction",
      words: ["Allusive", "Referential", "Evocative", "Hinting"],
      correct: "Meaning that points indirectly to something else",
      options: [
        "Meaning that points indirectly to something else",
        "Hard to catch, hold, or pin down",
        "Ways to draw attention away from the truth",
        "Text added after a main work",
      ],
      insight: {
        pattern: "Indirect reference",
        explanation:
          "These words describe meaning that suggests, recalls, or points toward something without stating it plainly.",
        generalization:
          "Indirect meaning rewards careful reading because the connection is implied rather than announced.",
        adaptive: {
          correct: "You recognized the indirect-reference pattern.",
          wrong: "Think about words for meaning that hints rather than states.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Elusive", "Evasive", "Fleeting", "Slippery"],
      correct: "Hard to catch, hold, or pin down",
      options: [
        "Hard to catch, hold, or pin down",
        "Deeply joyful or serene",
        "Things that show a measurement",
        "Words for personal taste",
      ],
      insight: {
        pattern: "Hard-to-grasp qualities",
        explanation:
          "These words describe things that are difficult to catch, hold, define, or settle.",
        generalization:
          "Similar-looking words can point in very different directions, so careful reading matters.",
        adaptive: {
          correct: "You separated elusive from allusive.",
          wrong: "Think about what is difficult to catch or pin down.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Decoy", "Feint", "Ruse", "Misdirection"],
      correct: "Ways to draw attention away from the truth",
      options: [
        "Ways to draw attention away from the truth",
        "Verbs for upward motion",
        "Low landforms shaped by water",
        "Words meaning short and direct",
      ],
      insight: {
        pattern: "Misdirection vocabulary",
        explanation:
          "These words describe tricks, false moves, or misleading signals that pull attention away from what matters.",
        generalization:
          "A difficult puzzle often depends on noticing which clue is signal and which clue is distraction.",
        adaptive: {
          correct: "You recognized the misdirection pattern.",
          wrong: "Think about words for tricks or false signals.",
        },
      },
    },
  ],
},

// WEEK 8
{
  id: 55,
  difficulty: 1,
  vocab: "mixed",
  week: 8,
  day: 1,
  groups: [
    {
      skill: "abstraction",
      words: ["Pilfer", "Filch", "Steal", "Swipe"],
      correct: "To take something dishonestly",
      options: [
        "To take something dishonestly",
        "To wrap something gently",
        "To speak with precision",
        "To outlast ordinary limits",
      ],
      insight: {
        pattern: "Theft vocabulary",
        explanation:
          "These verbs all describe taking something that does not belong to you, often with speed or secrecy.",
        generalization:
          "Near-synonyms can differ in tone: pilfer and filch often suggest smaller or sneakier thefts than steal.",
        adaptive: {
          correct: "You recognized the theft vocabulary.",
          wrong: "Think about verbs for taking what is not yours.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Safe", "Padlock", "Tripwire", "Strongbox"],
      correct: "Objects used to guard valuables",
      options: [
        "Objects used to guard valuables",
        "Objects used to guide travelers",
        "Objects that hold a speaker's notes",
        "Objects that mark lasting fame",
      ],
      insight: {
        pattern: "Protection imagery",
        explanation:
          "Safes, padlocks, tripwires, and strongboxes are meant to protect valuables or warn against intrusion.",
        generalization:
          "The idea of theft becomes sharper when paired with the things people use to prevent it.",
        adaptive: {
          correct: "You saw the guarded-valuables pattern.",
          wrong: "Think about objects that keep valuable things protected.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Protect", "Guard", "Defend", "Secure"],
      correct: "Verbs for keeping something safe",
      options: [
        "Verbs for keeping something safe",
        "Verbs for wrapping around gently",
        "Verbs for surviving over time",
        "Verbs for taking something quickly",
      ],
      insight: {
        pattern: "Protection verbs",
        explanation:
          "Protect, guard, defend, and secure describe actions that keep something safe from harm, loss, or intrusion.",
        generalization:
          "This puzzle turns from threat to response: after theft vocabulary, these words name actions that resist loss.",
        adaptive: {
          correct: "You recognized the protective action words.",
          wrong: "Think about verbs used when someone keeps a person, place, or object safe.",
        },
      },
    },
  ],
},

{
  id: 50,
  difficulty: 2,
  vocab: "mixed",
  week: 8,
  day: 2,
  groups: [
    {
      skill: "abstraction",
      words: ["Pariah", "Outcast", "Misfit", "Castoff"],
      correct: "People outside a group or sense of belonging",
      options: [
        "People outside a group or sense of belonging",
        "Things found at the center of a place",
        "Words for careful speech",
        "Objects used to protect valuables",
      ],
      insight: {
        pattern: "Outside belonging",
        explanation:
          "A pariah, outcast, misfit, or castoff is someone outside a group, circle, or expected way of belonging.",
        generalization:
          "Words about belonging often become clearer when you notice who is inside a group and who has been placed outside it.",
        adaptive: {
          correct: "You recognized the outside-belonging pattern.",
          wrong: "Think about people who have been excluded or rejected.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Fence", "Border", "Margin", "Perimeter"],
      correct: "Edges that mark inside from outside",
      options: [
        "Tools for making a voice louder",
        "Edges that mark inside from outside",
        "Places where travelers rest",
        "Images of lasting memory",
      ],
      insight: {
        pattern: "Boundary imagery",
        explanation:
          "Fences, borders, margins, and perimeters all mark an edge between one space and another.",
        generalization:
          "A boundary can be physical, social, or emotional, but it always changes who or what is included.",
        adaptive: {
          correct: "You saw the boundary pattern.",
          wrong: "Think about lines or edges that separate spaces.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Exclude", "Banish", "Oust", "Shun"],
      correct: "Verbs for pushing someone away",
      options: [
        "Verbs for speaking clearly",
        "Verbs for pushing someone away",
        "Verbs for carrying a burden",
        "Verbs for continuing over time",
      ],
      insight: {
        pattern: "Exclusion verbs",
        explanation:
          "These verbs describe removing, rejecting, or keeping someone outside a group or place.",
        generalization:
          "Actions of exclusion often reveal power: who gets to decide where someone belongs.",
        adaptive: {
          correct: "You found the action behind exclusion.",
          wrong: "Think about verbs used when someone is forced out or rejected.",
        },
      },
    },
  ],
},

{
  id: 51,
  difficulty: 3,
  vocab: "mixed",
  week: 8,
  day: 3,
  groups: [
    {
      skill: "abstraction",
      words: ["Enfold", "Wrap", "Envelop", "Cradle"],
      correct: "To surround or hold closely",
      options: [
        "To surround or hold closely",
        "To steal in a small or quiet way",
        "To travel with a purpose",
        "To last beyond ordinary limits",
      ],
      insight: {
        pattern: "Containing action",
        explanation:
          "To enfold, wrap, envelop, or cradle something is to hold it within or around a surrounding shape.",
        generalization:
          "Containment can feel protective, restrictive, or tender depending on the words around it.",
        adaptive: {
          correct: "You recognized the surrounding or holding action.",
          wrong: "Think about actions that bring something inside or hold it close.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Nest", "Haven", "Refuge", "Sanctum"],
      correct: "Protective inner places",
      options: [
        "Signals that point down a road",
        "Protective inner places",
        "Parts of a singing range",
        "Objects used to mark a public honor",
      ],
      insight: {
        pattern: "Sheltering places",
        explanation:
          "Nests, havens, refuges, and sanctums suggest protected places where someone or something can withdraw inside.",
        generalization:
          "Inside spaces often carry emotional meaning: safety, privacy, retreat, or sacredness.",
        adaptive: {
          correct: "You saw the sheltering-place connection.",
          wrong: "Think about places that protect or shelter what is inside.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Interior", "Center", "Middle", "Core"],
      correct: "Words for an inner part",
      options: [
        "Words for an inner part",
        "Words for people outside a group",
        "Words for difficult labor",
        "Words for quick theft",
      ],
      insight: {
        pattern: "Inner-location vocabulary",
        explanation:
          "Interior, center, middle, and core all point toward the inside or central part of something.",
        generalization:
          "The inside of something can be a location, a structure, or the most important part of an idea.",
        adaptive: {
          correct: "You recognized the inside-location pattern.",
          wrong: "Think about words that point inward rather than outward.",
        },
      },
    },
  ],
},

{
  id: 52,
  difficulty: 4,
  vocab: "mixed",
  week: 8,
  day: 4,
  groups: [
    {
      skill: "abstraction",
      words: ["Pilgrim", "Seeker", "Traveler", "Wayfarer"],
      correct: "People on a journey or search",
      options: [
        "People on a journey or search",
        "People rejected by a community",
        "People who speak in a low range",
        "People guarding hidden valuables",
      ],
      insight: {
        pattern: "Journey identity",
        explanation:
          "A pilgrim, seeker, traveler, or wayfarer is defined by movement, searching, or passage from one place to another.",
        generalization:
          "Some words name a person by what they are pursuing, not just where they are standing.",
        adaptive: {
          correct: "You recognized the journey-person pattern.",
          wrong: "Think about people whose identity comes from traveling or searching.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Cairn", "Milestone", "Signpost", "Waymark"],
      correct: "Markers that guide a journey",
      options: [
        "Markers that guide a journey",
        "Objects that cover or hold something",
        "Symbols of being excluded",
        "Tools for broadcasting speech",
      ],
      insight: {
        pattern: "Journey markers",
        explanation:
          "Cairns, milestones, signposts, and waymarks can guide travelers or mark progress along a route.",
        generalization:
          "A difficult path becomes easier when there are signs that help you read where you are.",
        adaptive: {
          correct: "You found the journey-marker pattern.",
          wrong: "Think about what a traveler might use to stay oriented or measure progress.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Quest", "Voyage", "Trek", "Odyssey"],
      correct: "Long journeys or searches",
      options: [
        "Long journeys or searches",
        "Short acts of stealing",
        "Forms of public speaking",
        "Kinds of permanent memory",
      ],
      insight: {
        pattern: "Journey nouns",
        explanation:
          "These words describe journeys that feel purposeful, difficult, extended, or meaningful.",
        generalization:
          "A journey can be physical, mental, moral, or emotional depending on the story around it.",
        adaptive: {
          correct: "You recognized the long-journey vocabulary.",
          wrong: "Think about nouns for a meaningful trip or search.",
        },
      },
    },
  ],
},

{
  id: 53,
  difficulty: 5,
  vocab: "mixed",
  week: 8,
  day: 5,
  groups: [
    {
      skill: "abstraction",
      words: ["Alto", "Soprano", "Tenor", "Baritone"],
      correct: "Vocal ranges",
      options: [
        "Vocal ranges",
        "People on a journey",
        "Protected inner places",
        "Verbs for taking something quickly",
      ],
      insight: {
        pattern: "Voice range category",
        explanation:
          "Alto, soprano, tenor, and baritone name vocal ranges used in singing and choral music.",
        generalization:
          "A voice can be understood not only by what it says, but by its range, tone, and place in a larger harmony.",
        adaptive: {
          correct: "You recognized the vocal-range set.",
          wrong: "Think about music, singing, and where a voice sits in pitch.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Microphone", "Lectern", "Airwaves", "Headset"],
      correct: "Tools or channels that carry a voice",
      options: [
        "Places for quiet shelter",
        "Tools or channels that carry a voice",
        "Objects that mark a boundary",
        "Symbols of lasting honor",
      ],
      insight: {
        pattern: "Voice projection imagery",
        explanation:
          "Microphones, lecterns, airwaves, and headsets help a voice be heard, delivered, or transmitted.",
        generalization:
          "A voice becomes public when it has a channel that can carry it beyond the speaker.",
        adaptive: {
          correct: "You found the voice-carrying connection.",
          wrong: "Think about objects or channels that help speech reach an audience.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Articulate", "Express", "Phrase", "Enunciate"],
      correct: "Verbs for making thought clear in words",
      options: [
        "Verbs for making thought clear in words",
        "Verbs for wrapping something inside",
        "Verbs for refusing entry",
        "Verbs for continuing forever",
      ],
      insight: {
        pattern: "Clear expression verbs",
        explanation:
          "These verbs describe putting thought into language or making speech clear enough to understand.",
        generalization:
          "Expression is not just having an idea; it is shaping the idea so someone else can receive it.",
        adaptive: {
          correct: "You recognized the language of clear expression.",
          wrong: "Think about verbs connected to speaking or wording something clearly.",
        },
      },
    },
  ],
},

{
  id: 54,
  difficulty: 6,
  vocab: "advanced",
  week: 8,
  day: 6,
  groups: [
    {
      skill: "abstraction",
      words: ["Onerous", "Demanding", "Taxing", "Burdensome"],
      correct: "Difficult or heavy to carry out",
      options: [
        "Difficult or heavy to carry out",
        "Peaceful places of retreat",
        "People separated from a group",
        "Words for clear public speech",
      ],
      insight: {
        pattern: "Burden vocabulary",
        explanation:
          "These words describe tasks, duties, or situations that require effort and feel heavy to carry.",
        generalization:
          "Difficulty can be described as weight: something the mind, body, or spirit has to bear.",
        adaptive: {
          correct: "You recognized the burden-and-effort pattern.",
          wrong: "Think about words for work or responsibility that feels heavy.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Yoke", "Load", "Millstone", "Weight"],
      correct: "Images of burden or pressure",
      options: [
        "Images of burden or pressure",
        "Markers on a journey",
        "Parts of a musical voice range",
        "Things that protect valuables",
      ],
      insight: {
        pattern: "Burden imagery",
        explanation:
          "Yokes, loads, millstones, and weights suggest something heavy that must be carried, endured, or overcome.",
        generalization:
          "Concrete images of weight can make abstract pressure feel visible.",
        adaptive: {
          correct: "You saw the burden imagery.",
          wrong: "Think about objects that feel heavy physically or symbolically.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Bear", "Shoulder", "Carry", "Absorb"],
      correct: "Verbs for taking on difficulty",
      options: [
        "Verbs for taking on difficulty",
        "Verbs for stealing quietly",
        "Verbs for sending someone away",
        "Verbs for singing in a range",
      ],
      insight: {
        pattern: "Enduring verbs",
        explanation:
          "These verbs can describe accepting, carrying, or absorbing pressure, pain, or responsibility.",
        generalization:
          "Language often turns difficulty into something a person must physically carry.",
        adaptive: {
          correct: "You recognized the action of taking on pressure.",
          wrong: "Think about verbs used when someone accepts or carries a hard thing.",
        },
      },
    },
  ],
},

{
  id: 56,
  difficulty: 7,
  vocab: "advanced",
  week: 8,
  day: 7,
  groups: [
    {
      skill: "abstraction",
      words: ["Immortal", "Eternal", "Undying", "Deathless"],
      correct: "Lasting forever or beyond death",
      options: [
        "Lasting forever or beyond death",
        "Rejected by a community",
        "Hidden inside a protected place",
        "Difficult to express clearly",
      ],
      insight: {
        pattern: "Beyond mortality vocabulary",
        explanation:
          "These words describe life, memory, or meaning that does not end in the ordinary way.",
        generalization:
          "Beyond-language often stretches literal time into ideas of memory, myth, legacy, or spirit.",
        adaptive: {
          correct: "You recognized the beyond-mortality pattern.",
          wrong: "Think about words for what does not die, end, or fade away.",
        },
      },
    },
    {
      skill: "symbolic",
      words: ["Memorial", "Monument", "Laurel", "Statue"],
      correct: "Symbols of lasting remembrance or honor",
      options: [
        "Symbols of lasting remembrance or honor",
        "Tools for quiet theft",
        "Markers that guide a journey",
        "Edges between inside and outside",
      ],
      insight: {
        pattern: "Lasting honor imagery",
        explanation:
          "Memorials, monuments, laurels, and statues can preserve memory, honor, or reputation beyond the present moment.",
        generalization:
          "Cultures turn memory into objects and symbols so a person or action can last longer than a lifetime.",
        adaptive: {
          correct: "You saw the lasting-remembrance imagery.",
          wrong: "Think about things used to preserve honor or memory over time.",
        },
      },
    },
    {
      skill: "linguistic",
      words: ["Continue", "Last", "Survive", "Remain"],
      correct: "Verbs for remaining over time",
      options: [
        "Verbs for remaining over time",
        "Verbs for forcing someone out",
        "Verbs for wording a thought clearly",
        "Verbs for stealing in plain sight",
      ],
      insight: {
        pattern: "Continuance verbs",
        explanation:
          "These verbs describe continuing, lasting, surviving, or remaining after time, pressure, or change passes.",
        generalization:
          "To go beyond is not always to rise above something; sometimes it is simply to remain.",
        adaptive: {
          correct: "You recognized the continuing-over-time pattern.",
          wrong: "Think about verbs for staying or continuing after change.",
        },
      },
    },
  ],
},

];
