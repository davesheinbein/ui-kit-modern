import{P as u}from"./PregameGridLockout-Bdd-iVMD.js";import"./jsx-runtime-BjG_zV1W.js";const W={title:"Grids/PregameGridLockout",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A locked grid displayed before the game starts, showing a blurred preview of the puzzle."}}},argTypes:{gridWords:{control:!1,description:"Array of words to display in the grid"},gridCols:{control:"number",description:"Number of columns in the grid"},gridRows:{control:"number",description:"Number of rows in the grid"}}},r={args:{gridWords:Array(16).fill("WORD").map((s,d)=>`${s}${d+1}`),gridCols:4,gridRows:4}},o={args:{gridWords:["WORD1","WORD2","WORD3","WORD4"],gridCols:2,gridRows:2}},e={args:{gridWords:Array(9).fill("WORD").map((s,d)=>`${s}${d+1}`),gridCols:3,gridRows:3}};var a,i,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    gridWords: Array(16).fill('WORD').map((word, i) => \`\${word}\${i + 1}\`),
    gridCols: 4,
    gridRows: 4
  }
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var n,g,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    gridWords: ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
    gridCols: 2,
    gridRows: 2
  }
}`,...(c=(g=o.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var l,m,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    gridWords: Array(9).fill('WORD').map((word, i) => \`\${word}\${i + 1}\`),
    gridCols: 3,
    gridRows: 3
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const f=["Default","TwoByTwo","ThreeByThree"];export{r as Default,e as ThreeByThree,o as TwoByTwo,f as __namedExportsOrder,W as default};
