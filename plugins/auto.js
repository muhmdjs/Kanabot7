let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^ايفان$/i.test(m.text)) { 
 responses = [ 
 'الملك'
 ]; 
 } else if (/^سويفي|عمر سويفي|عمرر سويفي$/i.test(m.text)) { 
     responses = [ 
'سويفي فوق ظوبري'
     ]; 
   } else if (/^زياد$/i.test(m.text)) { 
     responses = [ 
       '*طفل اعدادي منتن*',  
     ];
 }else if (/^ابو عبدالله$/i.test(m.text)) { 
     responses = [ 
       'الكينج الاسطوره الملك الاعجوبه العم الفحل ابو عبدالله',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
