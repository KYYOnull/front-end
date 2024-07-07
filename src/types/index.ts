
// 接口，用于限制person对象的具体属性
export interface PersonInter {
    id: string,
    name: string,
    age: number
}
// 定义好接口之后，别忘记要把它暴露出去，不然外部就无法引入