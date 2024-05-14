import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone' 

let handler = async (m, { conn, args }) => {
const time123 = moment.tz('Asia/Riyadh').format('DD-MM')

	const url14 = `https://api.aladhan.com/v1/timingsByCity/${time123}-2023?city=makkah&country=saudi%20arabia&method=4`;

fetch(url14)
  .then(response145 => response145.json())
  .then(data14 => {
    const timings13 = data14.data.timings;
	const location = "New York";

	
const url = `https://api.aladhan.com/v1/timingsByCity/${time123}-2023?city=jerusalem&country=palestine&method=1`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const timings = data.data.timings;
	
    console.log(`Fajr: ${timings.Fajr}`);
    console.log(`Dhuhr: ${timings.Dhuhr}`);
    console.log(`Asr: ${timings.Asr}`);
    console.log(`Maghrib: ${timings.Maghrib}`);
    console.log(`Isha: ${timings.Isha}`);
	m.reply(`في تاريخ ${time123} \n\n مواعيد الصلاة في القدس \n\n الفجر: ${timings.Fajr}
	الظهر: ${timings.Dhuhr}
	العصر: ${timings.Asr}
	المغرب: ${timings.Maghrib}
	العشاء: ${timings.Isha} \n\nمواعيد الصلاة في مكة\n\nالفجر: ${timings13.Fajr}
	الظهر: ${timings13.Dhuhr}
	العصر: ${timings13.Asr}
	المغرب: ${timings13.Maghrib}
	العشاء: ${timings13.Isha}`)
	
  })})
  .catch(error => console.error(error));

 



  }
handler.command = 'صلاه'
export default handler
