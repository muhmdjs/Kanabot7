let handler = async (m, { conn, args }) => {
 		try {
      
					const hadeth1 = Math.floor(Math.random() * 6200) + 1
              const aiyah = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${hadeth1}.mp3`


await conn.sendFile(m.chat, aiyah ,'quran.mp4','...' , m)

} catch (error) {
	await m.reply('حط رقم الصفحه')
}
}          

handler.command = ['صفحه','صفحة']
export default handler
