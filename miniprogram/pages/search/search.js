let timeId = null;
Page({
    data: {
        history: [],
        hot: ['U100开心果', '红丝绒湿蛋糕', '蜂蜜黄油薯片','原味椰子脆片'],
        result: [{
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
            }
        ],
        showKeywords: false,
        keywords: ['薯片', '干果', '郁瑟蒜香面包干', '丽芝士威化饼干'],
        value: '',
        showResult: false,
    },
    cancelSearch() {
        this.setData({
            showResult: false,
            showKeywords: false,
            value: ''
        })
    },
    searchInput(e) {
        if (!e.detail.value) {
            this.setData({
                showKeywords: false
            })
        } else {
            if (!this.data.showKeywords) {
                timeId && clearTimeout(timeId);
                timeId = setTimeout(() => {
                    this.setData({
                        showKeywords: true
                    })
                }, 1000)
            }
        }
    },
    keywordHandle(e) {
        const text = e.target.dataset.text;
        this.setData({
            value: text,
            showKeywords: false,
            showResult: true
        })
        this.historyHandle(text);
    },
    historyHandle(value) {
        let history = this.data.history;
        const idx = history.indexOf(value);
        if (idx === -1) {
            // 搜索记录只保留8个
            if (history.length > 6) {
                history.pop();
            }
        } else {
            history.splice(idx, 1);
        }
        history.unshift(value);
        wx.setStorageSync('history', JSON.stringify(history));
        this.setData({
            history
        });
    },
    onLoad() {
        const history = wx.getStorageSync('history');
        if (history) {
            this.setData({
                history: JSON.parse(history)
            })
            console.log(this.data.history);
        }
    }
})