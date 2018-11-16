const extensions = Object.values({
  // NOTE:
})

/*
const extensions = Object.values({
  extensionName: require('./path/to/extension')
})

* This handled by 'this' as if an array.


In 'extensions' object... (Object: extension)

- extension is an required function could be called by some handlers.
*/

module.exports.fetch = (client, message, options) => {
  extensions.forEach(extension => extension(client, message, options))
}
