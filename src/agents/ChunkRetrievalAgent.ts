import { ToolCall, ToolResponse } from "../api-interfaces";

// Simulate document retrieval (mock)
export function chunkRetrievalAgent(toolCall: ToolCall): ToolResponse {

  const fakeDocument = `Fake document for query: ${toolCall.arguments.query}`;

  return {
    tool_call_id: toolCall.tool_call_id,
    content: fakeDocument,
  };
}