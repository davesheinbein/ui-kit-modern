import{V as c}from"./VSGrid-DciY6sre.js";import"./jsx-runtime-BjG_zV1W.js";import"./WordButton-BoaH1ako.js";const A={title:"Grids/VSGrid",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A versus mode grid component for multiplayer word puzzle games."}}},argTypes:{words:{control:!1,description:"Array of words to display in the grid"},selected:{control:!1,description:"Array of currently selected words"},locked:{control:!1,description:"Array of locked words"},wildcards:{control:!1,description:"Array of wildcard words"},onSelect:{action:"wordSelected",description:"Function called when a word is selected"},opponentSelected:{control:!1,description:"Array of words selected by opponent"},playerColor:{control:"color",description:"Color for player selections"},opponentColor:{control:"color",description:"Color for opponent selections"},playerId:{control:"text",description:"ID of the current player"},opponentId:{control:"text",description:"ID of the opponent"},preview:{control:"boolean",description:"Whether in preview mode"}}},e={args:{words:["APPLE","ORANGE","BANANA","GRAPE"],selected:["APPLE"],locked:["ORANGE"],wildcards:["BANANA"],onSelect:()=>{},opponentSelected:["GRAPE"],playerColor:"#2563eb",opponentColor:"#ef4444",solvedBy:{user1:["APPLE"],user2:["GRAPE"]},playerId:"user1",opponentId:"user2",gridSize:{rows:2,cols:2},preview:!1}},o={args:{words:["WORD1","WORD2","WORD3","WORD4"],selected:[],locked:[],wildcards:[],onSelect:()=>{},opponentSelected:[],playerColor:"#2563eb",opponentColor:"#ef4444",solvedBy:{},playerId:"user1",opponentId:"user2",gridSize:{rows:2,cols:2},preview:!0}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    words: ['APPLE', 'ORANGE', 'BANANA', 'GRAPE'],
    selected: ['APPLE'],
    locked: ['ORANGE'],
    wildcards: ['BANANA'],
    onSelect: () => {},
    opponentSelected: ['GRAPE'],
    playerColor: '#2563eb',
    opponentColor: '#ef4444',
    solvedBy: {
      user1: ['APPLE'],
      user2: ['GRAPE']
    },
    playerId: 'user1',
    opponentId: 'user2',
    gridSize: {
      rows: 2,
      cols: 2
    },
    preview: false
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var t,l,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    words: ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
    selected: [],
    locked: [],
    wildcards: [],
    onSelect: () => {},
    opponentSelected: [],
    playerColor: '#2563eb',
    opponentColor: '#ef4444',
    solvedBy: {},
    playerId: 'user1',
    opponentId: 'user2',
    gridSize: {
      rows: 2,
      cols: 2
    },
    preview: true
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const w=["Default","Preview"];export{e as Default,o as Preview,w as __namedExportsOrder,A as default};
