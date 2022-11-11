import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Wannzx-Md Official;;;\nFN:Wannzx-Md Official\nORG:Wannzx-Md Official\nTITLE:\nitem1.TEL;waid=6281265970249:+62 812-6597-0249\nitem1.X-ABLabel:Wannzx-Md Official\nX-WA-BIZ-DESCRIPTION:Ada Yang Bisa Saya bantu?\nX-WA-BIZ-NAME:Wannzx-Md Official\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }},)
  }
  }
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler