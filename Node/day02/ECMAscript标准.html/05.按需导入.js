//按需导入
import {age,foo} from './04.按需导出.js'
console.log(age)
foo()

//全部导入
import * as test from './04.按需导出.js'
console.log(test)