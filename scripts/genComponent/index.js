// 通过 pnpm gen:comp 生成组件
// 1. 校验输入的组件名是否为 KebabCase 格式
// 2. 获取两种格式的组件名 component-name 和 ComponentName
// 3. 生成 packages/components/${component-name} 文件夹，并把 template 下的文件修改模板字符串并写入
// 4. 生成 website/components/${component-name}-demo.tsx 和 .css 文件
// 5. 在 website/app/page.tsx 中注入引用 demo 的代码
// 6. 有单测的话生成 .test 代码
