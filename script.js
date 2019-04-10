let inp = document.getElementById('textarea')
let block = document.getElementById('block')
let reg = /^'|(\s)'|'(\s)|'$/g

textarea.oninput = function(e) {
  block.innerText = e.target.value.replace(reg, '$1"$2')
}

