import data from './data.json'

export default () => {
  let menu = ''
  data.forEach(category => {
    menu +=
      `## ${category.name}
${category.description}
`
    category.items.forEach(dish => {
      menu +=
        `### ${dish.title}

${dish.description} **${dish.price}**
        
---
`
    })
  })
  return menu
}