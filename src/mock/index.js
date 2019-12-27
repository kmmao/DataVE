// import pie from './pie/pie';
// export default { pie }

const fs = require("fs");

// fs.wirteFile有三个参数
// 1,第一个参数是要写入的文件路径
// 2,第二个参数是要写入得内容
// 3,第三个参数是可选参数,表示要写入的文件编码格式,一般就不写,默认就行
// 4,第四个参数是个回调函数  只有一个参数error,来判断是否写入成功
fs.writeFile("./11.txt", "wwwww", error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});

//如果在使用fs.writeFIle时,要写入文件不存在,则直接写入,如果存在,则会覆盖原内容



require('./pie/pie');
require('./bar/bar');