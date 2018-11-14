# Serium

----

You can see more detailed descriptions in each file.

The way how to get improved creativity and multi-purpose in Discord.

# Table of Contents

**Basics**
- [Configurations](#configurations)
  - [Prefix](#prefix)
  - [Permission bitflags](#permission-bitflags)
  - [Discord Client](#discord-client)
  - [Application Presence](#application-presence)
  - [Accesstoken](#accesstoken)
  - [Embed color](#embed-color)

**Detailed**
- [Assets](#assets)
- [Plugins](#plugins)



# Configurations

To configurate the application correctly before adding features follow below steps.

All configurations are in the file called `properties.js`, located in `scopes` directory.
By the way, Serium is using `.js` extension instead of `.json` because JavaScript has more features then JSON format.

## Prefix

Prefix can be changed easily like below. You can edit `'YOUR_PREFIX'` variable, but some spaces cannot be parsed.

To use RegEx type prefix, you need to edit message handler `index.js` of root directory and message constructor.

```js
// line 3
...
application: {
  prefix: 'YOUR_PREFIX',
  ...
}
...
```

## Permission bitflags

Default, I setted up the permission bitflags to type 2, but you can edit that into any types of supported bitflags.

For example, using `0x001` instead of `0b001` is OK.

```js
// line 3
...
application: {
  ...,
  permissions: {
    administrate: 0b001,
    moderate: 0b010,
    common: 0b100
  }
}
...
```

## Discord Client

You can also customize the client options in Discord.JS like below.

`client.options` object will send to `Discord.Client` constructor, if you want to configure I recommend you to see Discord.JS documents.

```js
// line 10
...
client: {
  options: {
    autoReconnect: true,
    disableEveryone: true
  },
  ...
}
...
```

## Application Presence

Setting up presence can be found in this file too.

Specifying the `user.game` object can define what game the bot playing is.
`user.game.type` can be string or int type.

This also has interpersonal relatationships between `Discord.Client`, so please read Discord.JS documentation too.

```js
// line 10
...
client: {
  ...,
  presence: {
    status: 'online',
    game: {
      name: ';help (Seia-Deployments/Worker)',
      type: 'LISTENING'
    }
  },
  ...
}
...
```

## Accesstoken

When the application is ready, Serium will try to connect to Discord API by using `accesstoken`.

Accesstoken can be found on your application's settings page in `discordapp.com`.

Also there is a `clinet.invite` property. This is un-useful for this(Serium-Framework), but in Serium(Seia-Soto/Serium - Original), this used to call invite link by short code.

```js
// line 10
...
client: {
  ...,
  token: 'APPLICATION_TOKEN',
  invite: 'https://discordapp.com/oauth2/authorize?client_id=[CLIENT_ID]&permissions=[PERMISSION_NUMBERIC_STRING]&scope=bot'
}
...
```

## Embed color

It is too hard to change all color properties of embed message object's color property in each plugin, so I added `embed` object to scopes.

Below is JavaScript's HEX color code.

```js
...
embed: {
  color: 16761035 // NOTE: This is a JavaScript's hex encoded color-code.
}
...
```

# Assets

## API

### Reading datas

When the application starts up with logs, Serium collects JSON Objects and keep it into JavaScript Objects to use in plugins.

Then the JavaScript handles it into a shacked data variable when the plugin executed.

```js
module.exports = (client, message, data, translate) => {
  data.stores... // NOTE: You may get datas by using this method.

  // Example
  const lastData = data.stores.guilds.VARIABLE
}
```

### Writing datas

You need to edit or copy it into new variable from [original](#Reading-data).

After modifying the data, you can call event handler handled by '/index.js' and emit 'modified' event, then you can see your modified data writen with File Stream.

```js
module.exports = (client, message, data, translate) => {
  data.assets.handle.emit('modified', 'guilds', modified) // NOTE: The second variable guilds means '/assets/guilds.json'.
}
```

### Register data file into map

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

## Storages

### assets/guilds.json

This is a file for store guild settings like welcome messages(for example...).

```json
{
  "GUILD_ID": {
    "__KEY__": "__VALUE__"
  }
}
```

### assets/users.json

This is a file for store user settings like language pre-set(for example...).

```json
{
  "USER_ID": {
    "language": "LANGUAGE_CODE",
    "__KEY__": "__VALUE__"
  }
}
```

# Plugins

## Guide

### Adding a plugin

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
