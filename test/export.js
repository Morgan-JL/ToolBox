const exportExcel = require('../utils/exportExcel')

const rows = [{
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
const cols = ['名字', '大小', '价格']
exportExcel.execute(cols,rows,'测试')
