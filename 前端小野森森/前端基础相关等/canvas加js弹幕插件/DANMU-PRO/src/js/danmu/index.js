import { isObject, isArray } from './utils'
import Danmu from './Danmu';

class VideoDanmu{
    constructor(video, canvas, options){
        // 什么都没传直接return掉了, 也可以给默认值
        if(!video || !canvas || !options || !isObject(options)){
            return;
        }
        if(!options.danmuData || !isArray(options.danmuData)){
            return;
        }

        this.video = video;
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext('2d');
        this.canvas.width = video.offsetWidth;
        this.canvas.height = video.offsetHeight;
        this.danmuPaused = true;  // 标识是不是暂停状态

        // 把数据都合并到this实例身上
        Object.assign(this, options, {
            speed: 2,
            runTime: 0,
            color: '#fff'
        })

        // 每条弹幕数据包装一下
        this.danmuPool = this.createDanmuPool();

        console.log(this.danmuPool)
    }
    createDanmuPool(){
        return this.danmuData.map(dm => new Danmu(dm, this))
    }
}


export default VideoDanmu;