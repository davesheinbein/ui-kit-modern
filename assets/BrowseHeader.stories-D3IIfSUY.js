import{B as c}from"./BrowseHeader-Dq0Ydc7K.js";import"./jsx-runtime-BjG_zV1W.js";import"./GoBackButton-Cgfxw0-F.js";import"./index-BHpnLCkc.js";import"./iframe-DhC4iHDh.js";const v={title:"Headers/BrowseHeader",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A header component for browsing pages with title, tabs, and navigation."}}},argTypes:{title:{control:"text",description:"Title to display in the header"},tabs:{control:!1,description:"Array of tab objects with label and value"},currentTab:{control:"text",description:"Currently active tab value"},setTab:{action:"tabChanged",description:"Function called when tab is changed"},onBack:{action:"backClicked",description:"Function called when back button is clicked"}}},e={args:{title:"Browse Puzzles",tabs:[{label:"All",value:"all"},{label:"Favorites",value:"favorites"},{label:"Recent",value:"recent"}],currentTab:"all",setTab:()=>{},onBack:()=>{}}},a={args:{title:"Browse Puzzles",tabs:[{label:"All",value:"all"},{label:"Favorites",value:"favorites"},{label:"Recent",value:"recent"}],currentTab:"favorites",setTab:()=>{},onBack:()=>{}}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: 'Browse Puzzles',
    tabs: [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Favorites',
      value: 'favorites'
    }, {
      label: 'Recent',
      value: 'recent'
    }],
    currentTab: 'all',
    setTab: () => {},
    onBack: () => {}
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var l,o,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Browse Puzzles',
    tabs: [{
      label: 'All',
      value: 'all'
    }, {
      label: 'Favorites',
      value: 'favorites'
    }, {
      label: 'Recent',
      value: 'recent'
    }],
    currentTab: 'favorites',
    setTab: () => {},
    onBack: () => {}
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["Default","WithFavoritesSelected"];export{e as Default,a as WithFavoritesSelected,m as __namedExportsOrder,v as default};
