let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) {
        let metadata = await conn.groupMetadata(jid)
        if (metadata.participants.find(participant => participant.jid === conn.user.jid && participant.admin)) {
            txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? 'لا يوجد مشاركون' : 'مشارك'}]\n\n`
        }
    }
    m.reply(`*قائمة الجروبات التي البوت مشرف فيها:*
${txt}
`.trim())
}

handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(جروبمشرف|grouplist|listadegrupo|gruposlista|listagrupos)$/i

export default handler
