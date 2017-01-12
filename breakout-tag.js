function div(content) {
  return `<div>${content}</div>`
}

function p(content) {
  return `<p>${content}</p>`
}

function br() {
  return "<br/>"
}

function img(url) {
  return `<img href=${url}/>`
}

function tagFactory(tagName) {
  return function(content) {
    switch(tagName) {
      case "br":
        return function() {
          return `<${tagName}/>`;
        }
      case "img":
        return function(url) {
          return `<img href="${url}"/>`;
        }
      default:
        return function(content) {
          return `<${tagName}>${content}</${tagName}>`;
        }
    }
  }
}

var divTag = tagFactory('div');
var pTag = tagFactory('p');

console.log(pTag("hello my name is chris"));