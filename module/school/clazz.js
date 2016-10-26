//引入学生模块
var student = require('./student');
//引入老师模块
var teacher = require('./teacher');

//班级的方法--实现：增加一个班级，则自动添加了一个老师，并添加了很多学生
function add(teachername, students){
    teacher.add(teachername);
    students.forEach(function(item, index){
        student.add(item);
    });
}
//导出班级模块--模块会成为一个传统的对象实例
exports.add = add;

//导出模块的第二种写法--模块会成为一个特殊的对象类型
//module.exports = add;