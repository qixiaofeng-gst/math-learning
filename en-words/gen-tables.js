const template = `
% _
\\pdfbookmark{_}{id:_}
\\begin{longtable}{p{2.8cm}p{2.8cm}p{2.8cm}}
_ & _ & _
\\end{longtable}
`

const
  alphabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let output = ''
for (const c of alphabetic) {
  output += template.replace(/_/g, c)
}
console.log(output)