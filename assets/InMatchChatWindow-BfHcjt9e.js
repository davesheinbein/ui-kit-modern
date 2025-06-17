import{j as s}from"./jsx-runtime-BjG_zV1W.js";const i="_inMatchChatWindow_o076h_2",r="_inMatchChatHeader_o076h_9",c="_inMatchChatMessages_o076h_14",h="_chatMessageSelf_o076h_24",d="_chatMessageFriend_o076h_29",g="_chatMessageText_o076h_39",o="_chatMessageTime_o076h_43",e={inMatchChatWindow:i,inMatchChatHeader:r,inMatchChatMessages:c,chatMessageSelf:h,chatMessageFriend:d,chatMessageText:g,chatMessageTime:o},M=({messages:a,onSend:m,currentUser:n})=>s.jsxs("div",{className:e.inMatchChatWindow,children:[s.jsx("div",{className:e.inMatchChatHeader,children:"In-Match Chat"}),s.jsx("div",{className:e.inMatchChatMessages,children:a.map(t=>s.jsxs("div",{className:t.sender===n?e.chatMessageSelf:e.chatMessageFriend,children:[s.jsx("span",{className:e.chatMessageText,children:t.text}),s.jsx("span",{className:e.chatMessageTime,children:t.time})]},t.id))})]});M.__docgenInfo={description:"",methods:[],displayName:"InMatchChatWindow",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	id: string;
	text: string;
	sender: string;
	time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"sender",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}}]}}],raw:`Array<{
	id: string;
	text: string;
	sender: string;
	time: string;
}>`},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""}}};export{M as I};
