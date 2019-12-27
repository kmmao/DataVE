
const Mock = require('mockjs');

let data = Mock.mock({
    'status': 200,
    'data|1-9': [{
        'key|+1': 1,
        'mockTitle|1': ['肆无忌惮'],
        'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
        'mockAction|1': ['下载', '试听', '喜欢']
    }]
});

Mock.mock('/api/mock/bar', data) // 后面讲这个api的使用细节
