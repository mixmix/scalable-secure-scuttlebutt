var h = require('hyperscript')
var demos = require('./demos')

var view = h('div')

var app = h('div.app', [
  ['centralized', 'random', 'spanning', 'fragile'].map(demo => {
    return h('button', { onclick: show(demo) }, demo)
  }),
  view
])

document.body.appendChild(app)

show('centralized')()

function show (demo) {
  return () => {
    view.innerHTML = ''
    view.appendChild(demos[demo]())
    console.log(demo)
  }
}
