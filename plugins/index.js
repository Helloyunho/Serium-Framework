/*
module.exports.pluginName = {
  execute: require('./path/to/plugin'),
  usage: 'pluginName [variables]',
  permissions: 'common'
}

* This handled by '/index.js' as if a array or object.


In 'pluginName' object... (Object: plugin)

- plugin.Execute is the path to executable plugin(Module).
- plugin.Usage is just a helper. If you want to see a usage, please read the code(Seia-Soto/Serium ../plugins/generic/help.js).
- plugin.Permissions is the string type of permission handler can be interprete. For additional, 'moderate' and 'administrate' is available.

And you can handle by your hand like adding un-basic given properties.
Properties can handled by 'plugin.variableName' in '/index.js'.


----

module.exports = (client, message, data, translate) => {
  // code...
}

* This handled by it-self.


In 'plugin' object... (Object: plugin)

- this.Client gives you a client object of Discord.JS.
- this.Message gives you a message object of Discord.JS.
- this.Data gives you a handler and accesspoints to Serium-Framework's API.
- this.Translate gives you a handled translate object.
*/
