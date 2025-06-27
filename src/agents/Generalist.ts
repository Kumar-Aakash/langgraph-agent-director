import { ToolCall, AgentState } from "../api-interfaces";

// For now, the Generalist just creates a single tool call for demonstration.
export function generalistAgent(state: AgentState): AgentState {

    const toolCall: ToolCall = {
      tool_call_id: "toolcall-1",
      name: "ChunkRetrievalAgent",
      arguments: { query: state.input },
    };

    return {
      ...state,
      pendingToolCalls: [toolCall],
    };
}