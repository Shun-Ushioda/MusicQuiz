let happy;
let quiz0;
let quiz1;
let quiz2;
let quiz3;
let quiz4;
let quiz5;
let quiz6;
let quiz7;
let quiz8;
let quiz9;
let quiz10;
let quiz11;
let quiz12;
let quiz13;
let quiz14;
let unmei;
let clea;
let super_clear;

function preload() {
  happy = loadImage("data/animal_dance_700.png");
  quiz0 = loadImage("data/quiz0.jpeg");
  quiz1 = loadImage("data/quiz1.jpeg");
  quiz2 = loadImage("data/quiz2.jpeg");
  quiz3 = loadImage("data/quiz3.jpeg");
  quiz4 = loadImage("data/quiz4.jpeg");
  quiz5 = loadImage("data/quiz5.jpeg");
  quiz6 = loadImage("data/quiz6.jpeg");
  quiz7 = loadImage("data/quiz7.jpeg");
  quiz8 = loadImage("data/quiz8.jpeg");
  quiz9 = loadImage("data/quiz9.jpeg");
  quiz10 = loadImage("data/quiz10.jpeg");
  quiz11 = loadImage("data/quiz11.jpeg");
  quiz12 = loadImage("data/quiz12.jpeg");
  quiz13 = loadImage("data/quiz13.jpeg");
  quiz14 = loadImage("data/quiz14.jpeg");
  unmei = loadSound("data/unmei.mp3");
  clear = loadSound("data/clear.mp3");
  super_clear = loadSound("data/super_clear.mp3");
}

let screen = 0;
let question = 0;
let score = 0;
let answer = 0; // 1=A, 2=B, 3=C

function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(255);
  if (screen == 0) mainScreen();
  if (screen == 1) beginnerScreen();
  if (screen == 2) letermediateScreen();
  if (screen == 3) advancedScreen();
  if (screen == 4) scoreScreenB();
  if (screen == 5) scoreScreenI();
  if (screen == 6) scoreScreenA();
}

