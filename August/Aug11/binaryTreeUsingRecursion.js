// class TreeNode {
//     constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function insertNode(root, data) {
//     if (root === null) {
//       return new TreeNode(data);
//     }
  
//     if (data < root.data) {
//       root.left = insertNode(root.left, data);
//     } else {
//       root.right = insertNode(root.right, data);
//     }
  
//     return root;
//   }
  
//   function buildBinaryTree(arr) {
//     let root = null;
  
//     for (const data of arr) {
//       root = insertNode(root, data);
//     }
  
//     return root;
//   }
  
//   function inorderTraversal(root) {
//     if (root !== null) {
//       inorderTraversal(root.left);
//       console.log(root.data);
//       inorderTraversal(root.right);
//     }
//   }
  
//   // Example usage
//   const values = [5, 3, 8, 1, 4, 7, 9];
//   const rootNode = buildBinaryTree(values);
  
//   console.log("Inorder Traversal:");
//   inorderTraversal(rootNode);
  

class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function insertNode(root, data) {
    if (root === null) {
      return new TreeNode(data);
    }
  
    if (data < root.data) {
      root.left = insertNode(root.left, data);
    } else {
      root.right = insertNode(root.right, data);
    }
  
    return root;
  }
  
  function buildBinaryTree(arr) {
    let root = null;
  
    for (const data of arr) {
      root = insertNode(root, data);
    }
  
    return root;
  }
  
  function inorderTraversal(root) {
    if (root !== null) {
      inorderTraversal(root.left);
      console.log(root.data);
      inorderTraversal(root.right);
    }
  }
  
  function preorderTraversal(root) {
    if (root !== null) {
      console.log(root.data);
      preorderTraversal(root.left);
      preorderTraversal(root.right);
    }
  }
  
  function postorderTraversal(root) {
    if (root !== null) {
      postorderTraversal(root.left);
      postorderTraversal(root.right);
      console.log(root.data);
    }
  }
  
  // Example usage
  const values = [5, 3, 8, 1, 4, 7, 9];
  const rootNode = buildBinaryTree(values);
  
  console.log("Inorder Traversal:");
  inorderTraversal(rootNode);
  
  console.log("Preorder Traversal:");
  preorderTraversal(rootNode);
  
  console.log("Postorder Traversal:");
  postorderTraversal(rootNode);
  