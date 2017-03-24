function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

/*
function deepestChild() {
  let target = document.querySelector('#grand-node')
  while (target.children.length > 0) {
    target = target.children[0]
  }
  return target
}
*/

function deepestChild() {
  let current = document.querySelector('div#grand-node')
  let next = []
  next.push(current)
  while (next.length > 0) {
    current = next.shift()
    if (current.children !== undefined) {
      for (let i = 0, l = current.children.length; i < l; i++) {
        next.push(current.children[i])
      }
    }
  }
  return current
}
