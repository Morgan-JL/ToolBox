const exportExcel = require('./utils/exportExcel.js')

const data = [{
    id: 1,
    content: '1111',
    summary: '2222',
    user: 'morgan',
    day: 3
}, {
    id: 1,
    content: '1111',
    summary: '2222',
    user: 'morgan',
    day: 3
}]


exportExcel.write(data)