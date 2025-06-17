import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{M as u}from"./Modal-DPOOfyQI.js";const C={title:"Modals/Modal",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A reusable modal component with overlay background and customizable content."}}},argTypes:{open:{control:"boolean",description:"Whether the modal is open/visible"},onClose:{action:"closed",description:"Function called when the modal should be closed"},children:{control:!1,description:"The content to display inside the modal"},className:{control:"text",description:"Additional CSS classes for the modal overlay"},contentClassName:{control:"text",description:"Additional CSS classes for the modal content"}}},n={args:{open:!0,onClose:()=>{},children:e.jsx("div",{style:{padding:"2rem"},children:"Modal Content"})}},o={args:{open:!0,onClose:()=>{},children:e.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[e.jsx("h2",{children:"Custom Modal"}),e.jsx("p",{children:"This is a modal with custom content including text and buttons."}),e.jsx("button",{style:{marginTop:"1rem",padding:"0.5rem 1rem"},children:"Action Button"})]})}},t={args:{open:!1,onClose:()=>{},children:e.jsx("div",{style:{padding:"2rem"},children:"This modal is closed"})}};var s,r,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    children: <div style={{
      padding: '2rem'
    }}>Modal Content</div>
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var d,i,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => {},
    children: <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
                <h2>Custom Modal</h2>
                <p>
                    This is a modal with custom content including text
                    and buttons.
                </p>
                <button style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem'
      }}>
                    Action Button
                </button>
            </div>
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {},
    children: <div style={{
      padding: '2rem'
    }}>
                This modal is closed
            </div>
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Default","WithCustomContent","Closed"];export{t as Closed,n as Default,o as WithCustomContent,x as __namedExportsOrder,C as default};
