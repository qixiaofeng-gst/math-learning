const content = `
laborious
lace
lackadaisical
ladder
laden
laggard
lag
lament
landfill
land
landmark
landscape
landslide
lane
laptop
largely
lash
latest
Latino
launch
laundry list
lavish
lawsuit
layabout
lay bare
lay down
layer
layman
layoff
lay off
lay out
league
leakage
lean
learning
leash
leave out
leaning
legacy
legal
legislation
legitimacy
legitimate
leg-up
legalize
legislative
leniency
lens
lesser
lessen
let alone
letdown
lethal
lethargic
letterhead
lettering
leverage
levy
liability
liable
liberal
liberty
liberalization
license
life expectancy
likelihood
liken
likewise
limb
line
linger
lingua franca
linguistics
linguist
liquidate
list
literacy
literally
literary
literate
literature
litigation
litter
livelihood
livestock
live off
loan
loathe
lobbyist
locality
localization
lofty
login
logistics
log
logo
Logo
loneliness
longevity
longitudinal
long
long-run
longstanding
long-term
lookout
loom
loop
lore
lose hold on
lotion
low-end
loyalist
loyal
loyalty
lucrative
lucre
lump
lung
lurch
lure
lurk
luxury
lyric
`

const
  line_sep = '\n',
  blank = /\s/g,
  zero = '0',
  words = content.trim().split(line_sep)

words.sort((a, b) => a.replace(blank, zero).localeCompare(
  b.replace(blank, zero)
))
let output = ''
for (let i = 0; i < words.length; ++i) {
  output += words[i]
  if ((i % 3) == 2) {
    output += ' \\\\\n'
  } else {
    output += ' & '
  }
  console.log(words[i])
}
console.log(words.length, '<<<<<<<')
console.log(output)