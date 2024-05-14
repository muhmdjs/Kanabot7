const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveDescription = isHighLove ? "" : "";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const response =
    `✦•━━━━ ∘⊰🔥⊱∘ ━━━━•✦\n` +
    `${text}😂♥️ وينك بضاني لساتك زعلانه ` +
    `\n✦•━━━━ ∘⊰🔥⊱∘ ━━━━•✦` +
    ``    

  async function loading() {
var hawemod = [
"⌯ بضاني ",
"⌯بضاني",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني ",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني هتبكي",
"⌯ بضاني ",
"⌯ بضاني مبضونه",
"⌯ بضاني زعلانه",
"⌯ بضاني",
"⌯ بضاني",
"⌯ بضاني"
]
   let { key } = await conn.sendMessage(m.chat, {text: `⌯ زعلانه بضاني`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(بضاني)$/i;
export default handler;
