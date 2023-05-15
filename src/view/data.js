export const cardData = [
    {
        name: '郑一',
        tel: '18751310510',
        category: 'schoolmate'
    },
    {
        name: '季二',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '张三',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '李四',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '王五',
        tel: '18751310510',
        category: 'family'
    },
    {
        name: '赵六',
        tel: '18751310510',
        category: 'family'
    },
    {
        name: '钱七',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '孙八',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '杨九',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '顾十',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '徐十一',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '冯十二',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '陈十三',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '楚十四',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '魏十五',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '秦十六',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '唐十七',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '宋十八',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '元十九',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '明二十',
        tel: '18751310510',
        category: 'friend'
    },
    {
        name: '清二十一',
        tel: '18751310510',
        category: 'schoolmate'
    },
]
export const userForm =
    {
        username: '巴啦啦能量',
        tel: '18888888888',
        password: '111111'
    };

// data.js

export function addContact(inform) {
    cardData.push(inform)
}

export function addUser(user) {
    Object.assign(userForm, user);
}

export function getUserData() {
    return userForm;
}
