 const excelPort = require('excel-export');
 const fs = require('fs');
 // JSON数据(此处作为示例，JSON数据写到代码当中，实际过程中，先生成JSON文件，然后通过fs.readFile读取文件内容，然后拿读取到的数据生成Excel)
 const arrData = [{
         "name": "MacBook Pro",
         "size": 13,
         "price": 13000,
     },
     {
         "name": "IPhone 7",
         "size": 32,
         "price": 5000,
     },
     {
         "name": "IPhone 8",
         "size": 128,
         "price": 8000,
     }
 ];
 const generateExcel = (datas) => {
     /**
      * 定义一个空对象，来存放表头和内容
      * cols，rows为固定字段，不可修改
      */
     const excelConf = {
         cols: [], // 表头
         rows: [], // 内容
     };
     // 表头
     for (let key in datas[0]) {
         excelConf.cols.push({
             caption: key,
             type: 'string', // 数据类型
             width: 100, // 宽度
         })
     }
     // 内容
     datas.forEach(item => {
         // 解构
         const {
             name,
             size,
             price
         } = item
         excelConf.rows.push([name, size, price])
     })
     // 调用excelPort的方法，生成最终的数据
     const result = excelPort.execute(excelConf);
     // 写文件
     fs.writeFile('./goods.xlsx', result, 'binary', err => {
         if (!err) {
             console.log('生成成功！')
         }
     })
 }
 generateExcel(arrData);