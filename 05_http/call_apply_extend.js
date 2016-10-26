//用call实现继承

//父类
var pet = function(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
    }
}
//子类
var dog = function(words){
    //子类继承父类
    pet.call(this, words);
    //子类第二种继承方法
    //pet.apply(this, arguments)
}
var d = new dog('wang');
d.speak();
