function motivationalSpeechWallpaper(wallpaperObject) {
  const innerFlex = document.createElement('div');
  innerFlex.classList.add('d-flex', 'img_frame');

  const imgFrame = document.createElement('div');
  innerFlex.append(imgFrame);
  imgFrame.classList.add(
    'd-flex',
    'justify-content-center',
    'align-items-center'
  );

  const bgImage = document.createElement('img');
  bgImage.classList.add('bg_image', `wallpaper${wallpaperObject.id}`);
  bgImage.src = wallpaperObject.imgUrl;
  imgFrame.append(bgImage);

  const speechContainer = document.createElement('div');
  speechContainer.classList.add('d-flex');
  const speech = document.createElement('h1');
  speech.style.color = '#' + wallpaperObject.color;
  speech.classList.add('speech', `wallpaper${wallpaperObject.id}`);
  speech.innerHTML = wallpaperObject.text;
  speechContainer.append(speech);
  imgFrame.append(speechContainer);

  return innerFlex;
}

class Wallpaper {
  constructor(text, color, imgUrl, id) {
    this.text = text;
    this.color = color;
    this.imgUrl = imgUrl;
    this.id = id;
  }
}

const domObj = document.getElementById('target');

//あちょ 1変えます！
const wallpaper1 = new Wallpaper(
  '私の成功の原因はこれだ。私は決して自分で言い訳をしなかったし、他人の言い訳を決して受け入れなかった。',
  '2c3e50',
  'https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_960_720.jpg',
  '1'
);
// Sorasuke 2 変えます! live share便利笑
// section chat了解です！
const wallpaper2 = new Wallpaper(
  'Leave nothing for tomorrow which can be done today. - Abraham Lincoln',
  'ecf0f1',
  'https://i.imgur.com/9eQhOoM.jpg',
  '2'
);
// haruki 変更します　

const wallpaper3 = new Wallpaper(
  'もっともむずかしい事は！自分を乗り越える事さ！',
  'ecf0f1',
  'https://blog.kimini.online/blog/wp-content/uploads/2020/07/desert-1270345_1920-1118x538.jpg',
  '3'
);

domObj.append(motivationalSpeechWallpaper(wallpaper1));
domObj.append(motivationalSpeechWallpaper(wallpaper2));
domObj.append(motivationalSpeechWallpaper(wallpaper3));



//////////depelop branch test
//////////depelop branch test
////修正完了しました！！！！！