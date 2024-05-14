let handler = async (m, { conn, command, text }) => {
let love = `
*ذكاءك ${text} انتا ذكي* *${Math.floor(Math.random() * 100)}% من 100%*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['Inteligencia ']
handler.tags = ['fun']
handler.command = /^(ذكائي)$/i
export default handler
