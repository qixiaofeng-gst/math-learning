const content = `
yacht
yearn
yearning
yearbook
yell
yield
youngster
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