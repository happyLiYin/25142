//实现轮播效果
//获取节点
let ullist = document.querySelectorAll('#tu li')
// console.log(ullist,'这是轮播图');
//获取左边的按钮
let prev = document.querySelector('.arr-l');
//获取右边的按钮
let next = document.querySelector('.arr-r');
//获取ol下的ul
let ollist = document.querySelectorAll('#ollis ul');
// console.log(ollist);


//设置两个索引,因为我们只需要操作两张图片,一张是当前需要被隐藏的,还有一张是需要被显示的
//这是需要被隐藏的索引
let lastindex = 0;
//这是需要被显示的图片索引
let index = 0;
//遍历给所有的ul绑定点击事件,li是元素,key是下标
ollist.forEach((li, key) => {
    li.onclick = function () {
        //将需要隐藏的值赋值更新(使用需要显示的图片覆盖需要被隐藏的图片)
        lastindex = index;
        // console.log(lastindex);
        //将当前的索引值设置给需要显示的图片
        index = key;
        // console.log(index);
        change();
    }
})
//设置点击右边按钮时的轮播切换
next.onclick = function () {
    lastindex = index;
    index++;
    //条件判断,当图片超过最大索引时,直接赋值给最小的索引
    if (index > ullist.length - 1) {
        index = 0;
    }
    change();
}
//设置左边的点击按钮
prev.onclick=function(){
    lastindex=index;
    index--;
    //条件判断,当索引小于最大索引值的时候,直接赋值最大索引
    if(index<0){
        index=ullist.length-1;
    }
    change();
}
//设置定时器自动播放
//设置定时器返回值
let times='';
//自动播放
function autoplay(){
    times=setInterval(function(){
        next.onclick();
    },3000)
}
autoplay();
//当鼠标移入时,定出定时器
next.parentNode.onmouseover=function(){
    clearInterval(times);
}
//当鼠标移出时,自动播放
next.parentNode.onmouseout=function(){
    autoplay();
}

//单独封装一个函数是专门调用隐藏的图片和显示图片的
function change() {
    //设置需要被隐藏的图片
    //当属性是变量时,使用[]语法
    ullist[lastindex].className = '';
    ollist[lastindex].className = '';
    //设置需要被显示的图片
    ullist[index].className = 'ac';
    ollist[index].className = 'ac';
}
