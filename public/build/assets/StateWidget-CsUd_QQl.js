import{O as s,_ as g,a as f,e as m,w as t,b as a,o as u,g as r,f as _,r as n}from"./app-CSe-KdZ0.js";import{C as b}from"./index-BczkqwYK.js";import{S as C}from"./index-BK6GbwNt.js";const x=[],y=["bgColor"],h=s("figure",x)`
display: flex;
margin: 0;
border-radius: 1px solid black;
position: relative;
h2,
p {
  margin: 0;
}
figcaption {
  .more {
	position: absolute;
	top: 0px;
	left: 0;
	a {
	  color: #888;
	}
  }
  h2 {
	font-size: 20px;
	font-weight: 600;
  }
  p {
	font-size: 14px;
	color: #9299B8;
  }
}
`,S=s("div",y)`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${o=>o.bgColor?o.bgColor:"#5F63F2"};
margin - right: 20px;
`,W={props:{bgColor:{default:"#5F63F2"},bodyStyle:{default:{}}},components:{CardWidget:h,CardWidgetIcon:S},setup(o,{emit:d}){const{themeMode:e}=f();return{themeMode:e}}};function $(o,d,e,k,v,w){const i=a("CardWidgetIcon"),c=C,l=a("CardWidget"),p=b;return u(),m(p,{bordered:!0,bodyStyle:e.bodyStyle},{default:t(()=>[r(l,null,{default:t(()=>[r(c,null,{default:t(()=>[r(i,{bgColor:e.bgColor},{default:t(()=>[n(o.$slots,"image")]),_:3},8,["bgColor"]),_("figcaption",null,[n(o.$slots,"description")])]),_:3})]),_:3})]),_:3},8,["bodyStyle"])}const z=g(W,[["render",$]]);export{z as S};
