import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let url = gensin[Math.floor(Math.random() * gensin.length)]
	conn.sendFile(m.chat, url, 'gensin.jpg', '_KANA_', m)
}
handler.command = /^(رجول)$/i
handler.tags = ['random']
handler.help = ['gensin']
handler.limit = true
export default handler

global.gensin = [
  "https://telegra.ph/file/827606845152a0276a36c.jpg",
  "https://i.pinimg.com/originals/60/65/46/606546c802d8b8e995cd69861a095f8c.jpg",
  "https://telegra.ph/file/0c0b0028b57f5b2a74d5d.jpg",
  "https://telegra.ph/file/7c958f85ce51408d969f1.jpg",
  "https://telegra.ph/file/b9e509f67bacb85eae9a4.jpg",
    "https://telegra.ph/file/6f683f938c5d0b96fcf0c.jpg",
    "https://telegra.ph/file/cdf22f5a67505bdc7c9ef.jpg",
    "https://telegra.ph/file/df45fd30714f36ee8436c.jpg",
    "https://telegra.ph/file/ac1da5859e2852822284f.jpg",
    "https://telegra.ph/file/5f7482c60baba6ac9722e.jpg",
    "https://telegra.ph/file/08dea429d64fb1bd5840b.jpg",
    "https://telegra.ph/file/48fc81545a0f48e6be2ce.jpg",
    "https://telegra.ph/file/4985b19e87222b46fac0f.jpg",
    "https://telegra.ph/file/04dc5cdaeb67e2bcf68bf.jpg",
    "https://telegra.ph/file/ea356bd089e2ec9106ac0.jpg",
    "https://telegra.ph/file/0d9de85c7723c248d19a2.jpg",
    "https://telegra.ph/file/dc72837654bf84d297d3e.jpg",
    "https://telegra.ph/file/a67a7bc2af7b5c693cfe8.jpg",
    "https://telegra.ph/file/29ee80bb98e3b7d7679b5.jpg",
    "https://telegra.ph/file/b3581e43a6e5451919dca.jpg",
    "https://telegra.ph/file/827606845152a0276a36c.jpg",
    "https://telegra.ph/file/e49c921db63f52ffb6493.jpg",
    "https://telegra.ph/file/628fbc97b72b75345e865.jpg"
  ]
