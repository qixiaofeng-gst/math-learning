const content = `
abandon
abate
abbreviation
abject
abnormally
abolish
abolition
abort
abound
abrupt
absolute
absorb
absorption
abstract
absurd
abundance
abundant
abuse
abusive
abyss
academia
academic
academy
accelerate
accent
accessible
access
accessory
acclaim
accolade
accommodate
accompany
accomplished
accomplish
accomplishment
accordingly
accord
accountable
accountant
account for
accounting
accreditation
accrue
accumulate
accustom
accusation
ace
acid
acknowledge
acquaintance
acquaint
acquisition
acre
acrimonious
activate
activism
activist
actualize
actual
acupuncture
acute
adaptation
adaptive
addict
addiction
additive
address
adept
adequate
adhere
adherence
ad hoc
adhocracy
adjective
adjustment
administer
administration
administrative
admission
adolescence
adolescent
adorn
adulthood
advent
adverse
adversity
advocacy
advocate
aerobic
aerospace
afar
affection
affiliation
affirmative
affirm
affliction
affluent
affordable
a flight of fancy
afoot
aforementioned
afresh
aftermath
agency
agenda
agent
aggravate
aggregate
aggressive
agonize
agroforestry
a host of
aide
AIDS
ailing
airline
aisle
akin
albeit
alcohol
ale
alert
alertness
alga
algorithm
alienation
alien
a line in the sand
allege
allergy
alleviate
alliance
allocate
allowance
allow for
allude
allusion
ally
allegation
alphabet
altar
alteration
alternate
alternative
altogether
altruism
altruistic
alumnus
amass
amateurism
amateur
a matter of course
Amazon
ambassador
ambiguous
ameliorate
amend
amino acid
among other things
amplify
amplitude modulation
anabolic
analogue
analogy
ancestor
ancestral
androgen
anecdote
anguish
angst
animate
anniversary
annotate
announce
annoy
anonymous
antagonize
antenna
anthropology
antibiotic
anticipate
antidepressant
antioxidant
antique
antiquity
antisocial
antitrust
anti-virus
apart from
apartheid
apathy
ape
aphorism
apology
appall
apparatus
apparent
appeal
appetite
applaud
applause
appliance
applicable
applicant
app
appraise
appreciation
apprehend
apprenticeship
approach
appropriate
approve
approximately
aptitude
apt
arable
arbiter
arbitrary
arbitrator
archaeology
archaic
architect
architecture
Arctic
ardent
arduous
arena
arguably
arithmetic
arouse
array
arrogantly
artery
articulate
artifact
artificial
ascend
ascent
ascertain
ascribe
as follows
aside from
as much as
as of
aspect
aspiration
aspire
assail
assassination
assault
assemble
assembly
assertion
assertiveness
assessment
assess
asset
assignment
assistance
associate
association
assume
assumption
assurance
assure
asthma
astonish
astound
as to
astry
astronomical
astrophysicist
asylum
at hand
at any rate
at the expense of
atheist
athlete
at large
at length
at sea
at stake
attachment
attach
attainment
attain
attendance
attendant
attire
attorney
attribute
attune
atmosphere
audible
augment
aura
austerity
authentic
authority
authorize
autism
autobiography
automatic
automation
automobile
autonomous
autonomy
avenue
averse
avert
aviation
avow
award
awash
awe
awesome
awry
Aztec
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