import{M as m}from"./MatchChatWindow-D7xyHl6v.js";import"./jsx-runtime-BjG_zV1W.js";const p={title:"Chat/MatchChatWindow",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A chat window component for match communications between players."}}},argTypes:{messages:{control:!1,description:"Array of chat messages to display"},onSend:{action:"messageSent",description:"Function called when a message is sent"},currentUser:{control:"text",description:"ID of the current user"}}},d=[{id:"1",text:"Hello!",sender:"user1",time:"10:30 AM"},{id:"2",text:"Good luck!",sender:"user2",time:"10:31 AM"},{id:"3",text:"Thanks, you too!",sender:"user1",time:"10:32 AM"}],e={args:{messages:d,onSend:()=>{},currentUser:"user1"}},s={args:{messages:[],onSend:()=>{},currentUser:"user1"}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    messages: mockMessages,
    onSend: () => {},
    currentUser: 'user1'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var n,a,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    messages: [],
    onSend: () => {},
    currentUser: 'user1'
  }
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const g=["Default","EmptyChat"];export{e as Default,s as EmptyChat,g as __namedExportsOrder,p as default};
