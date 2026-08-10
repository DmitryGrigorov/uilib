import { visit } from "unist-util-visit";
function plugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "textDirective" || node.type === "containerDirective") {
        const data = node.data || (node.data = {});
        data.hName = node.name;
        if (Object.keys(node.attributes).length !== 0) {
          data.hProperties = {
            ...node.attributes
          }
        }
      }
    })
  }
}

export default plugin;
