"use strict";

{
  const scores = [80, 90, 40, 70];

  scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  });
}

{
  // const prices = [180, 190, 200];

  // const updatedPrices = prices.map((price) => {
  //  return price + 20;
  // });
  const prices = [180, 190, 200];

  const updatedPrices = prices.map(price => price + 20);
  console.log(updatedPrices);
}

{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers);
}

{
  // const poing = [100, 180];
  // const point = {x: 100, y:180};
  const point = {
    x: 100,
    y: 180
  };
  console.log(point);

  point.x = 120;
  point["x"] = 130;

  console.log(point.x);
  console.log(point["y"]);

  point.z = 90;
  console.log(point);

  delete point.y;
  delete point.x;
  console.log(point);

  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`key: ${key} Value: ${point[key]}`);
  });

  const points = [
    { x: 30, y: 20 },
    { x: 10, y: 50 },
    { x: 40, y: 40 }
  ];
  console.log(points[1].y);
}

// {
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   };

//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,
//   };
//   console.log(point);

//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }

{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);
  // console.log(y);

  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x); //[5, 2]
  // console.log(y);// [5, 2]

  let x = [1, 2];
  let y = [...x]; //スプレット演算子
  x[0] = 5;
  console.log(x); //[5, 2]
  console.log(y); // [１, 2]
}

{
  const str = "hello";

  // console.log(str.length);
  // str.substring(開始位置, 終了位置)
  console.log(str.substring(2, 4));

  console.log(str[1]); //値を変更することはできない　　forEach,str[1] = 'a';  ✗
}

{
  const d = [2019, 11, 14]; //配列を文字列にする

  console.log(d.join("/"));
  console.log(d.join(""));

  const t = "17:08:24";
  console.log(t.split(":"));
  const [hour, minute, second] = t.split(":");
  console.log(hour);
  console.log(minute);
  console.log(second);
}

{
  const scores = [10, 3, 9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;

  console.log(sum);
  console.log(avg);

  console.log(Math.floor(avg)); //小数点以下を切り捨てる
  console.log(Math.ceil(avg)); // 小数点を繰り上げる
  console.log(Math.round(avg)); // 四捨五入
  console.log(avg.toFixed(3)); // 指定した範囲を表示させたい

  console.log(Math.random()); // ０＜１　ランダムに数字を生成する
}

{
  // console.log(Math.random());

  //0, 1, 2
  //Math.floor(Math.random() * 3)
  //0, ...., n
  //Math.floor(Math.random() * (n + 1))
  //min, .... , max
  //Math.floor(Math.random() * (max + 1 - min)) + min
  console.log(Math.floor(Math.random() * 6) + 1);
}

{
  const d = new Date(2019, 10);
  console.log(d);

  d.setHours(10, 20, 30);
  console.log(d);

  d.setDate(31);
  console.log(d);

  d.setDate(d.getDate() + 3);
  console.log(d);

  console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);
}

// {
//   // alert('hello');

//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1000);
//     i++;

//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }
//   showTime();
//   //   i++;
//   //   if (i > 5) {
//   //     clearInterval(intervalId);
//   //   }
//   // }

//   // const intervalId = setInterval(showTime, 1000);
// }

{
  // const name = 'taguchi';
  const name = 2;

  try {                               //例外
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }

  console.log('Finishi!');
}

// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//     //静的メソッド
//     //インスタンスを返さないためthisは使えない
//     static showInfo() {
//       console.log('Post class version 1.0')
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//   ];

//   // posts[0].like();
//   Post.showInfo();
// }
{
  class Post { //親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    static showInfo() {
      console.log('Post class version 1.0')
    }
  }
  class SponsoredPost extends Post { //子クラス
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }


    static showInfo() {
      console.log('Post class version 1.0')
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中...'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('３分動画でマスターしよう！', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();

}
