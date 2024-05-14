let handler = async (m, { command, text }) => m.reply(`
*⁉️ اسئله ⁉️*
  
*شخص:* ${text}
*هل هو حامل:* ${[ ','لا','يب','يب no','No','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^حامل؟|preguntas|apakah$/i
export default handler
