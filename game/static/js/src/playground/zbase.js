class GamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div class="game_playground"></div>`);
        this.hide();
        
        
        this.start();
    }

    get_random_color() {
        let colors = ["LightBLue", "Violet", "pink", "LightPink", "LightGoldenrodYellow", "LightGrey"];
        return colors[Math.floor(Math.random() * 6)];
    }


    start() {

    }

    show() { /* 显示playground页面 */
        this.$playground.show();
        
        this.root.$game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);
        this.players = [];
        this.skills = [];
        this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, "white", this.height * 0.3, true));
        
        for(let i = 0; i < 8; i ++) {
            this.players.push(new Player(this, this.width / 2, this.height / 2, this.height * 0.05, this.get_random_color(), this.height * 0.3, false));
        }
    }   

    hide() { /* 关闭playground页面 */
        this.$playground.hide();
    }
}
