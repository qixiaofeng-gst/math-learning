const content = `
baby boom
bachelor of science
backbone
backdrop
backfire
backlash
backlog
backstabbing
back up
bacterium
badmouth
baffle
bait
balance-sheet
bald
balloon
ballot
ban
bane
bang
banking
bankrupt
banquet
banter
barbarian
barbed
bar
bar code
bargain
bark
barometer
barrack
barrage
barrier
baseline
basin
bask
batch
batting average
battery
bearing
bear out
behalf
behemoth
belittle
beneath
beneficial
beneficiary
benevolent
benign
Bering Sea
berry
bereave
bereft
beset
bestow
betrayal
betray
betterment
beware
bewilder
bias
biased
Biblical
bibliography
bicalturalism
bicyclist
bid
bilaterally
bilingual
bilingualism
bilk
bill
billboard
billfold
billing
billionaire
binge
biodegrade
biography
biomarker
biophysical
biotechnology
biotic
blandly
blanket
blasphemy
blast
blatant
bleak
blend
blending
blink
blizzard
bloc
blockage
block
blockbuster
blog
blogsphere
bloodshed
blueberry
blueprint
blunder
blunt
blur
blush
blue ribbon
boardroom
bog down
boggle
boil down to
bolster
bombard
bondage
bond
bonding
boom
boon
boost
booth
boomer
border
boredom
borough
botanist
bottleneck
bottle up
bounce
boundary
bound
boundless
boutique
boulder
bounty
bow
bowel
bracket
brain drain
brake
branch off
brand
brandish
brash
brawl
brazen
breach
breed
breeze
brevity
brew
bribe
breif
brink
brisk
Briton
bring about
broadband
broadcast
broaden
broadsheet
broccoli
broker
brood
browse
browser
brunette
brush
brutal
bruise
bubble
bucket
buddy
budget
buffet
build on
built-in
bulk
bulky
bulldozer
bulletin
bully
bump
bunch
bungler
bureau
bureaucracy
bureaucratic
burgeon
burglary
burnout
burrow
bust
buttress
buzzword
by and large
by no means
bypass
by the same token
by virtue of
by way of
by-word
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