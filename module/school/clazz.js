//����ѧ��ģ��
var student = require('./student');
//������ʦģ��
var teacher = require('./teacher');

//�༶�ķ���--ʵ�֣�����һ���༶�����Զ������һ����ʦ��������˺ܶ�ѧ��
function add(teachername, students){
    teacher.add(teachername);
    students.forEach(function(item, index){
        student.add(item);
    });
}
//�����༶ģ��--ģ����Ϊһ����ͳ�Ķ���ʵ��
exports.add = add;

//����ģ��ĵڶ���д��--ģ����Ϊһ������Ķ�������
//module.exports = add;