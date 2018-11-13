# Serium
You can see more detailed descriptions in each file.
----

The way how to get improved creativity and multi-purpose in Discord.

## Table of Contents

- [Assets](#assets)




## Assets


### API

#### Reading datas

When the application starts up with logs, Serium collects JSON Objects and keep it into JavaScript Objects to use in plugins.

Then the JavaScript handles it into a shacked data variable when the plugin executed.

```js
module.exports = (client, message, data, translate) => {
  data.stores... // NOTE: You may get datas by using this method.

  // Example
  const lastData = data.stores.guilds.VARIABLE
}
```

#### Writing datas

You need to edit or copy it into new variable from [original](#Reading-data).

After modifying the data, you can call event handler handled by '/index.js' and emit 'modified' event, then you can see your modified data writen with File Stream.

```js
module.exports = (client, message, data, translate) => {
  data.assets.emit('modified', 'guilds', modified) // NOTE: The second variable guilds means '/assets/guilds.json'.
}
```

#### Register data file into map

When you need thirdparty storage to extend plugin's additional strong feature, you may register its path and parser into '/index.js'.

```js
// /index.js:21
let assets = {
  users: JSON.parse(fs.readFileSync('./assets/users.json', 'utf8')),
  guilds: JSON.parse(fs.readFileSync('./assets/guilds.json', 'utf8')),

  thirdparties: {
    // NOTE: Additional thirdparty assets can be located in here, recommended.
  }
}
```


### Storages


#### assets/guilds.json

This is a file for store guild settings like welcome messages(for example...).

```json
{
  "GUILD_ID": {
    "__KEY__": "__VALUE__"
  }
}
```

#### assets/users.json

This is a file for store user settings like language pre-set(for example...).

```json
{
  "USER_ID": {
    "language": "LANGUAGE_CODE",
    "__KEY__": "__VALUE__"
  }
}
```



## Plugins


### Guide

#### Adding a plugin

For general, adding a file into directory that can categorize the plugin is recommended.

So, next step is inserting default template into new file.

```js
module.exports = (client, message, data, translate) => {
  // code...
}
```

Done, and the next step is registering the plugin into a map.

Goto ``plugins/index.js`` and add below string(customize as yours).

```js
module.exports.pluginName = {
  execute: require('./path/to/plugin'),
  usage: 'pluginName [variables]',
  permissions: 'common'
}
```
