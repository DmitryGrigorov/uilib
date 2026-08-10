import { TreeSourceItem } from "./types";

const removeNode = (
  tree: TreeSourceItem[],
  targetId: string | number
): [TreeSourceItem, TreeSourceItem[]] | undefined => {
  let removedNode;

  const walkOnTree = (
    walkTree: TreeSourceItem[],
    walkTargetId: string | number
  ): TreeSourceItem[] | undefined => {
    const filteredTree = walkTree.filter((node: TreeSourceItem) => {
      if (node.id === walkTargetId) {
        removedNode = node;
        return false;
      }
      return true;
    });
    return filteredTree?.map((node: TreeSourceItem) => {
      const { elements, ...nodeWithoutElements } = node;

      const returnObj = {
        ...nodeWithoutElements,
        elements: []
      } as TreeSourceItem;

      if (typeof elements !== "undefined") {
        returnObj.elements = walkOnTree(elements, walkTargetId);
      } else {
        returnObj.elements = [];
      }
      returnObj.isOpened =
        returnObj.elements?.length === 0 ? false : returnObj.isOpened;

      return returnObj;
    });
  };

  const treeWithoutRemovedNode = walkOnTree(tree, targetId);

  if (removedNode && treeWithoutRemovedNode) {
    return [removedNode, treeWithoutRemovedNode];
  }
  return undefined;
};

const insertNodeIntoAnotherNode = (
  tree: TreeSourceItem[],
  nodeToInsert: TreeSourceItem,
  whereToInsertId: string | undefined
): TreeSourceItem[] => {
  const walkOnTree = (
    walkTree: TreeSourceItem[] | undefined,
    walkNodeToInsert: TreeSourceItem,
    walkWhereToInsert: string | undefined
  ): TreeSourceItem[] | undefined =>
    typeof walkTree === "undefined"
      ? undefined
      : walkTree.map((node) => {
          if (node.id === walkWhereToInsert) {
            node.elements = [walkNodeToInsert].concat(node.elements ?? []);
            node.isOpened = true;
          } else if ((node.elements ?? []).length > 0) {
            node.elements = walkOnTree(
              node.elements,
              walkNodeToInsert,
              walkWhereToInsert
            );
          }

          return node;
        });
  if (whereToInsertId === "root") {
    tree.push(nodeToInsert);
  }
  return walkOnTree(tree, nodeToInsert, whereToInsertId) ?? [];
};

export const moveNode = (
  tree: TreeSourceItem[],
  whatToMoveId: string | undefined,
  whereToMoveId: string | undefined
): TreeSourceItem[] => {
  if (
    typeof whatToMoveId !== "undefined" &&
    typeof whereToMoveId !== "undefined"
  ) {
    const newTree = removeNode(tree, whatToMoveId);
    if (typeof newTree !== "undefined") {
      const [nodeWithGivenUniqueId, treeWithoutNodeWithGivenId] = newTree;
      return insertNodeIntoAnotherNode(
        treeWithoutNodeWithGivenId,
        nodeWithGivenUniqueId,
        whereToMoveId
      );
    }
  }

  return [];
};

export const changeTitle = (
  tree: TreeSourceItem[],
  nodeId: string,
  newTitle: string
): TreeSourceItem[] =>
  tree.map((node) => {
    if (node.id === nodeId) {
      return {
        ...node,
        title: newTitle
      };
    } else if (node.elements) {
      return {
        ...node,
        elements: changeTitle(node.elements, nodeId, newTitle)
      };
    } else {
      return node;
    }
  });

export const changeOpenedStatus = (
  tree: TreeSourceItem[],
  nodeId: string,
  newStatus: boolean
): TreeSourceItem[] =>
  tree.map((node) => {
    if (node.id === nodeId) {
      return {
        ...node,
        isOpened: newStatus
      };
    } else if (node.elements) {
      return {
        ...node,
        elements: changeOpenedStatus(node.elements, nodeId, newStatus)
      };
    } else {
      return node;
    }
  });
