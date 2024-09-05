const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const oce = "`"

cmd({
    pattern: "tiktok",    
  alias: ["tt","ttdl","tiktokdl"],
    react: '🎩',
    desc: "Download tiktok videos",
    category: "download",
    use: '.tiktok < tiktok url >',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  
  
  if (!q) return await reply('TEXT') 
      if (!q.includes('tiktok')) return await reply('valid_url') 


const mov = await fetchJson(`https://api.fgmods.xyz/api/downloader/tiktok?url=${q}&apikey=mnp3grlZ`)

let yt = `┠─❲ 🧛 𝗗𝗔𝗥𝗞 𝗬𝗔𝗦𝗛 𝗠𝗗 🧛 ❳─┨*

    *🧧 TIKTOK DOWNLOADER 🧧*


*\`➤ Title :\`*  ${mov.result.title}


*\`➤ Region :\`*  ${mov.result.region}


*\`➤ Duration :\`*  ${mov.result.duration}


*\`➤ Views :\`*  ${mov.result.views}
`
                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: config.BTN,
                        url: config.BTNURL,
                        merchant_url: config.BTNURL
                    }),
                },
                { name: 'single_select',
            buttonParamsJson: JSON.stringify({
               title: 'SELECT TYPE )✨',
               sections: [{
                  rows: [{
                     title: 'NO-WATERMARK',
                     // description: `X`,
                     id: prefix + `ttdl1 ${mov.result.play}`
                  }, {
                     title: 'WITH-WATERMARK',
                     // description: `X`,
                     id: prefix + `ttdl2 ${mov.result.wmplay}`
                  }, {
                     title: 'DOWNLOAD VIDEO AUDIO',
                     // description: `X`,
                     id: prefix + `ttdl3 ${mov.result.music}`
                  }, {
                     title: 'DOWNLOAD ORIGINAL AUDIO',
                     // description: `X`,
                     id: prefix + `ttdl4 ${mov.result.music_info.play}`
		  }]
               }]
            })
         }]
	

        let message = {
            image: mov.result.cover,
            header: '',
            footer: config.FOOTER,
            body: yt
        }   
return conn.sendButtonMessage(from, buttons, m, message) 
} catch (e) {
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})

cmd({
    pattern: "ttdl1",
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename
},
  
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msr = (await fetchJson('https://raw.githubusercontent.com/DarkYasiyaofc/FROZEN-HARD/main/MESSAGES/mreply.json')).replyMsg
  if (!q) return await reply(msr.url) 
	
conn.sendMessage(from, { video: { url: q }, mimetype: "video/mp4", caption: `NO-WATERMARK ✅\n\n${config.FOOTER}` }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
} catch (e) {
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})

cmd({
    pattern: "ttdl2",
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename
},
  
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msr = (await fetchJson('https://raw.githubusercontent.com/DarkYasiyaofc/FROZEN-HARD/main/MESSAGES/mreply.json')).replyMsg
  if (!q) return await reply(msr.url) 
	
conn.sendMessage(from, { video: { url: q }, mimetype: "video/mp4", caption: `WATERMARK ✅\n\n${config.FOOTER}` }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
} catch (e) {
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})

cmd({
    pattern: "ttdl3",
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename
},
  
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msr = (await fetchJson('https://raw.githubusercontent.com/DarkYasiyaofc/FROZEN-HARD/main/MESSAGES/mreply.json')).replyMsg
  if (!q) return await reply(msr.url) 
	
conn.sendMessage(from, { audio: { url: q }, mimetype: "audio/mpeg", caption: `AUDIO ✅\n\n${config.FOOTER}` }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
} catch (e) {
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})


cmd({
    pattern: "ttdl4",
    react: '⬆',
    dontAddCommandList: true,
    filename: __filename
},
  
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msr = (await fetchJson('https://raw.githubusercontent.com/DarkYasiyaofc/FROZEN-HARD/main/MESSAGES/mreply.json')).replyMsg
  if (!q) return await reply(msr.url) 
	
conn.sendMessage(from, { audio: { url: q }, mimetype: "audio/mpeg", caption: `AUDIO ✅\n\n${config.FOOTER}` }, { quoted: mek })
  await conn.sendMessage(from, { react: { text: `✔`, key: mek.key } })
} catch (e) {
console.log(e)
reply(`Error !!\n\n*${e}*`)
}
})
