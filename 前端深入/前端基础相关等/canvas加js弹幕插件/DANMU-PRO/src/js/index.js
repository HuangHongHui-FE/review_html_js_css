// console.log("danmu1");

import VideoDanmu from "./danmu";

const danmuData = [
    {
        content: '我真的好喜欢这首钢琴曲',
        spees: 2,
        runTime: 0,
        color: 'red'
    },
    {
        content: '这首曲子是是是是',
        spees: 4,
        runTime: 5,
        color: 'red'
    },
    {
        content: '一去不复返的时光',
        spees: 4,
        runTime: 8,
        color: 'red'
    },
    {
        content: '我真的好喜欢这首钢琴曲',
        spees: 4,
        runTime: 8,
        color: 'red'
    },
    {
        content: '我真的好喜欢这首钢琴曲',
        spees: 2,
        runTime: 0,
        color: 'red'
    }
]

;((doc) => {
    const oDanmuVideo = doc.getElementById('J_danmuVideo');
    const oDanmuCanvas = doc.getElementById('J_danmuCanvas');

    // 模块初始化函数
    const init = () => {

        // 实例化弹幕插件
        const videoDanmu = new VideoDanmu(
            oDanmuVideo,
            oDanmuCanvas,
            {
                danmuData
            }
        );

        bindEvent();
    }

    // 绑定事件处理函数的管理函数
    function bindEvent(){

    };

    init();
})(document);