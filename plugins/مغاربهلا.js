const fs = require('fs');

const handler = (m) => m;
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  // قراءة بيانات اللغة من ملف اللغة
  const datas = global;
  const idioma = datas.db.data.users[m.sender]?.language || 'en';
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));

  const tradutor = _translate.plugins._antiarab;

  // التحقق من رقم المرسل
  if (m.sender.startsWith('212')) {
    // إرسال رسالة عدم السماح
    m.reply(tradutor.texto1 || '[ ℹ️ ] في هذه المجموعة، لا يُسمح بالأرقام التي تبدأ ب +212. لذا، سيتم طرد هذا الرقم من المجموعة.');
    // عدم الاستجابة للرسالة
    return !1;
  }

  // تنفيذ باقي وظائف البوت
};

handler.help = ['antiarab']; 
handler.tags = ['General'];
handler.command = /^(antiarab|example)$/i; 
handler.group = true;
handler.premium = true;

export default handler;
