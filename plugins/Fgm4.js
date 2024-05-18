import yts from 'yt-search

let handler async (m, { conn, text }) = {

if (!text) throw ما الذي تريد البحث عنه على يوتيوب؟

let results = await yts(text)

let image results.all

let img image[].thumbnail

let rows = []

for (let i of results.all) {

switch (i.type) {

case 'video':

const list = {

header: ${text}.trim(),

title: '${i.title}.trim(),

description: المدة: i.timestamp)\nالنشر: i.agon المشاهدات : i.views.trim)(, id:ytmp4 ${i.url}

}

rows.push(list)

}} { { 1

const sections = [

"name": "single_select",

"buttonParamsJson": {

نتائج البحث" : "title"

"sections": [

"title": "نتائج البحث

"rows": rows

const listMessage = {

image: img,

وأداة البحث على اليوتيوب : title

و الرجاء النقر على القائمة أبناء الرؤينة نتائج البحث text: In

} conn.sendAIButton(m.chat, listMessage, m)

footer: '\n*Copyright© 2824_dark man._,

buttons: sections

}

handler.help = ['ytsearch']

handler.tags = ['dl']

handler.command = ['ytsearch's "يوتيوب"]

export default handler
