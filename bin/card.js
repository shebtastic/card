#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}


const socials = [
  ['Web', 'https://sheb.rocks'],
  ['GitHub', 'https://github.com/shebtastic'],
  ['Keybase', 'https://keybase.io/sheb'],
  ['Twitter', 'https://twitter.com/shebtastic'],
]

const name  = 'Michael "Sheb" Habeth'
const handle = 'shebtastic'
const header = [['Work','Freelance IT Consultant']]
const footer = [['This card', 'npx @shebtastic/card']]

const padToLongest = (...labels) => {
  const longest = labels.map(string => string.length).sort().pop()
  return (label) => {
    const pad = Array.from({length: longest - label.length}, () => ' ').join('')
    return pad + label
  }
}

const pad = padToLongest(
...socials.map(([label]) => label),
...header.map(([label]) => label),
...footer.map(([label]) => label),
)
  
const headLineOffset = Math.abs((padToLongest(
  ...socials.map(([label, value]) => label + value),
  ...header.map(([label, value]) => label + value),
  ...footer.map(([label, value]) => label + value),
)('') + ": ").length - `${name} / ${handle}`.length) / 2

const output = `
${Array.from({length: headLineOffset}, () => ' ').join('')}${chalk.magenta(`${name} / `)}${chalk.blue(handle)}

${
  header
    .map(([label, value]) => `${chalk.yellow.bold(pad(label))}: ${chalk.magenta(value)}`)
    .join('\n')
}

${
  socials
    .map(([label, value]) => `${chalk.yellow.bold(pad(label))}: ${chalk.blue(value)}`)
    .join('\n')
}

${
  footer
    .map(([label, value]) => `${chalk.yellow.bold(pad(label))}: ${chalk.magenta(value)}`)
    .join('\n')
}
`

console.log(chalk.green(boxen(output, options)))
