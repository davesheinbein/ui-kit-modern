import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as f}from"./IconButton-Drb0iR3q.js";const S={title:"Buttons/IconButton",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"An icon button component that displays an icon with optional label for accessibility."}}},argTypes:{icon:{control:!1,description:"The icon element to display"},label:{control:"text",description:"Accessibility label for the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Function called when button is clicked"},className:{control:"text",description:"Additional CSS classes to apply"},type:{control:"select",options:["button","submit","reset"],description:"Button type attribute"}}},o={args:{icon:e.jsx("span",{children:"🔔"}),label:"Notify"}},t={args:{icon:e.jsx("span",{children:"🔔"}),label:"Notify",disabled:!0}},s={args:{icon:e.jsx("span",{children:"⚙️"})}},n={args:{icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6L7 10.5 4.5 8 5.91 6.59 7 7.68l3.59-3.59L12 5.5z"})}),label:"Success"}};var a,r,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    icon: <span>🔔</span>,
    label: 'Notify'
  }
}`,...(c=(r=o.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon: <span>🔔</span>,
    label: 'Notify',
    disabled: true
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: <span>⚙️</span>
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,h,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: <svg width='16' height='16' viewBox='0 0 16 16' fill='currentColor'>
                <path d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6L7 10.5 4.5 8 5.91 6.59 7 7.68l3.59-3.59L12 5.5z' />
            </svg>,
    label: 'Success'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const j=["Default","Disabled","WithoutLabel","WithSVGIcon"];export{o as Default,t as Disabled,n as WithSVGIcon,s as WithoutLabel,j as __namedExportsOrder,S as default};
