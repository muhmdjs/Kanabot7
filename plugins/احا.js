
// استيراد مكتبة WhatsApp Web JS
const { WhatsAppWebJS } = require("whatsapp-web.js");

// إنشاء مثيل من البوت
const bot = new WhatsAppWebJS();

// استلام الرسائل
bot.on("message", async (message) => {
  // التحقق من محتوى الرسالة
  if (message.body.toLowerCase() === "احا") {
    // إرسال رد تلقائي
    await message.reply("لف وافتحها");
  }
});

// تشغيل البوت
bot.connect();
```
