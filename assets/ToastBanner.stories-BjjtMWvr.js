import{j as E}from"./jsx-runtime-BjG_zV1W.js";import{T as I}from"./ToastBanner-61A3ZLq5.js";import"./iframe-DhC4iHDh.js";const F={title:"Banners/ToastBanner",component:I,tags:["autodocs"],parameters:{docs:{description:{component:"A toast notification component that displays temporary messages with different types and auto-dismiss functionality."}}},argTypes:{message:{control:"text",description:"The message to display in the toast"},type:{control:"select",options:["achievement","success","error","info","warning","system","burn","taunt"],description:"The type of toast which determines the color scheme"},icon:{control:!1,description:"Optional icon to display in the toast"},onClose:{action:"closed",description:"Function called when the toast is closed"},duration:{control:"number",description:"Duration in milliseconds before auto-dismiss"},style:{control:"object",description:"Additional inline styles"}}},e={args:{type:"info",message:"This is an info toast message!"}},s={args:{type:"success",message:"Operation completed successfully!"}},a={args:{type:"error",message:"An error occurred. Please try again."}},o={args:{type:"warning",message:"Warning: This action cannot be undone."}},r={args:{type:"achievement",message:"Achievement unlocked: First puzzle solved!"}},t={args:{type:"success",message:"Custom icon toast",icon:E.jsx("span",{children:"✓"})}},n={args:{type:"info",message:"This is a very long toast message that should wrap properly and display all the content without any layout issues."}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is an info toast message!'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'Operation completed successfully!'
  }
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'An error occurred. Please try again.'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,f,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'Warning: This action cannot be undone.'
  }
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,w,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'achievement',
    message: 'Achievement unlocked: First puzzle solved!'
  }
}`,...(S=(w=r.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var A,b,x;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'Custom icon toast',
    icon: <span>✓</span>
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var W,j,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'This is a very long toast message that should wrap properly and display all the content without any layout issues.'
  }
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const k=["Info","Success","Error","Warning","Achievement","WithIcon","LongMessage"];export{r as Achievement,a as Error,e as Info,n as LongMessage,s as Success,o as Warning,t as WithIcon,k as __namedExportsOrder,F as default};
