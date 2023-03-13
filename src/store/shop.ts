import { defineStore } from "pinia";

interface IGoods{
    name: string
    price: number
    num?: number
    select?: boolean
}

export const useShopStore= defineStore('shop', {
    state(){
        return{
            goods: [
                {
                    name: '羊肉串',
                    price: 20
                },
                {
                    name: '猪肉串',
                    price: 15,
                },
                {
                    name: '鸡翅',
                    price: 12,
                }
            ] as IGoods[],
            isAllSelected: false, // 可以被其他组件双向绑定

        }
    },
    // 组件会把业务发放进来
    actions: {
        updateAmount(index: number, num: number){
            // 在数据层 num依然是 undefined 首先要初始化
            // undefined 做运算 会变为nan
            this.goods[index].num= this.goods[index].num || 1;
            this.goods[index].num!+= num; // 此时一定有num，使用！
        },
        selectedChange(){
            // 每次全选都同步所有单选 重新赋值
            this.goods.forEach(item=> {
                item.select= this.isAllSelected;
            })
        },
        singleChange(){
            // 如果goods 中所有都被选中，则 isAllSelected 是 true
            this.isAllSelected= this.goods.every(item=> item.select)
        }
    },

    getters: {
        getTotal():number{
            return this.goods
                .filter(item=> item.select)
                .reduce((total, item) => total+= (item.num||1)* item.price, 0)
                
        }
    }
})

