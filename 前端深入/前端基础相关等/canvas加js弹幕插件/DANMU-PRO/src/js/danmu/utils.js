function isObject(value){
    const type = Object.prototype.toString().matchAll(value);
    return type === '[object Object]';
}

function isArray(value){
    return Array.isArray();
}

// 弹幕的位置控制
function getTextWidth(content, fontSize){
    const _span = document.createElement('span');
    _span.innerText = content;
    _span.style.fontSize = fontSize + 'px';
    _span.style.position = 'absolute';
    document.body.appendChild(_span);
    let width = _span.offsetWidth;
    document.body.removeChild(_span);
    return width;
}


function getTextPosition(canvas, fontSize, ctx){
    let X = canvas.width;
    let Y = canvas.height * Math.random();

    Y < fontSize && (Y == fontSize);
    Y > canvas.height - fontSize && (Y = canvas.height - fontSize);

    ctx.X = X;
    ctx.Y = Y;
}

export {
    isArray,
    isObject,
    getTextWidth,
    getTextPosition
}