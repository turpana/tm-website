"use strict"

function glitchHome (ev) {
  ev.preventDefault()
  document.getElementById('home-bg')
    .classList
    .toggle('is-glitching')
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('glitchy-trigger')
    .addEventListener('click', glitchHome)
})
