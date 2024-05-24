const fs = require('fs');
const { setTimeout } = require('timers/promises');

const handler = async (m, {conn, text}) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language;
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.herramientas_spamwa;

  const [pesan, jumlah] = text.split('|');
  if (!pesan) throw tradutor.texto1;
  if (jumlah && isNaN(jumlah)) throw tradutor.texto2;

  const fixedJumlah = jumlah ? jumlah * 1 : 250;
  if (fixedJumlah > 250) throw tradutor.texto3;

  await m.reply(`${tradutor.texto4[0]} ${fixedJumlah} ${tradutor.texto4[1]}`);

  for (let i = 0; i < fixedJumlah; i++) {
    conn.reply(m.chat, pesan.trim(), m);
    await setTimeout(100);  // تأخير 100 مللي ثانية بين كل رسالة
  }
};

handler.help = ['spamgroup <message>|<no of messages>'];
handler.tags = ['General'];
handler.command = /^سبامجروب$/i;
handler.group = true;
// handler.private = true
// handler.limit = true
export default handler;
