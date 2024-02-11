class Level1 extends Phaser.Scene {
    constructor() {
        super("level1")
        this.road = { t: 0, vec: new Phaser.Math.Vector2() }
        this.road2 = new Phaser.Curves.Path(645, 308)
        this.road3 = new Phaser.Curves.Path(645, 308)
    }

    create() {    
        this.graphics = this.add.graphics()
        this.clickButtonAudio=this.sound.add('clickButtonAudio');
        this.winAudio=this.sound.add('winAudio')
        this.loseAudio=this.sound.add('loseAudio')
        this.trainAudio=this.sound.add('trainAudio')

        //  straight roads 1 image
        this.addBackGround()
        this.addRoadImage()
        this.createRoad1()
        this.createCurveRoad()
        this.createRoad2()
        this.addTrain()
        this.addHouseStationImage()
        // curve button sprite 
        this.addButtonDirection()
        this.addBackToMenuButton()
        this.follower.t=0.3;
        this.followerContainer.t=0;
        this.win =false
        this.lose=false
        this.table=false;
        this.level=1

    }
    addHouseStationImage() {
        this.house = this.add.sprite(245, 145, "houseStation").setScale(0.5).setRotation(Phaser.Math.DegToRad(131));
        this.house.setDisplaySize(200, 300);
        
    }
    addBackGround() {
        this.backgroundImage = this.add.sprite(0, 0, "grass")
        this.backgroundImage.setDisplaySize(gameWidth, gameHeight)

        // Center the image
        this.backgroundImage.setOrigin(0.5, 0.5)
        this.backgroundImage.setPosition(gameWidth / 2, gameHeight / 2)
        this.backgroundImage = this.add.sprite(0, 0, "grass")
        this.backgroundImage.setDisplaySize(gameWidth / 2, gameHeight / 2)

        this.backgroundImage.setPosition(gameWidth / 2, 0)
        this.backgroundImage = this.add.sprite(0, 0, "grass")
        this.backgroundImage.setDisplaySize(gameWidth / 2, gameHeight / 2)

        this.backgroundImage.setPosition(gameWidth / 2, gameHeight / 2)
        this.backgroundImage = this.add.sprite(0, 0, "grass")
        this.backgroundImage.setDisplaySize(gameWidth / 2, gameHeight / 2)
        // soil 
        this.soidImage =this.add.sprite(845,70,"straightSoilRoad").setScale(1.5).rotation = Phaser.Math.DegToRad(130);
        this.soidImage =this.add.sprite(649,300,"straightSoilRoad").setScale(1.5).rotation = Phaser.Math.DegToRad(130);
        this.soidImage =this.add.sprite(415,600,"straightSoilRoad").setScale(1.5).rotation = Phaser.Math.DegToRad(126);
        this.curveSoidImage2 =this.add.sprite(425,64,"curveSoilRoad").setScale(1.5).rotation=Phaser.Math.DegToRad(40.5);
    }

    addTrain() {
        this.container=this.add.image(100, 600, "container").setScale(0.37);
        this.train = this.add.image(0, 0, "train").setScale(0.37);
        this.speed = 0.0015;
        this.angle;
        this.straightroad2 = true;
        this.curveRoad = false;
    }

    createCurveRoad() {
        this.follower3 = { t: 0, vec: new Phaser.Math.Vector2() };
        this.road3 = new Phaser.Curves.Path(645, 308);
        this.road3.ellipseTo(150, 150, 0, 90, false, 45);
        this.road3.lineTo(230, 150);
    }

    createRoad2() {
        this.follower2 = { t: 0, vec: new Phaser.Math.Vector2() };
        this.road2 = new Phaser.Curves.Path(645, 308)
        this.road2.lineTo(200, 900);
    }

    addButtonDirection() {
        this.downbtn = new Button(this, "arrowButton", 55, 60, 1, 0,)
        this.downbtn.body.on("pointerdown",()=>{this.clickButtonAudio.play()},this)
        this.downbtn.body.play("greenArrowAnimation")
        this.downbtn.body.rotation = Phaser.Math.DegToRad(215)
        this.leftbtn = new Button(this, "arrowButton", 55, 60, 1, 0,)
        this.leftbtn.body.on("pointerdown",()=>{this.clickButtonAudio.play()},this)
        this.leftbtn.body.play("blueArrowAnimation")
        this.leftbtn.body.visible = false;
        this.leftbtn.body.rotation = Phaser.Math.DegToRad(130)
    }

    createRoad1() {
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
        // forr container
        this.followerContainer = { t: 0, vec: new Phaser.Math.Vector2() };
        this.followerContainer2 = { t: 0, vec: new Phaser.Math.Vector2() };
        this.followerContainer3 = { t: 0, vec: new Phaser.Math.Vector2() };
        this.road = new Phaser.Curves.Path(970, -100);
        this.road.lineTo(645, 308);
    }

    addRoadImage() {
        this.add.sprite(875, 25, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(41);
        this.add.sprite(823, 85, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(41);
        this.add.sprite(780, 135, "roads", "straightRoad").setScale(0.44).rotation = Phaser.Math.DegToRad(41);
        //  straight road 2 image
        this.add.sprite(600, 355, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        this.add.sprite(555, 420, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        this.add.sprite(510, 485, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        this.add.sprite(465, 550, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        this.add.sprite(420, 615, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        this.add.sprite(375, 680, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        this.add.sprite(330, 745, "roads", "straightRoad").setScale(0.45).rotation = Phaser.Math.DegToRad(35);
        // curve road image
        var curve = this.add.sprite(570, 235, "roads", "curveRoad").setScale(0.6);
        curve.flipY = true;
        curve.rotation = Phaser.Math.DegToRad(130);
        this.add.sprite(370, 252, "roads", "straightRoad").setScale(0.5).rotation = Phaser.Math.DegToRad(130);
        this.add.sprite(305, 197, "roads", "straightRoad").setScale(0.5).rotation = Phaser.Math.DegToRad(130);
    }
    addWinTableAndRibbon() {
        this.add.sprite(650, 380, "winAssets", "winTable").setScale(1.4);
        this.add.sprite(650, 200, "winAssets", "ribbon").setScale(1.4);
        this.add.text(595, 160, 'YOU WIN', { fontFamily: 'Fantasy', fontSize: '32px', color: '#FFFF00' });
    }

    addStar() {
        this.star1 =this.add.sprite(640, -180, "star").setScale(1);// 650 280
        this.tweens.add({
            targets: this.star1,
            x: 650,
            y: 280,
            duration: 1000,
            ease: 'Power2',
            onStart:()=> {
                this.winAudio.play()
            },
            onComplete: function () {
                
            }
        });
        this.star2 =this.add.sprite(440, -180, "star").setScale(0.68);// 570 310
        this.tweens.add({
            targets: this.star2,
            x: 570,
            y: 310,
            duration: 1500,
            ease: 'Power2',
            onStart:()=> {
                this.winAudio.play()
            },
            onComplete: function () {
                
            }
        });
        this.star3 =this.add.sprite(840, -180, "star").setScale(0.68);// 730 310
        this.tweens.add({
            targets: this.star3,
            x: 730,
            y: 310,
            duration: 1500,
            ease: 'Power2',
            onStart:()=> {
                this.winAudio.play()
            },
            onComplete: function () {
                this.canMoveToNextLevel=true
            }
        });
    }

    addEmptyStar() {
        this.add.sprite(650, 280, "winAssets", "midStar");
        this.add.sprite(570, 310, "winAssets", "sideStar").setScale(1.3);
        this.add.sprite(730, 310, "winAssets", "sideStar").setScale(1.3);
    }
    addReloadButton() {
        this.reload = this.add.sprite(580, 398, "startMenuButtons", "nextNormal").setInteractive().setScale(0.8);
        this.add.text(535, 310, 'RELOAD', { fontFamily: 'Fantasy', fontSize: '32px', color: '#fffff' });
        this.add.text(685, 310, 'HOME', { fontFamily: 'Fantasy', fontSize: '32px', color: '#fffff' });
        this.reload.on('pointerover', () => { this.setButtonEvent(this.reload, "nextHover"); }, this);
        this.reload.on('pointerout', () => { this.setButtonEvent(this.reload, "nextNormal"); }, this);
        this.reload.on('pointerdown', this.clickReloadButton, this);
        this.reload.on('pointerup', () => { this.setButtonEvent(this.reload, "nextNormal"); }, this);
    }
    clickReloadButton(){
        this.reload.setFrame("nextClick")
        this.clickButtonAudio.play()
        setTimeout(() => {
            this.scene.restart();
        }, 500);
    }
    addHomeButton(_x,_y) {
        this.homeButton = this.add.sprite(_x,_y, "startMenuButtons", "pausedNormal").setInteractive();
        this.homeButton.on('pointerover', () => { this.setButtonEvent(this.homeButton, "pausedHover"); }, this);
        this.homeButton.on('pointerout', () => { this.setButtonEvent(this.homeButton, "pausedNormal"); }, this);
        this.homeButton.on('pointerdown', this.clickHomeButton, this);
        this.homeButton.on('pointerup', () => { this.setButtonEvent(this.homeButton, "pausedNormal"); }, this);
    }

    addNextButton() {
        this.nextButton = this.add.sprite(700, 410, "startMenuButtons", "nextNormal").setInteractive();
        this.nextButton.on('pointerover', () => { this.setButtonEvent(this.nextButton, "nextHover"); }, this);
        this.nextButton.on('pointerout', () => { this.setButtonEvent(this.nextButton, "nextNormal"); }, this);
        this.nextButton.on('pointerdown', this.clickNextButton, this);
        this.nextButton.on('pointerup', () => { this.setButtonEvent(this.nextButton, "nextNormal"); }, this);

    }

    clickNextButton(){
        this.nextButton.setFrame("nextClick")
        this.clickButtonAudio.play()
        if(this.level==totalLevel){
            setTimeout(()=>{
                this.scene.start("chooseLevelMenu")
            },700)
            this.table=false
            return
        }
        setTimeout(()=>{
              var nextLevel="level"+(this.level+1)
              this.scene.start(nextLevel)
              this.table=false
        },1000)
    }
    clickHomeButton(){
        this.clickButtonAudio.play()
        this.homeButton.setFrame("pausedClick")
            setTimeout(()=>{
                this.scene.start("chooseLevelMenu")
                this.table=false
        },1000)
    }
    addBackToMenuButton() {
        this.backToMenu = this.add.sprite(1200, 60, "startMenuButtons", "normalButton").setInteractive().setScale(0.75);
        this.backToMenuText= this.add.text(1137, 45, 'Back To Menu', { fontFamily: 'Fantasy', fontSize: '22px' });
        this.backToMenu.on('pointerover', () => { this.setButtonEvent(this.backToMenu, "hoverButton"); }, this);
        this.backToMenu.on('pointerout', () => { this.setButtonEvent(this.backToMenu, "normalButton"); }, this);
        this.backToMenu.on('pointerdown', this.clickBackToMenuButton, this);
        this.backToMenu.on('pointerup', () => { this.setButtonEvent(this.backToMenu, "normalButton"); }, this);
    }
    hideBackToMenuButton(){
        this.backToMenu.visible=false;
        this.backToMenuText.visible=false;
    }

    clickBackToMenuButton(){
        this.clickButtonAudio.play()
        this.backToMenu.setFrame("clickButton")
        setTimeout(() => {
            this.scene.start("chooseLevelMenu")
        }, 500);
    }
    addLoseTable() {
        this.add.sprite(650, 380, "winAssets", "winTable").setScale(1.4);
        this.add.sprite(650, 200, "winAssets", "ribbon").setScale(1.4);
        this.add.text(595, 160, 'YOU LOSE', { fontFamily: 'Fantasy', fontSize: '32px', color: '#FFFF00' });
    }
    setButtonEvent(_button,_frame){
        _button.setFrame(_frame);
    }
    update() {
        this.graphics.clear();
        //this.graphics.lineStyle(2, 0xffffff, 1)
        //this.drawRoad()       

        if(!this.lose&&!this.win){
            if (!this.trainAudio.isPlaying) {
                this.trainAudio.play()
            }

            this.moveObject(this.follower,this.follower2,this.follower3,this.road,this.road2,this.road3,this.train,this.speed,false)
            this.updateRoadToMove()
            this.moveObject(this.followerContainer,this.followerContainer2,this.followerContainer3,this.road,this.road2,this.road3,this.container,this.speed,true)
        }
        if(this.follower3.t >=1){
            this.win=true
        }
        if(this.follower2.t >=0.5){
            this.lose=true
        }
        if(this.win){
            if(!this.table){
                this.trainAudio.stop()
                this.addWinTableAndRibbon();
                this.addEmptyStar();
                this.addStar();
                //
                this.addNextButton();
                this.addHomeButton(600,410);
                this.hideBackToMenuButton()
                this.table=true
            }
            return
        }
        if(this.lose){
            if(!this.table){
                this.loseAudio.play()
                this.trainAudio.stop()
                setTimeout(()=>{
                    this.addLoseTable()
                    this.addReloadButton()
                    this.addHomeButton(720,400)
                    this.hideBackToMenuButton()
                 },100)
                 this.table=true
            }
        }
       
    }
    moveObject(_follower,_follower2,_follower3, _road,_road2,_road3,_object,_speed,_container) {
        if (_follower.t <= 1) {
            _follower.t = this.moveToRoad(_road,_object, _follower, _speed)
        }
        if (this.curveRoad && _follower.t >= 1) {
            var delta=0.9 
            if(_container)
                delta=0.85
            this.moveToRoad(_road3, _object, _follower3, _speed * delta)
        }
        if (this.straightroad2 && _follower.t >= 1) {
            this.moveToRoad(_road2, _object, _follower2, _speed* 0.7)
        }
    }

    updateRoadToMove(){
        if( this.downbtn.isDown()){
            if (this.follower.t < 1) {
                this.straightroad2=false;
                this.curveRoad=true;
                this.containerRiding=true;
            }
            this.downbtn.body.visible=false;
            this.leftbtn.body.visible=true;         
        }
        if(this.leftbtn.isDown()){
            if (this.follower.t < 1) {
                this.straightroad2=true;
                this.curveRoad=false;
              //  this.containerRiding=true;
            }
            this.downbtn.body.visible=true;
            this.leftbtn.body.visible=false; 
        }
    }



    moveToRoad(_road,_target, _follower,_speed) {
        _road.getPoint(_follower.t, _follower.vec)
        _follower.t += _speed
        if(_follower.t>=1)
            return _follower.t
        _target.x = _follower.vec.x
        _target.y = _follower.vec.y
        const tangentVector = _road.getTangent(_follower.t);
        const angle = Phaser.Math.Angle.Between(0, 0, tangentVector.x, tangentVector.y)
        
        _target.rotation = angle
        return _follower.t
    }
    drawRoad() {
        this.road.draw(this.graphics)
        this.road2.draw(this.graphics)
        this.road3.draw(this.graphics)
    }
}
