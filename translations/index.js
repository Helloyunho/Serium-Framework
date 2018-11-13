/*
const library = {
  language: require('./library/path/to/file')
}

module.exports = (language, data) => {
  const template = library[language]
  return template
}

module.exports.library = library
module.exports.contributors = {
  ko: 'NickName OR User (recognizable);Identificate'
}


* This handled by each plugins and below is description for this object.


In this code, you can see some modules.

- this.Library is an object for defining the path for each translation dictionary. JSON is recommended to use, but you can write in any language JavaScript can access.
- this.Contributors is an object for describing who wrote this translate. Just recommended.
- [this] is a module for loading translation files on a top, actually defined in variable library. You can customize it to make additional performance.
*/
