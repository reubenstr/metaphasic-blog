import { Node } from 'unist';
import { visit } from 'unist-util-visit';

interface ElementNode extends Node {
  type: 'element';
  children: Node[];
}

function remarkLocalVideoEmbedder() {
  return (tree: Node) => {
    visit(tree, 'element', (node: ElementNode) => {
      const { children } = node;

      if (
        children.length === 1 &&
        children[0].type === 'element' &&
        children[0].tagName === 'img' &&
        children[0].properties.src.endsWith('.mp4')
      ) {
             
        node.type = 'element';
        node.tagName = 'video controls';       
        node.children = [];
        node.properties = {"src" : children[0].properties.src, "type" : "video/mp4"}         
      }
    });
  };
}

export default remarkLocalVideoEmbedder;