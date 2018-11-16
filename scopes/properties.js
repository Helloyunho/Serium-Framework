module.exports = {
  application: {
    prefix: 'YOUR_PREFIX',
    permissions: {
      administrate: 0b001,
      moderate: 0b010,
      common: 0b100
    }
  },
  client: {
    options: {
      autoReconnect: true,
      disableEveryone: true
    },
    presence: {
      status: 'online',
      game: {
        name: ';help (Seia-Deployments/Worker)',
        type: 'LISTENING'
      }
    },
    token: 'APPLICATION_TOKEN',
    invite: 'https://discordapp.com/oauth2/authorize?client_id=[CLIENT_ID]&permissions=[PERMISSION_NUMBERIC_STRING]&scope=bot'
  },
  embed: {
    color: 16761035 // NOTE: This is a JavaScript's hex encoded color-code.
  },
  thirdparties: {
    // NOTE: This is configurations for thirdparty extensions
  }
}
