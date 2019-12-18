// page/component/details/details.js
Page({
    data: {
        goods: [],
        productId: "",
        productList: [{
            id: '01',
            title: "丽芝士威化饼干",
            spec: "290g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a1.jpg',
            price: 17.8,
            num: 1,
            selected: true
        },
        {
            id: '02',
            title: "郁瑟蒜香面包干",
            spec: "160g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a2.jpg',
            price: 19.8,
            num: 1,
            selected: true
        },
        {
            id: '03',
            title: "蜂蜜芥末面包干",
            spec: "75g×3包",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/a3.jpg',
            price: 29.9,
            num: 1,
            selected: true
        },
        {
            id: '11',
            title: "黑胡椒味木薯片",
            spec: "150g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/b1.jpg',
            price: 19.5,
            num: 1,
            selected: true
        },
        {
            id: '12',
            title: "海太蜂蜜黄油薯片",
            spec: "60g×1包",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/b2.jpg',
            price: 16.8,
            num: 1,
            selected: true
        },
        {
            id: '13',
            title: "九日蜂蜜土豆条",
            spec: "54g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/b3.jpg',
            price: 12.8,
            selected: true
        },
        {
            id: '31',
            title: "U100大话梅",
            spec: "45g×2袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c1.jpg',
            price: 29.9,
            num: 1,
            selected: true
        },
        {
            id: '32',
            title: "越南进口芋头条",
            spec: "100g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c2.jpg',
            price: 16.8,
            num: 1,
            selected: true
        },
        {
            id: '33',
            title: "蔓越莓干",
            spec: "900g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c3.jpg',
            price: 59.9,
            num: 1,
            selected: true
        },
        {
            id: '34',
            title: "马卡兰香蕉干",
            spec: "70g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c4.jpg',
            price: 12.9,
            num: 1,
            selected: true
        },
        {
            id: '35',
            title: "原味椰子脆片",
            spec: "300g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/c5.jpg',
            price: 48.9,
            num: 1,
            selected: true
        },
        {
            id: '41',
            title: "U100无添加腰果",
            spec: "72g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/d1.jpg',
            price: 23.9,
            num: 1,
            selected: true
        },
        {
            id: '42',
            title: "U100无添加扁核桃仁",
            spec: "72g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/d2.jpg',
            price: 29.9,
            num: 1,
            selected: true
        },
        {
            id: '41',
            title: "U100无添加开心果",
            spec: "72g×1袋",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/d3.jpg',
            price: 15.9,
            num: 1,
            selected: true
        },
        {
            id: '51',
            title: "红丝绒湿蛋糕",
            spec: "150g×1盒",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/e1.jpg',
            price: 13.4,
            num: 1,
            selected: true
        },
        {
            id: '52',
            title: "迪乐思干酪酥",
            spec: "100g×1盒",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/e2.jpg',
            price: 9.9,
            num: 1,
            selected: true
        },
        {
            id: '53',
            title: "奇亚籽湿蛋糕",
            spec: "150g×1盒",
            img: 'cloud://bzm-1sero.627a-bzm-1sero-1300712224/e3.jpg',
            price: 8.8,
            num: 1,
            selected: true
        },
        ],
        num: 1,
        totalNum: 0,
        hasCarts: false,
        curIndex: 0,
        show: false,
        scaleCart: false
    },
    lessCount() {
        let num = this.data.num;
        num--;
        if (num < 1) {
            num = 1;
        }
        this.setData({
            num: num
        })
    },
    addCount() {
        let num = this.data.num;
        num++;
        this.setData({
            num: num
        })
    },
    onLoad: function (options) {
        this.setData({
            productId: options.id
        })
    },
    onShow() {
        var p = this.data.productList;
        for (var i = 0; i < p.length; i++) {
            if (p[i].id == this.data.productId) {
                this.setData({
                    goods: p[i]
                })
            }
        }
    },
    /* 加入购物车
   */
    addCar: function (e) {
        let goods = this.data.goods;
        goods.isSelect = false;
        let num = goods.num;
        let title = goods.title;
        if (title.length > 13) {
            goods.title = title.substring(0, 13) + '...';
        }
        // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
        var arr = wx.getStorageSync('cart') || [];
        console.log("arr,{}", arr);
            arr.push(goods);
        // 最后，把购物车数据，存放入缓存  
        try {
            wx.setStorageSync('cart', arr)
            // 返回（在if内使用return，跳出循环节约运算，节约性能） 
            //关闭窗口
            wx.showToast({
                title: '加入购物车成功！',
                icon: 'success',
                duration: 2000
            });
            return;
        } catch (e) {
            console.log(e)
        }
    },

    bindTap(e) {
        const index = parseInt(e.currentTarget.dataset.index);
        this.setData({
            curIndex: index
        })
    }

})