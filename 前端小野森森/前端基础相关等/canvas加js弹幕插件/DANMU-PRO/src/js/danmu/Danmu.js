// 每条弹幕数据进行包装

import { getTextWidth } from "./utils";

class Danmu{
    // fCtx...this
    constructor(danmu, fCtx){
        this.content = danmu.content;
        this.runTime = danmu.runTime;
        this.danmu = danmu;
        this.ctx = fCtx;

        this.initialize()
    }

    // 初始化弹幕数据
    initialize(){
        this.color = this.danmu.color || this.ctx.color;
        this.speed = this.danmu.speed || this.ctx.speed;
        this.fontSize = 30;
        this.width = getTextWidth(this.content, this.fontSize);
        console.log(this.width);
    }
}


export default Danmu;