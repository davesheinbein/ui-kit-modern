import{N as w}from"./NotificationBanner-BsSHJd5X.js";import"./jsx-runtime-BjG_zV1W.js";import"./iframe-DhC4iHDh.js";const b={title:"Banners/NotificationBanner",component:w,tags:["autodocs"],parameters:{docs:{description:{component:"A notification banner component that displays different types of messages with color-coded styling."}}},argTypes:{type:{control:"select",options:["burn","achievement","system","taunt"],description:"The type of notification which determines the color scheme"},message:{control:"text",description:"The message to display in the notification"},onClose:{action:"closed",description:"Function called when the notification is closed"},index:{control:"number",description:"Index for stacking multiple notifications"}}},e={args:{type:"burn",message:"Burn notification! Something went wrong.",onClose:()=>{},index:0}},n={args:{type:"achievement",message:"Achievement unlocked! You completed the challenge.",onClose:()=>{},index:1}},s={args:{type:"system",message:"System message: Update available.",onClose:()=>{},index:2}},t={args:{type:"taunt",message:"Taunt message: Your opponent is catching up!",onClose:()=>{},index:3}},o={args:{type:"achievement",message:"This is a very long notification message that should wrap properly and display all the content without any issues.",onClose:()=>{},index:0}};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: 'burn',
    message: 'Burn notification! Something went wrong.',
    onClose: () => {},
    index: 0
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'achievement',
    message: 'Achievement unlocked! You completed the challenge.',
    onClose: () => {},
    index: 1
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'system',
    message: 'System message: Update available.',
    onClose: () => {},
    index: 2
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'taunt',
    message: 'Taunt message: Your opponent is catching up!',
    onClose: () => {},
    index: 3
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'achievement',
    message: 'This is a very long notification message that should wrap properly and display all the content without any issues.',
    onClose: () => {},
    index: 0
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const B=["Burn","Achievement","System","Taunt","LongMessage"];export{n as Achievement,e as Burn,o as LongMessage,s as System,t as Taunt,B as __namedExportsOrder,b as default};
