let handler = async (m, { conn, command, text }) => {
let love = `
*جمالك ${text} انتا جميل* *${Math.floor(Math.random() * 100)}% من 100%*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['Inteligencia ']
handler.tags = ['fun']
handler.command = /^(جمالي)$/i
export default handler
