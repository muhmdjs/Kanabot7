let handler = async (m, { conn, command, text }) => {
let love = `
*رجولتك ${text} انتا راجل* *${Math.floor(Math.random() * 100)}% من 100%*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['Inteligencia ']
handler.tags = ['fun']
handler.command = /^(رجولتي)$/i
export default handler
