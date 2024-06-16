import 'reactflow/dist/style.css';
import '../styles/reactflow.css';

import { CustomNode, edges as initialEdges, nodes as initialNodes } from '.';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { useCallback } from 'react';

const nodeTypes = {
  custom: CustomNode,
};

const minimapStyle = {
  height: 120,
};

export function ReactFlowDemo() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes as any);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges(eds => addEdge(params, eds)),
    [setEdges],
  );

  const edgesWithUpdatedTypes = edges.map(edge => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find(node => node.type === 'custom')?.data.selects[
        edge.sourceHandle
      ];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={(reactFlowInstance: any) => console.log()}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
}
