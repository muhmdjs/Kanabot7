let handler = async (m, { conn, participants, usedPrefix, command }) => {

let kickte = `*جاري طرد جميع أعضاء المجموعة!*`

if (!m.isGroup) return m.reply('هذا الأمر يستخدم فقط في المجموعات!', m.chat)

let users = participants.map(participant => participant.id)
let bot = m.sender

// لا تطرد نفسك
users = users.filter(user => user !== bot)

for (let user of users) {
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
}

m.reply(`*تم طرد جميع الأعضاء! (${users.length} عضوًا) *`)

}

handler.help = ['kickall']
handler.tags = ['group']
handler.command = ['kickall', 'طردالجميع'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
