import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Menu.png'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*[اوامر الالعاب]*

> *▫️اكس او*
> *▫️كت*
> *▫️صراحه*
> *▫️هل*
> *▫️ترجم*
> *▫️زواج*
> *▫️ انطق*
> *▫️تاج*
> *▫️حكمه*
> *▫️ميمز*
> *▫️سؤال*
> *▫️صفع*
> *▫️غبي*
> *▫️ميسي
> *▫️كرستيانو*
> *▫️قطه*
> *▫️كلب*
> *▫️نيكو*
> *▫️فيك ريبلاي*
> *▫️لصوت*
> *▫️(يجيبلك كلمات اغنيه)*
> *▫️معلومات(يجيبلك معلومات عن انمي معين)*
> *▫️ غبش*
> *▫️ شاذ*
> *▫️تقسيم(يقسم اي فيديو الى 30 ثانيه*
> *▫️ قلب*
> *▫️ن.. namaninja (يحول الكلام الى لغه النينجا)
> *▫️.تحسين الجوده*
> *▫️ رهان(حرب كتاكيت)*
> *▫️تفجير*
> *▫️فيروس*
> *▫️ذكاء*
> *▫️رابطي*
> *▫️ابعت*
> *▫️ دجاج(لشراء الدجاج للرهان)*
> *▫️التفعيلات(#enable restrict)*
> *▫️رهان*
> *▫️عين*
> *▫️ حجر ورق مقص*
> *▫️شذوذ*
> *▫️ شخصيه*
> *▫️ خروف*
> *▫️ تحدي*
> *▫️ لو*
> *▫️صراحه*
> *▫️ تخمين*
> *▫️ حبي*
> *▫️جني*
> *▫️.زغرفه*
> *▫️ صداقه*
> *▫️م zombie*
> *▫️احسب*
> *▫️ جمال*
> *▫️سيارات*
*> *▫️سجلني(خاص بتسجيل الالقاب)*
> *▫️سيمب
> *▫️حامل
> *▫️جمالي
> *▫️ذكائي
> *▫️رجولتي
> *▫️غبائي
> *▫️غبائه
> *▫️ذكائه
> *▫️رجولته
> *▫️انوثته
> *▫️يكرهني
> *▫️جنشن
> *▫️فزوره
> *▫️ تخيل 

`
    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, false, { mentions: [who] })

}
handler.help = ['main']
handler.tags = ['group']
handler.command = /^(ترفية|الترفية|الترفيه|الالعاب|العاب|ترفيه)$/i

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
