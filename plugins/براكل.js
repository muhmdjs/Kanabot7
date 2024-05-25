let handler = async (m, { conn, participants, usedPrefix, command }) => {

  let kickte = `*جاري طرد جميع أعضاء المجموعة!*`

  if (!m.isGroup) return m.reply('هذا الأمر يستخدم فقط في المجموعات!', m.chat)

  let users = participants.map(participant => participant.id)
  let bot = conn.user.jid

  // لا تطرد البوت أو الأدمن الأساسي
  users = users.filter(user => user !== bot && !participants.find(p => p.id === user).admin)

  if (users.length === 0) return m.reply('لا يوجد أعضاء لطردهم!', m.chat)

  m.reply(kickte, m.chat)

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
