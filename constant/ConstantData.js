const banner = require('../assets/OIP.jpg');
const item1 = require('../assets/OIPitem.jpg')
const item2 = require('../assets/2.jpg')
const item3 = require('../assets/3.jpg')
const item4 = require('../assets/4.jpg')




const dataDivice = [{
    title: "Điện thoại SmartPhone",
    filterList: [
        'Tất cả',
        'Điện thoại SmartPhone',
        'Máy tính bảng',
        'Điện thoại bàn',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}, {
    title: "Thế giới sắc đẹp - làm đẹp",
    filterList: [
        'Tất cả',
        'Chăm sóc body',
        'Kem dưỡng',
        'Khẩu trang',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}, {
    title: "Điện gia dụng",
    filterList: [
        'Tất cả',
        'Thiết bị điện',
        'Ổ cắm',
        'Dây điện',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}, {
    title: "Đồng hồ và trang sức",
    filterList: [
        'Tất cả',
        'Đồng hồ cơ',
        'Đồng hồ thông minh',
        'Trang sức vàng',
    ],
    imgList: [
        { image1: item1, image2: item2 },
        { image1: item2, image2: item3 },
        { image1: item3, image2: item4 },
        { image1: item4, image2: item1 },
    ]
}
]



const fakeData = [{
    title: "Điện thoại SmartPhone",
    filterList: [
        'Tất cả',
        'Điện thoại SmartPhone',
        'Máy tính bảng',
        'Điện thoại bàn',
    ],
    productList: [
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "9.000.000",
                image1: item1
            },{
                title: "Iphone 13 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "10.000.000",
                oldPrice: "12.000.000",
                image1: item2
            }
        ],

        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
    ]
}, {
    title: "Thế giới sắc đẹp - làm đẹp",
    filterList: [
        'Tất cả',
        'Chăm sóc body',
        'Kem dưỡng',
        'Khẩu trang',
    ],
    productList: [
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            }
        ],

        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
    ]
}, {
    title: "Điện gia dụng",
    filterList: [
        'Tất cả',
        'Thiết bị điện',
        'Ổ cắm',
        'Dây điện',
    ],
    productList: [
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            }
        ],

        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
    ]
}, {
    title: "Đồng hồ và trang sức",
    filterList: [
        'Tất cả',
        'Đồng hồ cơ',
        'Đồng hồ thông minh',
        'Trang sức vàng',
    ],
    productList: [
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            }
        ],

        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item2
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item3
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
        [
            {
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item1
            },{
                title: "Iphone 12 Promax - chính hãng",
                deliverySpeed: "FAST",
                delivery: "Giao tiết kiệm",
                number: 1,
                price: "8.000.000",
                oldPrice: "200.000",
                image1: item4
            }
        ],
    ]
}
]




export default {
    dataDivice,fakeData
};