/**
 * @description 通过 pnpm gen:compJson 生成组件 json 信息
 *              用于生成组件文档 Anatomy、API Reference 图 + 表格
 *
 * 1. 获取输入的组件名 componentName | ComponentName
 * 2. 获取 component-name 和 ComponentName
 * 3. 执行对应 component 的 doctor 命令
 * 4. 通过 packages/components/${component-name}/index.tsx 获取组件解构 和 api
 * 5. 通过 packages/components/${component-name}/use-${component-name}.tsx 获取renderProps、dataAttributes
 * 6. 通过 website/components/${component-name}-demo.tsx 获取组件的层级关系
 *
 * @example for tabs
 * {
 *   componentName: 'tabs',
 *   // 最外层一定会有一个root，所以用 object 格式
 *   anatomy: {
 *     componentName: 'root',
 *     api: {
 *     },
 *     renderProps: {
 *     },
 *     dataAttributes: {
 *     },
 *     // 多个子组件，使用 array
 *     children: [{
 *       componentName: 'List',
 *       api: {...},
 *       renderProps: {...},
 *       dataAttributes: {...},
 *       children: [{
 *          componentName: 'Trigger',
 *          ...
 *       }]
 *     }, {
 *      componentName: 'Content',
 *      ...
 *     }, ...]
 *   }
 * }
 */
