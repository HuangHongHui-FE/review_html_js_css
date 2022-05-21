## Arraybuffer

ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区

arrbuffer可以理解为一段内存；就是arrbuffer是一个数组，只不过你只能看不能改。

一般不会直接**创建**一个：

```
const arrayBuffer = new ArrayBuffer(length);
```

很多时候可能都是通过**FileReader读取File或Blob**得到Arraybuffer：

1. 

```js
//File|Blob
file;

const fileReader = new FileReader();

fileReader.addEventListener("load",(event)=>{
    const arrayBuffer = event.target.result;
    //...
})

fileReader.readAsArrayBuffer(file);
```

2. 

```js
const arrayBuffer = await file.arrayBuffer();
```

3. 

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'xxxxx');

xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
	if (this.status == 200) {
    	const arrayBuffer = xhr.response;
    }
};

xhr.send();
```



## TypedArray

你可以把TypedArray想象成一个基类，其中Uint8Array、Float32Array等都继承于TypedArray(实际并不是继承！

### Uint8Array

你可以把Uint8Array想象成一个数组,但是里面的每个元素只占一个字节。

你可以像创建ArrayBuffer一样创建一个Uint8Array

```js
  //注意看介绍里包含的参数类型
  const uint8Array= new Uint8Array(length);
```

然后就可以使用了

```js
  uint8Array[0] = ....;
```

注意里面的每个元素只占一个字节

```js
  const uint8Array = new Uint8Array(4);

  uint8Array[0] = 256;
  console.log(uint8Array);

  uint8Array[1] = 255;
  console.log(uint8Array);

  //作为对比
  //Uint16Array里的每个元素占两个字节
  const uint16Array = new Uint16Array(4);

  uint16Array[0] = 256;
  console.log(uint16Array);

  uint16Array[1] = 255;
  console.log(uint16Array);
```

### Uint8Array结合ArrayBuffer

```js
  const uint8Array = new Uint8Array(arrayBuffer);
  //使用的时候注意里面的每个元素只占一个字节
```







## Blob

Blob就是一块二进制数据，读取很麻烦，不能写。

1. 创建

```js
const  blob = new Blob( array, options );
```

2. 从ArrayBuffer获取

```js
//此处的arrayBuffer指的是TypedArray
const blob = new Blob([arrayBuffer.buffer],{type:"xxx/xxx"});
```

3. 

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'xxxxx');
xhr.responseType = 'blob';

xhr.onload = function(e) {
    if (this.status == 200) {
        const blob = xhr.response;
    }
};

xhr.send();
```

### 用途

##### 文件下载

业务中很有可能会遇到下载文件的场景

```js
const url = URL.createObjectURL(blob);
const a = document.createElement("a");

a.setAttribute("href",url);
a.setAttribute("download",filename);

const event = document.createEvent("MouseEvent");
event.initMouseEvent("click");

a.dispatchEvent(event);
```

##### 本地文件预览

遇到较多的情况就是播放通过input标签获取到的用户的音视频

```js
  //视频同理
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");

  audio.setAttribute("src",url);

  audio.play();
```

如果只是播放音频的话，还有其他的方法

```js
  const audioContext = new AudioContext();

  const buffer = await file.arrayBuffer();

  const auidoBuffer = await audioContext.decodeAudioData(buffer);

  const source = audioContext.createBufferSource();

  source.buffer = auidoBuffer;

  source.connect(audioContext.destination);
  source.start();
```





## File

一般都是通过input元素获取的

File是继承于Blob的，大部分你都可以直接当成Blob对象使用。包括

```js
URL.createObjectURL(file);
file.arrayBuffer();
```



## Buffer

Buffer是Nodejs里的概念

如果你翻到Buffer的声明文件(typescript的*.d.ts文件)，你会看到

```js
  declare class Buffer extends Uint8Array {
    //...
  }
```

看到没熟悉的没 Uint8Array！，现在你知道我上面为什么会只讲Uint8Array了吧