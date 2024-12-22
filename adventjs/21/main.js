function treeHeight(tree) {
  if (!tree) return 0
  return Math.max(treeHeight(tree.right) + 1, treeHeight(tree.left) + 1)
}