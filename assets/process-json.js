'use strict'

window.processJson = function processJson() {
  var input = document.getElementById('json').value
  var regexOption = document.getElementById('regex').value
  var regex = RegExp(regexOption).exec(input)

  var objects = String(input).split(regex[regex.length - 1])
  var diff = JsDiff.diffJson(
    JSON.parse(objects[0]),
    JSON.parse(objects[1])
  )

  var display = document.getElementById('display')
  var fragment = document.createDocumentFragment()

  while (display.firstChild) {
    display.removeChild(display.firstChild)
  }

  diff.forEach(function forEach(part) {
    var color = 'grey'
    var span = document.createElement('span')

    if (part.added) {
      color = 'green'
    }

    if (part.removed) {
      color = 'red'
    }

    span.style.color = color
    span.appendChild(document.createTextNode(part.value))
    fragment.appendChild(span)
  })

  display.appendChild(fragment)
}
