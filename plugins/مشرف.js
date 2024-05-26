let handler = async (m, { conn }) => {
    let txt = ''
    let isBotAdmin = async (jid) => {
        try {
            let participants = (await conn.groupMetadata(jid)).participants
            let botParticipant = participants.find(participant => participant.id === conn.user.jid)
            return botParticipant && botParticipant.admin
        } catch (e) {
            return false
        }
    }

    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) {
        if (await isBotAdmin(jid)) {
            txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? 'لا يوجد مشاركون' : 'مشارك'}]\n\n`
        }
    }

    if (txt === '') txt = 'لا توجد مجموعات يكون فيها البوت مشرفًا.'
    m.reply(`*قائمة الجروبات التي البوت مشرف فيها:*\n${txt}`.trim())
}

handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(جروبمشرف|grouplist|listadegrupo|gruposlista|listagrupos)$/i

export default handler
