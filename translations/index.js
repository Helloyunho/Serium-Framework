/*
const library = {
  language: require('./library/path/to/file')
}

module.exports.contributors = {
  ko: 'NickName OR User (recognizable);Identificate'
}

module.exports = class {
  constructor(language) {
    this.package = library[language]
  }

  get(property) {
    let grain = this.package

    property.split('.').forEach(i => grains = grains[i])
    return grain
  }
}

* This handled by each plugins and below is description for this object.


In this code, you can see some modules.

- this.Library is an object for defining the path for each translation dictionary. JSON is recommended to use, but you can write in any language JavaScript can access.
- this.Contributors is an object for describing who wrote this translate. Just recommended.
- [this] is a module for loading translation files on a top, actually defined in variable library. You can customize it to make additional performance.
*/
