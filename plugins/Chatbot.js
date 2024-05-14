let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^اه$/i.test(m.text)) { 
 responses = [ 
 'الشارع الي وراه'
 ]; 
 } else if (/^بوت|كاناتي|كانونه$/i.test(m.text)) { 
     responses = [ 
'موجوده يروحي❤️‍🔥💋'
     ]; 
   } else if (/^ااحا$/i.test(m.text)) { 
     responses = [ 
       '*احتين عند ام حسين*',  
     ];
 }else if (/^ليه$/i.test(m.text)) { 
     responses = [ 
       'واحد امبليه',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
