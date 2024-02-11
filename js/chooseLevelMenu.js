class ChooseLevelMenu extends Phaser.Scene{
    constructor(){
        super("chooseLevelMenu")
    }
    preload(){
        this.load.image("table","assets/table.png")
        this.load.atlas("startMenuButtons","assets/startMenuButton.png","assets/startMenuButton.json")
    }
    create(){
        this.canClick=false;
        this.clickButtonAudio=this.sound.add('clickButtonAudio');
        this.addTableLevel();
        this.addButtonLevel1();
        this.addHomeButton(1200,70)
    }
    addButtonLevel1() {
        this.addLevel1();

        this.addLevel2();
    }

    addLevel2() {
        this.level2Button = this.add.sprite(500, 240, "startMenuButtons", "levelNormal").setInteractive();
        this.add.text(493, 220, '2', { fontFamily: 'Fantasy', fontSize: '32px' });
        this.level2Button.on('pointerdown', this.playLevel2, this);
        this.level2Button.on('pointerup', () => { this.setButtonEvent(this.level2Button, "levelNormal"); }, this);
        this.level2Button.on('pointerover', () => { this.setButtonEvent(this.level2Button, "levelHover"); }, this);
        this.level2Button.on('pointerout', () => { this.setButtonEvent(this.level2Button, "levelNormal"); }, this);
    }

    addLevel1() {
        this.level1Button = this.add.sprite(350, 240, "startMenuButtons", "levelNormal").setInteractive();
        this.add.text(343, 220, '1', { fontFamily: 'Fantasy', fontSize: '32px' });
        this.level1Button.on('pointerdown', this.playLevel1, this);
        this.level1Button.on('pointerup', () => { this.setButtonEvent(this.level1Button, "levelNormal"); }, this);
        this.level1Button.on('pointerover', () => { this.setButtonEvent(this.level1Button, "levelHover"); }, this);
        this.level1Button.on('pointerout', () => { this.setButtonEvent(this.level1Button, "levelNormal"); }, this);
    }

    addTableLevel() {
        this.table = this.add.sprite(100, 100, "table").setOrigin(0, 0).setScale(2.3);
        this.table.y -= 100;
        this.table.x += 110;
        this.add.text(535, 40, 'Level Select', { fontFamily: 'Fantasy' ,fontSize: '40px'});
    }
    addHomeButton(_x,_y) {
        this.homeButton = this.add.sprite(_x,_y, "startMenuButtons", "pausedNormal").setInteractive();
        this.homeButton.on('pointerover', () => { this.setButtonEvent(this.homeButton, "pausedHover"); }, this);
        this.homeButton.on('pointerout', () => { this.setButtonEvent(this.homeButton, "pausedNormal"); }, this);
        this.homeButton.on('pointerdown', this.clickHomeButton, this);
        this.homeButton.on('pointerup', () => { this.setButtonEvent(this.homeButton, "pausedNormal"); }, this);
    }
    clickHomeButton(){
        this.homeButton.setFrame("pausedClick")
       // this.clickButtonAudio.setSeek(0);
        this.clickButtonAudio.play()
        setTimeout(()=>{
                this.scene.start("startmenu")
                this.table=false
        },1000)
    }
    update(){

    }
    playLevel1(){
        if(this.canClick) return
        this.canClick=true
        this.level1Button.setFrame("levelClick")
      //  this.clickButtonAudio.setSeek(0);
        this.clickButtonAudio.play()
        setTimeout(()=>{
            this.scene.start("level1")
        },700)
    }
    playLevel2(){
        if(this.canClick) return
        this.canClick=true
        this.level2Button.setFrame("levelClick")
      //  this.clickButtonAudio.setSeek(0);
        this.clickButtonAudio.play()
        setTimeout(()=>{
            this.scene.start("level2")
        },700)
    }
    setButtonEvent(_button,_frame){
        _button.setFrame(_frame);
    }
}