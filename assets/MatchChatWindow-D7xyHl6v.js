import{j as s}from"./jsx-runtime-BjG_zV1W.js";const r="_matchChatWindow_ukohi_3",i="_matchChatHeader_ukohi_10",c="_matchChatMessages_ukohi_15",h="_chatMessageSelf_ukohi_25",d="_chatMessageFriend_ukohi_30",m="_chatMessageText_ukohi_40",g="_chatMessageTime_ukohi_44",e={matchChatWindow:r,matchChatHeader:i,matchChatMessages:c,chatMessageSelf:h,chatMessageFriend:d,chatMessageText:m,chatMessageTime:g},o=({messages:a,onSend:u,currentUser:n})=>s.jsxs("div",{className:e.matchChatWindow,children:[s.jsx("div",{className:e.matchChatHeader,children:"Match Chat"}),s.jsx("div",{className:e.matchChatMessages,children:a.map(t=>s.jsxs("div",{className:t.sender===n?e.chatMessageSelf:e.chatMessageFriend,children:[s.jsx("span",{className:e.chatMessageText,children:t.text}),s.jsx("span",{className:e.chatMessageTime,children:t.time})]},t.id))})]});o.__docgenInfo={description:"",methods:[],displayName:"MatchChatWindow",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	id: string;
	text: string;
	sender: string;
	time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"sender",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}}]}}],raw:`Array<{
	id: string;
	text: string;
	sender: string;
	time: string;
}>`},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""}}};export{o as M};
