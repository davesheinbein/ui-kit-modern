import{W as b}from"./WordButton-BoaH1ako.js";import"./jsx-runtime-BjG_zV1W.js";const W={title:"Buttons/WordButton",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"A specialized button for word-based games with selection, lock, and burn states."}}},argTypes:{word:{control:"text",description:"The word to display on the button"},isSelected:{control:"boolean",description:"Whether the word is currently selected"},isLocked:{control:"boolean",description:"Whether the word button is locked/disabled"},burnSuspect:{control:"boolean",description:"Whether the word is suspected to be incorrect"},isBurned:{control:"boolean",description:"Whether the word has been marked as incorrect"},onClick:{action:"clicked",description:"Function called when word is clicked"},onKeyDown:{action:"keyDown",description:"Function called when key is pressed"}}},e={args:{word:"Example",isSelected:!1,isLocked:!1}},r={args:{word:"Selected",isSelected:!0,isLocked:!1}},s={args:{word:"Locked",isSelected:!1,isLocked:!0}},o={args:{word:"Suspect",isSelected:!1,isLocked:!1,burnSuspect:!0}},t={args:{word:"Burned",isSelected:!1,isLocked:!1,isBurned:!0}};var c,n,a;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    word: 'Example',
    isSelected: false,
    isLocked: false
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    word: 'Selected',
    isSelected: true,
    isLocked: false
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    word: 'Locked',
    isSelected: false,
    isLocked: true
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var S,k,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    word: 'Suspect',
    isSelected: false,
    isLocked: false,
    burnSuspect: true
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var f,g,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    word: 'Burned',
    isSelected: false,
    isLocked: false,
    isBurned: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const y=["Default","Selected","Locked","BurnSuspect","Burned"];export{o as BurnSuspect,t as Burned,e as Default,s as Locked,r as Selected,y as __namedExportsOrder,W as default};
