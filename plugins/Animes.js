import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data;
  const haha = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, haha, 'error.jpg', `_${command}_`, m);
// conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)
};
handler.command = handler.help = ['اكيرا', 'اكياما', 'اننا', 'اسونا', 'ايزاوا', 'بوروتو', 'تشيهو', 'شيتوجي', 'ديدرا', 'إرزا', 'إلينا', 'ايبا', 'ايميليا', 'هستيا', 'هيناتا', 'اينوري', 'ايسوزو', 'ايتاتشي', 'ايتوري', 'كاجا', 'kagura', 'kaori', 'كانيكي', 'كوتوري', 'كورومي', 'مادارا', 'ميكاسا', 'ميكو', 'ميناتو', 'ناروتو', 'نيزوكو', 'ساغيري ','ساسكي', 'ساكورا', 'كوسبلاي'];
handler.tags = ['anime'];
export default handler;
