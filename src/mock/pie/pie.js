

let Mock = require('mockjs');
const random = Mock.Random;// Mock.Random 是一个工具类，用于生成各种随机数据
let data = [];
for (let i = 0; i < 8; i++) { 
    let obj = {
        id: random.string(18,20),
        name: random.name(), 
       value: random.integer(60, 100),
    }
    data.push(obj)
}
Mock.mock('/api/mock/pie', data) // 后面讲这个api的使用细节
// export default { data, data1 };