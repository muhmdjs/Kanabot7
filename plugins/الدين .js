import fs from 'fs'

let timeout = 60000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat

    if (id in conn.tekateki) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم يتم الرد عليها في هذه الدردشة', conn.tekateki[id][0])
        throw false
    }

    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.question
    let clue = _clue.replace(/[A-Za-z]/g, '_')

    let caption = `
ⷮ *${json.question}*
*• الوقت:* ${(timeout / 1000).toFixed(2)} ثانيه
*• الجائزه:* +${poin} Exp
`.trim()

    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, m),
        json,
        poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `انتهى الوقت!\n*الإجابة:* ${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = 'دين'

export default handler
