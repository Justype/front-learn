let MainBtn = document.querySelector("#MainBtn");
MainBtn.onclick = MainBtnPressed;
let audio = document.querySelector("audio");
let oDl = document.querySelector("dl");
let oScore = document.querySelector("#score");
let oAim = document.querySelector("#aim");


// 用于记录分数
let sum = 0;
const aim = 20;

// 计时器
let timer = null;

const creatTime = 300;    // 生成时间， 单位：ms
const fleeTime = 800;     // 逃跑时间， 单位：ms
const yangRate = 0.75;     // 羊羊 生成的比例

class Yang{
    constructor(){
        // 创建 羊羊
        let oYang = document.createElement("div");
        // 随机生成 羊羊
        oYang.className = randomYang();
        oYang.style.top = Math.random()*80 +"%";
        oYang.style.left = Math.random()*85 +"%";
        document.body.appendChild(oYang);
        // 记录是否被点击
        let clicked = false;
        // 添加死亡音效
        let oAudio = document.createElement("audio");
        oAudio.src = "./assets/sound/hit.mp3";
        document.body.appendChild(oAudio);

        // 羊羊点击事件
        oYang.onclick = ()=>{
            console.log("clicked");
            clicked = true;
            oYang.parentElement.removeChild(oYang);

            // 播放死亡音效
            oAudio.play();
            // 删除死亡音效标签
            sleep(1000).then(()=>{oAudio.parentElement.removeChild(oAudio);});
            
            // 修改 积分
            sum += 1;
            oScore.innerHTML = String(sum);

            if(sum === aim)
                youWin();
            
        };

        // 羊羊未被点击后，删除
        sleep(fleeTime).then(()=>{
            if(clicked) return;
            oYang.parentElement.removeChild(oYang);
            oAudio.parentElement.removeChild(oAudio);
        });
    }
}

class Lang{
    constructor(){
        // 创建 狼狼
        let oLang = document.createElement("div");
        oLang.className = "animal hui";
        oLang.style.top = Math.random()*80 +"%";
        oLang.style.left = Math.random()*85 +"%";
        document.body.appendChild(oLang);
        // 记录是否被点击
        let clicked = false;
        // 添加死亡音效
        let oAudio = document.createElement("audio");
        oAudio.src = "./assets/sound/aou.mp3";
        document.body.appendChild(oAudio);

        // 狼狼 点击事件
        oLang.onclick = ()=>{
            console.log("clicked");
            clicked = true;
            oLang.parentElement.removeChild(oLang);
            sum -= 1;
            oScore.innerHTML = String(sum);
            // 播放死亡音效
            oAudio.play();
            // 删除死亡音效标签
            sleep(1000).then(()=>{oAudio.parentElement.removeChild(oAudio);});
        }

        // 狼狼未被点击后，删除
        sleep(fleeTime).then(()=>{
            if(clicked) return;
            oLang.parentElement.removeChild(oLang);
            oAudio.parentElement.removeChild(oAudio);
        });
    }
}


function MainBtnPressed(){
    console.log("GameStart");

    // 点击动画
    this.style.animation = "MainBtnAnimation 0.3s";
    this.style.animationFillMode = "both";
    
    // 播放背景音乐
    audio.play();

    // 显示 积分栏
    oDl.style.opacity = "1";

    // 去除 开始按钮
    sleep(300).then(()=>{this.parentElement.removeChild(this);});
    oScore.innerHTML = sum;
    oAim.innerHTML = aim;

    // 随机创造
    timer = setInterval(() => {
        randomCreate();
    }, creatTime);
}

function randomYang(){
    let num = Math.random();
    if(num <= 0.25)
        return "animal xi";
        else if(num <= 0.5)
        return "animal mei";
        else if(num <= 0.75)
        return "animal fei";
        else
        return "animal man";
}

function randomCreate(){
    if(Math.random() <= yangRate){
        new Yang();
        return;
    }
    else{
        new Lang();
        return;
    }
}

function youWin(){
    audio.pause();
    // 删除 积分栏
    oDl.parentElement.removeChild(oDl);

    // 添加 你赢了
    let oDiv = document.createElement("div");
    oDiv.innerHTML = "回家吃羊";
    oDiv.id = "MainBtn";
    document.body.appendChild(oDiv);
    let oAudio = document.createElement("audio");
    oAudio.src = "./assets/sound/victory.mp3";
    document.body.appendChild(oAudio);
    oAudio.play();
    clearInterval(timer);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
