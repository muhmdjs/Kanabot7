import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
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
let str = ` ╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝐾𝐴𝑁𝐴 𝐵𝛩𝑇* —◉
*▫️📆تاريخ:* ${date}
*▫️🕛وقت نشط:* ${uptime}
*▫️⚡المستخدمين:* ${rtotalreg}
*▫️🎖️ مستوى* ${level}
*▫️🧰 خبرتك ${exp}*
*▫️⚓ رتبتك ${role}*

*▫️💎الماس:* ${limit}
*▫️👾عملات:* ${money}
*▫️🪙الرموز:* ${joincount}
*▫️🎟️بريم:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}


*▫️  اسم البوت , كانا*
*▫️ حط قبل كل امر*  (.)*
*▫️ اســم الـمطور ابو عبدالله*
*▫️اليك القائمه يحب*  ${taguser}

🛑تحذير انا اخلي مسؤليتي عن اي اغاني او اباحيات تطلبوها من البوت🛑
				•──⊰◈⊱═━❲⚡❳━═⊰◈⊱──•
							⟦الامر ~↡↡↡~⟧
			   
						   ☬    #جروب
				   ◤أوامر الجروب ◥ 
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							   ⟦الامر ~↡↡↡~⟧
			   
			       ☬ #الالعاب
				   ◤أوامر الالعاب◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							 ⟦الامر ~↡↡↡~⟧
			   
						☬  #الاسلام
				   ◤أوامر دينية◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
       
                                   ☬ #اوامر-المطور
				   ◤اوامر-المطور◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							 ⟦الامر ~↡↡↡~⟧
	                           
                                   ☬ #تنزيلات
				   ◤اوامر-التنزيلات◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							 ⟦الامر ~↡↡↡~⟧
	                            
	                           
                                   ☬ #التحويلات
				   ◤اوامر-التحويلات◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							 ⟦الامر ~↡↡↡~⟧
	                            ☬ #ذكاء
				   ◤اوامر-الذكاء الاصطناعي◥
				   ⏣⚌════⚌⋋❖⚡❖⋌⚌════⚌⏣
							 ⟦الامر ~↡↡↡~⟧
			        #اصوات
				   ❉ رقم مـسـؤول الـبـوت ✆↶
			   
				   ⟦https://wa.me/+201003691617 ⟧
				•──⊰◈⊱═━❲⚡❳━═⊰◈⊱──•
conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })
}
handler.help = ['main']
handler.tags = ['group']
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i

handler.exp = 20
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
