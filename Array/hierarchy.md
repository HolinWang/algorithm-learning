
以下是按照你提供的 `TreeNode` 接口 (`key`, `label`, `nodes`) 修改后的 TypeScript 实现：

```typescript
// 定义树节点类型
interface TreeNode {
  key: string;
  label: string;
  nodes?: TreeNode[];
}

// 防抖函数
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

// 扁平化树结构辅助类型
interface FlattenedNode {
  node: TreeNode;
  path: string[]; // 路径记录 label
}

// 扁平化树结构预处理
function flattenTree(nodes: TreeNode[]): FlattenedNode[] {
  const list: FlattenedNode[] = [];
  
  const traverse = (nodes: TreeNode[], path: string[] = []) => {
    nodes.forEach(node => {
      const currentPath = [...path, node.label]; // 使用 label 作为路径
      list.push({ node, path: currentPath });
      if (node.nodes) traverse(node.nodes, currentPath); // 使用 nodes 代替 children
    });
  };

  traverse(nodes);
  return list;
}

// 扁平化搜索实现
function fuzzySearchFlat(nodes: TreeNode[], keyword: string): TreeNode[] {
  if (!keyword.trim()) return nodes;

  const lowerKeyword = keyword.toLowerCase();
  const flatList = flattenTree(nodes);

  return flatList
    .filter(item => item.node.label.toLowerCase().includes(lowerKeyword)) // 匹配 label
    .map(item => item.node);
}

// 非递归树搜索实现（保留结构）
function fuzzySearchTree(nodes: TreeNode[], keyword: string): TreeNode[] {
  if (!keyword.trim()) return nodes;

  const lowerKeyword = keyword.toLowerCase();
  const stack: Array<{ node: TreeNode; parent: TreeNode | null }> = 
    nodes.map(node => ({ node, parent: null }));
  const result: TreeNode[] = [];

  while (stack.length > 0) {
    const { node, parent } = stack.pop()!;
    const isMatch = node.label.toLowerCase().includes(lowerKeyword); // 匹配 label
  
    let newParent: TreeNode | null = null;
    if (isMatch) {
      // 创建新节点时保留 key 和必要属性
      newParent = { 
        key: node.key, 
        label: node.label,
        nodes: [] // 使用 nodes 代替 children
      };
    
      if (parent) {
        parent.nodes!.push(newParent); // 操作 nodes 数组
      } else {
        result.push(newParent);
      }
    } else if (parent) {
      newParent = parent;
    }

    if (node.nodes) { // 处理子节点使用 nodes
      stack.push(...node.nodes.map(child => ({
        node: child,
        parent: isMatch ? newParent : parent
      })));
    }
  }

  return result;
}

// 使用示例
const treeData: TreeNode[] = [
  {
    key: "1",
    label: 'Fruits',
    nodes: [ // 使用 nodes 代替 children
      { 
        key: "1-1",
        label: 'Apple',
        nodes: [
          { key: "1-1-1", label: 'Red Fuji' },
          { key: "1-1-2", label: 'Green Apple' }
        ]
      },
      {
        key: "1-2",
        label: 'Banana',
        nodes: [
          { key: "1-2-1", label: 'King Banana', nodes: [] }
        ]
      }
    ]
  },
  {
    key: "2",
    label: 'Vegetables',
    nodes: [ // 使用 nodes 代替 children
      { key: "2-1", label: 'Carrot' },
      { key: "2-2", label: 'Spinach' }
    ]
  }
];

// 在 React/Vue 中的使用示例
const searchInput = document.getElementById('search-input') as HTMLInputElement;

// 示例：结构保留搜索
const debouncedSearch = debounce((keyword: string) => {
  const results = fuzzySearchTree(treeData, keyword);
  console.log('Search results:', results);
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch((e.target as HTMLInputElement).value);
});
```

### 主要修改点说明

1. **字段映射**：

   - `name` → `label`
   - `children` → `nodes`
   - 新增 `key` 作为唯一标识
2. **路径记录**：

   ```typescript
   // Before (使用 name)
   const currentPath = [...path, node.name];

   // After (使用 label)
   const currentPath = [...path, node.label];
   ```
3. **结构保留逻辑**：

   ```typescript
   // 创建新节点时
   newParent = { 
     key: node.key,  // 保留 key
     label: node.label, 
     nodes: []      // 使用 nodes 作为子节点容器
   };

   // 添加子节点时
   parent.nodes!.push(newParent); // 操作 nodes 数组
   ```
4. **搜索匹配**：

   ```typescript
   // Before
   node.name.toLowerCase().includes(keyword)

   // After
   node.label.toLowerCase().includes(keyword)
   ```

### 使用建议

1. **渲染节点时**：

   ```tsx
   // React 示例组件
   const TreeNode: React.FC<{ data: TreeNode }> = ({ data }) => {
     return (
       <div>
         <span>{data.label}</span>
         {data.nodes?.map(child => (
           <TreeNode key={child.key} data={child} />
         ))}
       </div>
     );
   };
   ```
2. **性能优化**：

   ```typescript
   // 预处理扁平数据（适用于静态数据）
   const flatData = useMemo(() => flattenTree(treeData), []);

   // 搜索时直接使用预处理数据
   const results = fuzzySearchFlat(flatData, keyword);
   ```
3. **动态更新数据**：

   ```typescript
   // 当树数据变化时重新预处理
   useEffect(() => {
     setFlatData(flattenTree(updatedTreeData));
   }, [updatedTreeData]);
   ```

此实现完整保留了原有功能，同时完全适配新的 `TreeNode` 接口，并保持以下特性：

- 严格 TypeScript 类型检查
- 输入防抖控制
- 两种搜索模式（扁平/结构保留）
- 路径记录功能（在 `FlattenedNode` 中）
- 高性能非递归遍历
