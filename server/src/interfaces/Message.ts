export default interface Message {
  conversationId: string;
  from: string;
  to: string;
  text: string;
  createdAt?: string;
}
