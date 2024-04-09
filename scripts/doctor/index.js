/**
 * @description 默认检查所有组件，也支持单个组件
 *
 * 1. packages/components/${component-name}/index.tsx
 *    1.1 检查文件是否存在
 *    1.2 检查是否导出了 ${ComponentName}，比如 Tabs
 *    1.3 检查是否导出了 所有的primitive组件 和 类型，比如 Tabs.Trigger 和 TabTriggerProps
 *    1.4 检查 import export 顺序是否符合预期
 * 2. packages/components/${component-name}/use-${component-name}.tsx
 *    2.1 检查文件是否存在
 *    2.2 检查 import export 顺序是否符合预期
 * 3. website/components/${component-name}-demo.tsx
 *    3.1 检查文件是否存在
 *    3.2 检查是否包含了${component-name}的所有primitive组件
 * 4. 对应的 tests 文件
 *    4.1 检查文件是否存在
 */
