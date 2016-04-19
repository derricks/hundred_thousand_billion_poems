const tracery = require('tracery-grammar');

const queneau = tracery.createGrammar({
  'line1': [
    "King Carlos turns his coat for better fees",
    "The Parthenon horse looks nervous on the frieze",
    "The Breton tar lights up his duty-frees",
    "At five o'clock he rests in his marquise",
    "The gorgeous youth helps Hestia's heart unfreeze",
    "He's well inclined to capture his valise",
    "When each of you with all his heart agrees",
    "So now the bard spurns iambs and trochees",
    "The conjuror eats watches pens or keys",
    "One's left with only sorrow and disease"
  ],
  'line2': [
    "and sleeves are wrapped round horns of buffalo",
    "since Elgin seems to think the nose de trop",
    "and sniffs the smoke that sets his nose aglow",
    "consuming  tea and nibbling cream gateaux",
    "he's cast out like a snobby Romeo",
    "enough to spur on any picaro",
    "being twinned is better far than  single-o",
    "to aggravate the layman and the shmo",
    "any diner chooses escargots",
    "the undertakers peer and say Oho"
  ],
  'line3': [
    "that tinned hornedbeef we stored smells more like cheese",
    "the Turk you see was deeply mired in sleaze",
    "the chosen fruit  is hued a bright cerise",
    "the native driver's waiting in the breeze",
    "he wore his toga like an old chemise",
    "he'd much to learn despite his four degrees",
    "it's finding out that's likely to displease",
    "he writes reviews that read like journalese",
    "eat fire your mouth will taste like antifreeze",
    "the timid mutter into their goatees"
  ],
  'line4': [
    "so stink the rotting skins from long ago",
    "the re in all his songs came out as doh",
    "all during Lent one fruit's the ratio",
    "across the hillocks comes a steady blow",
    "you pluck narcissi or you're very slow",
    "there's naught as dry as sacks of haricot",
    "we always hope to keep ourselves so-so",
    "which freshens up the tribal rumbelow",
    "who knows if sharks will feast on bummalo",
    "you hear your spouse pay off the medico"
  ],
  'line5': [
    "I stille can call to mind those hours of ease",
    "The Parthenon horse is shivering in the bise",
    "Remember friends those isles where live your Friese",
    "So plain a plain's not what one often sees",
    "Those snaps of Pisa's tower are bound to please",
    "He hates he hates the work of sequestrees",
    "And thus it was a sib steeped in sottise",
    "Just one was right and not those SOBs",
    "The Papuan sucks his friend's apophyses",
    "You get like dirty goods on busy quays"
  ],
  'line6': [
    "the gauchos waving flags bravissimo",
    "benumbing London's dandies as they beau",
    "where shoals of herring boats now lie below",
    "as castles blaze and palaces burn low",
    "where Galileo once took pots to throw",
    "so keen to part poor bumpkins from their dough",
    "who beggared gave his rags the old heave-ho",
    "the mob demands that verse be comme il faut",
    "those greedy mice leave nothing for the crow",
    "your mind turns more and more to gloom and woe"
  ],
  'line7': [
    "we chill like nudists put on ice to freeze",
    "the flanks protected by chevaux de frise",
    "that heap of goods occasions some unease",
    "a daring baron pockets th' abkaris",
    "a Tuscan scribed the stone with his imprese",
    "going up to visit town is quite a wheeze",
    "e'en low bro's lead to diaporeses",
    "both are right not that vague congeries",
    "mixing broom with chives shows expertise ",
    "for death casts piles of shit on pedigrees"
  ],
  'line8': [
    "to pass the time we stage a little show",
    "when March's hailstones batter the batteau",
    "when from afar we see the bushes grow",
    "the fireman makes his mighty hoses flow",
    "the Greeks and Romans read and thought 'how so?'",
    "it's scary both for hick and aristo",
    "when parents sanctify the babygro",
    "most people like to read the words they know",
    "but offering kids a sweetie that's no-no",
    "with moth and rust we settle all we owe"
  ],
  'line9': [
    "From Salto to the Pole is quite a trot",
    "Plato's Hellas surely wasn't sot",
    "We dry the fish sea bream or some burbot",
    "Milord has lisped from Malibar to Swat",
    "A witty wind stops Ities speaking rot",
    "Faced with mud you'll turn up your culotte",
    "The genealogist finds every blot",
    "Th' inspir&eacute;d poet isn't polyglot",
    "The wolf adores the cock and the cocotte",
    "The brave man cries I do not care a jot"
  ],
  'line10': [
    "you mix with that you'll find you've had your lot",
    "with wits enough to fill a witenagemot",
    "the shark is smoked on beds of bergamot",
    "at Chandrigar the peasant sniffs the pot",
    "in Florence tourists see a deal of grot",
    "we'll smack the dibbing kiddie's little bot",
    "to cease from scratching parchment he cannot",
    "in his brain one tongue is all he's got",
    "a cat will munch a bird but spurn shallot",
    "the coward mutters Why was I begot?"
  ],
  'sonnet': ["#line1#\n#line2#\n#line3#\n#line4#\n#line5#\n#line6#\n#line7#\n#line8#\n#line9#\n#line10#"]
});

console.log(queneau.flatten('#sonnet#'));
