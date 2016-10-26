//用call改变执行的上下文

var pet = {
    words:'...',
    speak:function(name){
        console.log(name+': '+this.words);
    }
}
//这是pet调用pet的speak方法
pet.speak('dog');

var dog = {
    words:'wang'
}
//这是dog调用pet的speak方法--用call改变执行的上下文
pet.speak.call(dog, 'dog');