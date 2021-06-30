 const excelPort = require('excel-export');
 const fs = require('fs');


 const execute = (cols, rows, sheetName) => {
     /**
      * 定义一个空对象，来存放表头和内容
      * cols，rows为固定字段，不可修改
      */
     const excelConf = {
         name: '',
         cols: [], // 表头
         rows: [], // 内容
     };
     // sheet
     excelConf.name = sheetName
     // 表头
     for (let col of cols) {
         excelConf.cols.push({
             caption: col,
             type: 'string', // 数据类型
             width: 100, // 宽度
         })
     }
     // 内容
     for (let row of rows) {
         var temp = new Array();
         let index = 0;
         for (let key in row) {
             temp[index] = row[key]
             index++;
         }
         excelConf.rows.push(temp);
     }

     console.log(excelConf);

     // 调用excelPort的方法，生成最终的数据
     const result = excelPort.execute(excelConf);
     // 写文件
     fs.writeFile('./goods.xlsx', result, 'binary', err => {
         if (!err) {
             console.log('生成成功！')
         }
     })
 }

 exports.execute = execute