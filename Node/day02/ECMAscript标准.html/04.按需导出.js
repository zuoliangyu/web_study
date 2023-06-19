const username = 'jack'
const sum = arr => 
    arr.reduce((total,item) =>{
        return total+=item
    },0)
    

//按需导出一个变量，一个函数
export const age = 22
export function foo(){
    console.log(123)
}