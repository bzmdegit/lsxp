// page/component/orders/orders.js
Page({
    data: {
        address: {},
        hasAddress: false,
        total: 0,
        orders: [

        ]
    },
    onLoad: function(options) {

    },
    onReady() {
        this.getTotalPrice();
    },

    onShow: function() {
        const self = this;
        wx.getStorage({
            key: 'address',
            success(res) {
                self.setData({
                    address: res.data,
                    hasAddress: true
                })
            }
        })
        var orders = wx.getStorageSync("cart");
        this.setData({
            orders: orders
        })
    },

    /**
     * 计算总价
     */
    getTotalPrice() {
        let orders = this.data.orders;
        let total = 0;
        for (let i = 0; i < orders.length; i++) {
            total += orders[i].num * orders[i].price;
        }
        this.setData({
            total: total.toFixed(2)
        })
    },

    toPay() {
        wx.showModal({
            title: '提示',
            content: '本系统只做演示，支付系统已屏蔽',
            text: 'center',
            complete() {
                wx.switchTab({
                    url: '/pages/user/user'
                })
            }
        })
    }
})