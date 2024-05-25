let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^سبحان الله$/i.test(m.text)) { 
 responses = [ 
 'الله اكبر'
 ]; 
 } else if (/^ونبي|النبي|سيدنا محمد$/i.test(m.text)) { 
     responses = [ 
'صل عليه'
     ]; 
   } else if (/^ظوبري|زبي|ظبي|زوبري|زبري$/i.test(m.text)) { 
     responses = [ 
       'احح كبير؟ 🤤',  
     ];
 }else if (/^ تعبان$/i.test(m.text)) { 
     responses = [ 
       'صلي الحبيب القلب يطيب',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
