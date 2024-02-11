class LoadAsset extends Phaser.Scene{
    constructor(){
        super("Load Assets")
    }
    preload(){
        // transport
        this.load.image("train","assets/transportImage/train.png")
        this.load.image("container","assets/transportImage/container.PNG")
        this.load.image("car","assets/transportImage/car.png")
        this.load.image("trafficLight","assets/transportImage/trafficLight.png")
        // background
        this.load.image("houseStation","assets/houseStation.png")
        this.load.image("grass","assets/backGroundImage/grass.png")
        // road
        this.load.image("straightSoilRoad","/assets/roadImage/straightSoilRoad.PNG")
        this.load.image("curveSoilRoad","/assets/roadImage/curveSoilRoad.PNG")
        this.load.atlas("roads","assets/roadImage/roads.png","assets/Roads.json")
        
        this.load.spritesheet('arrowButton', '/assets/buttonImage/arrowButton.png', {
            frameWidth: 93, 
            frameHeight: 93, 
            startFrame: 0,
            endFrame: -1, 
            margin: 0, 
            spacing: 0, 
        });
        // start menu button 
        this.load.atlas("startMenuButtons","assets/startMenuButton.png","assets/startMenuButton.json")
        // win table 
        this.load.atlas("winAssets","assets/winTableAsset/winAssets.png","assets/winTableAsset/winAssets.json")
        this.load.image("star","assets/winTableAsset/star.png")

        // audio 
        this.load.audio('StartMenuAudio', 'assets/music/musicStartMenu.mp3')
        this.load.audio('clickButtonAudio', 'assets/music/clickButtonAudio.mp3')
        this.load.audio('winAudio', 'assets/music/winAudio.mp3')
        this.load.audio('loseAudio', 'assets/music/loseGameAudio.wav')
        this.load.audio('crashed', 'assets/music/crashed.mp3')
        this.load.audio('trainAudio', 'assets/music/trainAudio.mp3')
    }
    create(){
        this.anims.create({
            key: 'blueArrowAnimation',
            frames: this.anims.generateFrameNumbers('arrowButton', { start: 0, end: 1, first: 0 }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'greenArrowAnimation',
            frames: this.anims.generateFrameNumbers('arrowButton', { start: 2, end: 3, first: 0 }),
            frameRate: 5,
            repeat: -1
        });

        // play game
        this.scene.start("startmenu")
    }
}