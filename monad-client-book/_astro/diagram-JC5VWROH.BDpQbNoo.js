import{c as B}from"./chunk-AEOMTBSW.C_MVnCZ9.js";import{d as v}from"./wardley-RL74JXVD-BCRCBASE.F5GE-Pr4.js";import{m as f,L as u,a7 as C,b as P,p as m,e as z,s as F,h as S,n as W,l as D,a as E,y as T,O as L,o as A}from"./mermaid.esm.min.OvpNIYUj.js";import"./chunk-H3VCZNTA.BuqFd6fY.js";var R=T.packet,w=class{constructor(){this.packet=[],this.setAccTitle=z,this.getAccTitle=F,this.setDiagramTitle=S,this.getDiagramTitle=W,this.getAccDescription=D,this.setAccDescription=E}static{f(this,"PacketDB")}getConfig(){let t=u({...R,...L().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){A(),this.packet=[]}},M=1e4,O=f((t,e)=>{B(t,e);let r=-1,s=[],l=1,{bitsPerRow:n}=e.getConfig();for(let{start:a,end:o,bits:c,label:d}of t.blocks){if(a!==void 0&&o!==void 0&&o<a)throw new Error(`Packet block ${a} - ${o} is invalid. End must be greater than start.`);if(a??=r+1,a!==r+1)throw new Error(`Packet block ${a} - ${o??a} is not contiguous. It should start from ${r+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(o??=a+(c??1)-1,c??=o-a+1,r=o,m.debug(`Packet block ${a} - ${r} with label ${d}`);s.length<=n+1&&e.getPacket().length<M;){let[p,i]=Y({start:a,end:o,bits:c,label:d},l,n);if(s.push(p),p.end+1===l*n&&(e.pushWord(s),s=[],l++),!i)break;({start:a,end:o,bits:c,label:d}=i)}}e.pushWord(s)},"populate"),Y=f((t,e,r)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*r)return[t,void 0];let s=e*r-1,l=e*r;return[{start:t.start,end:s,label:t.label,bits:s-t.start},{start:l,end:t.end,label:t.label,bits:t.end-l}]},"getNextFittingBlock"),y={parser:{yy:void 0},parse:f(async t=>{let e=await v("packet",t),r=y.parser?.yy;if(!(r instanceof w))throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");m.debug(e),O(e,r)},"parse")},H=f((t,e,r,s)=>{let l=s.db,n=l.getConfig(),{rowHeight:a,paddingY:o,bitWidth:c,bitsPerRow:d}=n,p=l.getPacket(),i=l.getDiagramTitle(),b=a+o,h=b*(p.length+1)-(i?0:a),k=c*d+2,g=C(e);g.attr("viewBox",`0 0 ${k} ${h}`),P(g,h,k,n.useMaxWidth);for(let[$,x]of p.entries())N(g,x,$,n);g.append("text").text(i).attr("x",k/2).attr("y",h-b/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),N=f((t,e,r,{rowHeight:s,paddingX:l,paddingY:n,bitWidth:a,bitsPerRow:o,showBits:c})=>{let d=t.append("g"),p=r*(s+n)+n;for(let i of e){let b=i.start%o*a+1,h=(i.end-i.start+1)*a-l;if(d.append("rect").attr("x",b).attr("y",p).attr("width",h).attr("height",s).attr("class","packetBlock"),d.append("text").attr("x",b+h/2).attr("y",p+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!c)continue;let k=i.end===i.start,g=p-2;d.append("text").attr("x",b+(k?h/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),k||d.append("text").attr("x",b+h).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),j={draw:H},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},G=f(({packet:t}={})=>{let e=u(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),J={parser:y,get db(){return new w},renderer:j,styles:G};export{J as diagram};
