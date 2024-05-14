import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*منشن فيديو او صوتيه *`
let media = await q.download()
if (!media) throw '*منشن فيديو او صوتيه*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*منشن فيديو او صوتيه*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = ['صوت','لصوت']
export default handler
