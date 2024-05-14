// بواسطة ابو عبدالله
let handler = async (m, { conn, args }) => {
 	
      		const side9 = Math.floor(Math.random() * 9) + 1
	{
				if (side9 == 1) {
					const halfeh = await fs.readFileSync('./src/MaliksMuwatta.txt').toString().split('\n')
					const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
					await m.reply(`${gethalfeh}\n\nالكتاب :الموطأ`)
			}	if (side9 == 2) { 
				const halfeh = await fs.readFileSync('./src/MusnadAhmad.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :مسند أحمد`)
			}	if (side9 == 3) { 

				const halfeh = await fs.readFileSync('./src/SahihBukhari.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :صحيح البخاري`)
			} 
			if (side9 == 4) { 

				const halfeh = await fs.readFileSync('./src/SahihMuslim.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :صحيح مسلم `)
			} 
			if (side9 == 5) { 

				const halfeh = await fs.readFileSync('./src/SunanAbuDawud.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :سنن أبي داود `)
			} 
			if (side9 == 6) { 

				const halfeh = await fs.readFileSync('./src/SunanIbnMaja.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :سنن ابن ماجه   `)
			} 
			if (side9 == 7) { 

				const halfeh = await fs.readFileSync('./src/SunanalDarami.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :سنن الدارمي   `)
			} 
			if (side9 == 8) { 

				const halfeh = await fs.readFileSync('./src/SunanalTirmidhi.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :سنن الترمذي   `)
			} 
			if (side9 == 9) { 

				const halfeh = await fs.readFileSync('./src/Sunanal-Nasai.txt').toString().split('\n')
				const gethalfeh = halfeh[Math.floor(Math.random() * halfeh.length)]
				await m.reply(`${gethalfeh}\n\nالكتاب :سنن النسائي   `)
			} 
		}

	
}          

handler.command = ['حديث']
export default handler
//بواسطة ابو عبدالله 
