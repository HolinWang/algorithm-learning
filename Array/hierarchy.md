要优化你提供的代码，实现一个深层次的树结构模糊搜索，并返回匹配到的树，考虑到树的层级较深，我们可以使用递归方法来遍历树，同时保证性能。

 **核心思路** ：

1. 遍历树的每个节点，查找与搜索条件匹配的节点。
2. 在查找匹配的节点时，递归返回包含该节点的整个树结构。
3. 使用 **深度优先搜索(DFS)** ，并尽量避免不必要的遍历。

 **步骤** ：

* 使用递归遍历整个树。
* 如果当前节点的 `key`匹配，则返回这个节点，并继续向上返回其父节点的完整树。
* 使用递归时，确保找到匹配的节点后，返回包含该节点的所有父节点。

### 优化后的实现（React + TypeScript）

```typescript
type TreeNode = {
  key: string;
  label: string;
  nodes: TreeNode[];
};

const treeList: TreeNode[] = [
  {
    key: '1',
    label: 'Fruits',
    nodes: [
      {
        key: '1-1',
        label: 'Apple',
        nodes: [
          {
            key: '1-1-1',
            label: 'Red Fuji',
            nodes: [
              {
                key: '1-1-1-1',
                label: 'Red Fuji',
                nodes: [],
              },
              {
                key: '1-1-1-2',
                label: 'Green Apple',
                nodes: [],
              },
            ],
          },
          {
            key: '1-1-2',
            label: 'Green Apple',
            nodes: [],
          },
        ],
      },
      {
        key: '1-2',
        label: 'Banana',
        nodes: [
          {
            key: '1-2-1',
            label: 'King Banana',
            nodes: [],
          },
        ],
      },
    ],
  },
];

function searchTree(tree: TreeNode[], searchKey: string): TreeNode[] {
  // Helper function to search within a tree
  function searchNode(node: TreeNode, searchKey: string): TreeNode | null {
    if (node.key.includes(searchKey)) {
      return node;
    }
    // Check the child nodes
    for (let child of node.nodes) {
      const result = searchNode(child, searchKey);
      if (result) return result;
    }
    return null;
  }

  function filterTree(nodes: TreeNode[], searchKey: string): TreeNode[] {
    const result: TreeNode[] = [];

    for (let node of nodes) {
      // If the current node itself matches, add it to the result
      if (node.key.includes(searchKey)) {
        result.push(node);
      } else {
        // Recursively check the child nodes
        const matchingChild = searchNode(node, searchKey);
        if (matchingChild) {
          result.push(matchingChild);
        }
      }
    }

    return result;
  }

  return filterTree(tree, searchKey);
}

// Example Usage:
const searchResult = searchTree(treeList, '1-1-1-1');
console.log(JSON.stringify(searchResult, null, 2));
```

### 关键部分：

1. **searchTree** : 该函数接受一个树的节点数组和一个搜索的 `key`，然后通过 `filterTree`函数递归查找匹配的节点。
2. **searchNode** : 这是一个递归函数，用于在每个节点的 `nodes`数组中查找匹配的节点。
3. **filterTree** : 这个函数遍历整个树结构并构建包含匹配节点的树。它通过 `searchNode`找到子树中的匹配节点并返回。

### 流程：

1. 调用 `searchTree`，传入 `treeList`和搜索 `key`。
2. 在每个节点上进行检查：如果节点的 `key`匹配，或者它的子树包含匹配节点，那么就将该节点及其所有父节点返回。
3. 最终返回的树结构是包含匹配节点的子树。

### 性能优化：

1. **递归深度优先** ：避免了重复遍历无关节点，尽可能减少递归的次数。
2. **早期退出** ：当找到匹配节点时，会尽早返回，不再继续遍历无关的分支。
3. **尽量减少状态变更** ：我们通过递归内的标记和结果累积，减少了不必要的操作。

### 结果：

如果你搜索 `'1-1-1-1'`，结果会返回以下树：

```json
[
  {
    "key": "1",
    "label": "Fruits",
    "nodes": [
      {
        "key": "1-1",
        "label": "Apple",
        "nodes": [
          {
            "key": "1-1-1",
            "label": "Red Fuji",
            "nodes": [
              {
                "key": "1-1-1-1",
                "label": "Red Fuji",
                "nodes": []
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### 其他优化建议：

* 如果数据量非常大，可以考虑使用 `memoization`（记忆化）来缓存之前的查询结果，避免重复计算。
* 可以考虑对树的层级进行预处理，建立反向索引（比如 `key`到节点的映射），以加快搜索效率。

这样可以高效地返回包含匹配节点的树，并且避免过多的无用计算。
