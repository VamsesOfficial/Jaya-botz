import fetch from 'node-fetch'
let handler  = async (m, { conn, participants, usedPrefix: _p }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
	
                    let wan = 'https://telegra.ph/file/c080917609684bf229cd3.jpg'
let anu2 =`Esceh?\nNih:`
  conn.sendButtonImg(m.chat, await(await fetch(wan)).buffer(), anu2, botdate, 'Owner', 'owner',)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script|esceh)$/i
handler.group = false
handler.limit = false

handler.fail = null

export default handler