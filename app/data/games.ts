export const GAMES = [
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
          generalization: "The simplest connections often come from shared category.",
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
        options: ["Plants", "Symbols of love or peace", "Religious icons", "Garden items"],
        insight: {
          pattern: "Symbolic meaning",
          explanation: "These objects often represent love, peace, or gentleness.",
          generalization: "Symbols carry meaning beyond what they physically are.",
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
          generalization: "Sometimes a connection is based on sound, not meaning.",
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
        options: ["Furniture", "Symbols of monarchy", "Museum objects", "Religious items"],
        insight: {
          pattern: "Power symbolism",
          explanation: "These objects are associated with kings, queens, and royal authority.",
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
        options: ["Exercise words", "Words that can be nouns or verbs", "School activities", "Daily chores"],
        insight: {
          pattern: "Part-of-speech flexibility",
          explanation: "Each word can act as more than one part of speech depending on context.",
          generalization: "English words often shift roles depending on how they are used.",
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
        options: ["Geometric shapes", "Design styles", "Architecture terms", "Art supplies"],
        insight: {
          pattern: "Shape category",
          explanation: "These words describe basic geometric forms.",
          generalization: "Abstract grouping often focuses on form rather than use.",
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
        options: ["Weather words", "Classical elements", "Natural disasters", "Energy sources"],
        insight: {
          pattern: "Philosophical symbolism",
          explanation: "These are traditionally treated as basic elements in many old systems of thought.",
          generalization: "Some categories come from culture and philosophy, not just science.",
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
        options: ["Sports terms", "Words with multiple meanings", "Objects", "Music words"],
        insight: {
          pattern: "Polysemy",
          explanation: "Each word can mean different things depending on context.",
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
        options: ["Animals", "Car names borrowed from animals or concepts", "Sports teams", "Luxury brands"],
        insight: {
          pattern: "Borrowed naming",
          explanation: "These are car names that borrow meaning from animals or powerful ideas.",
          generalization: "Names often gain force by borrowing meaning from another domain.",
          adaptive: {
            correct: "You saw through the surface meaning.",
            wrong: "These look like one category, but function as names in another.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Skull", "Hourglass", "Grave", "Scythe"],
        correct: "Symbols of mortality",
        options: ["Halloween objects", "Symbols of mortality", "Tools", "Ancient artifacts"],
        insight: {
          pattern: "Mortality symbolism",
          explanation: "These objects often represent death, time, or human limits.",
          generalization: "Symbols cluster around deep human themes.",
          adaptive: {
            correct: "You recognized the symbolic layer.",
            wrong: "Look for what these objects suggest emotionally or culturally.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Lead", "Wind", "Tear", "Row"],
        correct: "Words with multiple pronunciations",
        options: ["Action words", "Words with multiple pronunciations", "Emotional words", "Outdoor words"],
        insight: {
          pattern: "Pronunciation ambiguity",
          explanation: "Each spelling can be pronounced in more than one way.",
          generalization: "Written language can hide sound-based ambiguity.",
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
        options: ["Tech companies", "Brands named after everyday words", "Retailers", "Companies founded before 2000"],
        insight: {
          pattern: "Naming abstraction",
          explanation: "These brands use familiar everyday words as company names.",
          generalization: "A name can feel memorable because it borrows from common language.",
          adaptive: {
            correct: "You focused on naming structure.",
            wrong: "You may have focused on industry instead of naming pattern.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Scale", "Gavel", "Blindfold", "Sword"],
        correct: "Symbols of justice",
        options: ["Courtroom objects", "Symbols of justice", "Weapons", "Government buildings"],
        insight: {
          pattern: "Institutional symbolism",
          explanation: "These objects are associated with law, judgment, and fairness.",
          generalization: "Institutions often rely on symbols to communicate ideals.",
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
        options: ["Negative emotions", "Words using the prefix un-", "Fantasy words", "Action words"],
        insight: {
          pattern: "Prefix structure",
          explanation: "Each word begins with the prefix un-, which changes or reverses meaning.",
          generalization: "Word parts can reveal meaning before the whole word is understood.",
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
        options: ["Job titles", "Roles in learning or mastery", "School grades", "Personality types"],
        insight: {
          pattern: "Learning roles",
          explanation: "These words describe positions people can occupy while learning or teaching.",
          generalization: "Vocabulary can map relationships within growth and expertise.",
          adaptive: {
            correct: "You understood the learning relationship.",
            wrong: "Think about where each person stands in a learning process.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Phoenix", "Seed", "Dawn", "Spring"],
        correct: "Symbols of renewal",
        options: ["Natural things", "Symbols of renewal", "Mythological ideas", "Seasons"],
        insight: {
          pattern: "Renewal symbolism",
          explanation: "Each word suggests rebirth, growth, or a new beginning.",
          generalization: "Symbols can connect different domains through shared emotional meaning.",
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
        options: ["Travel words", "Words with idiomatic meanings", "Sports actions", "Mechanical verbs"],
        insight: {
          pattern: "Idiomatic flexibility",
          explanation: "These words appear in phrases where the meaning is not purely literal.",
          generalization: "Language often stretches words beyond their basic definitions.",
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
        options: ["Historical figures", "Words describing unusual learners or thinkers", "Academic subjects", "Occupations"],
        insight: {
          pattern: "Cognitive identity",
          explanation: "These words describe people with distinctive relationships to knowledge or talent.",
          generalization: "Advanced vocabulary often names not just things, but ways of being.",
          adaptive: {
            correct: "You recognized a conceptual category of thinkers.",
            wrong: "Even if some words are unfamiliar, look for the type of person they describe.",
          },
        },
      },
      {
        skill: "symbolic",
        words: ["Labyrinth", "Mirror", "Mask", "Threshold"],
        correct: "Symbols of identity or transformation",
        options: ["Household objects", "Symbols of identity or transformation", "Stage props", "Ancient architecture"],
        insight: {
          pattern: "Transformational symbolism",
          explanation: "These images often suggest self-discovery, change, or crossing into a new state.",
          generalization: "Abstract symbols can point toward inner experiences.",
          adaptive: {
            correct: "You recognized symbolic depth.",
            wrong: "Think about what these objects suggest in stories or myths.",
          },
        },
      },
      {
        skill: "linguistic",
        words: ["Luddite", "Maverick", "Iconoclast", "Contrarian"],
        correct: "Words for people who resist or challenge norms",
        options: ["Political offices", "Words for people who resist or challenge norms", "Artists", "Ancient philosophers"],
        insight: {
          pattern: "Social stance vocabulary",
          explanation: "These words describe people who push against common expectations or systems.",
          generalization: "Vocabulary can reveal how people position themselves toward society.",
          adaptive: {
            correct: "You saw the shared social stance.",
            wrong: "Look for how each word describes a person’s relationship to norms.",
          },
        },
      },
    ],
  },
];