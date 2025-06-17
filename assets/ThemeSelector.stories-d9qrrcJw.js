import{T as l}from"./ThemeSelector-CP-w3ntP.js";import"./jsx-runtime-BjG_zV1W.js";const h={title:"Theme/ThemeSelector",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A theme selector component for switching between different visual themes."}}},argTypes:{value:{control:"text",description:"Currently selected theme value"},onChange:{action:"themeChanged",description:"Function called when theme selection changes"},themes:{control:!1,description:"Array of available theme options"}}},e={args:{themes:["Light","Dark","Blue","Green"],value:"Light",onChange:()=>{}}},t={args:{themes:["Light","Dark","Blue","Green"],value:"Dark",onChange:()=>{}}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    themes: ['Light', 'Dark', 'Blue', 'Green'],
    value: 'Light',
    onChange: () => {}
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    themes: ['Light', 'Dark', 'Blue', 'Green'],
    value: 'Dark',
    onChange: () => {}
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const u=["Default","DarkSelected"];export{t as DarkSelected,e as Default,u as __namedExportsOrder,h as default};
