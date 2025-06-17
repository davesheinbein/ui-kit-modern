import{P as h}from"./PrimaryButton-Dqz8N9UP.js";import"./jsx-runtime-BjG_zV1W.js";const x={title:"Buttons/PrimaryButton",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A primary button component with gradient background and hover effects."}}},argTypes:{children:{control:"text",description:"The content to display inside the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Function called when button is clicked"},className:{control:"text",description:"Additional CSS classes to apply"},type:{control:"select",options:["button","submit","reset"],description:"Button type attribute"}}},t={args:{children:"Primary Button"}},e={args:{children:"Disabled Button",disabled:!0}},r={args:{children:"This is a very long button text to test wrapping"}},o={args:{children:"Submit Form",type:"submit"}};var s,n,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button'
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long button text to test wrapping'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,b,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Submit Form',
    type: 'submit'
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["Default","Disabled","WithLongText","Submit"];export{t as Default,e as Disabled,o as Submit,r as WithLongText,B as __namedExportsOrder,x as default};