function mousePressed() {
  if (screen == 0) {
    if (200 < mouseX && mouseX < 400 && 330 < mouseY && mouseY < 385) {
      screen = 1; // 初級
      question = 1;
    }

    if (200 < mouseX && mouseX < 400 && 470 < mouseY && mouseY < 525) {
      screen = 2; // 中級
      question = 1;
    }

    if (200 < mouseX && mouseX < 400 && 610 < mouseY && mouseY < 665) {
      screen = 3; // 上級
      question = 1;
    }
  }

  if (screen == 4 || screen == 5 || screen == 6) {
    if (25 < mouseX && mouseX < 155 && 740 < mouseY && mouseY < 765) {
      screen = 0; // メニューボタン
      score = 0;
    }
  } else {
    if (25 < mouseX && mouseX < 75 && 740 < mouseY && mouseY < 765) {
      screen = 0; // 戻るボタン
      question = 0;
    }
  }

  if (525 < mouseX && mouseX < 575 && 740 < mouseY && mouseY < 765) {
    question++; // 次へボタン
    answer = 0;
  }

  if (130 < mouseX && mouseX < 170 && 560 < mouseY && mouseY < 605) answer = 1;
  if (280 < mouseX && mouseX < 320 && 560 < mouseY && mouseY < 605) answer = 2;
  if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) answer = 3;

  if (screen == 1) {
    // 初級
    if (question == 1) {
      if (280 < mouseX && mouseX < 320 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 2) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 3) {
      if (130 < mouseX && mouseX < 170 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 4) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
  }

  if (screen == 2) {
    // 中級
    if (question == 1) {
      if (130 < mouseX && mouseX < 170 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 2) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 3) {
      if (280 < mouseX && mouseX < 320 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 4) {
      if (280 < mouseX && mouseX < 320 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 5) {
      if (130 < mouseX && mouseX < 170 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
  }

  if (screen == 3) {
    // 上級
    if (question == 1) {
      if (130 < mouseX && mouseX < 170 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 2) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 3) {
      if (280 < mouseX && mouseX < 320 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 4) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 5) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
    if (question == 6) {
      if (430 < mouseX && mouseX < 470 && 560 < mouseY && mouseY < 605) {
        score++;
      }
    }
  }

  if(screen == 3) {
    if(question == 4) {  
      if(525 < mouseX && mouseX < 575 && 740 < mouseY && mouseY < 765) {
        unmei.play();
      }
    }
  }
  if(screen == 1) {
    if(question == 5) {
      if(525 < mouseX && mouseX < 575 && 740 < mouseY && mouseY < 765) {
        clear.play()
      }
    }
  }
  if(screen == 2) {
    if(question == 6) {
      if(525 < mouseX && mouseX < 575 && 740 < mouseY && mouseY < 765) {
        clear.play()
      }
    }
  }
  if(screen == 3) {
    if(question == 7) {
      if(525 < mouseX && mouseX < 575 && 740 < mouseY && mouseY < 765) {
        super_clear.play()
      }
    }
  }
}

function mainScreen() {
  textSize(45);
  textAlign(CENTER, CENTER);
  fill(0);
  text("音楽クイズ！！", width / 2, 90);

  text("初級", width / 2, 350);
  text("中級", width / 2, 490);
  text("上級", width / 2, 630);

  fill(255, 0, 0, 20);
  rect(200, 330, 200, 55);
  fill(0, 255, 0, 20);
  rect(200, 470, 200, 55);
  fill(0, 0, 255, 20);
  rect(200, 610, 200, 55);
}

function beginnerScreen() {
  backButtom();
  push();
  scale(0.2);
  if (question == 1) image(quiz0, 600, 600);
  if (question == 2) image(quiz1, 600, 600);
  if (question == 3) image(quiz2, 600, 600);
  if (question == 4) image(quiz3, 600, 600);
  pop();
  fill(0);
  textSize(30);
  if (question == 1) text("第1問", width / 2, 100);
  if (question == 2) text("第2問", width / 2, 100);
  if (question == 3) text("第3問", width / 2, 100);
  if (question == 4) text("第4問", width / 2, 100);
  answerButtom();

  if (question < 4) nextButtom();
  else if (question == 4) resultButtom();

  if (question > 4) {
    screen = 4;
    question = 0;
  }

  textSize(35);
  fill(0);
  if (answer == 0) text("あなたは * を選択しました。", width / 2, 650);
  if (answer == 1) text("あなたは A を選択しました。", width / 2, 650);
  if (answer == 2) text("あなたは B を選択しました。", width / 2, 650);
  if (answer == 3) text("あなたは C を選択しました。", width / 2, 650);
}

function letermediateScreen() {
  backButtom();
  push();
  scale(0.2);
  if (question == 1) image(quiz4, 600, 600);
  if (question == 2) image(quiz5, 600, 600);
  if (question == 3) image(quiz6, 600, 600);
  if (question == 4) image(quiz7, 600, 600);
  if (question == 5) image(quiz8, 600, 600);
  pop();
  fill(0);
  textSize(30);
  if (question == 1) text("第1問", width / 2, 100);
  if (question == 2) text("第2問", width / 2, 100);
  if (question == 3) text("第3問", width / 2, 100);
  if (question == 4) text("第4問", width / 2, 100);
  if (question == 5) text("第5問", width / 2, 100);
  answerButtom();

  if (question < 5) nextButtom();
  else if (question == 5) resultButtom();

  if (question > 5) {
    screen = 5;
    question = 0;
  }

  textSize(35);
  fill(0);
  if (answer == 0) text("あなたは * を選択しました。", width / 2, 650);
  if (answer == 1) text("あなたは A を選択しました。", width / 2, 650);
  if (answer == 2) text("あなたは B を選択しました。", width / 2, 650);
  if (answer == 3) text("あなたは C を選択しました。", width / 2, 650);
}

function advancedScreen() {
  backButtom();
  push();
  scale(0.2);
  if (question == 1) image(quiz9, 600, 600);
  if (question == 2) image(quiz10, 600, 600);
  if (question == 3) image(quiz11, 600, 600);
  if (question == 4) image(quiz12, 600, 600);
  if (question == 5) image(quiz13, 600, 600);
  if (question == 6) image(quiz14, 600, 600);
  pop();
  fill(0);
  textSize(30);
  if (question == 1) text("第1問", width / 2, 100);
  if (question == 2) text("第2問", width / 2, 100);
  if (question == 3) text("第3問", width / 2, 100);
  if (question == 4) text("第4問", width / 2, 100);
  if (question == 5) text("第5問", width / 2, 100);
  if (question == 6) text("第6問", width / 2, 100);
  answerButtom();

  if (question < 6) nextButtom();
  else if (question == 6) resultButtom();

  if (question > 6) {
    screen = 6;
    question = 0;
  }

  textSize(35);
  fill(0);
  if (answer == 0) text("あなたは * を選択しました。", width / 2, 650);
  if (answer == 1) text("あなたは A を選択しました。", width / 2, 650);
  if (answer == 2) text("あなたは B を選択しました。", width / 2, 650);
  if (answer == 3) text("あなたは C を選択しました。", width / 2, 650);
}

function scoreScreenB() {
  menuButtom();
  textSize(45);
  textAlign(CENTER, CENTER);
  fill(0);
  text(score + "問正解！！", width / 2, 120);
  if (score <= 3) {
    textSize(20);
    text(
      4 - score + "問 間違えました。もう一度チャレンジしてください",
      width / 2,
      650
    );
  } else if (score == 4) {
    textSize(40);
    text("全問正解です！", width / 2, 650);
  }
  push();
  scale(0.7);
  image(happy, 100, 300);
  pop();
}
function scoreScreenI() {
  menuButtom();
  textSize(45);
  textAlign(CENTER, CENTER);
  fill(0);
  text(score + "問正解！！", width / 2, 120);
  if (score <= 4) {
    textSize(20);
    text(
      5 - score + "問 間違えました。もう一度チャレンジしてください",
      width / 2,
      650
    );
  } else if (score == 5) {
    textSize(40);
    text("全問正解です！", width / 2, 650);
  }
  push();
  scale(0.7);
  image(happy, 100, 300);
  pop();
}
function scoreScreenA() {
  menuButtom();
  textSize(45);
  textAlign(CENTER, CENTER);
  fill(0);
  text(score + "問正解！！", width / 2, 120);
  if (score <= 5) {
    textSize(20);
    text(
      6 - score + "問 間違えました。もう一度チャレンジしてください",
      width / 2,
      650
    );
  } else if (score == 6) {
    textSize(40);
    text("全問正解です！", width / 2, 650);
  }
  push();
  scale(0.7);
  image(happy, 100, 300);
  pop();
}

function backButtom() {
  fill(0);
  textSize(20);
  text("戻る", 50, 750);
  fill(30, 30, 30, 20);
  rect(25, 740, 50, 25);
}

function nextButtom() {
  fill(0);
  textSize(20);
  text("次へ", 550, 750);
  fill(30, 30, 30, 20);
  rect(525, 740, 50, 25);
}

function resultButtom() {
  fill(0);
  textSize(20);
  text("結果", 550, 750);
  fill(30, 30, 30, 20);
  rect(525, 740, 50, 25);
}

function menuButtom() {
  fill(0);
  textSize(20);
  text("最初の画面へ", 90, 750);
  fill(30, 30, 30, 20);
  rect(25, 740, 130, 25);
}

function answerButtom() {
  textSize(40);
  fill(0);
  text("A", 150, 580);
  text("B", 300, 580);
  text("C", 450, 580);
  fill(255, 0, 0, 20);
  rect(130, 560, 40, 45);
  fill(0, 255, 0, 20);
  rect(280, 560, 40, 45);
  fill(0, 0, 255, 20);
  rect(430, 560, 40, 45);
}
