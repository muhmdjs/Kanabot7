import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/Menu.png'
let pp = imagen4
let img = await(await fetch('https://c4.wallpaperflare.com/wallpaper/625/935/684/vinland-saga-ruins-hills-trees-roman-empire-hd-wallpaper-preview.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'en'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `kana ◆🤖◆ 𝒃𝒐𝒕 
				•──⊰◈⊱═━❲⚡❳━═⊰◈⊱──•
							⟦الامر ~↡↡↡~⟧
			   
						   ☬    #ستيكرز
				   ◤أوامر الستيكرات ◥ 
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							   ⟦الامر ~↡↡↡~⟧
			   
					   ☬ #المشرفين
			   ◤أوامر خاصة بالمشرفين ◥ 
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							  ⟦الامر ~↡↡↡~⟧
			   
			       ☬ #الالعاب
				   ◤أوامر الالعاب◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							 ⟦الامر ~↡↡↡~⟧
			   
						☬  #الاسلام
				   ◤أوامر دينية◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
			        #اصوات
				   ❉ رقم مـسـؤول الـبـوت ✆↶
			   
				   ⟦https://wa.me/+201003691617 ⟧
				•──⊰◈⊱═━❲⚡❳━═⊰◈⊱──•`.trim()
let buttons = [
//{ buttonId:  '#donar' , buttonText: { displayText: 'انستا البوت //https://instagram.com/raily.bot.itachi\nقروب دعم البوت //https://chat.whatsapp.com/BzJhdxwVlte1unMYgieoYQ'}, 
//type: 1 },
{ buttonId:  '#owner' , buttonText: { displayText:  'المطور 👨‍💻'  }, type: 1 }]
//{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: img,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
//externalAdReply: {
//showAdAttribution: true,
//mediaType: 'VIDEO',
//mediaUrl: null,
//title: 'instagram.com/raily.bot.itachi',
//body: null,
//thumbnail: img,
//sourceUrl: `https://instagram.com/raily.bot.itachi`
//}
}}
//conn.sendMessage(m.chat, buttonMessage, { quoted: m })
 // conn.sendMessage(m.chat, str, { quoted: m })

await conn.sendFile(m.chat, img, 'menu.png', str, m,)
} catch {
conn.reply(m.chat, 'error contact owner :  ./', m)
}}
handler.command = /^(menu|القائمة|بوت|كانا|help|info|اوامر|sir|comandos|الاوامر|go|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
