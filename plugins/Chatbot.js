let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^بوت$/i.test(m.text)) { 
 responses = [ 
 'نعم ياعيوني'
 ]; 
 } else if (/^تست|كاناتي|كانونه$/i.test(m.text)) { 
     responses = [ 
'موجوده'
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
