let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^هات$/i.test(m.text)) { 
 responses = [ 
 'خد🖕🏿'
 ]; 
 } else if (/^زبي|زوبري|ظوبري$/i.test(m.text)) { 
     responses = [ 
'احح كبير🤤؟'
     ]; 
   } else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       '*احتين عند ام حسين*',  
     ];
 }else if (/^ليه$/i.test(m.text)) { 
     responses = [ 
       'معرفش',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
