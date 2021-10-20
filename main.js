import './style.css'
import markdownIt from 'markdown-it'
import copy from './copy.md?raw'
import menu from './menu.js'

document.querySelector('#app').innerHTML =
  `
  ${markdownIt().render(copy)}
  ${markdownIt().render(menu())}
  `
