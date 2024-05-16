const { google } = require('googleapis');
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCvPLrnZFP2hWLY62uLKuMyAGi4rPXwXC4' // استبدل بمفتاح API الخاص بك
});

// الأمر الذي يستمع إليه البوت
handler.command = /^(yt|فيد|فيديو|يوت|يوتيوب|mp4)$/i

// معالج الرسائل
const messageHandler = async (message) => {
  const command = message.split(' ')[0];
  const query = message.split(' ').slice(1).join(' ');

  if (commands.includes(command)) {
    try {
      const response = await youtube.search.list({
        part: 'snippet',
        q: query,
        maxResults: 1,
        type: 'video'
      });

      const videoId = response.data.items[0].id.videoId;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      // إرسال الرابط إلى المستخدم
      console.log(`الرابط: ${videoUrl}`);
    } catch (error) {
      console.error('حدث خطأ أثناء البحث عن الفيديو: ', error);
    }
  }
};

// استخدم هذه الدالة لمعالجة الرسائل الواردة
messageHandler('.فيديو اغنية سعيدة');
