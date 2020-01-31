
let testManager = new ImageManager();

testManager.queueDownload("./img/background.jpg");
testManager.queueDownload("./img/NecroCompTrans.png");
testManager.startDownload().then(() =>
{
  var canvas = document.getElementById("My Animation");
  var ctx = canvas.getContext("2d");
  var gameEng = new GameEngine(ctx);
  ctx.imageSmoothingEnabled = false;

  gameEng.init();
  gameEng.run();
  gameEng.addEntity(new Background(gameEng, testManager.getImage("./img/background.jpg")));
  gameEng.addEntity(new Necromancer(gameEng, testManager.getImage("./img/NecroCompTrans.png")));
 
});
