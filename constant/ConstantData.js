const banner = require('../assets/OIP.jpg');
const item1 = require('../assets/OIPitem.jpg')
const item2 = require('../assets/2.jpg')
const item3 = require('../assets/3.jpg')
const item4 = require('../assets/4.jpg')


 const dataDivice = {
    title: "Điện thoại SmartPhone",
    filterList: [
        'Tất cả',
        'Điện thoại SmartPhone',
        'Máy tính bảng',
        'Điện thoại',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}


const dataBeauty = {
    title: "Thế giới sắc đẹp - làm đẹp",
    filterList: [
        'Tất cả',
        'Điện thoại SmartPhone',
        'Máy tính bảng',
        'Điện thoại',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}

const dataElection = {
    title: "Điện gia dụng",
    filterList: [
        'Tất cả',
        'Điện thoại SmartPhone',
        'Máy tính bảng',
        'Điện thoại',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}

const dataClock = {
    title: "Đồng hồ và trang sức",
    filterList: [
        'Tất cả',
        'Điện thoại SmartPhone',
        'Máy tính bảng',
        'Điện thoại',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}



export default {
    dataDivice,dataBeauty,dataElection,dataClock
};