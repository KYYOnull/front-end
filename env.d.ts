/// <reference types="vite/client" />

// 让ts支持各个格式的文件
// 本来ts是 不支持或者无法识别 其它格式的文件的，例如.txt、.css、.jpg等
// 它这一句 <reference types="vite/client" /> 就可以支持了
// 因为它在 client.d.ts 里面配置了对各个文件类型的支持

