import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;JayaDev-Botz;;;\nFN:JayaDev-Botz\nORG:JayaDev-Botz\nTITLE:\nitem1.TEL;waid=6287778405247:+62 877-7840-5247\nitem1.X-ABLabel:JayaDev-Botz\nX-WA-BIZ-DESCRIPTION:Ada Yang Bisa Saya bantu?\nX-WA-BIZ-NAME:JayaDev-Botz Official\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }},)
  }
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler