import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{I as i}from"./InMatchChatWindow-BfHcjt9e.js";const I={title:"Chat/InMatchChatWindow",component:i,parameters:{docs:{description:{component:"InMatchChatWindow displays a chat interface for in-match communication. It shows messages, allows sending, and highlights the current user."},autodocs:!0}},tags:["autodocs"],argTypes:{messages:{description:"Array of chat messages, each with id, text, sender, and time.",control:"object"},onSend:{action:"send",description:"Callback when a message is sent."},currentUser:{description:"The current user ID."}}},o=[{id:"1",sender:"alice",text:"Hello!",time:"10:00"},{id:"2",sender:"bob",text:"Hi Alice!",time:"10:01"},{id:"3",sender:"alice",text:"Ready to play?",time:"10:02"}],r=e=>a.jsx(i,{...e});r.args={messages:[],onSend:()=>{},currentUser:"alice"};r.storyName="Empty Chat";const t=e=>a.jsx(i,{...e});t.args={messages:o,onSend:()=>{},currentUser:"alice"};t.storyName="With Messages";const s=e=>a.jsx(i,{...e});s.args={messages:o,onSend:()=>{},currentUser:"bob"};s.storyName="As Other User";const n=e=>a.jsx(i,{...e});n.args={messages:[...o,{id:"4",sender:"system",text:"Game will start soon.",time:"10:03"}],onSend:()=>{},currentUser:"alice"};n.storyName="With System Message";r.__docgenInfo={description:"",methods:[],displayName:"Empty",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	id: string;
	text: string;
	sender: string;
	time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"sender",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}}]}}],raw:`Array<{
	id: string;
	text: string;
	sender: string;
	time: string;
}>`},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"WithMessages",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	id: string;
	text: string;
	sender: string;
	time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"sender",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}}]}}],raw:`Array<{
	id: string;
	text: string;
	sender: string;
	time: string;
}>`},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"AsOtherUser",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	id: string;
	text: string;
	sender: string;
	time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"sender",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}}]}}],raw:`Array<{
	id: string;
	text: string;
	sender: string;
	time: string;
}>`},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"SystemMessage",props:{messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	id: string;
	text: string;
	sender: string;
	time: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"sender",value:{name:"string",required:!0}},{key:"time",value:{name:"string",required:!0}}]}}],raw:`Array<{
	id: string;
	text: string;
	sender: string;
	time: string;
}>`},description:""},onSend:{required:!0,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""},currentUser:{required:!0,tsType:{name:"string"},description:""}}};var d,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"(args: InMatchChatWindowProps) => <InMatchChatWindow {...args} />",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,c,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"(args: InMatchChatWindowProps) => <InMatchChatWindow {...args} />",...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var y,h,l;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"(args: InMatchChatWindowProps) => <InMatchChatWindow {...args} />",...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var w,q,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:"(args: InMatchChatWindowProps) => <InMatchChatWindow {...args} />",...(x=(q=n.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const k=["Empty","WithMessages","AsOtherUser","SystemMessage"];export{s as AsOtherUser,r as Empty,n as SystemMessage,t as WithMessages,k as __namedExportsOrder,I as default};
