import fetch from 'node-fetch';

const arabicCountries = [
  { country: "مصر", flag: "🇪🇬", city: "القاهرة", latitude: 30.05, longitude: 31.25, timezone: 'Africa/Cairo' },
  { country: "المغرب", flag: "🇲🇦", city: "الرباط", latitude: 34.02, longitude: -6.85, timezone: 'Africa/Casablanca' },
  { country: "السعودية", flag: "🇸🇦", city: "الرياض", latitude: 24.71, longitude: 46.67, timezone: 'Asia/Riyadh' },
  { country: "اليمن", flag: "🇾🇪", city: "صنعاء", latitude: 15.36, longitude: 44.21, timezone: 'Asia/Aden' },
  { country: "الأردن", flag: "🇯🇴", city: "عمان", latitude: 31.95, longitude: 35.93, timezone: 'Asia/Amman' },
  { country: "العراق", flag: "🇮🇶", city: "بغداد", latitude: 33.31, longitude: 44.36, timezone: 'Asia/Baghdad' },
  { country: "فلسطين", flag: "🇵🇸", city: "القدس", latitude: 31.77, longitude: 35.23, timezone: 'Asia/Jerusalem' },
  { country: "السودان", flag: "🇸🇩", city: "الخرطوم", latitude: 15.59, longitude: 32.53, timezone: 'Africa/Khartoum' },
  { country: "لبنان", flag: "🇱🇧", city: "بيروت", latitude: 33.89, longitude: 35.50, timezone: 'Asia/Beirut' }
  // يمكن إضافة المزيد من الدول هنا بنفس الصيغة
];

let handler = async (m, { conn }) => {
  const date = new Date();
  const prayerTimesPromises = arabicCountries.map(country => {
    const url = http://api.aladhan.com/v1/timingsByCity?city=${country.city}&country=${country.country}&method=3;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const timings = data.data.timings;
        const timezone = country.timezone;
const fajr = new Date(${date.toISOString().split('T')[0]}T${timings.Fajr}Z).toLocaleTimeString('ar-EG', { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit' });
        const sunrise = new Date(${date.toISOString().split('T')[0]}T${timings.Sunrise}Z).toLocaleTimeString('ar-EG', { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit' });
        const dhuhr = new Date(${date.toISOString().split('T')[0]}T${timings.Dhuhr}Z).toLocaleTimeString('ar-EG', { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit' });
        const asr = new Date(${date.toISOString().split('T')[0]}T${timings.Asr}Z).toLocaleTimeString('ar-EG', { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit' });
        const maghrib = new Date(${date.toISOString().split('T')[0]}T${timings.Maghrib}Z).toLocaleTimeString('ar-EG', { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit' });
        const isha = new Date(${date.toISOString().split('T')[0]}T${timings.Isha}Z).toLocaleTimeString('ar-EG', { timeZone: timezone, hour12: false, hour: '2-digit', minute: '2-digit' });

        return {
          country: country.country,
          flag: country.flag,
          fajr,
          sunrise,
          dhuhr,
          asr,
          maghrib,
          isha
        };
      });
  });

  const prayerTimes = await Promise.all(prayerTimesPromises);

  const currentTime = date.toLocaleTimeString('ar-EG', { hour12: false, hour: '2-digit', minute: '2-digit' });
  for (const times of prayerTimes) {
    for (const [prayerName, prayerTime] of Object.entries(times)) {
      if (prayerName !== 'country' && prayerName !== 'flag' && currentTime === prayerTime) {
        const alertMessage = `🕌 تنبيه: موعد صلاة ${prayerName} في ${times.flag} $
{times.country}، الساعة الآن ${currentTime} 🌅`;
        const chats = Object.entries(conn.chats)
          .filter(([_, chat]) => chat.isChats)
          .map(v => v[0]);
        for (const id of chats) {
          await conn.sendMessage(id, alertMessage, MessageType.text);
        }
      }
    }
  }
};

export default handler;
