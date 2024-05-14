

const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.fun_verdad

  global.verdad = tradutor.texto1;

  conn.reply(m.chat, `*┌────「 حقيقه 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 كانا 」─*`, m);
};
handler.help = ['verdad'];
handler.tags = ['fun'];
handler.command = /^حقيقه/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}


