import { defineStore } from "pinia";

const dely= ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1)
        }, 4000)
    })
}

export const useUserStore= defineStore('user', {
    // 和data一样，返回模块的状态
    state(){
        return{
            // 年龄
            age: 22,
            name: 'kyyo',
        };
    },
    getters: {
        /**
         * age的两倍
         * @param state 
         * @returns 
         */
        doubelAge: (state)=> state.age* 2, 
        getNameAndDoubelAge(): string{
            return this.name+ this.doubelAge;
        },
        getNameAndAge: (state)=> state.name+ state.age,
        /**
         * 接收页面的传参，修改state
         */
        getAddAge(){
            // 这里this在定义时已经固定
            // this 是store实例
            return(num: number)=> this.age+= num;
        }
    },
    actions: {
        saveName(name: string){
            this.name= name;
        },
        async saveName2(name: string){
            await dely();
            this.name= name;
        }
    }
})