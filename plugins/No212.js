// فلتر لمنع الأوامر من الأرقام التي تبدأ بـ +212
let anti212Handler = async (m, { conn }) => {
    if (m.sender.startsWith('212')) {
        return m.reply('عذرًا، لا يمكنك استخدام الأوامر لأن رقمك يبدأ بـ +212.')
    }
}

// معالج الأوامر العادي
let handler = async (m, { conn, command, usedPrefix, args }) => {
    // هنا تضع الكود الخاص بالأوامر التي تريد تنفيذها
    m.reply('تم تنفيذ الأمر بنجاح.')
}

// دمج الفلتر مع معالج الأوامر
let mainHandler = async (m, context) => {
    await anti212Handler(m, context)
    await handler(m, context)
}

// تصدير المعالج الرئيسي
mainHandler.help = ['anti212']
mainHandler.tags = ['tools']
mainHandler.command = /^(anti212|اي_امر_اخر|anothercommand)$/i

export default mainHandler
