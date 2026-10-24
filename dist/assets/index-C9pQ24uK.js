(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="160",cu=0,Jo=1,hu=2,Kc=1,Jc=2,Nn=3,Gn=0,Ve=1,De=2,ei=0,ss=1,ri=2,jo=3,Qo=4,uu=5,_i=100,du=101,fu=102,tl=103,el=104,pu=200,mu=201,gu=202,_u=203,io=204,so=205,vu=206,xu=207,Mu=208,yu=209,Su=210,Eu=211,bu=212,wu=213,Tu=214,Au=0,Ru=1,Pu=2,Ir=3,Cu=4,Lu=5,Iu=6,Du=7,jc=0,Uu=1,Nu=2,ni=0,Fu=1,Ou=2,Bu=3,zu=4,ku=5,Hu=6,Qc=300,os=301,ls=302,ro=303,ao=304,Xr=306,Ei=1e3,mn=1001,oo=1002,Ze=1003,nl=1004,la=1005,hn=1006,Gu=1007,Fs=1008,ii=1009,Vu=1010,Wu=1011,bo=1012,th=1013,Qn=1014,ti=1015,Os=1016,eh=1017,nh=1018,Mi=1020,Xu=1021,gn=1023,qu=1024,Yu=1025,yi=1026,cs=1027,Zu=1028,ih=1029,$u=1030,sh=1031,rh=1033,ca=33776,ha=33777,ua=33778,da=33779,il=35840,sl=35841,rl=35842,al=35843,ah=36196,ol=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,Ml=37819,yl=37820,Sl=37821,fa=36492,El=36494,bl=36495,Ku=36283,wl=36284,Tl=36285,Al=36286,oh=3e3,Si=3001,Ju=3200,ju=3201,lh=0,Qu=1,rn="",fe="srgb",Vn="srgb-linear",wo="display-p3",qr="display-p3-linear",Dr="linear",he="srgb",Ur="rec709",Nr="p3",Ri=7680,Rl=519,td=512,ed=513,nd=514,ch=515,id=516,sd=517,rd=518,ad=519,lo=35044,Pl="300 es",co=1035,zn=2e3,Fr=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,ho=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function od(n,t){return(n%t+t)%t}function ma(n,t,e){return(1-e)*n+e*t}function Cl(n){return(n&n-1)===0&&n!==0}function uo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,s,r,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],_=i[8],g=s[0],d=s[3],f=s[6],x=s[1],v=s[4],y=s[7],C=s[2],A=s[5],R=s[8];return r[0]=a*g+o*x+l*C,r[3]=a*d+o*v+l*A,r[6]=a*f+o*y+l*R,r[1]=c*g+h*x+u*C,r[4]=c*d+h*v+u*A,r[7]=c*f+h*y+u*R,r[2]=p*g+m*x+_*C,r[5]=p*d+m*v+_*A,r[8]=p*f+m*y+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,p=o*l-h*r,m=c*r-a*l,_=e*u+i*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*i)*g,t[2]=(o*i-s*a)*g,t[3]=p*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-o*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ga.makeScale(t,e)),this}rotate(t){return this.premultiply(ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new $t;function hh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ld(){const n=Or("canvas");return n.style.display="block",n}const Ll={};function Ds(n){n in Ll||(Ll[n]=!0,console.warn(n))}const Il=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dl=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[Vn]:{transfer:Dr,primaries:Ur,toReference:n=>n,fromReference:n=>n},[fe]:{transfer:he,primaries:Ur,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qr]:{transfer:Dr,primaries:Nr,toReference:n=>n.applyMatrix3(Dl),fromReference:n=>n.applyMatrix3(Il)},[wo]:{transfer:he,primaries:Nr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dl),fromReference:n=>n.applyMatrix3(Il).convertLinearToSRGB()}},cd=new Set([Vn,qr]),ie={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Zs[t].toReference,s=Zs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Zs[n].primaries},getTransfer:function(n){return n===rn?Dr:Zs[n].transfer}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Or("canvas")),Pi.width=t.width,Pi.height=t.height;const i=Pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rs(e[i]/255)*255):e[i]=rs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hd=0;class dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class Je extends ps{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=mn,s=mn,r=hn,a=Fs,o=gn,l=ii,c=Je.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=kn(),this.name="",this.source=new dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Si?fe:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Si:oh}set encoding(t){Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Si?fe:rn}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Qc;Je.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],_=l[9],g=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(m+1)/2,C=(f+1)/2,A=(h+p)/4,R=(u+g)/4,H=(_+d)/4;return v>y&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=R/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=H/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=H/r),this.set(i,s,r,e),this}let x=Math.sqrt((d-_)*(d-_)+(u-g)*(u-g)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(d-_)/x,this.y=(u-g)/x,this.z=(p-h)/x,this.w=Math.acos((c+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Si?fe:rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends dd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fh extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fd extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==p||c!==m||h!==_){let d=1-o;const f=l*p+c*m+h*_+u*g,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,f*x);d=Math.sin(d*A)/C,o=Math.sin(o*A)/C}const y=o*x;if(l=l*d+p*y,c=c*d+m*y,h=h*d+_*y,u=u*d+g*y,d===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*p,t[e+1]=l*_+h*p+c*u-o*m,t[e+2]=c*_+h*m+o*p-l*u,t[e+3]=h*_-o*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),p=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"YXZ":this._x=p*h*u+c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"ZXY":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u-p*m*_;break;case"ZYX":this._x=p*h*u-c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u+p*m*_;break;case"YZX":this._x=p*h*u+c*m*_,this._y=c*m*u+p*h*_,this._z=c*h*_-p*m*u,this._w=c*h*u-p*m*_;break;case"XZY":this._x=p*h*u-c*m*_,this._y=c*m*u-p*h*_,this._z=c*h*_+p*m*u,this._w=c*h*u+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,i=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new b,Ul=new Ws;class Oe{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Ks.subVectors(this.max,xs),Ci.subVectors(t.a,xs),Li.subVectors(t.b,xs),Ii.subVectors(t.c,xs),qn.subVectors(Li,Ci),Yn.subVectors(Ii,Li),ui.subVectors(Ci,Ii);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!Ma(e,Ci,Li,Ii,Ks)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Ci,Li,Ii,Ks))?!1:(Js.crossVectors(qn,Yn),e=[Js.x,Js.y,Js.z],Ma(e,Ci,Li,Ii,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new b,new b,new b,new b,new b,new b,new b,new b],dn=new b,$s=new Oe,Ci=new b,Li=new b,Ii=new b,qn=new b,Yn=new b,ui=new b,xs=new b,Ks=new b,Js=new b,di=new b;function Ma(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){di.fromArray(n,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pd=new Oe,Ms=new b,ya=new b;class ms{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ms,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(ya)),this.expandByPoint(Ms.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new b,Sa=new b,js=new b,Zn=new b,Ea=new b,Qs=new b,ba=new b;class To{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Sa.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=Zn.dot(this.direction),l=-Zn.dot(js),c=Zn.lengthSq(),h=Math.abs(1-a*a);let u,p,m,_;if(h>0)if(u=a*l-o,p=a*o-l,_=r*h,u>=0)if(p>=-_)if(p<=_){const g=1/h;u*=g,p*=g,m=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(js,p),m}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const i=Cn.dot(this.direction),s=Cn.dot(Cn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(i=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,i,s,r){Ea.subVectors(e,t),Qs.subVectors(i,t),ba.crossVectors(Ea,Qs);let a=this.direction.dot(ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const l=o*this.direction.dot(Qs.crossVectors(Zn,Qs));if(l<0)return null;const c=o*this.direction.dot(Ea.cross(Zn));if(c<0||l+c>a)return null;const h=-o*Zn.dot(ba);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,s,r,a,o,l,c,h,u,p,m,_,g,d){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,p,m,_,g,d)}set(t,e,i,s,r,a,o,l,c,h,u,p,m,_,g,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=_,f[11]=g,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=p-g*c,e[9]=-o*l,e[2]=g-p*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*h,m=l*u,_=c*h,g=c*u;e[0]=p+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=g+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*h,m=l*u,_=c*h,g=c*u;e[0]=p-g*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=g-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*h,m=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=p*c+g,e[1]=l*u,e[5]=g*c+p,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-p*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=p-g*u}else if(t.order==="XZY"){const p=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+g,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=g*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(i,en),$n.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(i,en)),$n.normalize(),tr.crossVectors(en,$n),s[0]=$n.x,s[4]=tr.x,s[8]=en.x,s[1]=$n.y,s[5]=tr.y,s[9]=en.y,s[2]=$n.z,s[6]=tr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],_=i[2],g=i[6],d=i[10],f=i[14],x=i[3],v=i[7],y=i[11],C=i[15],A=s[0],R=s[4],H=s[8],E=s[12],T=s[1],B=s[5],V=s[9],nt=s[13],I=s[2],N=s[6],k=s[10],$=s[14],Y=s[3],Z=s[7],K=s[11],st=s[15];return r[0]=a*A+o*T+l*I+c*Y,r[4]=a*R+o*B+l*N+c*Z,r[8]=a*H+o*V+l*k+c*K,r[12]=a*E+o*nt+l*$+c*st,r[1]=h*A+u*T+p*I+m*Y,r[5]=h*R+u*B+p*N+m*Z,r[9]=h*H+u*V+p*k+m*K,r[13]=h*E+u*nt+p*$+m*st,r[2]=_*A+g*T+d*I+f*Y,r[6]=_*R+g*B+d*N+f*Z,r[10]=_*H+g*V+d*k+f*K,r[14]=_*E+g*nt+d*$+f*st,r[3]=x*A+v*T+y*I+C*Y,r[7]=x*R+v*B+y*N+C*Z,r[11]=x*H+v*V+y*k+C*K,r[15]=x*E+v*nt+y*$+C*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],_=t[3],g=t[7],d=t[11],f=t[15];return _*(+r*l*u-s*c*u-r*o*p+i*c*p+s*o*m-i*l*m)+g*(+e*l*m-e*c*p+r*a*p-s*a*m+s*c*h-r*l*h)+d*(+e*c*u-e*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+f*(-s*o*h-e*l*u+e*o*p+s*a*u-i*a*p+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],_=t[12],g=t[13],d=t[14],f=t[15],x=u*d*c-g*p*c+g*l*m-o*d*m-u*l*f+o*p*f,v=_*p*c-h*d*c-_*l*m+a*d*m+h*l*f-a*p*f,y=h*g*c-_*u*c+_*o*m-a*g*m-h*o*f+a*u*f,C=_*u*l-h*g*l-_*o*p+a*g*p+h*o*d-a*u*d,A=e*x+i*v+s*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(g*p*r-u*d*r-g*s*m+i*d*m+u*s*f-i*p*f)*R,t[2]=(o*d*r-g*l*r+g*s*c-i*d*c-o*s*f+i*l*f)*R,t[3]=(u*l*r-o*p*r-u*s*c+i*p*c+o*s*m-i*l*m)*R,t[4]=v*R,t[5]=(h*d*r-_*p*r+_*s*m-e*d*m-h*s*f+e*p*f)*R,t[6]=(_*l*r-a*d*r-_*s*c+e*d*c+a*s*f-e*l*f)*R,t[7]=(a*p*r-h*l*r+h*s*c-e*p*c-a*s*m+e*l*m)*R,t[8]=y*R,t[9]=(_*u*r-h*g*r-_*i*m+e*g*m+h*i*f-e*u*f)*R,t[10]=(a*g*r-_*o*r+_*i*c-e*g*c-a*i*f+e*o*f)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*m-e*o*m)*R,t[12]=C*R,t[13]=(h*g*s-_*u*s+_*i*p-e*g*p-h*i*d+e*u*d)*R,t[14]=(_*o*s-a*g*s-_*i*l+e*g*l+a*i*d-e*o*d)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*p+e*o*p)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,p=r*c,m=r*h,_=r*u,g=a*h,d=a*u,f=o*u,x=l*c,v=l*h,y=l*u,C=i.x,A=i.y,R=i.z;return s[0]=(1-(g+f))*C,s[1]=(m+y)*C,s[2]=(_-v)*C,s[3]=0,s[4]=(m-y)*A,s[5]=(1-(p+f))*A,s[6]=(d+x)*A,s[7]=0,s[8]=(_+v)*R,s[9]=(d-x)*R,s[10]=(1-(p+g))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,h=1/a,u=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=zn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s);let m,_;if(o===zn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Fr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=zn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),p=(e+t)*c,m=(i+s)*h;let _,g;if(o===zn)_=(a+r)*u,g=-2*u;else if(o===Fr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Di=new b,fn=new se,md=new b(0,0,0),gd=new b(1,1,1),$n=new b,tr=new b,en=new b,Nl=new se,Fl=new Ws;class Xs{constructor(t=0,e=0,i=0,s=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _d=0;const Ol=new b,Ui=new Ws,Ln=new se,er=new b,ys=new b,vd=new b,xd=new Ws,Bl=new b(1,0,0),zl=new b(0,1,0),kl=new b(0,0,1),Md={type:"added"},yd={type:"removed"};class xe extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new b,e=new Xs,i=new Ws,s=new b(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new $t}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Ol.copy(t).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?er.copy(t):er.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ys,er,this.up):Ln.lookAt(er,ys,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Md)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}xe.DEFAULT_UP=new b(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new b,In=new b,wa=new b,Dn=new b,Ni=new b,Fi=new b,Hl=new b,Ta=new b,Aa=new b,Ra=new b;let nr=!1;class un{constructor(t=new b,e=new b,i=new b){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),In.subVectors(i,e),wa.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(In),l=pn.dot(wa),c=In.dot(In),h=In.dot(wa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,i,s,r,a,o,l){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),In.subVectors(t,e),pn.cross(In).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),pn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return nr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nr=!0),un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ni.subVectors(s,i),Fi.subVectors(r,i),Ta.subVectors(t,i);const l=Ni.dot(Ta),c=Fi.dot(Ta);if(l<=0&&c<=0)return e.copy(i);Aa.subVectors(t,s);const h=Ni.dot(Aa),u=Fi.dot(Aa);if(h>=0&&u<=h)return e.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ni,a);Ra.subVectors(t,r);const m=Ni.dot(Ra),_=Fi.dot(Ra);if(_>=0&&m<=_)return e.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Fi,o);const d=h*_-m*u;if(d<=0&&u-h>=0&&m-_>=0)return Hl.subVectors(r,s),o=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(Hl,o);const f=1/(d+g+p);return a=g*f,o=p*f,e.copy(i).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Pa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=od(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Pa(a,r,t+1/3),this.g=Pa(a,r,t),this.b=Pa(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const i=ph[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ie.fromWorkingColorSpace(He.copy(this),t),Math.round(Fe(He.r*255,0,255))*65536+Math.round(Fe(He.g*255,0,255))*256+Math.round(Fe(He.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(He.copy(this),e);const i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=fe){ie.fromWorkingColorSpace(He.copy(this),t);const e=He.r,i=He.g,s=He.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(ir);const i=ma(Kn.h,ir.h,e),s=ma(Kn.s,ir.s,e),r=ma(Kn.l,ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Xt;Xt.NAMES=ph;let Sd=0;class Ai extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ss,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==io&&(i.blendSrc=this.blendSrc),this.blendDst!==so&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ce extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new b,sr=new it;class je{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lo&&(t.usage=this.usage),t}}class mh extends je{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gh extends je{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qt extends je{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ed=0;const on=new se,Ca=new xe,Oi=new b,nn=new Oe,Ss=new Oe,Ie=new b;class Ee extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hh(t)?gh:mh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(nn.min,Ss.min),nn.expandByPoint(Ie),Ie.addVectors(nn.max,Ss.max),nn.expandByPoint(Ie)):(nn.expandByPoint(Ss.min),nn.expandByPoint(Ss.max))}nn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(t,c),Ie.add(Oi)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new b,h[T]=new b;const u=new b,p=new b,m=new b,_=new it,g=new it,d=new it,f=new b,x=new b;function v(T,B,V){u.fromArray(s,T*3),p.fromArray(s,B*3),m.fromArray(s,V*3),_.fromArray(a,T*2),g.fromArray(a,B*2),d.fromArray(a,V*2),p.sub(u),m.sub(u),g.sub(_),d.sub(_);const nt=1/(g.x*d.y-d.x*g.y);isFinite(nt)&&(f.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(nt),x.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(nt),c[T].add(f),c[B].add(f),c[V].add(f),h[T].add(x),h[B].add(x),h[V].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,B=y.length;T<B;++T){const V=y[T],nt=V.start,I=V.count;for(let N=nt,k=nt+I;N<k;N+=3)v(i[N+0],i[N+1],i[N+2])}const C=new b,A=new b,R=new b,H=new b;function E(T){R.fromArray(r,T*3),H.copy(R);const B=c[T];C.copy(B),C.sub(R.multiplyScalar(R.dot(B))).normalize(),A.crossVectors(H,B);const nt=A.dot(h[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=nt}for(let T=0,B=y.length;T<B;++T){const V=y[T],nt=V.start,I=V.count;for(let N=nt,k=nt+I;N<k;N+=3)E(i[N+0]),E(i[N+1]),E(i[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new b,r=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let p=0,m=t.count;p<m;p+=3){const _=t.getX(p+0),g=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,_=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)p[_++]=c[m++]}return new je(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=t(p,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new se,fi=new To,rr=new ms,Vl=new b,Bi=new b,zi=new b,ki=new b,La=new b,ar=new b,or=new it,lr=new it,cr=new it,Wl=new b,Xl=new b,ql=new b,hr=new b,ur=new b;class X extends xe{constructor(t=new Ee,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,t),a?ar.addScaledVector(La,h):ar.addScaledVector(La.sub(e),h))}e.add(ar)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(rr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(rr,Vl)===null||fi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Gl),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const d=p[_],f=a[d.materialIndex],x=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let y=x,C=v;y<C;y+=3){const A=o.getX(y),R=o.getX(y+1),H=o.getX(y+2);s=dr(this,f,t,i,c,h,u,A,R,H),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let d=_,f=g;d<f;d+=3){const x=o.getX(d),v=o.getX(d+1),y=o.getX(d+2);s=dr(this,a,t,i,c,h,u,x,v,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const d=p[_],f=a[d.materialIndex],x=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let y=x,C=v;y<C;y+=3){const A=y,R=y+1,H=y+2;s=dr(this,f,t,i,c,h,u,A,R,H),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=_,f=g;d<f;d+=3){const x=d,v=d+1,y=d+2;s=dr(this,a,t,i,c,h,u,x,v,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function bd(n,t,e,i,s,r,a,o){let l;if(t.side===Ve?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Gn,o),l===null)return null;ur.copy(o),ur.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:n}}function dr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Bi),n.getVertexPosition(l,zi),n.getVertexPosition(c,ki);const h=bd(n,t,e,i,Bi,zi,ki,hr);if(h){s&&(or.fromBufferAttribute(s,o),lr.fromBufferAttribute(s,l),cr.fromBufferAttribute(s,c),h.uv=un.getInterpolation(hr,Bi,zi,ki,or,lr,cr,new it)),r&&(or.fromBufferAttribute(r,o),lr.fromBufferAttribute(r,l),cr.fromBufferAttribute(r,c),h.uv1=un.getInterpolation(hr,Bi,zi,ki,or,lr,cr,new it),h.uv2=h.uv1),a&&(Wl.fromBufferAttribute(a,o),Xl.fromBufferAttribute(a,l),ql.fromBufferAttribute(a,c),h.normal=un.getInterpolation(hr,Bi,zi,ki,Wl,Xl,ql,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new b,materialIndex:0};un.getNormal(Bi,zi,ki,u.normal),h.face=u}return h}class _t extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let p=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function _(g,d,f,x,v,y,C,A,R,H,E){const T=y/R,B=C/H,V=y/2,nt=C/2,I=A/2,N=R+1,k=H+1;let $=0,Y=0;const Z=new b;for(let K=0;K<k;K++){const st=K*B-nt;for(let at=0;at<N;at++){const G=at*T-V;Z[g]=G*x,Z[d]=st*v,Z[f]=I,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[d]=0,Z[f]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(at/R),u.push(1-K/H),$+=1}}for(let K=0;K<H;K++)for(let st=0;st<R;st++){const at=p+st+N*K,G=p+st+N*(K+1),j=p+(st+1)+N*(K+1),pt=p+(st+1)+N*K;l.push(at,G,pt),l.push(G,j,pt),Y+=6}o.addGroup(m,Y,E),m+=Y,p+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=hs(n[e]);for(const s in i)t[s]=i[s]}return t}function wd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _h(n){return n.getRenderTarget()===null?n.outputColorSpace:ie.workingColorSpace}const Td={clone:hs,merge:Ye};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vh extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends vh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Pd extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new $e(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const a=new $e(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new $e(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const l=new $e(Hi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new $e(Hi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xh extends Je{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cd extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Si?fe:rn),this.texture=new xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _t(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:ei});r.uniforms.tEquirect.value=e;const a=new X(s,r),o=e.minFilter;return e.minFilter===Fs&&(e.minFilter=hn),new Pd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Ia=new b,Ld=new b,Id=new $t;class mi{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ia.subVectors(i,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Id.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ms,fr=new b;class Ro{constructor(t=new mi,e=new mi,i=new mi,s=new mi,r=new mi,a=new mi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],_=s[9],g=s[10],d=s[11],f=s[12],x=s[13],v=s[14],y=s[15];if(i[0].setComponents(l-r,p-c,d-m,y-f).normalize(),i[1].setComponents(l+r,p+c,d+m,y+f).normalize(),i[2].setComponents(l+a,p+h,d+_,y+x).normalize(),i[3].setComponents(l-a,p-h,d-_,y-x).normalize(),i[4].setComponents(l-o,p-u,d-g,y-v).normalize(),e===zn)i[5].setComponents(l+o,p+u,d+g,y+v).normalize();else if(e===Fr)i[5].setComponents(o,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Dd(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,h){const u=c.array,p=c.usage,m=u.byteLength,_=n.createBuffer();n.bindBuffer(h,_),n.bufferData(h,u,p),c.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const p=h.array,m=h._updateRange,_=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&_.length===0&&n.bufferSubData(u,0,p),_.length!==0){for(let g=0,d=_.length;g<d;g++){const f=_[g];e?n.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):n.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}class Qe extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,p=e/l,m=[],_=[],g=[],d=[];for(let f=0;f<h;f++){const x=f*p-a;for(let v=0;v<c;v++){const y=v*u-r;_.push(y,-x,0),g.push(0,0,1),d.push(v/o),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,y=x+c*(f+1),C=x+1+c*(f+1),A=x+1+c*f;m.push(v,y,A),m.push(y,C,A)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Ud,alphahash_pars_fragment:Nd,alphamap_fragment:Fd,alphamap_pars_fragment:Od,alphatest_fragment:Bd,alphatest_pars_fragment:zd,aomap_fragment:kd,aomap_pars_fragment:Hd,batching_pars_vertex:Gd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:jd,color_fragment:Qd,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,cube_uv_reflection_fragment:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Rf,envmap_vertex:_f,fog_vertex:vf,fog_pars_vertex:xf,fog_fragment:Mf,fog_pars_fragment:yf,gradientmap_pars_fragment:Sf,lightmap_fragment:Ef,lightmap_pars_fragment:bf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Tf,lights_pars_begin:Af,lights_toon_fragment:Pf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Lf,lights_phong_pars_fragment:If,lights_physical_fragment:Df,lights_physical_pars_fragment:Uf,lights_fragment_begin:Nf,lights_fragment_maps:Ff,lights_fragment_end:Of,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Hf,map_fragment:Gf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphcolor_vertex:Zf,morphnormal_vertex:$f,morphtarget_pars_vertex:Kf,morphtarget_vertex:Jf,normal_fragment_begin:jf,normal_fragment_maps:Qf,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:_p,shadowmap_vertex:vp,shadowmask_pars_fragment:xp,skinbase_vertex:Mp,skinning_pars_vertex:yp,skinning_vertex:Sp,skinnormal_vertex:Ep,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Rp,transmission_pars_fragment:Pp,uv_pars_fragment:Cp,uv_pars_vertex:Lp,uv_vertex:Ip,worldpos_vertex:Dp,background_vert:Up,background_frag:Np,backgroundCube_vert:Fp,backgroundCube_frag:Op,cube_vert:Bp,cube_frag:zp,depth_vert:kp,depth_frag:Hp,distanceRGBA_vert:Gp,distanceRGBA_frag:Vp,equirect_vert:Wp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:Jp,meshmatcap_vert:jp,meshmatcap_frag:Qp,meshnormal_vert:t0,meshnormal_frag:e0,meshphong_vert:n0,meshphong_frag:i0,meshphysical_vert:s0,meshphysical_frag:r0,meshtoon_vert:a0,meshtoon_frag:o0,points_vert:l0,points_frag:c0,shadow_vert:h0,shadow_frag:u0,sprite_vert:d0,sprite_frag:f0},ct={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},En={basic:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ye([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ye([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ye([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ye([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ye([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ye([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ye([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ye([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ye([ct.common,ct.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ye([ct.lights,ct.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};En.physical={uniforms:Ye([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const pr={r:0,b:0,g:0};function p0(n,t,e,i,s,r,a){const o=new Xt(0);let l=r===!0?0:1,c,h,u=null,p=0,m=null;function _(d,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xr)?(h===void 0&&(h=new X(new _t(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:hs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(u!==v||p!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,m=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new X(new Qe(2,2),new ai({name:"BackgroundMaterial",uniforms:hs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,f){d.getRGB(pr,_h(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(d,f=1){o.set(d),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(o,l)},render:_}}function m0(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=d(null);let c=l,h=!1;function u(I,N,k,$,Y){let Z=!1;if(a){const K=g($,k,N);c!==K&&(c=K,m(c.object)),Z=f(I,$,k,Y),Z&&x(I,$,k,Y)}else{const K=N.wireframe===!0;(c.geometry!==$.id||c.program!==k.id||c.wireframe!==K)&&(c.geometry=$.id,c.program=k.id,c.wireframe=K,Z=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,H(I,N,k,$),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,N,k){const $=k.wireframe===!0;let Y=o[I.id];Y===void 0&&(Y={},o[I.id]=Y);let Z=Y[N.id];Z===void 0&&(Z={},Y[N.id]=Z);let K=Z[$];return K===void 0&&(K=d(p()),Z[$]=K),K}function d(I){const N=[],k=[],$=[];for(let Y=0;Y<s;Y++)N[Y]=0,k[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:$,object:I,attributes:{},index:null}}function f(I,N,k,$){const Y=c.attributes,Z=N.attributes;let K=0;const st=k.getAttributes();for(const at in st)if(st[at].location>=0){const j=Y[at];let pt=Z[at];if(pt===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor)),j===void 0||j.attribute!==pt||pt&&j.data!==pt.data)return!0;K++}return c.attributesNum!==K||c.index!==$}function x(I,N,k,$){const Y={},Z=N.attributes;let K=0;const st=k.getAttributes();for(const at in st)if(st[at].location>=0){let j=Z[at];j===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const pt={};pt.attribute=j,j&&j.data&&(pt.data=j.data),Y[at]=pt,K++}c.attributes=Y,c.attributesNum=K,c.index=$}function v(){const I=c.newAttributes;for(let N=0,k=I.length;N<k;N++)I[N]=0}function y(I){C(I,0)}function C(I,N){const k=c.newAttributes,$=c.enabledAttributes,Y=c.attributeDivisors;k[I]=1,$[I]===0&&(n.enableVertexAttribArray(I),$[I]=1),Y[I]!==N&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,N),Y[I]=N)}function A(){const I=c.newAttributes,N=c.enabledAttributes;for(let k=0,$=N.length;k<$;k++)N[k]!==I[k]&&(n.disableVertexAttribArray(k),N[k]=0)}function R(I,N,k,$,Y,Z,K){K===!0?n.vertexAttribIPointer(I,N,k,Y,Z):n.vertexAttribPointer(I,N,k,$,Y,Z)}function H(I,N,k,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const Y=$.attributes,Z=k.getAttributes(),K=N.defaultAttributeValues;for(const st in Z){const at=Z[st];if(at.location>=0){let G=Y[st];if(G===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const j=G.normalized,pt=G.itemSize,St=e.get(G);if(St===void 0)continue;const vt=St.buffer,It=St.type,zt=St.bytesPerElement,Et=i.isWebGL2===!0&&(It===n.INT||It===n.UNSIGNED_INT||G.gpuType===th);if(G.isInterleavedBufferAttribute){const Ot=G.data,P=Ot.stride,ot=G.offset;if(Ot.isInstancedInterleavedBuffer){for(let q=0;q<at.locationSize;q++)C(at.location+q,Ot.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let q=0;q<at.locationSize;q++)y(at.location+q);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let q=0;q<at.locationSize;q++)R(at.location+q,pt/at.locationSize,It,j,P*zt,(ot+pt/at.locationSize*q)*zt,Et)}else{if(G.isInstancedBufferAttribute){for(let Ot=0;Ot<at.locationSize;Ot++)C(at.location+Ot,G.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ot=0;Ot<at.locationSize;Ot++)y(at.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Ot=0;Ot<at.locationSize;Ot++)R(at.location+Ot,pt/at.locationSize,It,j,pt*zt,pt/at.locationSize*Ot*zt,Et)}}else if(K!==void 0){const j=K[st];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(at.location,j);break;case 3:n.vertexAttrib3fv(at.location,j);break;case 4:n.vertexAttrib4fv(at.location,j);break;default:n.vertexAttrib1fv(at.location,j)}}}}A()}function E(){V();for(const I in o){const N=o[I];for(const k in N){const $=N[k];for(const Y in $)_($[Y].object),delete $[Y];delete N[k]}delete o[I]}}function T(I){if(o[I.id]===void 0)return;const N=o[I.id];for(const k in N){const $=N[k];for(const Y in $)_($[Y].object),delete $[Y];delete N[k]}delete o[I.id]}function B(I){for(const N in o){const k=o[N];if(k[I.id]===void 0)continue;const $=k[I.id];for(const Y in $)_($[Y].object),delete $[Y];delete k[I.id]}}function V(){nt(),h=!0,c!==l&&(c=l,m(c.object))}function nt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:nt,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function g0(n,t,e,i){const s=i.isWebGL2;let r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,p){if(p===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,u,p),e.update(u,r,p)}function c(h,u,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(h[_],u[_]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let _=0;for(let g=0;g<p;g++)_+=u[g];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function _0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=a||t.has("OES_texture_float"),C=v&&y,A=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:A}}function v0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new mi,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const _=u.clippingPlanes,g=u.clipIntersection,d=u.clipShadows,f=n.get(u);if(!s||_===null||_.length===0||r&&!d)r?h(null):c();else{const x=r?0:i,v=x*4;let y=f.clippingState||null;l.value=y,y=h(_,p,v,m);for(let C=0;C!==v;++C)y[C]=e[C];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,p,m,_){const g=u!==null?u.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const f=m+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,y=m;v!==g;++v,y+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function x0(n){let t=new WeakMap;function e(a,o){return o===ro?a.mapping=os:o===ao&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ro||o===ao)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cd(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class yh extends vh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,Yl=[.125,.215,.35,.446,.526,.582],vi=20,Da=new yh,Zl=new Xt;let Ua=null,Na=0,Fa=0;const gi=(1+Math.sqrt(5))/2,Vi=1/gi,$l=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,gi,Vi),new b(0,gi,-Vi),new b(Vi,0,gi),new b(-Vi,0,gi),new b(gi,Vi,0),new b(-gi,Vi,0)];class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Os,format:gn,colorSpace:Vn,depthBuffer:!1},s=Jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M0(r)),this._blurMaterial=y0(r,t,e)}return s}_compileMaterial(t){const e=new X(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,s){const o=new $e(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Zl),h.toneMapping=ni,h.autoClear=!1;const m=new ce({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),_=new X(new _t,m);let g=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,g=!0):(m.color.copy(Zl),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;mr(s,x*v,f>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===os||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;mr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$l[(s-1)%$l.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new X(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),g=r/_,d=isFinite(r)?1+Math.floor(h*g):vi;d>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${vi}`);const f=[];let x=0;for(let R=0;R<vi;++R){const H=R/g,E=Math.exp(-H*H/2);f.push(E),R===0?x+=E:R<d&&(x+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const y=this._sizeLods[s],C=3*y*(s>v-ji?s-v+ji:0),A=4*(this._cubeSize-y);mr(e,C,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Da)}}function M0(n){const t=[],e=[],i=[];let s=n;const r=n-ji+1+Yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ji?l=Yl[a-n+ji-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,g=3,d=2,f=1,x=new Float32Array(g*_*m),v=new Float32Array(d*_*m),y=new Float32Array(f*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,H=A>2?0:-1,E=[R,H,0,R+2/3,H,0,R+2/3,H+1,0,R,H,0,R+2/3,H+1,0,R,H+1,0];x.set(E,g*_*A),v.set(p,d*_*A);const T=[A,A,A,A,A,A];y.set(T,f*_*A)}const C=new Ee;C.setAttribute("position",new je(x,g)),C.setAttribute("uv",new je(v,d)),C.setAttribute("faceIndex",new je(y,f)),t.push(C),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jl(n,t,e){const i=new bi(n,t,e);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function y0(n,t,e){const i=new Float32Array(vi),s=new b(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function jl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ql(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ro||l===ao,h=l===os||l===ls;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Kl(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Kl(n));const p=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function E0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function b0(n,t,e,i){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let d=0,f=g.length;d<f;d++)t.remove(g[d])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const _ in p)t.update(p[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const g=m[_];for(let d=0,f=g.length;d<f;d++)t.update(g[d],n.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,_=u.attributes.position;let g=0;if(m!==null){const x=m.array;g=m.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],A=x[v+1],R=x[v+2];p.push(C,A,A,R,R,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,A=v+1,R=v+2;p.push(C,A,A,R,R,C)}}else return;const d=new(hh(p)?gh:mh)(p,1);d.version=g;const f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function w0(n,t,e,i){const s=i.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,_){n.drawElements(r,_,o,m*l),e.update(_,r,1)}function u(m,_,g){if(g===0)return;let d,f;if(s)d=n,f="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,_,o,m*l,g),e.update(_,r,g)}function p(m,_,g){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<g;f++)this.render(m[f]/l,_[f]);else{d.multiDrawElementsWEBGL(r,_,0,o,m,0,g);let f=0;for(let x=0;x<g;x++)f+=_[x];e.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function T0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function A0(n,t){return n[0]-t[0]}function R0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function P0(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let d=r.get(h);if(d===void 0||d.count!==g){let N=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var m=N;d!==void 0&&d.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),C===!0&&(E=3);let T=h.attributes.position.count*E,B=1;T>t.maxTextureSize&&(B=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const V=new Float32Array(T*B*4*g),nt=new fh(V,T,B,g);nt.type=ti,nt.needsUpdate=!0;const I=E*4;for(let k=0;k<g;k++){const $=A[k],Y=R[k],Z=H[k],K=T*B*4*k;for(let st=0;st<$.count;st++){const at=st*I;v===!0&&(a.fromBufferAttribute($,st),V[K+at+0]=a.x,V[K+at+1]=a.y,V[K+at+2]=a.z,V[K+at+3]=0),y===!0&&(a.fromBufferAttribute(Y,st),V[K+at+4]=a.x,V[K+at+5]=a.y,V[K+at+6]=a.z,V[K+at+7]=0),C===!0&&(a.fromBufferAttribute(Z,st),V[K+at+8]=a.x,V[K+at+9]=a.y,V[K+at+10]=a.z,V[K+at+11]=Z.itemSize===4?a.w:1)}}d={count:g,texture:nt,size:new it(T,B)},r.set(h,d),h.addEventListener("dispose",N)}let f=0;for(let v=0;v<p.length;v++)f+=p[v];const x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",p),u.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const _=p===void 0?0:p.length;let g=i[h.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<_;y++){const C=g[y];C[0]=y,C[1]=p[y]}g.sort(R0);for(let y=0;y<8;y++)y<_&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(A0);const d=h.morphAttributes.position,f=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const C=o[y],A=C[0],R=C[1];A!==Number.MAX_SAFE_INTEGER&&R?(d&&h.getAttribute("morphTarget"+y)!==d[A]&&h.setAttribute("morphTarget"+y,d[A]),f&&h.getAttribute("morphNormal"+y)!==f[A]&&h.setAttribute("morphNormal"+y,f[A]),s[y]=R,x+=R):(d&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function C0(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Sh extends Je{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:yi,h!==yi&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yi&&(i=Qn),i===void 0&&h===cs&&(i=Mi),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eh=new Je,bh=new Sh(1,1);bh.compareFunction=ch;const wh=new fh,Th=new fd,Ah=new xh,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function gs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yr(n,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function L0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function D0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function N0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;sc.set(i),n.uniformMatrix2fv(this.addr,!1,sc),Pe(e,i)}}function F0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;ic.set(i),n.uniformMatrix3fv(this.addr,!1,ic),Pe(e,i)}}function O0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;nc.set(i),n.uniformMatrix4fv(this.addr,!1,nc),Pe(e,i)}}function B0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function k0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function H0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function G0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function q0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?bh:Eh;e.setTexture2D(t||r,s)}function Y0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Th,s)}function Z0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ah,s)}function $0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wh,s)}function K0(n){switch(n){case 5126:return L0;case 35664:return I0;case 35665:return D0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return $0}}function J0(n,t){n.uniform1fv(this.addr,t)}function j0(n,t){const e=gs(t,this.size,2);n.uniform2fv(this.addr,e)}function Q0(n,t){const e=gs(t,this.size,3);n.uniform3fv(this.addr,e)}function tm(n,t){const e=gs(t,this.size,4);n.uniform4fv(this.addr,e)}function em(n,t){const e=gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function nm(n,t){const e=gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function im(n,t){const e=gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sm(n,t){n.uniform1iv(this.addr,t)}function rm(n,t){n.uniform2iv(this.addr,t)}function am(n,t){n.uniform3iv(this.addr,t)}function om(n,t){n.uniform4iv(this.addr,t)}function lm(n,t){n.uniform1uiv(this.addr,t)}function cm(n,t){n.uniform2uiv(this.addr,t)}function hm(n,t){n.uniform3uiv(this.addr,t)}function um(n,t){n.uniform4uiv(this.addr,t)}function dm(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Eh,r[a])}function fm(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Th,r[a])}function pm(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ah,r[a])}function mm(n,t,e){const i=this.cache,s=t.length,r=Yr(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wh,r[a])}function gm(n){switch(n){case 5126:return J0;case 35664:return j0;case 35665:return Q0;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}class _m{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=K0(e.type)}}class vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gm(e.type)}}class xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function rc(n,t){n.seq.push(t),n.map[t.id]=t}function Mm(n,t,e){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const r=Oa.exec(i),a=Oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rc(e,c===void 0?new _m(o,n,t):new vm(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new xm(o),rc(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Mm(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function ac(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ym=37297;let Sm=0;function Em(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function bm(n){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(n);let i;switch(t===e?i="":t===Nr&&e===Ur?i="LinearDisplayP3ToLinearSRGB":t===Ur&&e===Nr&&(i="LinearSRGBToLinearDisplayP3"),n){case Vn:case qr:return[i,"LinearTransferOETF"];case fe:case wo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function oc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Em(n.getShaderSource(t),a)}else return s}function wm(n,t){const e=bm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tm(n,t){let e;switch(t){case Fu:e="Linear";break;case Ou:e="Reinhard";break;case Bu:e="OptimizedCineon";break;case zu:e="ACESFilmic";break;case Hu:e="AgX";break;case ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Am(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function Rm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qi).join(`
`)}function Pm(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Cm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Qi(n){return n!==""}function lc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(n){return n.replace(Lm,Dm)}const Im=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dm(n,t){let e=Wt[t];if(e===void 0){const i=Im.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fo(e)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(n){return n.replace(Um,Nm)}function Nm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Om(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case os:case ls:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function zm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case Uu:t="ENVMAP_BLENDING_MIX";break;case Nu:t="ENVMAP_BLENDING_ADD";break}return t}function km(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Hm(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Fm(e),c=Om(e),h=Bm(e),u=zm(e),p=km(e),m=e.isWebGL2?"":Am(e),_=Rm(e),g=Pm(r),d=s.createProgram();let f,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`),x=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),x.length>0&&(x+=`
`)):(f=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),x=[m,uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),a=fo(a),a=lc(a,e),a=cc(a,e),o=fo(o),o=lc(o,e),o=cc(o,e),a=hc(a),o=hc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+f+a,C=v+x+o,A=ac(s,s.VERTEX_SHADER,y),R=ac(s,s.FRAGMENT_SHADER,C);s.attachShader(d,A),s.attachShader(d,R),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function H(V){if(n.debug.checkShaderErrors){const nt=s.getProgramInfoLog(d).trim(),I=s.getShaderInfoLog(A).trim(),N=s.getShaderInfoLog(R).trim();let k=!0,$=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,A,R);else{const Y=oc(s,A,"vertex"),Z=oc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+Y+`
`+Z)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(I===""||N==="")&&($=!1);$&&(V.diagnostics={runnable:k,programLog:nt,vertexShader:{log:I,prefix:f},fragmentShader:{log:N,prefix:x}})}s.deleteShader(A),s.deleteShader(R),E=new Cr(s,d),T=Cm(s,d)}let E;this.getUniforms=function(){return E===void 0&&H(this),E};let T;this.getAttributes=function(){return T===void 0&&H(this),T};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(d,ym)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=R,this}let Gm=0;class Vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Wm(t),e.set(t,i)),i}}class Wm{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}}function Xm(n,t,e,i,s,r,a){const o=new Ao,l=new Vm,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function d(E,T,B,V,nt){const I=V.fog,N=nt.geometry,k=E.isMeshStandardMaterial?V.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),Y=$&&$.mapping===Xr?$.image.height:null,Z=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=K!==void 0?K.length:0;let at=0;N.morphAttributes.position!==void 0&&(at=1),N.morphAttributes.normal!==void 0&&(at=2),N.morphAttributes.color!==void 0&&(at=3);let G,j,pt,St;if(Z){const We=En[Z];G=We.vertexShader,j=We.fragmentShader}else G=E.vertexShader,j=E.fragmentShader,l.update(E),pt=l.getVertexShaderID(E),St=l.getFragmentShaderID(E);const vt=n.getRenderTarget(),It=nt.isInstancedMesh===!0,zt=nt.isBatchedMesh===!0,Et=!!E.map,Ot=!!E.matcap,P=!!$,ot=!!E.aoMap,q=!!E.lightMap,rt=!!E.bumpMap,W=!!E.normalMap,wt=!!E.displacementMap,mt=!!E.emissiveMap,S=!!E.metalnessMap,M=!!E.roughnessMap,U=E.anisotropy>0,et=E.clearcoat>0,Q=E.iridescence>0,J=E.sheen>0,yt=E.transmission>0,ht=U&&!!E.anisotropyMap,xt=et&&!!E.clearcoatMap,At=et&&!!E.clearcoatNormalMap,Ht=et&&!!E.clearcoatRoughnessMap,tt=Q&&!!E.iridescenceMap,ee=Q&&!!E.iridescenceThicknessMap,Kt=J&&!!E.sheenColorMap,Bt=J&&!!E.sheenRoughnessMap,Tt=!!E.specularMap,Mt=!!E.specularColorMap,Vt=!!E.specularIntensityMap,ne=yt&&!!E.transmissionMap,_e=yt&&!!E.thicknessMap,Yt=!!E.gradientMap,lt=!!E.alphaMap,L=E.alphaTest>0,ut=!!E.alphaHash,dt=!!E.extensions,Dt=!!N.attributes.uv1,Rt=!!N.attributes.uv2,ae=!!N.attributes.uv3;let oe=ni;return E.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(oe=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:j,defines:E.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:zt,instancing:It,instancingColor:It&&nt.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:vt===null?n.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Vn,map:Et,matcap:Ot,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:q,bumpMap:rt,normalMap:W,displacementMap:p&&wt,emissiveMap:mt,normalMapObjectSpace:W&&E.normalMapType===Qu,normalMapTangentSpace:W&&E.normalMapType===lh,metalnessMap:S,roughnessMap:M,anisotropy:U,anisotropyMap:ht,clearcoat:et,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ht,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:ee,sheen:J,sheenColorMap:Kt,sheenRoughnessMap:Bt,specularMap:Tt,specularColorMap:Mt,specularIntensityMap:Vt,transmission:yt,transmissionMap:ne,thicknessMap:_e,gradientMap:Yt,opaque:E.transparent===!1&&E.blending===ss,alphaMap:lt,alphaTest:L,alphaHash:ut,combine:E.combine,mapUv:Et&&g(E.map.channel),aoMapUv:ot&&g(E.aoMap.channel),lightMapUv:q&&g(E.lightMap.channel),bumpMapUv:rt&&g(E.bumpMap.channel),normalMapUv:W&&g(E.normalMap.channel),displacementMapUv:wt&&g(E.displacementMap.channel),emissiveMapUv:mt&&g(E.emissiveMap.channel),metalnessMapUv:S&&g(E.metalnessMap.channel),roughnessMapUv:M&&g(E.roughnessMap.channel),anisotropyMapUv:ht&&g(E.anisotropyMap.channel),clearcoatMapUv:xt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:At&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(E.sheenRoughnessMap.channel),specularMapUv:Tt&&g(E.specularMap.channel),specularColorMapUv:Mt&&g(E.specularColorMap.channel),specularIntensityMapUv:Vt&&g(E.specularIntensityMap.channel),transmissionMapUv:ne&&g(E.transmissionMap.channel),thicknessMapUv:_e&&g(E.thicknessMap.channel),alphaMapUv:lt&&g(E.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(W||U),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Rt,vertexUv3s:ae,pointsUvs:nt.isPoints===!0&&!!N.attributes.uv&&(Et||lt),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:at,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Et&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===De,flipSided:E.side===Ve,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:dt&&E.extensions.derivatives===!0,extensionFragDepth:dt&&E.extensions.fragDepth===!0,extensionDrawBuffers:dt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)T.push(B),T.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(T,E),v(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){const T=_[E.type];let B;if(T){const V=En[T];B=Td.clone(V.uniforms)}else B=E.uniforms;return B}function C(E,T){let B;for(let V=0,nt=c.length;V<nt;V++){const I=c[V];if(I.cacheKey===T){B=I,++B.usedTimes;break}}return B===void 0&&(B=new Hm(n,T,E,r),c.push(B)),B}function A(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:H}}function qm(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Ym(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function dc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,p,m,_,g,d){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:_,renderOrder:u.renderOrder,z:g,group:d},n[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=d),t++,f}function o(u,p,m,_,g,d){const f=a(u,p,m,_,g,d);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,p,m,_,g,d){const f=a(u,p,m,_,g,d);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||Ym),i.length>1&&i.sort(p||dc),s.length>1&&s.sort(p||dc)}function h(){for(let u=t,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Zm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new fc,n.set(i,[a])):s>=r.length?(a=new fc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function $m(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Xt};break;case"SpotLight":e={position:new b,direction:new b,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new b,halfWidth:new b,halfHeight:new b};break}return n[t.id]=e,e}}}function Km(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Jm=0;function jm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Qm(n,t){const e=new $m,i=Km(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new b);const r=new b,a=new se,o=new se;function l(h,u){let p=0,m=0,_=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let g=0,d=0,f=0,x=0,v=0,y=0,C=0,A=0,R=0,H=0,E=0;h.sort(jm);const T=u===!0?Math.PI:1;for(let V=0,nt=h.length;V<nt;V++){const I=h[V],N=I.color,k=I.intensity,$=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=N.r*k*T,m+=N.g*k*T,_+=N.b*k*T;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(I.sh.coefficients[Z],k);E++}else if(I.isDirectionalLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const K=I.shadow,st=i.get(I);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,s.directionalShadow[g]=st,s.directionalShadowMap[g]=Y,s.directionalShadowMatrix[g]=I.shadow.matrix,y++}s.directional[g]=Z,g++}else if(I.isSpotLight){const Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(N).multiplyScalar(k*T),Z.distance=$,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,s.spot[f]=Z;const K=I.shadow;if(I.map&&(s.spotLightMap[R]=I.map,R++,K.updateMatrices(I),I.castShadow&&H++),s.spotLightMatrix[f]=K.matrix,I.castShadow){const st=i.get(I);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,s.spotShadow[f]=st,s.spotShadowMap[f]=Y,A++}f++}else if(I.isRectAreaLight){const Z=e.get(I);Z.color.copy(N).multiplyScalar(k),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),s.rectArea[x]=Z,x++}else if(I.isPointLight){const Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*T),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const K=I.shadow,st=i.get(I);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,st.shadowCameraNear=K.camera.near,st.shadowCameraFar=K.camera.far,s.pointShadow[d]=st,s.pointShadowMap[d]=Y,s.pointShadowMatrix[d]=I.shadow.matrix,C++}s.point[d]=Z,d++}else if(I.isHemisphereLight){const Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(k*T),Z.groundColor.copy(I.groundColor).multiplyScalar(k*T),s.hemi[v]=Z,v++}}x>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=_;const B=s.hash;(B.directionalLength!==g||B.pointLength!==d||B.spotLength!==f||B.rectAreaLength!==x||B.hemiLength!==v||B.numDirectionalShadows!==y||B.numPointShadows!==C||B.numSpotShadows!==A||B.numSpotMaps!==R||B.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=x,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-H,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=E,B.directionalLength=g,B.pointLength=d,B.spotLength=f,B.rectAreaLength=x,B.hemiLength=v,B.numDirectionalShadows=y,B.numPointShadows=C,B.numSpotShadows=A,B.numSpotMaps=R,B.numLightProbes=E,s.version=Jm++)}function c(h,u){let p=0,m=0,_=0,g=0,d=0;const f=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const y=h[x];if(y.isDirectionalLight){const C=s.directional[p];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),p++}else if(y.isSpotLight){const C=s.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const C=s.rectArea[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const C=s.hemi[d];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),d++}}}return{setup:l,setupView:c,state:s}}function pc(n,t){const e=new Qm(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function tg(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new pc(n,t),e.set(r,[l])):a>=o.length?(l=new pc(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class eg extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ng extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ig=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rg(n,t,e){let i=new Ro;const s=new it,r=new it,a=new pe,o=new eg({depthPacking:ju}),l=new ng,c={},h=e.maxTextureSize,u={[Gn]:Ve,[Ve]:Gn,[De]:De},p=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:ig,fragmentShader:sg}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ee;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new X(_,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let f=this.type;this.render=function(A,R,H){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),T=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),V=n.state;V.setBlending(ei),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const nt=f!==Nn&&this.type===Nn,I=f===Nn&&this.type!==Nn;for(let N=0,k=A.length;N<k;N++){const $=A[N],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const Z=Y.getFrameExtents();if(s.multiply(Z),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||nt===!0||I===!0){const st=this.type!==Nn?{minFilter:Ze,magFilter:Ze}:{};Y.map!==null&&Y.map.dispose(),Y.map=new bi(s.x,s.y,st),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const K=Y.getViewportCount();for(let st=0;st<K;st++){const at=Y.getViewport(st);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),V.viewport(a),Y.updateMatrices($,st),i=Y.getFrustum(),y(R,H,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Nn&&x(Y,H),Y.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(E,T,B)};function x(A,R){const H=t.update(g);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,H,p,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,H,m,g,null)}function v(A,R,H,E){let T=null;const B=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)T=B;else if(T=H.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=T.uuid,nt=R.uuid;let I=c[V];I===void 0&&(I={},c[V]=I);let N=I[nt];N===void 0&&(N=T.clone(),I[nt]=N,R.addEventListener("dispose",C)),T=N}if(T.visible=R.visible,T.wireframe=R.wireframe,E===Nn?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=n.properties.get(T);V.light=H}return T}function y(A,R,H,E,T){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Nn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),I=A.material;if(Array.isArray(I)){const N=nt.groups;for(let k=0,$=N.length;k<$;k++){const Y=N[k],Z=I[Y.materialIndex];if(Z&&Z.visible){const K=v(A,Z,E,T);A.onBeforeShadow(n,A,R,H,nt,K,Y),n.renderBufferDirect(H,null,nt,K,A,Y),A.onAfterShadow(n,A,R,H,nt,K,Y)}}}else if(I.visible){const N=v(A,I,E,T);A.onBeforeShadow(n,A,R,H,nt,N,null),n.renderBufferDirect(H,null,nt,N,A,null),A.onAfterShadow(n,A,R,H,nt,N,null)}}const V=A.children;for(let nt=0,I=V.length;nt<I;nt++)y(V[nt],R,H,E,T)}function C(A){A.target.removeEventListener("dispose",C);for(const H in c){const E=c[H],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function ag(n,t,e){const i=e.isWebGL2;function s(){let L=!1;const ut=new pe;let dt=null;const Dt=new pe(0,0,0,0);return{setMask:function(Rt){dt!==Rt&&!L&&(n.colorMask(Rt,Rt,Rt,Rt),dt=Rt)},setLocked:function(Rt){L=Rt},setClear:function(Rt,ae,oe,Ce,We){We===!0&&(Rt*=Ce,ae*=Ce,oe*=Ce),ut.set(Rt,ae,oe,Ce),Dt.equals(ut)===!1&&(n.clearColor(Rt,ae,oe,Ce),Dt.copy(ut))},reset:function(){L=!1,dt=null,Dt.set(-1,0,0,0)}}}function r(){let L=!1,ut=null,dt=null,Dt=null;return{setTest:function(Rt){Rt?zt(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(Rt){ut!==Rt&&!L&&(n.depthMask(Rt),ut=Rt)},setFunc:function(Rt){if(dt!==Rt){switch(Rt){case Au:n.depthFunc(n.NEVER);break;case Ru:n.depthFunc(n.ALWAYS);break;case Pu:n.depthFunc(n.LESS);break;case Ir:n.depthFunc(n.LEQUAL);break;case Cu:n.depthFunc(n.EQUAL);break;case Lu:n.depthFunc(n.GEQUAL);break;case Iu:n.depthFunc(n.GREATER);break;case Du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=Rt}},setLocked:function(Rt){L=Rt},setClear:function(Rt){Dt!==Rt&&(n.clearDepth(Rt),Dt=Rt)},reset:function(){L=!1,ut=null,dt=null,Dt=null}}}function a(){let L=!1,ut=null,dt=null,Dt=null,Rt=null,ae=null,oe=null,Ce=null,We=null;return{setTest:function(le){L||(le?zt(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(le){ut!==le&&!L&&(n.stencilMask(le),ut=le)},setFunc:function(le,Xe,Mn){(dt!==le||Dt!==Xe||Rt!==Mn)&&(n.stencilFunc(le,Xe,Mn),dt=le,Dt=Xe,Rt=Mn)},setOp:function(le,Xe,Mn){(ae!==le||oe!==Xe||Ce!==Mn)&&(n.stencilOp(le,Xe,Mn),ae=le,oe=Xe,Ce=Mn)},setLocked:function(le){L=le},setClear:function(le){We!==le&&(n.clearStencil(le),We=le)},reset:function(){L=!1,ut=null,dt=null,Dt=null,Rt=null,ae=null,oe=null,Ce=null,We=null}}}const o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap;let p={},m={},_=new WeakMap,g=[],d=null,f=!1,x=null,v=null,y=null,C=null,A=null,R=null,H=null,E=new Xt(0,0,0),T=0,B=!1,V=null,nt=null,I=null,N=null,k=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=Z>=2);let st=null,at={};const G=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),pt=new pe().fromArray(G),St=new pe().fromArray(j);function vt(L,ut,dt,Dt){const Rt=new Uint8Array(4),ae=n.createTexture();n.bindTexture(L,ae),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<dt;oe++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ut,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(ut+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return ae}const It={};It[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),It[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(It[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),It[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(n.DEPTH_TEST),l.setFunc(Ir),mt(!1),S(Jo),zt(n.CULL_FACE),W(ei);function zt(L){p[L]!==!0&&(n.enable(L),p[L]=!0)}function Et(L){p[L]!==!1&&(n.disable(L),p[L]=!1)}function Ot(L,ut){return m[L]!==ut?(n.bindFramebuffer(L,ut),m[L]=ut,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ut),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ut)),!0):!1}function P(L,ut){let dt=g,Dt=!1;if(L)if(dt=_.get(ut),dt===void 0&&(dt=[],_.set(ut,dt)),L.isWebGLMultipleRenderTargets){const Rt=L.texture;if(dt.length!==Rt.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,oe=Rt.length;ae<oe;ae++)dt[ae]=n.COLOR_ATTACHMENT0+ae;dt.length=Rt.length,Dt=!0}}else dt[0]!==n.COLOR_ATTACHMENT0&&(dt[0]=n.COLOR_ATTACHMENT0,Dt=!0);else dt[0]!==n.BACK&&(dt[0]=n.BACK,Dt=!0);Dt&&(e.isWebGL2?n.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(L){return d!==L?(n.useProgram(L),d=L,!0):!1}const q={[_i]:n.FUNC_ADD,[du]:n.FUNC_SUBTRACT,[fu]:n.FUNC_REVERSE_SUBTRACT};if(i)q[tl]=n.MIN,q[el]=n.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(q[tl]=L.MIN_EXT,q[el]=L.MAX_EXT)}const rt={[pu]:n.ZERO,[mu]:n.ONE,[gu]:n.SRC_COLOR,[io]:n.SRC_ALPHA,[Su]:n.SRC_ALPHA_SATURATE,[Mu]:n.DST_COLOR,[vu]:n.DST_ALPHA,[_u]:n.ONE_MINUS_SRC_COLOR,[so]:n.ONE_MINUS_SRC_ALPHA,[yu]:n.ONE_MINUS_DST_COLOR,[xu]:n.ONE_MINUS_DST_ALPHA,[Eu]:n.CONSTANT_COLOR,[bu]:n.ONE_MINUS_CONSTANT_COLOR,[wu]:n.CONSTANT_ALPHA,[Tu]:n.ONE_MINUS_CONSTANT_ALPHA};function W(L,ut,dt,Dt,Rt,ae,oe,Ce,We,le){if(L===ei){f===!0&&(Et(n.BLEND),f=!1);return}if(f===!1&&(zt(n.BLEND),f=!0),L!==uu){if(L!==x||le!==B){if((v!==_i||A!==_i)&&(n.blendEquation(n.FUNC_ADD),v=_i,A=_i),le)switch(L){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFunc(n.ONE,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ri:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,R=null,H=null,E.set(0,0,0),T=0,x=L,B=le}return}Rt=Rt||ut,ae=ae||dt,oe=oe||Dt,(ut!==v||Rt!==A)&&(n.blendEquationSeparate(q[ut],q[Rt]),v=ut,A=Rt),(dt!==y||Dt!==C||ae!==R||oe!==H)&&(n.blendFuncSeparate(rt[dt],rt[Dt],rt[ae],rt[oe]),y=dt,C=Dt,R=ae,H=oe),(Ce.equals(E)===!1||We!==T)&&(n.blendColor(Ce.r,Ce.g,Ce.b,We),E.copy(Ce),T=We),x=L,B=!1}function wt(L,ut){L.side===De?Et(n.CULL_FACE):zt(n.CULL_FACE);let dt=L.side===Ve;ut&&(dt=!dt),mt(dt),L.blending===ss&&L.transparent===!1?W(ei):W(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Dt=L.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),U(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?zt(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function mt(L){V!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),V=L)}function S(L){L!==cu?(zt(n.CULL_FACE),L!==nt&&(L===Jo?n.cullFace(n.BACK):L===hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),nt=L}function M(L){L!==I&&(Y&&n.lineWidth(L),I=L)}function U(L,ut,dt){L?(zt(n.POLYGON_OFFSET_FILL),(N!==ut||k!==dt)&&(n.polygonOffset(ut,dt),N=ut,k=dt)):Et(n.POLYGON_OFFSET_FILL)}function et(L){L?zt(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function Q(L){L===void 0&&(L=n.TEXTURE0+$-1),st!==L&&(n.activeTexture(L),st=L)}function J(L,ut,dt){dt===void 0&&(st===null?dt=n.TEXTURE0+$-1:dt=st);let Dt=at[dt];Dt===void 0&&(Dt={type:void 0,texture:void 0},at[dt]=Dt),(Dt.type!==L||Dt.texture!==ut)&&(st!==dt&&(n.activeTexture(dt),st=dt),n.bindTexture(L,ut||It[L]),Dt.type=L,Dt.texture=ut)}function yt(){const L=at[st];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(L){pt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),pt.copy(L))}function ne(L){St.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),St.copy(L))}function _e(L,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let Dt=dt.get(L);Dt===void 0&&(Dt=n.getUniformBlockIndex(ut,L.name),dt.set(L,Dt))}function Yt(L,ut){const Dt=u.get(ut).get(L);h.get(ut)!==Dt&&(n.uniformBlockBinding(ut,Dt,L.__bindingPointIndex),h.set(ut,Dt))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},st=null,at={},m={},_=new WeakMap,g=[],d=null,f=!1,x=null,v=null,y=null,C=null,A=null,R=null,H=null,E=new Xt(0,0,0),T=0,B=!1,V=null,nt=null,I=null,N=null,k=null,pt.set(0,0,n.canvas.width,n.canvas.height),St.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:zt,disable:Et,bindFramebuffer:Ot,drawBuffers:P,useProgram:ot,setBlending:W,setMaterial:wt,setFlipSided:mt,setCullFace:S,setLineWidth:M,setPolygonOffset:U,setScissorTest:et,activeTexture:Q,bindTexture:J,unbindTexture:yt,compressedTexImage2D:ht,compressedTexImage3D:xt,texImage2D:Tt,texImage3D:Mt,updateUBOMapping:_e,uniformBlockBinding:Yt,texStorage2D:Kt,texStorage3D:Bt,texSubImage2D:At,texSubImage3D:Ht,compressedTexSubImage2D:tt,compressedTexSubImage3D:ee,scissor:Vt,viewport:ne,reset:lt}}function og(n,t,e,i,s,r,a){const o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,M){return m?new OffscreenCanvas(S,M):Or("canvas")}function g(S,M,U,et){let Q=1;if((S.width>et||S.height>et)&&(Q=et/Math.max(S.width,S.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const J=M?uo:Math.floor,yt=J(Q*S.width),ht=J(Q*S.height);u===void 0&&(u=_(yt,ht));const xt=U?_(yt,ht):u;return xt.width=yt,xt.height=ht,xt.getContext("2d").drawImage(S,0,0,yt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+yt+"x"+ht+")."),xt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function d(S){return Cl(S.width)&&Cl(S.height)}function f(S){return o?!1:S.wrapS!==mn||S.wrapT!==mn||S.minFilter!==Ze&&S.minFilter!==hn}function x(S,M){return S.generateMipmaps&&M&&S.minFilter!==Ze&&S.minFilter!==hn}function v(S){n.generateMipmap(S)}function y(S,M,U,et,Q=!1){if(o===!1)return M;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=M;if(M===n.RED&&(U===n.FLOAT&&(J=n.R32F),U===n.HALF_FLOAT&&(J=n.R16F),U===n.UNSIGNED_BYTE&&(J=n.R8)),M===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.R8UI),U===n.UNSIGNED_SHORT&&(J=n.R16UI),U===n.UNSIGNED_INT&&(J=n.R32UI),U===n.BYTE&&(J=n.R8I),U===n.SHORT&&(J=n.R16I),U===n.INT&&(J=n.R32I)),M===n.RG&&(U===n.FLOAT&&(J=n.RG32F),U===n.HALF_FLOAT&&(J=n.RG16F),U===n.UNSIGNED_BYTE&&(J=n.RG8)),M===n.RGBA){const yt=Q?Dr:ie.getTransfer(et);U===n.FLOAT&&(J=n.RGBA32F),U===n.HALF_FLOAT&&(J=n.RGBA16F),U===n.UNSIGNED_BYTE&&(J=yt===he?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function C(S,M,U){return x(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==Ze&&S.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function A(S){return S===Ze||S===nl||S===la?n.NEAREST:n.LINEAR}function R(S){const M=S.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&h.delete(M)}function H(S){const M=S.target;M.removeEventListener("dispose",H),B(M)}function E(S){const M=i.get(S);if(M.__webglInit===void 0)return;const U=S.source,et=p.get(U);if(et){const Q=et[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(S),Object.keys(et).length===0&&p.delete(U)}i.remove(S)}function T(S){const M=i.get(S);n.deleteTexture(M.__webglTexture);const U=S.source,et=p.get(U);delete et[M.__cacheKey],a.memory.textures--}function B(S){const M=S.texture,U=i.get(S),et=i.get(M);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(U.__webglFramebuffer[Q]))for(let J=0;J<U.__webglFramebuffer[Q].length;J++)n.deleteFramebuffer(U.__webglFramebuffer[Q][J]);else n.deleteFramebuffer(U.__webglFramebuffer[Q]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[Q])}else{if(Array.isArray(U.__webglFramebuffer))for(let Q=0;Q<U.__webglFramebuffer.length;Q++)n.deleteFramebuffer(U.__webglFramebuffer[Q]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Q=0;Q<U.__webglColorRenderbuffer.length;Q++)U.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[Q]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Q=0,J=M.length;Q<J;Q++){const yt=i.get(M[Q]);yt.__webglTexture&&(n.deleteTexture(yt.__webglTexture),a.memory.textures--),i.remove(M[Q])}i.remove(M),i.remove(S)}let V=0;function nt(){V=0}function I(){const S=V;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),V+=1,S}function N(S){const M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function k(S,M){const U=i.get(S);if(S.isVideoTexture&&wt(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const et=S.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(U,S,M);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+M)}function $(S,M){const U=i.get(S);if(S.version>0&&U.__version!==S.version){pt(U,S,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+M)}function Y(S,M){const U=i.get(S);if(S.version>0&&U.__version!==S.version){pt(U,S,M);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+M)}function Z(S,M){const U=i.get(S);if(S.version>0&&U.__version!==S.version){St(U,S,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+M)}const K={[Ei]:n.REPEAT,[mn]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},st={[Ze]:n.NEAREST,[nl]:n.NEAREST_MIPMAP_NEAREST,[la]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Gu]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},at={[td]:n.NEVER,[ad]:n.ALWAYS,[ed]:n.LESS,[ch]:n.LEQUAL,[nd]:n.EQUAL,[rd]:n.GEQUAL,[id]:n.GREATER,[sd]:n.NOTEQUAL};function G(S,M,U){if(U?(n.texParameteri(S,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,K[M.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,st[M.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,st[M.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==mn||M.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,A(M.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Ze&&M.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ze||M.minFilter!==la&&M.minFilter!==Fs||M.type===ti&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Os&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(S,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function j(S,M){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",R));const et=M.source;let Q=p.get(et);Q===void 0&&(Q={},p.set(et,Q));const J=N(M);if(J!==S.__cacheKey){Q[J]===void 0&&(Q[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[J].usedTimes++;const yt=Q[S.__cacheKey];yt!==void 0&&(Q[S.__cacheKey].usedTimes--,yt.usedTimes===0&&T(M)),S.__cacheKey=J,S.__webglTexture=Q[J].texture}return U}function pt(S,M,U){let et=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=n.TEXTURE_3D);const Q=j(S,M),J=M.source;e.bindTexture(et,S.__webglTexture,n.TEXTURE0+U);const yt=i.get(J);if(J.version!==yt.__version||Q===!0){e.activeTexture(n.TEXTURE0+U);const ht=ie.getPrimaries(ie.workingColorSpace),xt=M.colorSpace===rn?null:ie.getPrimaries(M.colorSpace),At=M.colorSpace===rn||ht===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ht=f(M)&&d(M.image)===!1;let tt=g(M.image,Ht,!1,s.maxTextureSize);tt=mt(M,tt);const ee=d(tt)||o,Kt=r.convert(M.format,M.colorSpace);let Bt=r.convert(M.type),Tt=y(M.internalFormat,Kt,Bt,M.colorSpace,M.isVideoTexture);G(et,M,ee);let Mt;const Vt=M.mipmaps,ne=o&&M.isVideoTexture!==!0&&Tt!==ah,_e=yt.__version===void 0||Q===!0,Yt=C(M,tt,ee);if(M.isDepthTexture)Tt=n.DEPTH_COMPONENT,o?M.type===ti?Tt=n.DEPTH_COMPONENT32F:M.type===Qn?Tt=n.DEPTH_COMPONENT24:M.type===Mi?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:M.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===yi&&Tt===n.DEPTH_COMPONENT&&M.type!==bo&&M.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qn,Bt=r.convert(M.type)),M.format===cs&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,M.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Mi,Bt=r.convert(M.type))),_e&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Tt,tt.width,tt.height,0,Kt,Bt,null));else if(M.isDataTexture)if(Vt.length>0&&ee){ne&&_e&&e.texStorage2D(n.TEXTURE_2D,Yt,Tt,Vt[0].width,Vt[0].height);for(let lt=0,L=Vt.length;lt<L;lt++)Mt=Vt[lt],ne?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,Kt,Bt,Mt.data):e.texImage2D(n.TEXTURE_2D,lt,Tt,Mt.width,Mt.height,0,Kt,Bt,Mt.data);M.generateMipmaps=!1}else ne?(_e&&e.texStorage2D(n.TEXTURE_2D,Yt,Tt,tt.width,tt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,Kt,Bt,tt.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,tt.width,tt.height,0,Kt,Bt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,Tt,Vt[0].width,Vt[0].height,tt.depth);for(let lt=0,L=Vt.length;lt<L;lt++)Mt=Vt[lt],M.format!==gn?Kt!==null?ne?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,tt.depth,Kt,Mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,Tt,Mt.width,Mt.height,tt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,Mt.width,Mt.height,tt.depth,Kt,Bt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,Tt,Mt.width,Mt.height,tt.depth,0,Kt,Bt,Mt.data)}else{ne&&_e&&e.texStorage2D(n.TEXTURE_2D,Yt,Tt,Vt[0].width,Vt[0].height);for(let lt=0,L=Vt.length;lt<L;lt++)Mt=Vt[lt],M.format!==gn?Kt!==null?ne?e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,Kt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,Tt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Mt.width,Mt.height,Kt,Bt,Mt.data):e.texImage2D(n.TEXTURE_2D,lt,Tt,Mt.width,Mt.height,0,Kt,Bt,Mt.data)}else if(M.isDataArrayTexture)ne?(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,Tt,tt.width,tt.height,tt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Kt,Bt,tt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,Kt,Bt,tt.data);else if(M.isData3DTexture)ne?(_e&&e.texStorage3D(n.TEXTURE_3D,Yt,Tt,tt.width,tt.height,tt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Kt,Bt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,Kt,Bt,tt.data);else if(M.isFramebufferTexture){if(_e)if(ne)e.texStorage2D(n.TEXTURE_2D,Yt,Tt,tt.width,tt.height);else{let lt=tt.width,L=tt.height;for(let ut=0;ut<Yt;ut++)e.texImage2D(n.TEXTURE_2D,ut,Tt,lt,L,0,Kt,Bt,null),lt>>=1,L>>=1}}else if(Vt.length>0&&ee){ne&&_e&&e.texStorage2D(n.TEXTURE_2D,Yt,Tt,Vt[0].width,Vt[0].height);for(let lt=0,L=Vt.length;lt<L;lt++)Mt=Vt[lt],ne?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Kt,Bt,Mt):e.texImage2D(n.TEXTURE_2D,lt,Tt,Kt,Bt,Mt);M.generateMipmaps=!1}else ne?(_e&&e.texStorage2D(n.TEXTURE_2D,Yt,Tt,tt.width,tt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Kt,Bt,tt)):e.texImage2D(n.TEXTURE_2D,0,Tt,Kt,Bt,tt);x(M,ee)&&v(et),yt.__version=J.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function St(S,M,U){if(M.image.length!==6)return;const et=j(S,M),Q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+U);const J=i.get(Q);if(Q.version!==J.__version||et===!0){e.activeTexture(n.TEXTURE0+U);const yt=ie.getPrimaries(ie.workingColorSpace),ht=M.colorSpace===rn?null:ie.getPrimaries(M.colorSpace),xt=M.colorSpace===rn||yt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=M.isCompressedTexture||M.image[0].isCompressedTexture,Ht=M.image[0]&&M.image[0].isDataTexture,tt=[];for(let lt=0;lt<6;lt++)!At&&!Ht?tt[lt]=g(M.image[lt],!1,!0,s.maxCubemapSize):tt[lt]=Ht?M.image[lt].image:M.image[lt],tt[lt]=mt(M,tt[lt]);const ee=tt[0],Kt=d(ee)||o,Bt=r.convert(M.format,M.colorSpace),Tt=r.convert(M.type),Mt=y(M.internalFormat,Bt,Tt,M.colorSpace),Vt=o&&M.isVideoTexture!==!0,ne=J.__version===void 0||et===!0;let _e=C(M,ee,Kt);G(n.TEXTURE_CUBE_MAP,M,Kt);let Yt;if(At){Vt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Mt,ee.width,ee.height);for(let lt=0;lt<6;lt++){Yt=tt[lt].mipmaps;for(let L=0;L<Yt.length;L++){const ut=Yt[L];M.format!==gn?Bt!==null?Vt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,Mt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,0,0,ut.width,ut.height,Bt,Tt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L,Mt,ut.width,ut.height,0,Bt,Tt,ut.data)}}}else{Yt=M.mipmaps,Vt&&ne&&(Yt.length>0&&_e++,e.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Mt,tt[0].width,tt[0].height));for(let lt=0;lt<6;lt++)if(Ht){Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,tt[lt].width,tt[lt].height,Bt,Tt,tt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,tt[lt].width,tt[lt].height,0,Bt,Tt,tt[lt].data);for(let L=0;L<Yt.length;L++){const dt=Yt[L].image[lt].image;Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,dt.width,dt.height,Bt,Tt,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,Mt,dt.width,dt.height,0,Bt,Tt,dt.data)}}else{Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Tt,tt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,Bt,Tt,tt[lt]);for(let L=0;L<Yt.length;L++){const ut=Yt[L];Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,0,0,Bt,Tt,ut.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,L+1,Mt,Bt,Tt,ut.image[lt])}}}x(M,Kt)&&v(n.TEXTURE_CUBE_MAP),J.__version=Q.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function vt(S,M,U,et,Q,J){const yt=r.convert(U.format,U.colorSpace),ht=r.convert(U.type),xt=y(U.internalFormat,yt,ht,U.colorSpace);if(!i.get(M).__hasExternalTextures){const Ht=Math.max(1,M.width>>J),tt=Math.max(1,M.height>>J);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,xt,Ht,tt,M.depth,0,yt,ht,null):e.texImage2D(Q,J,xt,Ht,tt,0,yt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),W(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Q,i.get(U).__webglTexture,0,rt(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Q,i.get(U).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(S,M,U){if(n.bindRenderbuffer(n.RENDERBUFFER,S),M.depthBuffer&&!M.stencilBuffer){let et=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||W(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ti?et=n.DEPTH_COMPONENT32F:Q.type===Qn&&(et=n.DEPTH_COMPONENT24));const J=rt(M);W(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,et,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,et,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(M.depthBuffer&&M.stencilBuffer){const et=rt(M);U&&W(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,M.width,M.height):W(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const et=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<et.length;Q++){const J=et[Q],yt=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),xt=y(J.internalFormat,yt,ht,J.colorSpace),At=rt(M);U&&W(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,xt,M.width,M.height):W(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,xt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const et=i.get(M.depthTexture).__webglTexture,Q=rt(M);if(M.depthTexture.format===yi)W(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(M.depthTexture.format===cs)W(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Et(S){const M=i.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");zt(M.__webglFramebuffer,S)}else if(U){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=n.createRenderbuffer(),It(M.__webglDepthbuffer[et],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),It(M.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(S,M,U){const et=i.get(S);M!==void 0&&vt(et.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Et(S)}function P(S){const M=S.texture,U=i.get(S),et=i.get(M);S.addEventListener("dispose",H),S.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=M.version,a.memory.textures++);const Q=S.isWebGLCubeRenderTarget===!0,J=S.isWebGLMultipleRenderTargets===!0,yt=d(S)||o;if(Q){U.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ht]=[];for(let xt=0;xt<M.mipmaps.length;xt++)U.__webglFramebuffer[ht][xt]=n.createFramebuffer()}else U.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)U.__webglFramebuffer[ht]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(J)if(s.drawBuffers){const ht=S.texture;for(let xt=0,At=ht.length;xt<At;xt++){const Ht=i.get(ht[xt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&W(S)===!1){const ht=J?M:[M];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){const At=ht[xt];U.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[xt]);const Ht=r.convert(At.format,At.colorSpace),tt=r.convert(At.type),ee=y(At.internalFormat,Ht,tt,At.colorSpace,S.isXRRenderTarget===!0),Kt=rt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Kt,ee,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,U.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),It(U.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),G(n.TEXTURE_CUBE_MAP,M,yt);for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)vt(U.__webglFramebuffer[ht][xt],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else vt(U.__webglFramebuffer[ht],S,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(M,yt)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const ht=S.texture;for(let xt=0,At=ht.length;xt<At;xt++){const Ht=ht[xt],tt=i.get(Ht);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),G(n.TEXTURE_2D,Ht,yt),vt(U.__webglFramebuffer,S,Ht,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),x(Ht,yt)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ht=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,et.__webglTexture),G(ht,M,yt),o&&M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)vt(U.__webglFramebuffer[xt],S,M,n.COLOR_ATTACHMENT0,ht,xt);else vt(U.__webglFramebuffer,S,M,n.COLOR_ATTACHMENT0,ht,0);x(M,yt)&&v(ht),e.unbindTexture()}S.depthBuffer&&Et(S)}function ot(S){const M=d(S)||o,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0,Q=U.length;et<Q;et++){const J=U[et];if(x(J,M)){const yt=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ht=i.get(J).__webglTexture;e.bindTexture(yt,ht),v(yt),e.unbindTexture()}}}function q(S){if(o&&S.samples>0&&W(S)===!1){const M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,et=S.height;let Q=n.COLOR_BUFFER_BIT;const J=[],yt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(S),xt=S.isWebGLMultipleRenderTargets===!0;if(xt)for(let At=0;At<M.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let At=0;At<M.length;At++){J.push(n.COLOR_ATTACHMENT0+At),S.depthBuffer&&J.push(yt);const Ht=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(Ht===!1&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[At]),Ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[yt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[yt])),xt){const tt=i.get(M[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,U,et,0,0,U,et,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<M.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,ht.__webglColorRenderbuffer[At]);const Ht=i.get(M[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function rt(S){return Math.min(s.maxSamples,S.samples)}function W(S){const M=i.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(S){const M=a.render.frame;h.get(S)!==M&&(h.set(S,M),S.update())}function mt(S,M){const U=S.colorSpace,et=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===co||U!==Vn&&U!==rn&&(ie.getTransfer(U)===he?o===!1?t.has("EXT_sRGB")===!0&&et===gn?(S.format=co,S.minFilter=hn,S.generateMipmaps=!1):M=uh.sRGBToLinear(M):(et!==gn||Q!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}this.allocateTextureUnit=I,this.resetTextureUnits=nt,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=Ot,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=W}function lg(n,t,e){const i=e.isWebGL2;function s(r,a=rn){let o;const l=ie.getTransfer(a);if(r===ii)return n.UNSIGNED_BYTE;if(r===eh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===nh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Vu)return n.BYTE;if(r===Wu)return n.SHORT;if(r===bo)return n.UNSIGNED_SHORT;if(r===th)return n.INT;if(r===Qn)return n.UNSIGNED_INT;if(r===ti)return n.FLOAT;if(r===Os)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xu)return n.ALPHA;if(r===gn)return n.RGBA;if(r===qu)return n.LUMINANCE;if(r===Yu)return n.LUMINANCE_ALPHA;if(r===yi)return n.DEPTH_COMPONENT;if(r===cs)return n.DEPTH_STENCIL;if(r===co)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zu)return n.RED;if(r===ih)return n.RED_INTEGER;if(r===$u)return n.RG;if(r===sh)return n.RG_INTEGER;if(r===rh)return n.RGBA_INTEGER;if(r===ca||r===ha||r===ua||r===da)if(l===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===il||r===sl||r===rl||r===al)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ah)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ol||r===ll)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ol)return l===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ll)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===vl||r===xl||r===Ml||r===yl||r===Sl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===cl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ul)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ml)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_l)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ml)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sl)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fa||r===El||r===bl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===fa)return l===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===El)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ku||r===wl||r===Tl||r===Al)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===fa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Al)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class cg extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const d=e.getJointPose(g,i),f=this._getHandJoint(c,g);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ug extends ps{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,_=null;const g=e.getContextAttributes();let d=null,f=null;const x=[],v=[],y=new it;let C=null;const A=new $e;A.layers.enable(1),A.viewport=new pe;const R=new $e;R.layers.enable(2),R.viewport=new pe;const H=[A,R],E=new cg;E.layers.enable(1),E.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=x[G];return j===void 0&&(j=new Ba,x[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=x[G];return j===void 0&&(j=new Ba,x[G]=j),j.getGripSpace()},this.getHand=function(G){let j=x[G];return j===void 0&&(j=new Ba,x[G]=j),j.getHandSpace()};function V(G){const j=v.indexOf(G.inputSource);if(j===-1)return;const pt=x[j];pt!==void 0&&(pt.update(G.inputSource,G.frame,c||a),pt.dispatchEvent({type:G.type,data:G.inputSource}))}function nt(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",I);for(let G=0;G<x.length;G++){const j=v[G];j!==null&&(v[G]=null,x[G].disconnect(j))}T=null,B=null,t.setRenderTarget(d),m=null,p=null,u=null,s=null,f=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new bi(m.framebufferWidth,m.framebufferHeight,{format:gn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,pt=null,St=null;g.depth&&(St=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?cs:yi,pt=g.stencil?Mi:Qn);const vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(vt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new bi(p.textureWidth,p.textureHeight,{format:gn,type:ii,depthTexture:new Sh(p.textureWidth,p.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const It=t.properties.get(f);It.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let j=0;j<G.removed.length;j++){const pt=G.removed[j],St=v.indexOf(pt);St>=0&&(v[St]=null,x[St].disconnect(pt))}for(let j=0;j<G.added.length;j++){const pt=G.added[j];let St=v.indexOf(pt);if(St===-1){for(let It=0;It<x.length;It++)if(It>=v.length){v.push(pt),St=It;break}else if(v[It]===null){v[It]=pt,St=It;break}if(St===-1)break}const vt=x[St];vt&&vt.connect(pt)}}const N=new b,k=new b;function $(G,j,pt){N.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(pt.matrixWorld);const St=N.distanceTo(k),vt=j.projectionMatrix.elements,It=pt.projectionMatrix.elements,zt=vt[14]/(vt[10]-1),Et=vt[14]/(vt[10]+1),Ot=(vt[9]+1)/vt[5],P=(vt[9]-1)/vt[5],ot=(vt[8]-1)/vt[0],q=(It[8]+1)/It[0],rt=zt*ot,W=zt*q,wt=St/(-ot+q),mt=wt*-ot;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(mt),G.translateZ(wt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const S=zt+wt,M=Et+wt,U=rt-mt,et=W+(St-mt),Q=Ot*Et/M*S,J=P*Et/M*S;G.projectionMatrix.makePerspective(U,et,Q,J,S,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;E.near=R.near=A.near=G.near,E.far=R.far=A.far=G.far,(T!==E.near||B!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,B=E.far);const j=G.parent,pt=E.cameras;Y(E,j);for(let St=0;St<pt.length;St++)Y(pt[St],j);pt.length===2?$(E,A,R):E.projectionMatrix.copy(A.projectionMatrix),Z(G,E,j)};function Z(G,j,pt){pt===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(pt.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ho*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let K=null;function st(G,j){if(h=j.getViewerPose(c||a),_=j,h!==null){const pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let St=!1;pt.length!==E.cameras.length&&(E.cameras.length=0,St=!0);for(let vt=0;vt<pt.length;vt++){const It=pt[vt];let zt=null;if(m!==null)zt=m.getViewport(It);else{const Ot=u.getViewSubImage(p,It);zt=Ot.viewport,vt===0&&(t.setRenderTargetTextures(f,Ot.colorTexture,p.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(f))}let Et=H[vt];Et===void 0&&(Et=new $e,Et.layers.enable(vt),Et.viewport=new pe,H[vt]=Et),Et.matrix.fromArray(It.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(It.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(zt.x,zt.y,zt.width,zt.height),vt===0&&(E.matrix.copy(Et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),St===!0&&E.cameras.push(Et)}}for(let pt=0;pt<x.length;pt++){const St=v[pt],vt=x[pt];St!==null&&vt!==void 0&&vt.update(St,j,c||a)}K&&K(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const at=new Mh;at.setAnimationLoop(st),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function dg(n,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,_h(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,y)):f.isMeshMatcapMaterial?(r(d,f),_(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),g(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?l(d,f,x,v):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ve&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ve&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,x,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*x,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),t.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,x){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,f){f.matcap&&(d.matcap.value=f.matcap)}function g(d,f){const x=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fg(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(_(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",d));const C=v.program;i.updateUBOMapping(x,C);const A=t.render.frame;r[x.id]!==A&&(p(x),r[x.id]=A)}function h(x){const v=u();x.__bindingPointIndex=v;const y=n.createBuffer(),C=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=s[x.id],y=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,R=y.length;A<R;A++){const H=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,T=H.length;E<T;E++){const B=H[E];if(m(B,A,E,C)===!0){const V=B.__offset,nt=Array.isArray(B.value)?B.value:[B.value];let I=0;for(let N=0;N<nt.length;N++){const k=nt[N],$=g(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,V+I,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,v,y,C){const A=x.value,R=v+"_"+y;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const H=C[R];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return C[R]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function _(x){const v=x.uniforms;let y=0;const C=16;for(let R=0,H=v.length;R<H;R++){const E=Array.isArray(v[R])?v[R]:[v[R]];for(let T=0,B=E.length;T<B;T++){const V=E[T],nt=Array.isArray(V.value)?V.value:[V.value];for(let I=0,N=nt.length;I<N;I++){const k=nt[I],$=g(k),Y=y%C;Y!==0&&C-Y<$.boundary&&(y+=C-Y),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=$.storage}}}const A=y%C;return A>0&&(y+=C-A),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(x){const v=x.target;v.removeEventListener("dispose",d);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Br{constructor(t={}){const{canvas:e=ld(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let y=!1,C=0,A=0,R=null,H=-1,E=null;const T=new pe,B=new pe;let V=null;const nt=new Xt(0);let I=0,N=e.width,k=e.height,$=1,Y=null,Z=null;const K=new pe(0,0,N,k),st=new pe(0,0,N,k);let at=!1;const G=new Ro;let j=!1,pt=!1,St=null;const vt=new se,It=new it,zt=new b,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return R===null?$:1}let P=i;function ot(w,D){for(let O=0;O<w.length;O++){const z=w[O],F=e.getContext(z,D);if(F!==null)return F}return null}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ut,!1),P===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),P=ot(D,w),P===null)throw ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let q,rt,W,wt,mt,S,M,U,et,Q,J,yt,ht,xt,At,Ht,tt,ee,Kt,Bt,Tt,Mt,Vt,ne;function _e(){q=new E0(P),rt=new _0(P,q,t),q.init(rt),Mt=new lg(P,q,rt),W=new ag(P,q,rt),wt=new T0(P),mt=new qm,S=new og(P,q,W,mt,rt,Mt,wt),M=new x0(v),U=new S0(v),et=new Dd(P,rt),Vt=new m0(P,q,et,rt),Q=new b0(P,et,wt,Vt),J=new C0(P,Q,et,wt),Kt=new P0(P,rt,S),Ht=new v0(mt),yt=new Xm(v,M,U,q,rt,Vt,Ht),ht=new dg(v,mt),xt=new Zm,At=new tg(q,rt),ee=new p0(v,M,U,W,J,p,l),tt=new rg(v,J,rt),ne=new fg(P,wt,rt,W),Bt=new g0(P,q,wt,rt),Tt=new w0(P,q,wt,rt),wt.programs=yt.programs,v.capabilities=rt,v.extensions=q,v.properties=mt,v.renderLists=xt,v.shadowMap=tt,v.state=W,v.info=wt}_e();const Yt=new ug(v,P);this.xr=Yt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(N,k,!1))},this.getSize=function(w){return w.set(N,k)},this.setSize=function(w,D,O=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,k=D,e.width=Math.floor(w*$),e.height=Math.floor(D*$),O===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(N*$,k*$).floor()},this.setDrawingBufferSize=function(w,D,O){N=w,k=D,$=O,e.width=Math.floor(w*O),e.height=Math.floor(D*O),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,D,O,z){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,D,O,z),W.viewport(T.copy(K).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,D,O,z){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,D,O,z),W.scissor(B.copy(st).multiplyScalar($).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){W.setScissorTest(at=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,D=!0,O=!0){let z=0;if(w){let F=!1;if(R!==null){const gt=R.texture.format;F=gt===rh||gt===sh||gt===ih}if(F){const gt=R.texture.type,bt=gt===ii||gt===Qn||gt===bo||gt===Mi||gt===eh||gt===nh,Ct=ee.getClearColor(),Nt=ee.getClearAlpha(),qt=Ct.r,kt=Ct.g,Gt=Ct.b;bt?(m[0]=qt,m[1]=kt,m[2]=Gt,m[3]=Nt,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=qt,_[1]=kt,_[2]=Gt,_[3]=Nt,P.clearBufferiv(P.COLOR,0,_))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT),O&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),xt.dispose(),At.dispose(),mt.dispose(),M.dispose(),U.dispose(),J.dispose(),Vt.dispose(),ne.dispose(),yt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",We),Yt.removeEventListener("sessionend",le),St&&(St.dispose(),St=null),Xe.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=wt.autoReset,D=tt.enabled,O=tt.autoUpdate,z=tt.needsUpdate,F=tt.type;_e(),wt.autoReset=w,tt.enabled=D,tt.autoUpdate=O,tt.needsUpdate=z,tt.type=F}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){const D=w.target;D.removeEventListener("dispose",dt),Dt(D)}function Dt(w){Rt(w),mt.remove(w)}function Rt(w){const D=mt.get(w).programs;D!==void 0&&(D.forEach(function(O){yt.releaseProgram(O)}),w.isShaderMaterial&&yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,O,z,F,gt){D===null&&(D=Et);const bt=F.isMesh&&F.matrixWorld.determinant()<0,Ct=ru(w,D,O,z,F);W.setMaterial(z,bt);let Nt=O.index,qt=1;if(z.wireframe===!0){if(Nt=Q.getWireframeAttribute(O),Nt===void 0)return;qt=2}const kt=O.drawRange,Gt=O.attributes.position;let Me=kt.start*qt,tn=(kt.start+kt.count)*qt;gt!==null&&(Me=Math.max(Me,gt.start*qt),tn=Math.min(tn,(gt.start+gt.count)*qt)),Nt!==null?(Me=Math.max(Me,0),tn=Math.min(tn,Nt.count)):Gt!=null&&(Me=Math.max(Me,0),tn=Math.min(tn,Gt.count));const Le=tn-Me;if(Le<0||Le===1/0)return;Vt.setup(F,z,Ct,O,Nt);let Rn,me=Bt;if(Nt!==null&&(Rn=et.get(Nt),me=Tt,me.setIndex(Rn)),F.isMesh)z.wireframe===!0?(W.setLineWidth(z.wireframeLinewidth*Ot()),me.setMode(P.LINES)):me.setMode(P.TRIANGLES);else if(F.isLine){let Zt=z.linewidth;Zt===void 0&&(Zt=1),W.setLineWidth(Zt*Ot()),F.isLineSegments?me.setMode(P.LINES):F.isLineLoop?me.setMode(P.LINE_LOOP):me.setMode(P.LINE_STRIP)}else F.isPoints?me.setMode(P.POINTS):F.isSprite&&me.setMode(P.TRIANGLES);if(F.isBatchedMesh)me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)me.renderInstances(Me,Le,F.count);else if(O.isInstancedBufferGeometry){const Zt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,sa=Math.min(O.instanceCount,Zt);me.renderInstances(Me,Le,sa)}else me.render(Me,Le)};function ae(w,D,O){w.transparent===!0&&w.side===De&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,Ys(w,D,O),w.side=Gn,w.needsUpdate=!0,Ys(w,D,O),w.side=De):Ys(w,D,O)}this.compile=function(w,D,O=null){O===null&&(O=w),d=At.get(O),d.init(),x.push(d),O.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==O&&w.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(v._useLegacyLights);const z=new Set;return w.traverse(function(F){const gt=F.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){const Ct=gt[bt];ae(Ct,O,F),z.add(Ct)}else ae(gt,O,F),z.add(gt)}),x.pop(),d=null,z},this.compileAsync=function(w,D,O=null){const z=this.compile(w,D,O);return new Promise(F=>{function gt(){if(z.forEach(function(bt){mt.get(bt).currentProgram.isReady()&&z.delete(bt)}),z.size===0){F(w);return}setTimeout(gt,10)}q.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let oe=null;function Ce(w){oe&&oe(w)}function We(){Xe.stop()}function le(){Xe.start()}const Xe=new Mh;Xe.setAnimationLoop(Ce),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){oe=w,Yt.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},Yt.addEventListener("sessionstart",We),Yt.addEventListener("sessionend",le),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(D),D=Yt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,R),d=At.get(w,x.length),d.init(),x.push(d),vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(vt),pt=this.localClippingEnabled,j=Ht.init(this.clippingPlanes,pt),g=xt.get(w,f.length),g.init(),f.push(g),Mn(w,D,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,j===!0&&Ht.beginShadows();const O=d.state.shadowsArray;if(tt.render(O,w,D),j===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(g,w),d.setupLights(v._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let F=0,gt=z.length;F<gt;F++){const bt=z[F];Xo(g,w,bt,bt.viewport)}}else Xo(g,w,D);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,D),Vt.resetDefaultState(),H=-1,E=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Mn(w,D,O,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)O=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){z&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);const bt=J.update(w),Ct=w.material;Ct.visible&&g.push(w,bt,Ct,O,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const bt=J.update(w),Ct=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),zt.copy(bt.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(Ct)){const Nt=bt.groups;for(let qt=0,kt=Nt.length;qt<kt;qt++){const Gt=Nt[qt],Me=Ct[Gt.materialIndex];Me&&Me.visible&&g.push(w,bt,Me,O,zt.z,Gt)}}else Ct.visible&&g.push(w,bt,Ct,O,zt.z,null)}}const gt=w.children;for(let bt=0,Ct=gt.length;bt<Ct;bt++)Mn(gt[bt],D,O,z)}function Xo(w,D,O,z){const F=w.opaque,gt=w.transmissive,bt=w.transparent;d.setupLightsView(O),j===!0&&Ht.setGlobalState(v.clippingPlanes,O),gt.length>0&&su(F,gt,D,O),z&&W.viewport(T.copy(z)),F.length>0&&qs(F,D,O),gt.length>0&&qs(gt,D,O),bt.length>0&&qs(bt,D,O),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function su(w,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const gt=rt.isWebGL2;St===null&&(St=new bi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Os:ii,minFilter:Fs,samples:gt?4:0})),v.getDrawingBufferSize(It),gt?St.setSize(It.x,It.y):St.setSize(uo(It.x),uo(It.y));const bt=v.getRenderTarget();v.setRenderTarget(St),v.getClearColor(nt),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=ni,qs(w,O,z),S.updateMultisampleRenderTarget(St),S.updateRenderTargetMipmap(St);let Nt=!1;for(let qt=0,kt=D.length;qt<kt;qt++){const Gt=D[qt],Me=Gt.object,tn=Gt.geometry,Le=Gt.material,Rn=Gt.group;if(Le.side===De&&Me.layers.test(z.layers)){const me=Le.side;Le.side=Ve,Le.needsUpdate=!0,qo(Me,O,z,tn,Le,Rn),Le.side=me,Le.needsUpdate=!0,Nt=!0}}Nt===!0&&(S.updateMultisampleRenderTarget(St),S.updateRenderTargetMipmap(St)),v.setRenderTarget(bt),v.setClearColor(nt,I),v.toneMapping=Ct}function qs(w,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let F=0,gt=w.length;F<gt;F++){const bt=w[F],Ct=bt.object,Nt=bt.geometry,qt=z===null?bt.material:z,kt=bt.group;Ct.layers.test(O.layers)&&qo(Ct,D,O,Nt,qt,kt)}}function qo(w,D,O,z,F,gt){w.onBeforeRender(v,D,O,z,F,gt),w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,D,O,z,w,gt),F.transparent===!0&&F.side===De&&F.forceSinglePass===!1?(F.side=Ve,F.needsUpdate=!0,v.renderBufferDirect(O,D,z,F,w,gt),F.side=Gn,F.needsUpdate=!0,v.renderBufferDirect(O,D,z,F,w,gt),F.side=De):v.renderBufferDirect(O,D,z,F,w,gt),w.onAfterRender(v,D,O,z,F,gt)}function Ys(w,D,O){D.isScene!==!0&&(D=Et);const z=mt.get(w),F=d.state.lights,gt=d.state.shadowsArray,bt=F.state.version,Ct=yt.getParameters(w,F.state,gt,D,O),Nt=yt.getProgramCacheKey(Ct);let qt=z.programs;z.environment=w.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(w.isMeshStandardMaterial?U:M).get(w.envMap||z.environment),qt===void 0&&(w.addEventListener("dispose",dt),qt=new Map,z.programs=qt);let kt=qt.get(Nt);if(kt!==void 0){if(z.currentProgram===kt&&z.lightsStateVersion===bt)return Zo(w,Ct),kt}else Ct.uniforms=yt.getUniforms(w),w.onBuild(O,Ct,v),w.onBeforeCompile(Ct,v),kt=yt.acquireProgram(Ct,Nt),qt.set(Nt,kt),z.uniforms=Ct.uniforms;const Gt=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=Ht.uniform),Zo(w,Ct),z.needsLights=ou(w),z.lightsStateVersion=bt,z.needsLights&&(Gt.ambientLightColor.value=F.state.ambient,Gt.lightProbe.value=F.state.probe,Gt.directionalLights.value=F.state.directional,Gt.directionalLightShadows.value=F.state.directionalShadow,Gt.spotLights.value=F.state.spot,Gt.spotLightShadows.value=F.state.spotShadow,Gt.rectAreaLights.value=F.state.rectArea,Gt.ltc_1.value=F.state.rectAreaLTC1,Gt.ltc_2.value=F.state.rectAreaLTC2,Gt.pointLights.value=F.state.point,Gt.pointLightShadows.value=F.state.pointShadow,Gt.hemisphereLights.value=F.state.hemi,Gt.directionalShadowMap.value=F.state.directionalShadowMap,Gt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Gt.spotShadowMap.value=F.state.spotShadowMap,Gt.spotLightMatrix.value=F.state.spotLightMatrix,Gt.spotLightMap.value=F.state.spotLightMap,Gt.pointShadowMap.value=F.state.pointShadowMap,Gt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=kt,z.uniformsList=null,kt}function Yo(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Cr.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Zo(w,D){const O=mt.get(w);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ru(w,D,O,z,F){D.isScene!==!0&&(D=Et),S.resetTextureUnits();const gt=D.fog,bt=z.isMeshStandardMaterial?D.environment:null,Ct=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vn,Nt=(z.isMeshStandardMaterial?U:M).get(z.envMap||bt),qt=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,kt=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Gt=!!O.morphAttributes.position,Me=!!O.morphAttributes.normal,tn=!!O.morphAttributes.color;let Le=ni;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Le=v.toneMapping);const Rn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,me=Rn!==void 0?Rn.length:0,Zt=mt.get(z),sa=d.state.lights;if(j===!0&&(pt===!0||w!==E)){const an=w===E&&z.id===H;Ht.setState(z,w,an)}let ve=!1;z.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==sa.state.version||Zt.outputColorSpace!==Ct||F.isBatchedMesh&&Zt.batching===!1||!F.isBatchedMesh&&Zt.batching===!0||F.isInstancedMesh&&Zt.instancing===!1||!F.isInstancedMesh&&Zt.instancing===!0||F.isSkinnedMesh&&Zt.skinning===!1||!F.isSkinnedMesh&&Zt.skinning===!0||F.isInstancedMesh&&Zt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Zt.instancingColor===!1&&F.instanceColor!==null||Zt.envMap!==Nt||z.fog===!0&&Zt.fog!==gt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==qt||Zt.vertexTangents!==kt||Zt.morphTargets!==Gt||Zt.morphNormals!==Me||Zt.morphColors!==tn||Zt.toneMapping!==Le||rt.isWebGL2===!0&&Zt.morphTargetsCount!==me)&&(ve=!0):(ve=!0,Zt.__version=z.version);let ci=Zt.currentProgram;ve===!0&&(ci=Ys(z,D,F));let $o=!1,vs=!1,ra=!1;const ze=ci.getUniforms(),hi=Zt.uniforms;if(W.useProgram(ci.program)&&($o=!0,vs=!0,ra=!0),z.id!==H&&(H=z.id,vs=!0),$o||E!==w){ze.setValue(P,"projectionMatrix",w.projectionMatrix),ze.setValue(P,"viewMatrix",w.matrixWorldInverse);const an=ze.map.cameraPosition;an!==void 0&&an.setValue(P,zt.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&ze.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ze.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,vs=!0,ra=!0)}if(F.isSkinnedMesh){ze.setOptional(P,F,"bindMatrix"),ze.setOptional(P,F,"bindMatrixInverse");const an=F.skeleton;an&&(rt.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),ze.setValue(P,"boneTexture",an.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ze.setOptional(P,F,"batchingTexture"),ze.setValue(P,"batchingTexture",F._matricesTexture,S));const aa=O.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&rt.isWebGL2===!0)&&Kt.update(F,O,ci),(vs||Zt.receiveShadow!==F.receiveShadow)&&(Zt.receiveShadow=F.receiveShadow,ze.setValue(P,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=Nt,hi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),vs&&(ze.setValue(P,"toneMappingExposure",v.toneMappingExposure),Zt.needsLights&&au(hi,ra),gt&&z.fog===!0&&ht.refreshFogUniforms(hi,gt),ht.refreshMaterialUniforms(hi,z,$,k,St),Cr.upload(P,Yo(Zt),hi,S)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Cr.upload(P,Yo(Zt),hi,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ze.setValue(P,"center",F.center),ze.setValue(P,"modelViewMatrix",F.modelViewMatrix),ze.setValue(P,"normalMatrix",F.normalMatrix),ze.setValue(P,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const an=z.uniformsGroups;for(let oa=0,lu=an.length;oa<lu;oa++)if(rt.isWebGL2){const Ko=an[oa];ne.update(Ko,ci),ne.bind(Ko,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function au(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function ou(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,O){mt.get(w.texture).__webglTexture=D,mt.get(w.depthTexture).__webglTexture=O;const z=mt.get(w);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){const O=mt.get(w);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,O=0){R=w,C=D,A=O;let z=!0,F=null,gt=!1,bt=!1;if(w){const Nt=mt.get(w);Nt.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(P.FRAMEBUFFER,null),z=!1):Nt.__webglFramebuffer===void 0?S.setupRenderTarget(w):Nt.__hasExternalTextures&&S.rebindTextures(w,mt.get(w.texture).__webglTexture,mt.get(w.depthTexture).__webglTexture);const qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(bt=!0);const kt=mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[D])?F=kt[D][O]:F=kt[D],gt=!0):rt.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?F=mt.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?F=kt[O]:F=kt,T.copy(w.viewport),B.copy(w.scissor),V=w.scissorTest}else T.copy(K).multiplyScalar($).floor(),B.copy(st).multiplyScalar($).floor(),V=at;if(W.bindFramebuffer(P.FRAMEBUFFER,F)&&rt.drawBuffers&&z&&W.drawBuffers(w,F),W.viewport(T),W.scissor(B),W.setScissorTest(V),gt){const Nt=mt.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Nt.__webglTexture,O)}else if(bt){const Nt=mt.get(w.texture),qt=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,O||0,qt)}H=-1},this.readRenderTargetPixels=function(w,D,O,z,F,gt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){W.bindFramebuffer(P.FRAMEBUFFER,Ct);try{const Nt=w.texture,qt=Nt.format,kt=Nt.type;if(qt!==gn&&Mt.convert(qt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=kt===Os&&(q.has("EXT_color_buffer_half_float")||rt.isWebGL2&&q.has("EXT_color_buffer_float"));if(kt!==ii&&Mt.convert(kt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===ti&&(rt.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&O>=0&&O<=w.height-F&&P.readPixels(D,O,z,F,Mt.convert(qt),Mt.convert(kt),gt)}finally{const Nt=R!==null?mt.get(R).__webglFramebuffer:null;W.bindFramebuffer(P.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(w,D,O=0){const z=Math.pow(2,-O),F=Math.floor(D.image.width*z),gt=Math.floor(D.image.height*z);S.setTexture2D(D,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,w.x,w.y,F,gt),W.unbindTexture()},this.copyTextureToTexture=function(w,D,O,z=0){const F=D.image.width,gt=D.image.height,bt=Mt.convert(O.format),Ct=Mt.convert(O.type);S.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,w.x,w.y,F,gt,bt,Ct,D.image.data):D.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,bt,D.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,z,w.x,w.y,bt,Ct,D.image),z===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(w,D,O,z,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const gt=w.max.x-w.min.x+1,bt=w.max.y-w.min.y+1,Ct=w.max.z-w.min.z+1,Nt=Mt.convert(z.format),qt=Mt.convert(z.type);let kt;if(z.isData3DTexture)S.setTexture3D(z,0),kt=P.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S.setTexture2DArray(z,0),kt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const Gt=P.getParameter(P.UNPACK_ROW_LENGTH),Me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Le=P.getParameter(P.UNPACK_SKIP_ROWS),Rn=P.getParameter(P.UNPACK_SKIP_IMAGES),me=O.isCompressedTexture?O.mipmaps[F]:O.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,w.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,w.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,w.min.z),O.isDataTexture||O.isData3DTexture?P.texSubImage3D(kt,F,D.x,D.y,D.z,gt,bt,Ct,Nt,qt,me.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(kt,F,D.x,D.y,D.z,gt,bt,Ct,Nt,me.data)):P.texSubImage3D(kt,F,D.x,D.y,D.z,gt,bt,Ct,Nt,qt,me),P.pixelStorei(P.UNPACK_ROW_LENGTH,Gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Rn),F===0&&z.generateMipmaps&&P.generateMipmap(kt),W.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),W.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,W.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===wo?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Si:oh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Si?fe:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class pg extends Br{}pg.prototype.isWebGL1Renderer=!0;class Co{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class po extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new b;class zr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _s extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const Es=new b,Xi=new b,qi=new b,Yi=new it,bs=new it,Rh=new se,gr=new b,ws=new b,_r=new b,mc=new it,za=new it,gc=new it;class Bs extends xe{constructor(t=new _s){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mg(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new zr(i,3,0,!1)),Wi.setAttribute("uv",new zr(i,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Rh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;vr(gr.set(-.5,-.5,0),qi,a,Xi,s,r),vr(ws.set(.5,-.5,0),qi,a,Xi,s,r),vr(_r.set(.5,.5,0),qi,a,Xi,s,r),mc.set(0,0),za.set(1,0),gc.set(1,1);let o=t.ray.intersectTriangle(gr,ws,_r,!1,Es);if(o===null&&(vr(ws.set(-.5,.5,0),qi,a,Xi,s,r),za.set(0,1),o=t.ray.intersectTriangle(gr,_r,ws,!1,Es),o===null))return;const l=t.ray.origin.distanceTo(Es);l<t.near||l>t.far||e.push({distance:l,point:Es.clone(),uv:un.getInterpolation(Es,gr,ws,_r,mc,za,gc,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vr(n,t,e,i,s,r){Yi.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(bs.x=r*Yi.x-s*Yi.y,bs.y=s*Yi.x+r*Yi.y):bs.copy(Yi),n.copy(t),n.x+=bs.x,n.y+=bs.y,n.applyMatrix4(Rh)}class _c extends je{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new se,vc=new se,xr=[],xc=new Oe,gg=new se,Ts=new X,As=new ms;class Ph extends X{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zi),xc.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Zi),As.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),vc.multiplyMatrices(i,Zi),Ts.matrixWorld=vc,Ts.raycast(t,xr);for(let a=0,o=xr.length;a<o;a++){const l=xr[a];l.instanceId=r,l.object=this,e.push(l)}xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mc=new se,mo=new To,Mr=new ms,yr=new b;class Ch extends xe{constructor(t=new Ee,e=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Mc.copy(s).invert(),mo.copy(t.ray).applyMatrix4(Mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=p,g=m;_<g;_++){const d=c.getX(_);yr.fromBufferAttribute(u,d),yc(yr,d,l,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=p,g=m;_<g;_++)yr.fromBufferAttribute(u,_),yc(yr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yc(n,t,e,i,s,r,a){const o=mo.distanceSqToPoint(n);if(o<e){const l=new b;mo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Wn extends Je{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],p=i[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new b,s=[],r=[],a=[],o=new b,l=new se;for(let m=0;m<=t;m++){const _=m/t;s[m]=this.getTangentAt(_,new b)}r[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Fe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Fe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Io extends An{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new it,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _g extends Io{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,m*=h,s(a,o,p,m)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Sr=new b,ka=new Do,Ha=new Do,Ga=new Do;class Lh extends An{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new b){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),c=Sr);const u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),_<1e-4&&(_=g),d<1e-4&&(d=g),ka.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,_,g,d),Ha.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,_,g,d),Ga.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,_,g,d)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Ga.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return i.set(ka.calc(l),Ha.calc(l),Ga.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function vg(n,t){const e=1-n;return e*e*t}function xg(n,t){return 2*(1-n)*n*t}function Mg(n,t){return n*n*t}function Us(n,t,e,i){return vg(n,t)+xg(n,e)+Mg(n,i)}function yg(n,t){const e=1-n;return e*e*e*t}function Sg(n,t){const e=1-n;return 3*e*e*n*t}function Eg(n,t){return 3*(1-n)*n*n*t}function bg(n,t){return n*n*n*t}function Ns(n,t,e,i,s){return yg(n,t)+Sg(n,e)+Eg(n,i)+bg(n,s)}class Ih extends An{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ns(t,s.x,r.x,a.x,o.x),Ns(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wg extends An{constructor(t=new b,e=new b,i=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new b){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ns(t,s.x,r.x,a.x,o.x),Ns(t,s.y,r.y,a.y,o.y),Ns(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dh extends An{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tg extends An{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends An{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Us(t,s.x,r.x,a.x),Us(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends An{constructor(t=new b,e=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new b){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Us(t,s.x,r.x,a.x),Us(t,s.y,r.y,a.y),Us(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Sc(o,l.x,c.x,h.x,u.x),Sc(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var kr=Object.freeze({__proto__:null,ArcCurve:_g,CatmullRomCurve3:Lh,CubicBezierCurve:Ih,CubicBezierCurve3:wg,EllipseCurve:Io,LineCurve:Dh,LineCurve3:Tg,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Nh,SplineCurve:Fh});class Ag extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kr[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new kr[s.type]().fromJSON(s))}return this}}class go extends Ag{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Dh(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Uh(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new Ih(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Fh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new Io(t,e,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uo extends Ee{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new b,p=new it,m=new b,_=new b,g=new b;let d=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:d=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,m.x=f*1,m.y=-d,m.z=f*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:d=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,m.x=f*1,m.y=-d,m.z=f*0,_.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(_)}for(let x=0;x<=e;x++){const v=i+x*h*s,y=Math.sin(v),C=Math.cos(v);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*C,a.push(u.x,u.y,u.z),p.x=x/e,p.y=A/(t.length-1),o.push(p.x,p.y);const R=l[3*A+0]*y,H=l[3*A+1],E=l[3*A+0]*C;c.push(R,H,E)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const y=v+x*t.length,C=y,A=y+t.length,R=y+t.length+1,H=y+1;r.push(C,A,H),r.push(R,H,A)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.points,t.segments,t.phiStart,t.phiLength)}}class ts extends Uo{constructor(t=1,e=1,i=4,s=8){const r=new go;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new ts(t.radius,t.length,t.capSegments,t.radialSegments)}}class Zr extends Ee{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new b,h=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const m=i+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Be extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],m=[];let _=0;const g=[],d=i/2;let f=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2));function x(){const y=new b,C=new b;let A=0;const R=(e-t)/i;for(let H=0;H<=r;H++){const E=[],T=H/r,B=T*(e-t)+t;for(let V=0;V<=s;V++){const nt=V/s,I=nt*l+o,N=Math.sin(I),k=Math.cos(I);C.x=B*N,C.y=-T*i+d,C.z=B*k,u.push(C.x,C.y,C.z),y.set(N,R,k).normalize(),p.push(y.x,y.y,y.z),m.push(nt,1-T),E.push(_++)}g.push(E)}for(let H=0;H<s;H++)for(let E=0;E<r;E++){const T=g[E][H],B=g[E+1][H],V=g[E+1][H+1],nt=g[E][H+1];h.push(T,B,nt),h.push(B,V,nt),A+=6}c.addGroup(f,A,0),f+=A}function v(y){const C=_,A=new it,R=new b;let H=0;const E=y===!0?t:e,T=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,d*T,0),p.push(0,T,0),m.push(.5,.5),_++;const B=_;for(let V=0;V<=s;V++){const I=V/s*l+o,N=Math.cos(I),k=Math.sin(I);R.x=E*k,R.y=d*T,R.z=E*N,u.push(R.x,R.y,R.z),p.push(0,T,0),A.x=N*.5+.5,A.y=k*.5*T+.5,m.push(A.x,A.y),_++}for(let V=0;V<s;V++){const nt=C+V,I=B+V;y===!0?h.push(I,I+1,nt):h.push(I+1,I,nt),H+=3}c.addGroup(f,H,y===!0?1:2),f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $r extends Be{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new $r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kr extends go{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new go().fromJSON(s))}return this}}const Rg={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Oh(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,p,m;if(i&&(r=Dg(n,t,r,e)),n.length>80*e){o=c=n[0],l=h=n[1];for(let _=e;_<s;_+=e)u=n[_],p=n[_+1],u<o&&(o=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return zs(r,a,e,o,l,m,0),a}};function Oh(n,t,e,i,s){let r,a;if(s===Wg(n,t,e,i)>0)for(r=t;r<e;r+=i)a=Ec(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=Ec(r,n[r],n[r+1],a);return a&&Jr(a,a.next)&&(Hs(a),a=a.next),a}function wi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Jr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zs(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Bg(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Cg(n,i,s,r):Pg(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Hs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Lg(wi(n),t,e),zs(n,t,e,i,s,r,2)):a===2&&Ig(n,t,e,i,s,r):zs(wi(n),t,e,i,s,r,1);break}}}function Pg(n){const t=n.prev,e=n,i=n.next;if(ge(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=p&&_.y>=u&&_.y<=m&&es(s,o,r,l,a,c,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Cg(n,t,e,i){const s=n.prev,r=n,a=n.next;if(ge(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,m=o<l?o<c?o:c:l<c?l:c,_=h<u?h<p?h:p:u<p?u:p,g=o>l?o>c?o:c:l>c?l:c,d=h>u?h>p?h:p:u>p?u:p,f=_o(m,_,t,e,i),x=_o(g,d,t,e,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=f&&y&&y.z<=x;){if(v.x>=m&&v.x<=g&&v.y>=_&&v.y<=d&&v!==s&&v!==a&&es(o,h,l,u,c,p,v.x,v.y)&&ge(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=m&&y.x<=g&&y.y>=_&&y.y<=d&&y!==s&&y!==a&&es(o,h,l,u,c,p,y.x,y.y)&&ge(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=g&&v.y>=_&&v.y<=d&&v!==s&&v!==a&&es(o,h,l,u,c,p,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=m&&y.x<=g&&y.y>=_&&y.y<=d&&y!==s&&y!==a&&es(o,h,l,u,c,p,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lg(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Jr(s,r)&&Bh(s,i,i.next,r)&&ks(s,r)&&ks(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Hs(i),Hs(i.next),i=n=r),i=i.next}while(i!==n);return wi(i)}function Ig(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hg(a,o)){let l=zh(a,o);a=wi(a,a.next),l=wi(l,l.next),zs(a,t,e,i,s,r,0),zs(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Dg(n,t,e,i){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Oh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(kg(c));for(s.sort(Ug),r=0;r<s.length;r++)e=Ng(s[r],e);return e}function Ug(n,t){return n.x-t.x}function Ng(n,t){const e=Fg(n,t);if(!e)return t;const i=zh(e,n);return wi(i,i.next),wi(e,e.next)}function Fg(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const p=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>i&&(i=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&es(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),ks(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Og(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Og(n,t){return ge(n.prev,n,t.prev)<0&&ge(t.next,n,n.next)<0}function Bg(n,t,e,i){let s=n;do s.z===0&&(s.z=_o(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zg(s)}function zg(n){let t,e,i,s,r,a,o,l,c=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(a>1);return n}function _o(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kg(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function es(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Hg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Gg(n,t)&&(ks(n,t)&&ks(t,n)&&Vg(n,t)&&(ge(n.prev,n,t.prev)||ge(n,t.prev,t))||Jr(n,t)&&ge(n.prev,n,n.next)>0&&ge(t.prev,t,t.next)>0)}function ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Jr(n,t){return n.x===t.x&&n.y===t.y}function Bh(n,t,e,i){const s=br(ge(n,t,e)),r=br(ge(n,t,i)),a=br(ge(e,i,n)),o=br(ge(e,i,t));return!!(s!==r&&a!==o||s===0&&Er(n,e,t)||r===0&&Er(n,i,t)||a===0&&Er(e,n,i)||o===0&&Er(e,t,i))}function Er(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function br(n){return n>0?1:n<0?-1:0}function Gg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Bh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ks(n,t){return ge(n.prev,n,n.next)<0?ge(n,t,n.next)>=0&&ge(n,n.prev,t)>=0:ge(n,t,n.prev)<0||ge(n,n.next,t)<0}function Vg(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zh(n,t){const e=new vo(n.i,n.x,n.y),i=new vo(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ec(n,t,e,i){const s=new vo(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Hs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vo(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wg(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class si{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return si.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];bc(t),wc(i,t);let a=t.length;e.forEach(bc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wc(i,e[l]);const o=Rg.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function bc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function wc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class jr extends Ee{constructor(t=new Kr([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Xg;let v,y=!1,C,A,R,H;f&&(v=f.getSpacedPoints(h),y=!0,p=!1,C=f.computeFrenetFrames(h,!1),A=new b,R=new b,H=new b),p||(d=0,m=0,_=0,g=0);const E=o.extractPoints(c);let T=E.shape;const B=E.holes;if(!si.isClockWise(T)){T=T.reverse();for(let P=0,ot=B.length;P<ot;P++){const q=B[P];si.isClockWise(q)&&(B[P]=q.reverse())}}const nt=si.triangulateShape(T,B),I=T;for(let P=0,ot=B.length;P<ot;P++){const q=B[P];T=T.concat(q)}function N(P,ot,q){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ot,q)}const k=T.length,$=nt.length;function Y(P,ot,q){let rt,W,wt;const mt=P.x-ot.x,S=P.y-ot.y,M=q.x-P.x,U=q.y-P.y,et=mt*mt+S*S,Q=mt*U-S*M;if(Math.abs(Q)>Number.EPSILON){const J=Math.sqrt(et),yt=Math.sqrt(M*M+U*U),ht=ot.x-S/J,xt=ot.y+mt/J,At=q.x-U/yt,Ht=q.y+M/yt,tt=((At-ht)*U-(Ht-xt)*M)/(mt*U-S*M);rt=ht+mt*tt-P.x,W=xt+S*tt-P.y;const ee=rt*rt+W*W;if(ee<=2)return new it(rt,W);wt=Math.sqrt(ee/2)}else{let J=!1;mt>Number.EPSILON?M>Number.EPSILON&&(J=!0):mt<-Number.EPSILON?M<-Number.EPSILON&&(J=!0):Math.sign(S)===Math.sign(U)&&(J=!0),J?(rt=-S,W=mt,wt=Math.sqrt(et)):(rt=mt,W=S,wt=Math.sqrt(et/2))}return new it(rt/wt,W/wt)}const Z=[];for(let P=0,ot=I.length,q=ot-1,rt=P+1;P<ot;P++,q++,rt++)q===ot&&(q=0),rt===ot&&(rt=0),Z[P]=Y(I[P],I[q],I[rt]);const K=[];let st,at=Z.concat();for(let P=0,ot=B.length;P<ot;P++){const q=B[P];st=[];for(let rt=0,W=q.length,wt=W-1,mt=rt+1;rt<W;rt++,wt++,mt++)wt===W&&(wt=0),mt===W&&(mt=0),st[rt]=Y(q[rt],q[wt],q[mt]);K.push(st),at=at.concat(st)}for(let P=0;P<d;P++){const ot=P/d,q=m*Math.cos(ot*Math.PI/2),rt=_*Math.sin(ot*Math.PI/2)+g;for(let W=0,wt=I.length;W<wt;W++){const mt=N(I[W],Z[W],rt);vt(mt.x,mt.y,-q)}for(let W=0,wt=B.length;W<wt;W++){const mt=B[W];st=K[W];for(let S=0,M=mt.length;S<M;S++){const U=N(mt[S],st[S],rt);vt(U.x,U.y,-q)}}}const G=_+g;for(let P=0;P<k;P++){const ot=p?N(T[P],at[P],G):T[P];y?(R.copy(C.normals[0]).multiplyScalar(ot.x),A.copy(C.binormals[0]).multiplyScalar(ot.y),H.copy(v[0]).add(R).add(A),vt(H.x,H.y,H.z)):vt(ot.x,ot.y,0)}for(let P=1;P<=h;P++)for(let ot=0;ot<k;ot++){const q=p?N(T[ot],at[ot],G):T[ot];y?(R.copy(C.normals[P]).multiplyScalar(q.x),A.copy(C.binormals[P]).multiplyScalar(q.y),H.copy(v[P]).add(R).add(A),vt(H.x,H.y,H.z)):vt(q.x,q.y,u/h*P)}for(let P=d-1;P>=0;P--){const ot=P/d,q=m*Math.cos(ot*Math.PI/2),rt=_*Math.sin(ot*Math.PI/2)+g;for(let W=0,wt=I.length;W<wt;W++){const mt=N(I[W],Z[W],rt);vt(mt.x,mt.y,u+q)}for(let W=0,wt=B.length;W<wt;W++){const mt=B[W];st=K[W];for(let S=0,M=mt.length;S<M;S++){const U=N(mt[S],st[S],rt);y?vt(U.x,U.y+v[h-1].y,v[h-1].x+q):vt(U.x,U.y,u+q)}}}j(),pt();function j(){const P=s.length/3;if(p){let ot=0,q=k*ot;for(let rt=0;rt<$;rt++){const W=nt[rt];It(W[2]+q,W[1]+q,W[0]+q)}ot=h+d*2,q=k*ot;for(let rt=0;rt<$;rt++){const W=nt[rt];It(W[0]+q,W[1]+q,W[2]+q)}}else{for(let ot=0;ot<$;ot++){const q=nt[ot];It(q[2],q[1],q[0])}for(let ot=0;ot<$;ot++){const q=nt[ot];It(q[0]+k*h,q[1]+k*h,q[2]+k*h)}}i.addGroup(P,s.length/3-P,0)}function pt(){const P=s.length/3;let ot=0;St(I,ot),ot+=I.length;for(let q=0,rt=B.length;q<rt;q++){const W=B[q];St(W,ot),ot+=W.length}i.addGroup(P,s.length/3-P,1)}function St(P,ot){let q=P.length;for(;--q>=0;){const rt=q;let W=q-1;W<0&&(W=P.length-1);for(let wt=0,mt=h+d*2;wt<mt;wt++){const S=k*wt,M=k*(wt+1),U=ot+rt+S,et=ot+W+S,Q=ot+W+M,J=ot+rt+M;zt(U,et,Q,J)}}}function vt(P,ot,q){l.push(P),l.push(ot),l.push(q)}function It(P,ot,q){Et(P),Et(ot),Et(q);const rt=s.length/3,W=x.generateTopUV(i,s,rt-3,rt-2,rt-1);Ot(W[0]),Ot(W[1]),Ot(W[2])}function zt(P,ot,q,rt){Et(P),Et(ot),Et(rt),Et(ot),Et(q),Et(rt);const W=s.length/3,wt=x.generateSideWallUV(i,s,W-6,W-3,W-2,W-1);Ot(wt[0]),Ot(wt[1]),Ot(wt[3]),Ot(wt[1]),Ot(wt[2]),Ot(wt[3])}function Et(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function Ot(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return qg(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kr[s.type]().fromJSON(s)),new jr(i,t.options)}}const Xg={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],p=t[s*3],m=t[s*3+1],_=t[s*3+2],g=t[r*3],d=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-u),new it(p,1-_),new it(g,1-f)]:[new it(o,1-l),new it(h,1-u),new it(m,1-_),new it(d,1-f)]}};function qg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class No extends Ee{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const p=(e-t)/s,m=new b,_=new it;for(let g=0;g<=s;g++){for(let d=0;d<=i;d++){const f=r+d/i*a;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/e+1)/2,_.y=(m.y/e+1)/2,h.push(_.x,_.y)}u+=p}for(let g=0;g<s;g++){const d=g*(i+1);for(let f=0;f<i;f++){const x=f+d,v=x,y=x+i+1,C=x+i+2,A=x+1;o.push(v,y,A),o.push(y,C,A)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fo extends Ee{constructor(t=new Kr([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(a,2));function c(h){const u=s.length/3,p=h.extractPoints(e);let m=p.shape;const _=p.holes;si.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,f=_.length;d<f;d++){const x=_[d];si.isClockWise(x)===!0&&(_[d]=x.reverse())}const g=si.triangulateShape(m,_);for(let d=0,f=_.length;d<f;d++){const x=_[d];m=m.concat(x)}for(let d=0,f=m.length;d<f;d++){const x=m[d];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let d=0,f=g.length;d<f;d++){const x=g[d],v=x[0]+u,y=x[1]+u,C=x[2]+u;i.push(v,y,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Yg(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new Fo(i,t.curveSegments)}}function Yg(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class _n extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new b,p=new b,m=[],_=[],g=[],d=[];for(let f=0;f<=i;f++){const x=[],v=f/i;let y=0;f===0&&a===0?y=.5/e:f===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+v*o),_.push(u.x,u.y,u.z),p.copy(u).normalize(),g.push(p.x,p.y,p.z),d.push(A+y,1-v),x.push(c++)}h.push(x)}for(let f=0;f<i;f++)for(let x=0;x<e;x++){const v=h[f][x+1],y=h[f][x],C=h[f+1][x],A=h[f+1][x+1];(f!==0||a>0)&&m.push(v,y,A),(f!==i-1||l<Math.PI)&&m.push(y,C,A)}this.setIndex(m),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(g,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qr extends Ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new b,u=new b,p=new b;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const g=_/s*r,d=m/i*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(g),u.y=(t+e*Math.cos(d))*Math.sin(g),u.z=e*Math.sin(d),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const g=(s+1)*m+_-1,d=(s+1)*(m-1)+_-1,f=(s+1)*(m-1)+_,x=(s+1)*m+_;a.push(g,d,x),a.push(d,f,x)}this.setIndex(a),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Oo extends Ee{constructor(t=new Nh(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new b,l=new b,c=new it;let h=new b;const u=[],p=[],m=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2));function g(){for(let v=0;v<e;v++)d(v);d(r===!1?e:0),x(),f()}function d(v){h=t.getPointAt(v/e,h);const y=a.normals[v],C=a.binormals[v];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,H=Math.sin(R),E=-Math.cos(R);l.x=E*y.x+H*C.x,l.y=E*y.y+H*C.y,l.z=E*y.z+H*C.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const C=(s+1)*(v-1)+(y-1),A=(s+1)*v+(y-1),R=(s+1)*v+y,H=(s+1)*(v-1)+y;_.push(C,A,H),_.push(A,R,H)}}function x(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Oo(new kr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ue extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ta extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class xo extends ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Va=new se,Tc=new b,Ac=new b;class kh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rc=new se,Rs=new b,Wa=new b;class Zg extends kh{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Rs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Rs),Wa.copy(i.position),Wa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Wa),i.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Rc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc)}}class Ue extends ta{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $g extends kh{constructor(){super(new yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hr extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new $g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kg extends ta{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hh{constructor(t,e,i=0,s=1/0){this.ray=new To(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Mo(t,this,i,e),i.sort(Pc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Mo(t[s],this,i,e);return i.sort(Pc),i}}function Pc(n,t){return n.distance-t.distance}function Mo(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Mo(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const Bn={minX:-75,maxX:75,minZ:-50,maxZ:50},Jg=-9,Cc={width:Bn.maxX-Bn.minX,depth:Bn.maxZ-Bn.minZ},Lr={hall:-2.6,platform:-4.8,track:-5.6},Xa={x:-20,y:Lr.hall+1.75,z:0};function jg(n){const t=document.createElement("canvas");return t.width=n,t.height=n,t}function Ge(n,t,e=1,i=1){const s=jg(n);t(s.getContext("2d"),n,n);const r=new Wn(s);return r.wrapS=r.wrapT=Ei,r.repeat.set(e,i),r.colorSpace=fe,r.anisotropy=4,r}function ye(n,t,e){const i=n.clone();return i.needsUpdate=!0,i.wrapS=i.wrapT=Ei,i.repeat.set(t,e),i}function xn(n,t,e=16,i=.05){const s=n.getImageData(0,0,t,t),r=s.data;for(let a=0;a<r.length;a+=4){const o=(Math.random()-.5)*e;r[a]+=o,r[a+1]+=o,r[a+2]+=o}n.putImageData(s,0,0),n.save(),n.globalAlpha=i;for(let a=0;a<18;a++)n.fillStyle=Math.random()>.5?"#000":"#fff",n.fillRect(Math.random()*t,Math.random()*t,1+Math.random()*5,10+Math.random()*60);n.restore()}function Lc(n,t){n.fillStyle="#6b6f72",n.fillRect(0,0,t,t);for(let e=0;e<900;e++){const i=90+Math.random()*60;n.fillStyle=`rgba(${i},${i},${i+4},${Math.random()*.25})`,n.fillRect(Math.random()*t,Math.random()*t,1+Math.random()*4,1+Math.random()*4)}n.strokeStyle="rgba(35,38,40,0.45)",n.lineWidth=2;for(let e=0;e<=2;e++)n.beginPath(),n.moveTo(0,t/2*e),n.lineTo(t,t/2*e),n.stroke();xn(n,t,18,.04)}function Qg(n,t){n.fillStyle="#c7cdd0",n.fillRect(0,0,t,t);const e=4,i=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=198+Math.random()*34;n.fillStyle=`rgb(${a},${a+3},${a+5})`,n.fillRect(r*i+2,s*i+2,i-4,i-4),n.fillStyle="rgba(90,105,110,0.22)",n.fillRect(r*i+3,s*i+i-8,i-6,5)}n.strokeStyle="rgba(84,96,100,0.65)",n.lineWidth=3;for(let s=0;s<=e;s++)n.beginPath(),n.moveTo(s*i,0),n.lineTo(s*i,t),n.stroke(),n.beginPath(),n.moveTo(0,s*i),n.lineTo(t,s*i),n.stroke();xn(n,t,12,.05)}function t_(n,t){n.fillStyle="#9aa2a4",n.fillRect(0,0,t,t);const e=4,i=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=148+Math.random()*22;n.fillStyle=`rgb(${a},${a+2},${a})`,n.fillRect(r*i+1,s*i+1,i-2,i-2)}n.strokeStyle="rgba(60,64,62,0.5)",n.lineWidth=2;for(let s=0;s<=e;s++)n.beginPath(),n.moveTo(s*i,0),n.lineTo(s*i,t),n.stroke(),n.beginPath(),n.moveTo(0,s*i),n.lineTo(t,s*i),n.stroke();n.fillStyle="rgba(32,34,33,0.16)";for(let s=0;s<12;s++)n.beginPath(),n.ellipse(Math.random()*t,Math.random()*t,10+Math.random()*44,4+Math.random()*16,Math.random()*3,0,Math.PI*2),n.fill();xn(n,t,14,.05)}function e_(n,t){n.fillStyle="#2c3033",n.fillRect(0,0,t,t);for(let e=0;e<2200;e++){const i=38+Math.random()*62;n.fillStyle=`rgba(${i},${i+2},${i+4},${.25+Math.random()*.45})`,n.fillRect(Math.random()*t,Math.random()*t,1+Math.random()*3,1+Math.random()*3)}n.strokeStyle="rgba(15,16,18,0.6)",n.lineWidth=1.5;for(let e=0;e<5;e++)n.beginPath(),n.moveTo(Math.random()*t,0),n.bezierCurveTo(Math.random()*t,t*.4,Math.random()*t,t*.7,Math.random()*t,t),n.stroke();xn(n,t,16,.06)}function n_(n,t){n.fillStyle="#666b6a",n.fillRect(0,0,t,t);const e=4,i=t/e;for(let s=0;s<e;s++)for(let r=0;r<e;r++){const a=98+Math.random()*26;n.fillStyle=`rgb(${a},${a+3},${a})`,n.fillRect(r*i+2,s*i+2,i-4,i-4)}n.strokeStyle="rgba(50,54,52,0.65)",n.lineWidth=3;for(let s=0;s<=e;s++)n.beginPath(),n.moveTo(s*i,0),n.lineTo(s*i,t),n.stroke(),n.beginPath(),n.moveTo(0,s*i),n.lineTo(t,s*i),n.stroke();xn(n,t,14,.05)}function i_(n,t){n.fillStyle="#5e666c",n.fillRect(0,0,t,t);const e=n.createLinearGradient(0,0,t,t);e.addColorStop(0,"rgba(255,255,255,0.12)"),e.addColorStop(.5,"rgba(0,0,0,0.10)"),e.addColorStop(1,"rgba(255,255,255,0.06)"),n.fillStyle=e,n.fillRect(0,0,t,t),n.strokeStyle="rgba(200,210,215,0.12)";for(let i=0;i<120;i++){const s=Math.random()*t;n.beginPath(),n.moveTo(0,s),n.lineTo(t,s+(Math.random()-.5)*3),n.stroke()}xn(n,t,10,.03)}function s_(n,t){n.fillStyle="#3b4a52",n.fillRect(0,0,t,t);for(let e=0;e<70;e++)n.fillStyle=`rgba(${Math.random()>.5?"255,255,255":"0,0,0"},${Math.random()*.05})`,n.fillRect(0,Math.random()*t,t,1+Math.random()*6);for(let e=0;e<60;e++)n.fillStyle=`rgba(120,62,32,${.2+Math.random()*.4})`,n.fillRect(Math.random()*t,Math.random()*t,1+Math.random()*5,1+Math.random()*3);xn(n,t,10,.04)}function r_(n,t){n.fillStyle="#6b4a2e",n.fillRect(0,0,t,t);for(let e=0;e<40;e++){const i=Math.random()*t;n.strokeStyle=`rgba(${40+Math.random()*50},${22+Math.random()*30},10,${.2+Math.random()*.4})`,n.lineWidth=1+Math.random()*3,n.beginPath(),n.moveTo(0,i),n.bezierCurveTo(t*.35,i+(Math.random()-.5)*12,t*.7,i+(Math.random()-.5)*12,t,i),n.stroke()}for(let e=0;e<6;e++)n.fillStyle="rgba(20,10,5,0.35)",n.beginPath(),n.ellipse(Math.random()*t,Math.random()*t,3+Math.random()*6,2+Math.random()*3,Math.random(),0,Math.PI*2),n.fill();xn(n,t,12,.04)}function a_(n,t){n.fillStyle="#3a3833",n.fillRect(0,0,t,t);for(let e=0;e<2600;e++){const i=40+Math.random()*70;n.fillStyle=`rgb(${i},${i-2},${i-4})`,n.beginPath(),n.arc(Math.random()*t,Math.random()*t,.6+Math.random()*2.2,0,Math.PI*2),n.fill()}xn(n,t,20,.05)}function o_(n,t){n.fillStyle="#3a2220",n.fillRect(0,0,t,t);const e=16,i=32;for(let s=0;s<t;s+=e){const r=s/e%2?i/2:0;for(let a=-i;a<t+i;a+=i){const o=90+Math.random()*40;n.fillStyle=`rgb(${o+35},${o-12},${o-24})`,n.fillRect(a+r+2,s+2,i-4,e-4)}}xn(n,t,14,.05)}function l_(n,t){n.fillStyle="#33383c",n.fillRect(0,0,t,t);for(let e=0;e<1600;e++){const i=50+Math.random()*40;n.fillStyle=`rgba(${i},${i+2},${i+4},0.5)`,n.fillRect(Math.random()*t,Math.random()*t,1+Math.random()*3,1+Math.random()*3)}n.strokeStyle="rgba(15,18,20,0.55)",n.lineWidth=2;for(let e=0;e<=4;e++)n.beginPath(),n.moveTo(0,t/4*e),n.lineTo(t,t/4*e),n.stroke();xn(n,t,16,.05)}function c_(n,t){n.fillStyle="#151b22",n.fillRect(0,0,t,t);const e=6,i=8,s=t/e,r=t/i;for(let a=0;a<i;a++)for(let o=0;o<e;o++){const l=Math.random()<.32;n.fillStyle=l?Math.random()<.5?"#f2c977":"#79c9e8":"#0a0f14",n.fillRect(o*s+4,a*r+5,s-8,r-10),n.fillStyle=l?"rgba(255,255,255,0.18)":"rgba(255,255,255,0.04)",n.fillRect(o*s+6,a*r+7,s-12,3)}n.strokeStyle="#2b333a",n.lineWidth=3;for(let a=0;a<=e;a++)n.beginPath(),n.moveTo(a*s,0),n.lineTo(a*s,t),n.stroke();for(let a=0;a<=i;a++)n.beginPath(),n.moveTo(0,a*r),n.lineTo(t,a*r),n.stroke()}function h_(n,t){n.fillStyle="#d9e3e6",n.fillRect(0,0,t,t),n.fillStyle="#23343d",n.fillRect(0,0,t,18);const e=["#e04b4b","#efc84a","#3e9ad6","#63b86d","#e58b3d","#b56ad1"];for(let i=0;i<4;i++)for(let s=0;s<5;s++)n.fillStyle=e[(i*5+s)%e.length],n.fillRect(22+s*46,44+i*48,30,34),n.fillStyle="rgba(255,255,255,0.4)",n.fillRect(24+s*46,46+i*48,6,30);n.fillStyle="#18242a",n.fillRect(10,t-34,t-20,18),n.fillStyle="#8fffc3",n.font="bold 20px monospace",n.fillText("DRINKS",30,30)}function Gh(n,t={}){const{width:e=512,height:i=128,bg:s="#0c1116",color:r="#e9f7ff",accent:a="#20d6c7",font:o="bold 64px Arial",border:l=!0,sub:c=""}=t,h=document.createElement("canvas");h.width=e,h.height=i;const u=h.getContext("2d");s==="transparent"?u.clearRect(0,0,e,i):(u.fillStyle=s,u.fillRect(0,0,e,i)),l&&(u.strokeStyle=a,u.lineWidth=6,u.strokeRect(4,4,e-8,i-8)),u.fillStyle=r,u.font=o,u.textAlign="center",u.textBaseline="middle",u.shadowColor=a,u.shadowBlur=16,u.fillText(n,e/2,c?i*.42:i/2),c&&(u.font=`bold ${Math.round(i*.18)}px Arial`,u.fillStyle=a,u.fillText(c,e/2,i*.75));const p=new Wn(h);return p.colorSpace=fe,p.anisotropy=4,p}function u_(n,t){const e=n.createLinearGradient(0,0,0,t);e.addColorStop(0,"#ffffff"),e.addColorStop(.5,"#9ff7ff"),e.addColorStop(1,"#2bb6d8"),n.fillStyle=e,n.fillRect(0,0,t,t);for(let i=0;i<6;i++)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(0,Math.random()*t,t,1+Math.random()*4)}function d_(n,t){n.fillStyle="#e8c88a",n.fillRect(0,0,t,t),n.strokeStyle="rgba(120,60,30,0.5)",n.lineWidth=2;for(let e=10;e<t;e+=18)n.beginPath(),n.moveTo(0,e),n.lineTo(t,e),n.stroke();n.fillStyle="#b83a2a",n.beginPath(),n.arc(t/2,t/2,t*.22,0,Math.PI*2),n.fill()}function f_(n){const t=n?Math.min(8,n.capabilities.getMaxAnisotropy()):4,e=C=>(C.anisotropy=t,C),i=e(Ge(256,Lc,1,1)),s=e(Ge(256,Lc,1,1)),r=e(Ge(256,Qg,1,1)),a=e(Ge(256,t_,1,1)),o=e(Ge(256,e_,1,1)),l=e(Ge(256,n_,1,1)),c=e(Ge(128,i_,1,1)),h=e(Ge(128,s_,1,1)),u=e(Ge(128,r_,1,1)),p=e(Ge(128,a_,1,1)),m=e(Ge(256,o_,1,1)),_=e(Ge(128,l_,1,1)),g=e(Ge(256,c_,1,1)),d=e(Ge(128,h_,1,1)),f=e(Ge(64,u_,1,1)),x=e(Ge(64,d_,1,1)),v=C=>new ue(C),y={concrete:v({map:ye(i,6,6),color:10133667,roughness:.95,metalness:.02}),concreteDark:v({map:ye(s,8,8),color:6120552,roughness:1,metalness:.02}),concreteWall:v({map:ye(i,4,2),color:11120818,roughness:.92,metalness:.02}),tileWall:v({map:ye(r,6,3),color:14673897,roughness:.55,metalness:.03}),tileFloor:v({map:ye(r,8,8),color:12174020,roughness:.6,metalness:.03}),platform:v({map:ye(a,8,4),color:12765384,roughness:.8}),asphalt:v({map:ye(o,12,8),color:10199204,roughness:1}),pavement:v({map:ye(l,10,10),color:12041400,roughness:.95}),metal:v({map:ye(c,2,2),color:8949910,roughness:.38,metalness:.85}),darkMetal:v({map:ye(c,2,2),color:4015435,roughness:.5,metalness:.7}),paintedSteel:v({map:ye(h,3,2),color:7308176,roughness:.62,metalness:.45}),greenSteel:v({map:ye(h,3,2),color:5468255,roughness:.6,metalness:.4}),rustMetal:v({map:ye(h,3,2),color:8280638,roughness:.85,metalness:.35}),wood:v({map:ye(u,3,2),color:13214067,roughness:.8,metalness:.02}),darkWood:v({map:ye(u,3,2),color:7164476,roughness:.85}),gravel:v({map:ye(p,10,20),color:10986394,roughness:1}),brick:v({map:ye(m,6,3),color:11570304,roughness:.95}),roof:v({map:ye(_,6,6),color:9147287,roughness:.9,metalness:.1}),windowWall:v({map:ye(g,3,2),color:10528682,roughness:.55,metalness:.2}),glass:v({color:9420484,roughness:.08,metalness:.35,transparent:!0,opacity:.32}),darkGlass:v({color:858658,roughness:.12,metalness:.6}),plastic:v({color:14212576,roughness:.4,metalness:.05}),darkPlastic:v({color:1712678,roughness:.55}),yellow:v({color:15251762,roughness:.5,metalness:.1}),white:v({color:15265520,roughness:.6}),red:v({color:11876143,roughness:.55}),blue:v({color:2911912,roughness:.5,metalness:.2}),vending:v({map:ye(d,1,1),color:15397618,roughness:.35,metalness:.15}),lantern:v({map:x,color:16766624,emissive:16742965,emissiveIntensity:1.2,roughness:.7}),stone:v({map:ye(i,4,4),color:9409422,roughness:.95}),rubber:v({color:1316890,roughness:.95}),chrome:v({color:14015970,roughness:.16,metalness:1}),headlight:v({color:16773839,emissive:16771248,emissiveIntensity:3,roughness:.2}),taillight:v({color:16729654,emissive:16718346,emissiveIntensity:2.2,roughness:.3}),lampWarm:new ce({color:16766881}),lampCool:new ce({color:14481151}),neonCyan:new ce({color:4059391}),neonPink:new ce({color:16732067}),neonYellow:new ce({color:16765498}),neonGreen:new ce({color:9240410}),neonRed:new ce({color:16734794}),neonBlue:new ce({color:4886015}),neonTexture:new ue({map:f,emissive:11467007,emissiveIntensity:1.4,color:12580607,roughness:.3})};return y.carPaints=new Map,y.getCarPaint=C=>(y.carPaints.has(C)||y.carPaints.set(C,v({color:C,roughness:.28,metalness:.55})),y.carPaints.get(C)),y.tex={concrete:i,concreteDark:s,tiles:r,platform:a,asphalt:o,pavement:l,metal:c,steel:h,wood:u,gravel:p,brick:m,roof:_,windows:g,vending:d,neon:f,lantern:x},y}const Vh=new Be(.38,.38,.28,18),p_=new Be(.22,.22,.3,12),m_=new Be(.07,.07,.32,8);function Wh(n){const t=new Kr;t.moveTo(n[0][0],n[0][1]);for(let e=1;e<n.length;e++){const i=n[e];i.length===4?t.quadraticCurveTo(i[0],i[1],i[2],i[3]):t.lineTo(i[0],i[1])}return t.closePath(),t}function Bo(n,t,e=.07){const i=Wh(n),s=new jr(i,{depth:t-e*2,bevelEnabled:!0,bevelSize:e,bevelThickness:e,bevelSegments:2,curveSegments:8});return s.translate(0,0,-(t-e*2)/2),s}const qa=new Map;function g_(n){if(qa.has(n))return qa.get(n);let t,e;n==="van"?(e=2,t=[[-2.3,.3],[-2.3,1.2],[-2.15,1.55],[-1.85,1.8],[.9,1.8],[1.5,1.55],[1.9,1.2],[2.05,.72],[2.05,.3]]):n==="truck"?(e=2.15,t=[[-2.4,.35],[-2.4,1.6],[-1.4,1.95],[-.2,1.95],[.4,1.55],[1.1,1.2],[1.6,1.2],[1.7,.65],[1.7,.35]]):(e=1.9,t=[[-2.15,.32],[-2.16,.78],[-2.05,.94],[-1.75,1],[-1.15,1.02],[-.85,1.42],[-.4,1.58],[.55,1.58],[.95,1.42],[1.18,1.03],[1.8,.96],[2.05,.86],[2.12,.55],[2.1,.32]]);const i=Bo(t,e);return qa.set(n,i),i}function __(){const n=Wh([[-1.45,1.08],[-1.45,1.34],[-.55,1.48],[.55,1.48],[.95,1.32],[.95,1.08]]);return new Fo(n)}const v_=__();function $i(n,t,e,i){const s=new X(Vh,i.rubber);s.rotation.x=Math.PI/2,s.position.set(t,.38,e),s.castShadow=!0,n.add(s);const r=new X(p_,i.chrome);r.rotation.x=Math.PI/2,r.position.set(t,.38,e+(e>0?.01:-.01)),n.add(r);const a=new X(m_,i.darkMetal);a.rotation.x=Math.PI/2,a.position.copy(r.position),n.add(a)}function wr(n,t,e,i,s,r,a=!1){const o=a?r.taillight:r.headlight,l=new _t(.06,.16,s),c=new X(l,o);c.position.set(t,e,i),n.add(c);const h=new X(new Qe(s+.15,.34),new ce({color:a?16722456:16773570,transparent:!0,opacity:.22,depthWrite:!1,side:De}));h.position.set(t+(a?-.035:.035),e,i),h.rotation.y=Math.PI/2,n.add(h)}function Un(n,t,e,i,s,r=9190203){const a=new Ut;a.position.set(e,0,i),a.rotation.y=s;const o=n.mats,l=o.getCarPaint(r),c=new X(g_(t),l);c.castShadow=!0,c.receiveShadow=!0,a.add(c);const h=new X(new _t(t==="truck"?1.9:1.7,.05,t==="van"?1.7:1.45),o.darkMetal);if(h.position.set(t==="truck"?.6:-.28,t==="van"?1.82:1.6,0),a.add(h),t!=="truck"){const x=o.darkGlass;for(const C of[-1,1]){const A=new X(v_,x);A.position.set(0,0,C*(t==="van"?1.01:.96)),C<0&&(A.rotation.y=Math.PI),a.add(A)}const v=new X(new _t(.08,.5,t==="van"?1.6:1.4),o.darkGlass);v.position.set(t==="van"?1.55:1.03,1.32,0),v.rotation.z=-.45,a.add(v);const y=new X(new _t(.06,.42,t==="van"?1.55:1.3),o.darkGlass);y.position.set(t==="van"?-2.2:-1.72,1.25,0),a.add(y)}else{const x=new X(new _t(3.2,2.15,2.15),o.paintedSteel);x.position.set(.65,1.55,0),x.castShadow=!0,a.add(x);for(const y of[-1,1])for(let C=0;C<4;C++){const A=new X(new _t(3.1,.06,.05),o.darkMetal);A.position.set(.65,.7+C*.5,y*1.09),a.add(A)}const v=new X(new _t(.06,1.85,1.9),o.darkMetal);v.position.set(2.28,1.55,0),a.add(v)}const u=t==="van"?.94:.86;$i(a,-1.35,u,o),$i(a,1.35,u,o),$i(a,-1.35,-u,o),$i(a,1.35,-u,o),t==="truck"&&($i(a,1.9,u,o),$i(a,1.9,-u,o));const p=new _t(.22,.2,t==="van"?2:1.9),m=new X(p,o.chrome);m.position.set(t==="truck"?1.76:2.16,.42,0),a.add(m);const _=new X(p,o.darkMetal);_.position.set(t==="truck"?-2.45:-2.2,.42,0),a.add(_),wr(a,t==="truck"?1.74:2.14,.73,.62,.34,o,!1),wr(a,t==="truck"?1.74:2.14,.73,-.62,.34,o,!1),wr(a,-2.2,.72,.62,.32,o,!0),wr(a,-2.2,.72,-.62,.32,o,!0);for(const x of[-1,1]){const v=new X(new _t(.16,.03,.12),o.darkMetal);v.position.set(.85,1.05,x*.98),a.add(v);const y=new X(new _t(.06,.14,.2),o.chrome);y.position.set(.86,1.08,x*1.08),a.add(y)}const g=new X(new Qe(.5,.15),o.white);g.position.set(t==="truck"?1.89:2.24,.52,0),g.rotation.y=Math.PI/2,a.add(g);const d=new X(new _t(.05,.2,.8),o.darkMetal);if(d.position.set(t==="truck"?1.74:2.14,.61,0),a.add(d),t==="taxi"){const x=new X(new _t(.5,.18,.26),o.neonYellow);x.position.set(-.3,1.74,0),a.add(x);const v=new Ue(16765498,3.2,6,2);v.position.set(-.3,1.75,0),a.add(v)}n.scene.add(a);const f=new Oe().setFromObject(a);return f.min.y=Math.max(f.min.y,.15),n.colliders.push({mesh:c,box:f,min:f.min,max:f.max}),n.solidMeshes.push(c),t==="truck"&&n.solidMeshes.push(a.children.find(x=>x.geometry&&x.geometry.parameters&&x.geometry.parameters.height===2.15)||c),a}const x_=Bo([[-5.2,.3],[-5.2,2.5],[-4.95,2.95],[-4.4,3.15],[4.4,3.15],[4.75,3],[5,2.6],[5,.3]],2.9,.12),Ic=Bo([[-1.2,.4],[-1.2,1.4],[-.7,2.2],[.2,2.7],[1.6,2.85],[2.4,2.5],[2.7,1.7],[2.7,.4]],2.85,.14);function Ya(n,t,e,i=!1,s=!1){const r=n.mats,a=new Ut;a.position.set(0,0,e);const o=r.paintedSteel,l=new X(x_,o);l.castShadow=!0,a.add(l);const c=new X(new _t(2.94,.3,9.8),r.greenSteel);c.position.set(0,1.7,0),a.add(c);for(const u of[-1,1]){for(let p=0;p<6;p++){const m=new X(new _t(.05,.78,1.05),r.darkGlass);m.position.set(u*1.46,2.28,-3.8+p*1.5),a.add(m);const _=new X(new _t(.03,.9,1.16),r.chrome);_.position.set(u*1.475,2.28,-3.8+p*1.5),a.add(_)}for(const p of[-2.2,2.2]){const m=new X(new _t(.06,2,1.2),r.chrome);m.position.set(u*1.47,1.6,p),a.add(m);const _=new X(new _t(.03,.62,.9),r.darkGlass);_.position.set(u*1.5,2,p),a.add(_);const g=new X(new _t(.035,.9,.03),r.darkMetal);g.position.set(u*1.51,1.5,p),a.add(g)}}for(const u of[-2.5,1.6]){const p=new X(new _t(1.4,.28,2),r.darkMetal);p.position.set(0,3.25,u),a.add(p);for(let m=0;m<5;m++){const _=new X(new _t(.9,.04,.06),r.metal);_.position.set(0,3.4,u-.7+m*.3),a.add(_)}}const h=new X(new _t(2.3,.55,9.2),r.darkMetal);h.position.set(0,.55,0),a.add(h);for(const u of[-3.3,3.3]){const p=new X(new _t(2.4,.5,1.8),r.darkPlastic);p.position.set(0,.32,u),a.add(p);for(const m of[-1,1])for(const _ of[-.55,.55]){const g=new X(Vh,r.rubber);g.scale.set(.9,.9,.9),g.rotation.z=Math.PI/2,g.position.set(m*1.22,.35,u+_),a.add(g)}}if(i){const u=new X(Ic,o);u.position.set(0,0,5),a.add(u);for(const m of[-1,1]){const _=new X(new _t(.6,.3,.08),r.headlight);_.position.set(m*.75,1.15,7.55),a.add(_);const g=new Ue(16771248,7,18,2);g.position.set(m*.75,1.15,7.8),a.add(g)}const p=new X(new _t(1.7,.88,.06),r.darkGlass);p.position.set(0,2.3,6.35),a.add(p)}if(s){const u=new X(Ic,o);u.rotation.y=Math.PI,u.position.set(0,0,-5),a.add(u);for(const p of[-1,1]){const m=new X(new _t(.6,.25,.08),r.taillight);m.position.set(p*.8,1.2,-7.55),a.add(m)}}return t.add(a),a}function M_(n,t,e,i=0){const s=new Ut;s.position.set(t,-5.55,e),s.rotation.y=i,Ya(n,s,0,!1,!1),Ya(n,s,11,!0,!1),Ya(n,s,-11,!1,!0);const r=new X(new _t(1.4,.15,.8),n.mats.darkMetal);r.position.set(0,3.5,1.5),s.add(r);for(const o of[-1,1]){const l=new X(new _t(.06,1.6,.06),n.mats.metal);l.position.set(o*.4,4.3,1.7),l.rotation.x=.35*o,s.add(l)}const a=new X(new _t(1.4,.08,.12),n.mats.metal);a.position.set(0,5.15,2.1),s.add(a),n.scene.add(s);for(const o of[-11,0,11]){const l=new Oe(new b(t-1.5,-5.5,e+o-5.6),new b(t+1.5,-2.3,e+o+5.6));n.colliders.push({mesh:s,box:l,min:l.min,max:l.max})}return n.solidMeshes.push(s),s}function y_(n){const t=new Ut,e=n.mats;for(let s=0;s<4;s++){const r=new Ut;r.position.z=s*11.4;const a=new X(new _t(2.8,3,10.8),e.paintedSteel);a.position.y=1.5,r.add(a);const o=new X(new _t(2.86,.22,10.6),e.greenSteel);o.position.set(0,2,0),r.add(o);for(const l of[-1,1])for(let c=0;c<5;c++){const h=new X(new _t(.04,.55,1.05),e.darkGlass);h.position.set(l*1.42,2.12,-3.6+c*1.6),r.add(h)}for(let l=0;l<4;l++){const c=new X(new _t(.05,.1,9.5),e.lampCool);c.position.set(-1+l*.65,.35,0),r.add(c)}t.add(r)}t.position.set(-110,8.6,-46.5),n.scene.add(t);const i=new X(new Qe(.8,.3),e.headlight);return i.position.set(0,1.5,-.3),t.add(i),n.updaters.push((s,r)=>{t.position.x+=s*12,t.position.x>110&&(t.position.x=-110),t.position.y=8.6+Math.sin(r*3)*.02}),t}const Za=new Map;function Tn(n,t,e,i=10){const s=`${n}|${t}|${e}|${i}`;return Za.has(s)||Za.set(s,new Be(n,t,e,i)),Za.get(s)}const $a=new Map;function Ft(n,t,e,i,s,r=null){const a=e.join("|");$a.has(a)||$a.set(a,new _t(...e));const o=new X($a.get(a),s);return o.position.set(...i),r&&o.rotation.set(...r),o.castShadow=!1,o.receiveShadow=!0,t.add(o),o}function oi(n,t,e,i,s=null){const r=new X(t,e);return r.position.set(...i),s&&r.rotation.set(...s),n.add(r),r}function Xn(n,t,{collider:e=!0,solid:i=!0}={}){if(n.scene.add(t),i&&t.traverse(s=>{s.isMesh&&s.material!==n.mats.glass&&n.solidMeshes.push(s)}),e){const s=new Oe().setFromObject(t);n.colliders.push({mesh:t,box:s,min:s.min,max:s.max})}}function S_(n,t,e,i=0,s=!0){const r=new Ut;r.position.set(t,0,e),r.rotation.y=i,oi(r,Tn(.09,.13,5.6,8),n.mats.darkMetal,[0,2.8,0]),oi(r,Tn(.26,.32,.28,10),n.mats.darkMetal,[0,.14,0]),Ft(r,r,[1.15,.09,.09],[.5,5.52,0],n.mats.darkMetal),Ft(r,r,[.72,.16,.38],[1.02,5.4,0],n.mats.darkMetal),Ft(r,r,[.6,.06,.3],[1.02,5.3,0],n.mats.lampWarm);const a=new X(new Qe(1.2,1.2),new ce({color:16764810,transparent:!0,opacity:.08,depthWrite:!1,side:De}));if(a.rotation.x=-Math.PI/2,a.position.set(1.02,5.24,0),r.add(a),s){const o=new Ue(16762234,22,20,1.8);o.position.set(1.02,5.15,0),r.add(o)}return Xn(n,r),r}function xi(n,t,e,i,s=3.2,r=0,a=!1){const o=new Ut;if(o.position.set(t,e,i),o.rotation.y=r,Ft(o,o,[s+.2,.12,.34],[0,0,0],n.mats.darkMetal),Ft(o,o,[s,.05,.22],[0,-.08,0],n.mats.lampCool),a){const l=new Ue(14217215,18,16,1.7);l.position.set(0,-.3,0),o.add(l)}return n.scene.add(o),n.hitOnlyMeshes.push(o.children[0]),o}function Jn(n,t,e,i,s=0){const r=new Ut;r.position.set(t,e,i),r.rotation.y=s;const a=Ft(r,r,[1.9,.09,.52],[0,.45,0],n.mats.wood);Ft(r,r,[1.9,.5,.07],[0,.72,.26],n.mats.wood);for(const l of[-.82,.82])Ft(r,r,[.08,.45,.4],[l,.22,0],n.mats.darkMetal);Ft(r,r,[.06,.28,.5],[0,.6,0],n.mats.darkMetal),n.scene.add(r),n.solidMeshes.push(a);const o=new Oe().setFromObject(r);return n.colliders.push({mesh:r,box:o,min:o.min,max:o.max}),r}function ns(n,t,e,i,s=0){const r=new Ut;r.position.set(t,e,i),r.rotation.y=s,Ft(r,r,[.95,1.95,.72],[0,.975,0],n.mats.paintedSteel);const a=new X(new Qe(.82,1.55),n.mats.vending);a.position.set(0,1.05,-.365),a.rotation.y=Math.PI,r.add(a),Ft(r,r,[.98,.16,.76],[0,1.94,0],n.mats.darkMetal);for(let l=0;l<4;l++)Ft(r,r,[.05,.04,.02],[-.32+l*.06,.72,-.37],n.mats.neonCyan);Ft(r,r,[.16,.22,.02],[.29,.74,-.37],n.mats.darkMetal);const o=new Ue(12580607,4,4,2);return o.position.set(0,1.1,-.6),r.add(o),Xn(n,r),r}function jn(n,t,e,i){const s=new Ut;s.position.set(t,e,i),oi(s,Tn(.27,.24,.8,12),n.mats.metal,[0,.4,0]),oi(s,Tn(.3,.3,.06,12),n.mats.darkMetal,[0,.82,0]);const r=new X(new _n(.2,8,6),n.mats.darkPlastic);return r.scale.y=.5,r.position.y=.87,s.add(r),Xn(n,s),s}function Dc(n,t,e,i,s=0){const r=new Ut;r.position.set(t,e,i),r.rotation.y=s,Ft(r,r,[2.2,.85,.12],[0,.65,0],n.mats.white);for(const a of[-.75,-.25,.25,.75])Ft(r,r,[.24,.28,.14],[a,.8,.01],n.mats.red);for(const a of[-.95,.95])Ft(r,r,[.09,.3,.5],[a,.15,.12],n.mats.darkMetal);return Xn(n,r),r}function vn(n,t,e,i,s,r={}){const{width:a=3,height:o=.8,rotY:l=0,bg:c="#0b1116",color:h="#f3fbff",accent:u="#3df0ff",sub:p="",doubleSide:m=!0}=r,_=Gh(s,{width:512,height:Math.max(96,Math.round(512*o/a)),bg:c,color:h,accent:u,sub:p,font:`bold ${Math.round(512*o/a*.42)}px Arial`}),g=new ue({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:.32,roughness:.6,side:m?De:Gn}),d=new X(new Qe(a,o),g);return d.position.set(t,e,i),d.rotation.y=l,n.scene.add(d),d}function we(n,t,e,i,s,r=4059391,a={}){const{width:o=4,height:l=1.1,rotY:c=0}=a,h=Gh(s,{width:512,height:160,bg:"#070c10",color:"#ffffff",accent:"#"+new Xt(r).getHexString(),font:"bold 62px Arial",border:!1}),u=new ue({map:h,emissive:r,emissiveMap:h,emissiveIntensity:2.4,color:1118481,roughness:.4,side:De}),p=new X(new Qe(o,l),u);p.position.set(t,e,i),p.rotation.y=c,n.scene.add(p);const m=new X(new _t(o+.1,l+.1,.08),n.mats.darkMetal);return m.position.set(t-Math.sin(c)*.06,e,i-Math.cos(c)*.06),m.rotation.y=c,n.scene.add(m),p}function as(n,t,e,i,s=16756838){const r=new Ut;r.position.set(t,e,i);const a=Ft(r,r,[.18,.05,.18],[0,.16,0],n.mats.darkWood);a.castShadow=!1;const o=new X(new _n(.2,10,8),n.mats.lantern);o.scale.set(1,1.25,1),o.position.y=0,r.add(o),Ft(r,r,[.16,.04,.16],[0,-.24,0],n.mats.darkWood);const l=new X(new Be(.008,.008,.3,4),n.mats.darkMetal);return l.position.y=.38,r.add(l),n.scene.add(r),r}function E_(n,t,e,i,s,r){const a=new Ut;a.position.set(t,0,e),a.rotation.y=i,Ft(a,a,[3,.9,.8],[0,.45,0],n.mats.darkWood),Ft(a,a,[3.15,.08,.95],[0,.92,0],n.mats.wood);for(const l of[-1.35,1.35])for(const c of[-.55,.6])Ft(a,a,[.08,2.7,.08],[l,1.35,c],n.mats.darkWood);const o=new X(new _t(3.2,.08,1.8),s);o.position.set(0,2.72,0),o.rotation.x=-.08,a.add(o),Ft(a,a,[3.2,.32,.04],[0,2.55,.9],s);for(let l=0;l<3;l++)Ft(a,a,[.42,.28,.3],[-.9+l*.9,1.08,0],(l%2,n.mats.wood));return vn(n,t,2.95,e,r,{width:2.4,height:.45,bg:"#1d100c",color:"#ffe8c0",accent:"#ffb45a",rotY:i}),as(n,t-1.1,2.25,e+.8,16756838),as(n,t+1.1,2.25,e+.8,16756838),Xn(n,a),a}function b_(n,t,e,i=0,s=1){const r=new Ut;r.position.set(t,0,e),r.rotation.y=i,r.scale.setScalar(s);const a=new ue({color:12073515,roughness:.62,metalness:.05});for(const o of[-2.6,2.6])oi(r,Tn(.22,.26,4.6,12),a,[o,2.3,0]),oi(r,Tn(.32,.35,.25,12),n.mats.darkMetal,[o,.12,0]);Ft(r,r,[6.8,.26,.34],[0,4.5,0],a),Ft(r,r,[7.8,.3,.44],[0,4.86,0],a);for(const o of[-3.9,3.9])Ft(r,r,[.5,.3,.46],[o,4.94,0],a,[0,0,o<0?.18:-.18]);return Ft(r,r,[4,.22,.3],[0,3.72,0],a),Ft(r,r,[1.1,.8,.12],[0,4.05,0],n.mats.darkWood),vn(n,t,4.05*s,e,"KANTO",{width:1,height:.5,bg:"#1b0f0c",color:"#ffd9a0",accent:"#b83a2b",rotY:i}),Xn(n,r),r}function w_(n,t,e,i=0){const s=new Ut;s.position.set(t,0,e),s.rotation.y=i,Ft(s,s,[5.2,.5,4.2],[0,.25,0],n.mats.concreteDark),Ft(s,s,[4.2,2.5,3.2],[0,1.75,0],n.mats.darkWood);for(let r=0;r<3;r++){const a=new X(new $r(4.1-r*.4,.7,4),r===2?n.mats.darkMetal:n.mats.paintedSteel);a.position.set(0,3.2+r*.45,0),a.rotation.y=Math.PI/4,s.add(a)}Ft(s,s,[2.4,.25,.7],[0,.12,2.3],n.mats.concrete),Ft(s,s,[1.2,1.8,.08],[0,1.35,1.62],n.mats.wood);for(const r of[-1.4,1.4])as(n,t+r,2.3,e+1.9,16751178);return Xn(n,s),s}function Ps(n,t,e,i,s=2908024,r=0){const a=new Ut;a.position.set(t,r,e),a.rotation.y=i;const o=new ue({color:s,roughness:.7,metalness:.4});Ft(a,a,[6,2.55,2.45],[0,1.28,0],o);for(let l=-11;l<=11;l++)Ft(a,a,[.06,2.3,.05],[l*.26,1.3,1.235],n.mats.darkMetal);for(const l of[-3.02,3.02])Ft(a,a,[.08,2.6,2.5],[l,1.3,0],n.mats.darkMetal);for(const l of[-1,1])Ft(a,a,[.06,2.2,1.1],[3.08,1.25,l*.6],n.mats.darkMetal),Ft(a,a,[.03,.18,.1],[3.12,1.2,l*.9],n.mats.metal);return vn(n,t+3.1,1.8,e,"K-204",{width:1.2,height:.35,bg:"#101519",color:"#cfe4ea",accent:"#7f9097",rotY:i+Math.PI/2}),Xn(n,a),a}function Ki(n,t,e,i,s,r=0,a=1.05){const o=new Ut,l=i-t,c=s-e,h=Math.hypot(l,c),u=Math.atan2(l,c);o.position.set(t,r,e),o.rotation.y=u;const p=Math.max(2,Math.round(h/1.8));for(let g=0;g<=p;g++){const d=g/p*h;Ft(o,o,[.07,a,.07],[0,a/2,d],n.mats.darkMetal)}Ft(o,o,[.07,.07,h],[0,a,h/2],n.mats.darkMetal),Ft(o,o,[.05,.05,h],[0,a*.55,h/2],n.mats.metal);const m=new ue({color:9355204,transparent:!0,opacity:.18,roughness:.2,metalness:.4,side:De}),_=new X(new Qe(h,a*.75),m);return _.position.set(0,a*.55,h/2),_.rotation.y=Math.PI/2,o.add(_),o.traverse(g=>{g.isMesh&&n.hitOnlyMeshes.push(g)}),n.scene.add(o),o}function Tr(n,t,e=.6){const i=new Ut,s=[];for(let l=0;l<t.length-1;l++){const c=new b(...t[l]),h=new b(...t[l+1]);for(let u=0;u<=8;u++){const p=u/8,m=new b().lerpVectors(c,h,p);m.y-=Math.sin(p*Math.PI)*e,s.push(m)}}const r=new Lh(s),a=new Oo(r,Math.max(16,s.length*2),.025,4,!1),o=new X(a,new ce({color:1119255}));return i.add(o),n.scene.add(i),i}function T_(n,t,e){const i=new Ut;return i.position.set(t,0,e),oi(i,Tn(.12,.16,6.5,8),n.mats.darkWood,[0,3.25,0]),Ft(i,i,[1.8,.1,.1],[0,5.8,0],n.mats.darkMetal),Ft(i,i,[.8,.08,.08],[0,5.25,0],n.mats.darkMetal),oi(i,Tn(.28,.28,.8,10),n.mats.metal,[.35,4.5,0]),Xn(n,i),i}function Ka(n,t,e,i,s=0){const r=new Ut;r.position.set(t,e,i),r.rotation.y=s,Ft(r,r,[1.1,.7,.55],[0,0,0],n.mats.paintedSteel);for(let o=0;o<5;o++)Ft(r,r,[.95,.03,.02],[0,-.22+o*.1,-.29],n.mats.darkMetal);const a=new X(new Be(.22,.22,.03,12),n.mats.darkMetal);return a.rotation.x=Math.PI/2,a.position.set(.25,0,-.3),r.add(a),n.scene.add(r),r}function yo(n,t,e,i,s,r="z"){const a=Tn(.22,.22,s,10),o=new X(a,n.mats.metal);o.position.set(t,e,i),r==="z"?o.rotation.x=Math.PI/2:o.rotation.z=Math.PI/2,n.scene.add(o);for(let l=0;l<s;l+=2.4){const c=new X(new Qr(.24,.035,6,12),n.mats.darkMetal);c.position.set(t+(r==="x"?l-s/2:0),e,i+(r==="z"?l-s/2:0)),c.rotation.x=r==="z"?Math.PI/2:0,c.rotation.y=r==="x"?Math.PI/2:0,n.scene.add(c)}return o}function A_(n){const t=n.mats,e=Lr.hall,i=Lr.platform,s=Lr.track;n.stairs(-6,-2,-1,2,e,0,10,t.tileFloor);for(const d of[-2.4,2.4])n.wall(-6,d-.2,-1,d+.2,e,.5,t.tileWall);n.wall(-1.2,-18,-1.2,-2,0,7,t.concreteWall),n.wall(-1.2,2,-1.2,18,0,7,t.concreteWall),n.wall(-1.2,-2,-1.2,2,3.6,7,t.concreteWall),n.floor(-1.4,-18,-.9,18,.16,.16,t.pavement,{collider:!1}),vn(n,-.95,4.4,0,"NEO-KANTO METRO",{width:7.5,height:1.2,rotY:Math.PI/2,bg:"#071018",color:"#f4feff",accent:"#3df0ff",sub:"UNDERGROUND · PLATFORMS 1—2"}),we(n,-.96,2.9,0,"METRO",4059391,{width:3.2,height:.7,rotY:Math.PI/2}),n.addBox([5.4,.16,8.4],[-2.6,3.25,0],t.darkMetal,{collider:!1}),n.addBox([5.2,.06,8.2],[-2.6,3.36,0],t.darkGlass,{collider:!1,solid:!1});for(const d of[-5.1,-.1])for(const f of[-4,4])n.addBox([.14,3.25,.14],[d,1.62,f],t.darkMetal,{collider:!1});n.floor(-6.2,-3.2,-.8,3.2,e,.6,t.tileFloor),n.addNavStairs(-6,-2,-1,2,e,0,"entrance"),n.addNavZone(-1,-6,3,6,0,"entrance-landing"),n.addMapRect(-6,-3,-1,3,"#3a6070"),n.floor(-34,-18,-6,18,e,.7,t.tileFloor),n.addBox([28.4,.06,36.4],[-20,e+.03,0],t.tileFloor,{collider:!1,solid:!1,receiveShadow:!0}),n.wall(-34.2,-18.2,-5.8,-18,e,1.8,t.tileWall),n.wall(-34.2,18,-5.8,18.2,e,1.8,t.tileWall),n.wall(-34.2,-18,-34,-15,e,1.8,t.tileWall),n.wall(-34.2,-11,-34,-3,e,1.8,t.tileWall),n.wall(-34.2,3,-34,11,e,1.8,t.tileWall),n.wall(-34.2,15,-34,18,e,1.8,t.tileWall),n.wall(-6,-18,-5.8,-2,e,1.8,t.tileWall),n.wall(-6,2,-5.8,18,e,1.8,t.tileWall),n.addBox([28.4,.5,36.4],[-20,1.95,0],t.concreteDark,{solid:!1}),n.addBox([28.2,.32,.06],[-20,1,-17.9],t.greenSteel,{collider:!1,solid:!1}),n.addBox([28.2,.32,.06],[-20,1,17.9],t.greenSteel,{collider:!1,solid:!1}),n.addMapRect(-34,-18,-6,18,"#394b56");for(const d of[-9,-3,3,9]){for(const f of[-1,1]){const x=n.addBox([.4,1.15,.26],[-11,e+.575,d+f*1.02],t.darkMetal);x.castShadow=!0,n.addBox([.34,.16,.3],[-11,e+1.2,d+f*1.02],t.metal,{collider:!1}),n.addBox([.05,.2,.16],[-10.78,e+.85,d+f*.82],t.neonCyan,{collider:!1,solid:!1})}n.addBox([.44,.16,2.3],[-11,e+1.42,d],t.paintedSteel,{collider:!1}),n.addBox([.1,.16,.5],[-10.76,e+1.55,d],t.neonGreen,{collider:!1,solid:!1})}vn(n,-11.4,.2,0,"TICKET GATES",{width:3.6,height:.55,rotY:Math.PI/2,bg:"#0a1015",color:"#dffbff",accent:"#8cff5a"});for(const d of[-27,-21,-15])for(const f of[-12,0,12])xi(n,d,1.62,f,3.4,Math.PI/2,!1);for(const d of[-25,-15]){const f=new Ue(14217215,24,24,1.8);f.position.set(d,.9,0),n.scene.add(f)}const r=new Ue(6750105,7,12,2);r.position.set(-8,.5,0),n.scene.add(r);for(let d=0;d<3;d++){const f=new Ut;f.position.set(-30+d*2.1,e,-16.8),f.add(new X(n.boxGeo(1.5,1.9,.7),t.darkMetal)),f.children[0].position.y=.95;const x=new X(new Qe(1.1,1),t.neonTexture);x.position.set(0,1.25,.37),f.add(x);const v=new X(new Qe(.7,.4),t.neonBlue);v.position.set(0,.5,.37),f.add(v),n.scene.add(f);const y=new Oe().setFromObject(f);n.colliders.push({mesh:f,box:y,min:y.min,max:y.max}),n.solidMeshes.push(f.children[0])}Jn(n,-8.5,e,-12,Math.PI/2),Jn(n,-8.5,e,12,Math.PI/2),ns(n,-33.3,e,-8,-Math.PI/2),ns(n,-33.3,e,8,-Math.PI/2),jn(n,-33.2,e,0),Dc(n,-28,e,16.7,0);for(const d of[-27,-18])for(const f of[-8,8])n.addBox([.55,4.4,.55],[d,e+2.2,f],t.concreteWall,{castShadow:!0});we(n,-34.05,.9,0,"KANTO LINE",16765498,{width:5.2,height:.7,rotY:Math.PI/2});const a=[{z1:-15,z2:-11,mat:t.tileFloor,tag:"stairs-north"},{z1:11,z2:15,mat:t.tileFloor,tag:"stairs-south"}];for(const d of a){n.stairs(-34,d.z1,-44,d.z2,e,i,10,d.mat);for(const f of[d.z1-.15,d.z2+.15])n.wall(-44,f-.15,-34,f+.15,i,-.9,t.tileWall);n.addNavStairs(-34,d.z1,-44,d.z2,e,i,d.tag),n.addBox([10,.14,.12],[-39,e-.15,d.z1],t.yellow,{collider:!1,solid:!1})}n.stairs(-34,-3,-44,3,e,i,12,t.metal);for(const d of[-3.2,3.2])n.addBox([10,.12,.12],[-39,e-.5,d],t.darkMetal,{collider:!1}),n.addBox([10,.9,.08],[-39,e-.9,d],t.darkGlass,{collider:!1,solid:!1}),n.addBox([10,.08,.1],[-39,e-.42,d],t.chrome,{collider:!1});n.addNavStairs(-34,-3,-44,3,e,i,"escalator"),we(n,-34.01,.55,-3.1,"PLATFORMS 1—2",4059391,{width:4.4,height:.55,rotY:Math.PI/2}),we(n,-34.01,.55,3.1,"PLATFORMS 1—2",4059391,{width:4.4,height:.55,rotY:Math.PI/2}),n.floor(-72,-44,-34,34,i,.8,t.platform),n.floor(-72,34,-34,44,i,.8,t.tileFloor),n.floor(-58,-44,-44,34,s,.5,t.gravel),n.wall(-72.4,-44.4,-72.2,44.4,i,1.4,t.tileWall),n.wall(-72.4,-44.4,-34,-44.2,i,1.4,t.tileWall),n.wall(-72.4,44.2,-34,44.4,i,1.4,t.tileWall),n.wall(-34,-44,-33.8,-18,i,1.4,t.tileWall),n.wall(-34,18,-33.8,34,i,1.4,t.tileWall),n.wall(-58,33.8,-44,34.2,i,.4,t.tileWall),n.addBox([38.4,.5,88.4],[-53,1.35,0],t.concreteDark,{solid:!1}),n.addBox([38.2,.28,.08],[-53,.55,-43.9],t.greenSteel,{collider:!1,solid:!1}),n.addBox([38.2,.28,.08],[-53,.55,43.9],t.greenSteel,{collider:!1,solid:!1}),n.addMapRect(-72,-44,-34,34,"#31414c"),n.addMapRect(-72,34,-34,44,"#2a3540");for(const d of[-58.25,-43.75])n.addBox([.35,.02,77.6],[d,i+.01,-5],t.yellow,{collider:!1,solid:!1});for(const d of[-59.1,-42.9])n.addBox([.3,.03,77.6],[d,i+.015,-5],t.paintedSteel,{collider:!1,solid:!1});for(const d of[-67,-55,-39])for(let f=-38;f<=38;f+=9)xi(n,d,.8,f,3.6,0,!1);const o=[[-65,.2,-20],[-65,.2,18],[-39,.2,-20],[-39,.2,18]];for(const[d,f,x]of o){const v=new Ue(14217215,22,24,1.8);v.position.set(d,f,x),n.scene.add(v)}for(const d of[-66.5,-39.2])for(const f of[-32,-18,-4,10,24])n.addBox([.5,6.2,.5],[d,i+3.1,f],t.concreteWall,{castShadow:!0}),n.addBox([.65,.12,.65],[d,i+.06,f],t.darkMetal,{collider:!1});for(const[d,f,x]of[[-64,-26,"1"],[-64,22,"1"],[-41,-26,"2"],[-41,22,"2"]])vn(n,d,.3,f,`PLATFORM ${x}`,{width:2.8,height:.5,rotY:d<-50?Math.PI/2:-Math.PI/2,bg:"#081016",color:"#eaffff",accent:"#3df0ff"});Jn(n,-68.5,i,-14,Math.PI/2),Jn(n,-68.5,i,6,Math.PI/2),Jn(n,-36.5,i,-10,-Math.PI/2),ns(n,-70.5,i,26,0),ns(n,-70.5,i,29,0),jn(n,-70.6,i,-2),Dc(n,-40,i,34.6,0),we(n,-71.9,.4,0,"PLATFORM 1",4059391,{width:4,height:.6,rotY:Math.PI/2}),we(n,-34.1,.4,0,"PLATFORM 2",9240410,{width:4,height:.6,rotY:-Math.PI/2});const l=n.boxGeo(.12,.15,76);for(const d of[-56.25,-54.75,-51.25,-49.75]){const f=new X(l,t.metal);f.position.set(d,s+.08,-5),n.scene.add(f),n.hitOnlyMeshes.push(f)}const c=n.boxGeo(2.4,.08,.32),h=2*64,u=new Ph(c,t.darkWood,h),p=new se;let m=0;for(const d of[-55.5,-50.5])for(let f=0;f<64;f++)p.makeTranslation(d,s+.02,-41.5+f*1.2),u.setMatrixAt(m++,p);u.instanceMatrix.needsUpdate=!0,n.scene.add(u),n.hitOnlyMeshes.push(u);for(const d of[-41,30])for(let f=0;f<3;f++){const x=s+.2+f*.26,v=.55;n.addBox([v,x-s+.5,4],[-58+v/2-f*v,x-(x-s+.5)/2,d],t.concrete),n.addBox([v,x-s+.5,4],[-44-v/2+f*v,x-(x-s+.5)/2,d],t.concrete)}M_(n,-50.5,-17,0),n.addMapRect(-52,-33.8,-49,-.2,"#6c7f8b"),n.addBox([38,5.6,.4],[-53,1,44],t.tileWall,{collider:!1}),n.addBox([38,.5,10],[-53,-.4,39],t.concreteDark,{collider:!1});for(const d of[-72,-34])n.addBox([.3,4,9.6],[d+.15,-2.8,39],t.tileWall,{collider:!1});vn(n,-53,-1.2,34.1,"UNDERPASS",{width:4.2,height:.62,bg:"#081015",color:"#ffe0a8",accent:"#ffb45a"});for(const d of[-66,-53,-40])xi(n,d,-1.4,39,2.4,0,!1);const _=new Ue(16762234,16,18,1.8);_.position.set(-53,-2.2,39),n.scene.add(_),yo(n,-70,-1.5,39,8,"x"),n.floor(-34,18,-18,34,e,.7,t.tileFloor),n.floor(-22,34,-19,44,e,.7,t.concrete),n.wall(-34.2,18,-28,18.2,e,.6,t.tileWall),n.wall(-23,18,-18,18.2,e,.6,t.tileWall),n.wall(-34.2,22,-31,22.2,e,.6,t.tileWall),n.wall(-29,22,-21,22.2,e,.6,t.tileWall),n.wall(-19,22,-18,22.2,e,.6,t.tileWall),n.wall(-33.5,22,-33.3,30,e,.6,t.tileWall),n.wall(-25.6,22,-25.4,30,e,.6,t.tileWall),n.wall(-18.2,22,-18,30,e,.6,t.tileWall),n.wall(-33.5,30,-31,30.2,e,.6,t.tileWall),n.wall(-29,30,-21,30.2,e,.6,t.tileWall),n.wall(-19,30,-18,30.2,e,.6,t.tileWall),n.wall(-34.2,34,-22.8,34.2,e,.6,t.tileWall),n.wall(-20.6,34,-19,34.2,e,.6,t.tileWall),n.wall(-24.4,34,-24.2,44,e,.6,t.tileWall),n.wall(-19,34,-18.8,44,e,.6,t.tileWall),n.wall(-24.4,44,-18.8,44.2,e,.6,t.concreteDark),n.addBox([16.4,.5,16.4],[-26,.85,26],t.concreteDark,{solid:!1}),n.addBox([3.2,.5,10],[-21.6,.85,39],t.concreteDark,{solid:!1});for(const d of[-30,-20])for(const f of[22.1,30.1]){n.addBox([2,.12,.12],[d,e+2.15,f],t.darkMetal,{collider:!1});for(const x of[-1,1])n.addBox([.1,2.2,.14],[d+x*1,e+1.1,f],t.darkMetal,{collider:!1});n.addBox([.05,.35,.06],[d+.6,e+1,f+.12],t.chrome,{collider:!1})}for(const d of[-31.5,-20.5])n.addBox([1.8,1.6,.7],[d,e+.8,27.7],t.paintedSteel,{castShadow:!0}),n.addBox([1.6,.08,.6],[d,e+1.65,27.7],t.metal,{collider:!1}),n.addBox([.7,2.1,.7],[d+2.2,e+1.05,24.5],t.darkMetal),n.addBox([.62,1.9,.04],[d+2.2,e+1.05,24.86],t.paintedSteel,{collider:!1}),jn(n,d-2.1,e,28.9);for(const d of[20,26,32,38,42])xi(n,-26,.55,d,1.8,Math.PI/2,!1);const g=new Ue(16766881,10,14,2);g.position.set(-27,-1.4,26),n.scene.add(g),yo(n,-21.6,-.4,39,9,"z");for(let d=0;d<3;d++)n.addBox([.8,.8,.8],[-32+d*.9,e+.4,40.5],t.wood);we(n,-26,0,18.15,"STAFF ONLY",16734794,{width:2.8,height:.42}),n.addNavZone(-34,-17.8,-6,17.8,e,"hall"),n.addNavZone(-33,18,-18,21.8,e,"staff-corridor"),n.addNavZone(-33,22.2,-25.6,29.8,e,"service-a"),n.addNavZone(-25.4,22.2,-18.2,29.8,e,"service-b"),n.addNavZone(-30.7,21.3,-29.3,22.9,e,"door-a1"),n.addNavZone(-20.7,21.3,-19.3,22.9,e,"door-b1"),n.addNavZone(-30.7,29.3,-29.3,30.9,e,"door-a2"),n.addNavZone(-20.7,29.3,-19.3,30.9,e,"door-b2"),n.addNavZone(-22.7,33.4,-20.8,34.9,e,"door-maint"),n.addNavZone(-34,30.2,-18,33.8,e,"staff-corridor-2"),n.addNavZone(-24.2,34.2,-19,43.8,e,"maintenance"),n.addNavZone(-72,-43.8,-58,33.8,i,"platform-west"),n.addNavZone(-44,-43.8,-34,33.8,i,"platform-east"),n.addNavZone(-58,-43.8,-44,33.8,s,"track-bed"),n.addNavZone(-71.8,34.2,-34.2,43.8,i,"underpass"),n.addNavStairs(-58,-43,-60,-39,s,i,"track-steps-w"),n.addNavStairs(-44,-43,-42,-39,s,i,"track-steps-e"),n.addNavStairs(-58,28,-60,32,s,i,"track-steps-w2"),n.addNavStairs(-44,28,-42,32,s,i,"track-steps-e2"),n.addSpawnPoint(-20,e,0),n.addSpawnPoint(-29,e,12),n.addSpawnPoint(-13,e,-14),n.addSpawnPoint(-38,i,-24),n.addSpawnPoint(-40,i,12),n.addSpawnPoint(-65,i,-28),n.addSpawnPoint(-68,i,8),n.addSpawnPoint(-51,s,-30),n.addSpawnPoint(-51,i,39),n.addSpawnPoint(-29,e,25),n.addSpawnPoint(-21.5,e,38),n.addMapRect(-18,-44,-34,34,"#31414c")}function R_(n){const t=n.mats;n.floor(-1,-50,75,50,0,1.4,t.concreteDark),n.floor(20,-48,36,48,.02,.06,t.asphalt,{collider:!1}),n.floor(12,-50,20,50,.16,.16,t.pavement),n.floor(36,-50,44,50,.16,.16,t.pavement),n.floor(-1,-16,12,16,.12,.12,t.pavement),n.floor(44,-20,60,10,.12,.14,t.pavement),n.floor(44,10,75,30,.12,.14,t.pavement),n.floor(56,30,75,48,.12,.14,t.pavement),n.floor(44,-50,75,-20,.1,.12,t.asphalt),n.floor(44,28,75,32,.11,.1,t.pavement);const e=n.boxGeo(.16,.02,3.2),i=new ce({color:14211538}),s=new Ph(e,i,24),r=new se;for(let g=0;g<24;g++)r.makeTranslation(28,.055,-46+g*4.1),s.setMatrixAt(g,r);s.instanceMatrix.needsUpdate=!0,n.scene.add(s),n.hitOnlyMeshes.push(s);for(let g=0;g<8;g++)n.addBox([.9,.02,3],[20.8+g*2,.055,0],i,{collider:!1,solid:!1});for(const g of[-30,24])n.addBox([7.4,.02,.3],[28,.055,g],i,{collider:!1,solid:!1});for(const g of[20,36])n.addBox([.24,.18,100],[g,.09,0],t.concrete,{collider:!1});n.addBox([1.8,.18,3.2],[20.5,.07,0],t.concrete,{collider:!1}),n.wall(-1.2,-50,-.9,-18,0,6.5,t.concreteWall),n.wall(-1.2,18,-.9,50,0,6.5,t.concreteWall),vn(n,-.82,5.2,-34,"KANTO METRO",{width:4.4,height:.8,rotY:Math.PI/2,bg:"#0a1015",color:"#dffbff",accent:"#3df0ff"}),vn(n,-.82,5.2,32,"EAST EXIT",{width:3.6,height:.7,rotY:Math.PI/2,bg:"#0a1015",color:"#dffbff",accent:"#8cff5a"});for(const[g,d,f,x]of[[-44,-20,"TOKYO ELECTRIC",4059391],[20,44,"SAKURA HOTEL",16732067]]){n.addBox([9,6,d-g],[7.5,3,(g+d)/2],t.windowWall,{castShadow:!0}),n.addBox([9.4,.35,d-g+.4],[7.5,6.15,(g+d)/2],t.concreteDark,{collider:!1}),we(n,12.05,4.2,(g+d)/2,f,x,{width:5,height:.9,rotY:Math.PI/2}),n.addBox([.2,2.6,d-g-2],[11.9,1.5,(g+d)/2],t.darkGlass,{collider:!1,solid:!1});for(let v=g+3;v<d-2;v+=4)n.addBox([.26,2.8,.24],[11.8,1.4,v],t.darkMetal,{collider:!1})}const a=5.2;n.floor(12,-24.5,44,-21.5,a,.4,t.concreteDark),n.addBox([32,.22,.07],[28,a+.1,-21.5],t.yellow,{collider:!1,solid:!1}),Ki(n,12,-24.5,44,-24.5,a,1.1),Ki(n,12,-21.5,44,-21.5,a,1.1);for(const g of[17,28,39])n.addBox([.75,a,.75],[g,a/2,-23],t.concreteWall,{castShadow:!0});for(const[g,d]of[[12,16],[40,44]]){n.stairs(g,-36,d,-24,.16,a,26,t.concrete);for(const f of[g+.1,d-.1])Ki(n,f,-36,f,-24,f===g+.1?.16:5.2,1.05);n.addNavStairs(g,-36,d,-24,.16,a,"bridge-stairs")}n.addNavZone(12,-24.5,44,-21.5,a,"bridge"),vn(n,28,a+1.7,-21.45,"PEDESTRIAN BRIDGE",{width:5.6,height:.6,bg:"#0b1116",color:"#dffbff",accent:"#3df0ff"});for(const g of[18,28,38])xi(n,g,a+3.4,-23,2.6,Math.PI/2,!1),n.addBox([.08,3.2,.08],[g,a+1.6,-24.4],t.darkMetal,{collider:!1});n.floor(-5,-48.6,75,-45.4,8,.5,t.concreteDark);for(const g of[-2,10,22,34,46,58,70])n.addBox([.9,8,.9],[g,4,-47],t.concreteWall,{castShadow:!0}),n.addBox([1.5,.3,1.4],[g,8.05,-47],t.darkMetal,{collider:!1});for(const g of[-48.1,-47.3])n.addBox([80,.14,.12],[35,8.14,g],t.metal,{collider:!1,solid:!1});for(let g=-4;g<75;g+=.8)n.addBox([.5,.08,2.8],[g,8.08,-47],t.darkWood,{collider:!1,solid:!1});n.addBox([80,1,.15],[35,8.6,-45.5],t.darkMetal,{collider:!1,solid:!1}),y_(n),n.addBox([80,2.2,.2],[35,1.1,-48.7],t.darkMetal,{collider:!1});for(let g=44;g<=74;g+=3)n.addBox([.12,2,.12],[g,1,-24.2],t.darkMetal,{collider:!1});n.addBox([30,.12,.12],[59,2,-24.2],t.darkMetal,{collider:!1}),n.addBox([1.2,1.4,1.2],[54,.7,-44],t.paintedSteel),n.addBox([1.1,1.1,1.3],[47,.55,-34],t.rustMetal),Ps(n,49,-43,0,3105912),Ps(n,56,-43,0,8013367),Ps(n,63,-43,0,4156235),Ps(n,69,-37,Math.PI/2,4869990),Ps(n,49,-33,Math.PI/2,8153653,2.6),n.addBox([2.2,1.8,3.4],[68,.9,-47],t.greenSteel,{castShadow:!0}),we(n,71.5,4.6,-24.2,"PARKING",16765498,{width:3.2,height:.7}),Un(n,"van",66,-27.5,.3,5333358),Un(n,"sedan",45.5,-28,Math.PI/2,8204083),Un(n,"truck",45.5,-37,Math.PI/2,4874058),n.addBox([16,4.2,.4],[52,2.1,-20.2],t.brick,{castShadow:!0}),n.addBox([.4,4.2,30.4],[60,2.1,-5],t.brick,{castShadow:!0}),n.addBox([.4,4.2,10],[44,2.1,5],t.brick,{castShadow:!0}),n.addBox([16.4,.3,30.4],[52,4.35,-5],t.darkMetal,{collider:!1}),we(n,52,4.4,-19.95,"NIGHT MARKET",16732067,{width:6,height:.8});for(let g=-16;g<=6;g+=7){n.addBox([.05,.05,15.8],[52,3.8,g],t.darkMetal,{collider:!1,solid:!1});for(let d=0;d<5;d++)as(n,46+d*3,3.45,g)}const o=[[47,-15,Math.PI/2,t.red,"YAKITORI"],[47,-5,Math.PI/2,t.blue,"TEA HOUSE"],[47,5,Math.PI/2,t.yellow,"DUMPLINGS"],[56,-12,-Math.PI/2,t.paintedSteel,"LANTERNS"],[56,-2,-Math.PI/2,t.red,"RAMEN"],[56,8,-Math.PI/2,t.greenSteel,"GAMES"]];for(const[g,d,f,x,v]of o)E_(n,g,d,f,x,v);n.addBox([.8,.8,.8],[50,.52,-18],t.wood),n.addBox([.8,.7,.8],[50,.47,-17],t.darkWood),jn(n,44.8,.12,-11),jn(n,59.2,.12,3),n.addBox([2.6,.9,1.9],[46,.57,9.4],t.rustMetal),n.addMapRect(44,-20,60,10,"#5b3b42"),n.floor(44,12,60,28,.14,.3,t.tileFloor),n.wall(44,12,44,18,.14,3.9,t.white),n.wall(44,22,44,28,.14,3.9,t.white),n.wall(44,12,60,12.2,.14,3.9,t.white),n.wall(44,27.8,60,28,.14,3.9,t.white),n.wall(59.8,12,60,28,.14,3.9,t.white),n.addBox([16,.4,16],[52,4.1,20],t.concreteDark,{solid:!1});for(const[g,d]of[[12.2,18],[22,27.8]]){n.addBox([.08,2.4,d-g],[44.05,1.5,(g+d)/2],t.darkGlass,{collider:!1,solid:!1});for(let f=g;f<=d;f+=2)n.addBox([.16,2.7,.1],[44,1.5,f],t.chrome,{collider:!1})}for(const g of[18,22])n.addBox([.22,2.7,.18],[44,1.45,g],t.darkMetal,{collider:!1});n.addBox([.12,.16,4.2],[44,2.95,20],t.neonCyan,{collider:!1,solid:!1});for(const g of[15.5,24.5]){for(let d=0;d<3;d++)n.addBox([7.5,.12,.5],[52,.9+d*.65,g],t.metal,{collider:!1});n.addBox([7.5,1.9,.12],[52,1.1,g+.28],t.darkMetal,{collider:!1});for(let d=0;d<12;d++){const f=[t.red,t.blue,t.yellow,t.white,t.greenSteel][d%5];n.addBox([.3,.4,.28],[48.6+d*.62,1.22,g],f,{collider:!1,solid:!1})}}n.addBox([10,2.2,.6],[54,1.35,26.9],t.darkGlass,{collider:!1,solid:!1});for(let g=0;g<5;g++)n.addBox([1.7,2,.05],[49.5+g*2.1,1.35,26.55],t.lampCool,{collider:!1,solid:!1});n.addBox([2.6,1.1,.8],[56.5,.7,20],t.paintedSteel,{castShadow:!0}),n.addBox([.8,.18,.4],[56.5,1.3,20],t.darkMetal,{collider:!1});const l=new Ue(14217215,20,18,1.8);l.position.set(52,3,20),n.scene.add(l);for(const g of[48,56])xi(n,g,3.7,20,3.2,Math.PI/2,!1);we(n,43.85,4.8,20,"24/7 MART",4059391,{width:7,height:1,rotY:-Math.PI/2}),we(n,43.85,3.25,20,"OPEN",9240410,{width:2.2,height:.5,rotY:-Math.PI/2}),n.addMapRect(44,12,60,28,"#3b5b60"),n.addBox([.35,3.2,18],[61.9,1.7,19],t.brick,{collider:!1}),Ka(n,61.4,3.4,14,Math.PI/2),Ka(n,61.4,3.4,24,Math.PI/2),jn(n,61,.12,11.2),n.addBox([.5,.5,.5],[60.6,.4,27],t.wood),yo(n,61.7,2.6,20,14,"z"),we(n,61.75,2.2,16,"RAMEN",16734794,{width:1.6,height:.5,rotY:-Math.PI/2}),n.floor(62,12,74,26,.14,.3,t.wood),n.wall(62,12,74,12.2,.14,3.8,t.brick),n.wall(62,25.8,74,26,.14,3.8,t.brick),n.wall(73.8,12,74,26,.14,3.8,t.brick),n.wall(62,12,62.2,18,.14,3.8,t.brick),n.wall(62,21,62.2,26,.14,3.8,t.brick),n.wall(62,12,74,12.2,.14,3.8,t.brick),n.addBox([12,.4,14],[68,4,19],t.darkWood,{solid:!1}),n.addBox([3.4,.7,.08],[68,2.45,21],t.red,{collider:!1,solid:!1}),n.addBox([8,1.05,.8],[68,.67,23.8],t.wood,{castShadow:!0});for(let g=0;g<5;g++)n.addBox([.45,.08,.45],[64.8+g*1.5,.75,22.8],t.darkWood,{collider:!1}),n.addBox([.08,.65,.08],[64.8+g*1.5,.35,22.8],t.darkMetal,{collider:!1});for(const[g,d]of[[65.5,16],[71,16]]){n.addBox([1.6,.1,.9],[g,.85,d],t.wood,{collider:!1});for(const f of[-.6,.6])n.addBox([.1,.7,.1],[g+f,.5,d],t.darkWood,{collider:!1});n.addBox([.4,.08,.4],[g-1.2,.55,d],t.red,{collider:!1}),n.addBox([.4,.08,.4],[g+1.2,.55,d],t.red,{collider:!1})}const c=new Ue(16762234,16,16,1.8);c.position.set(68,2.8,19),n.scene.add(c);for(const g of[15,23])xi(n,68,3.55,g,3,Math.PI/2,!1);we(n,61.75,3.5,21.5,"RAMEN",16730682,{width:2.6,height:1.4,rotY:-Math.PI/2}),as(n,63,2.6,21.2),as(n,73,2.6,21.2),n.addMapRect(62,12,74,26,"#5c3a34"),n.addBox([3.2,.9,2.2],[71,.57,8],t.rustMetal),Ka(n,73,3.2,4,-Math.PI/2),jn(n,63.5,.12,7),we(n,62.3,3,7.5,"KANTO",16765498,{width:1.4,height:.6,rotY:-Math.PI/2}),n.addMapRect(60,-20,75,10,"#2f3538");const h=6.5;n.addBox([12,h,20],[68,h/2,-14],t.windowWall,{castShadow:!0}),n.addBox([12.5,.35,20.5],[68,h+.1,-14],t.roof,{collider:!1}),n.addBox([12.4,.9,.25],[68,h+.45,-24.1],t.concreteWall),n.addBox([12.4,.9,.25],[68,h+.45,-3.9],t.concreteWall),n.addBox([.25,.9,20.4],[74.1,h+.45,-14],t.concreteWall),n.addBox([.25,.9,10],[62.1,h+.45,-19],t.concreteWall),n.addBox([.25,.9,8],[62.1,h+.45,-8],t.concreteWall);for(let g=-22;g<-5;g+=3.5)n.addBox([.2,2.4,2.3],[61.9,1.4,g],t.darkGlass,{collider:!1,solid:!1}),n.addBox([.28,3,.16],[61.8,1.5,g+1.3],t.chrome,{collider:!1});we(n,61.75,4.4,-14,"KANTO TRADING",16732067,{width:6.5,height:.9,rotY:-Math.PI/2}),we(n,61.75,3.4,-8,"IMPORTS",4059391,{width:3.4,height:.6,rotY:-Math.PI/2}),n.stairs(58,-22,62,-10,.16,h,26,t.concrete),n.floor(58,-10,62,-6,h,.3,t.concrete),Ki(n,58,-22,58,-10,.16,1.05),Ki(n,58,-10,58,-6,h,1.05),n.addNavStairs(58,-22,62,-10,.16,h,"roof-stairs"),n.addNavZone(58,-10,62,-6,h,"roof-landing"),n.addNavZone(62.4,-23.8,73.8,-4.2,h,"roof"),n.addBox([1.4,.7,2.2],[69,h+.35,-20],t.paintedSteel),n.addBox([1.3,.6,2.1],[71.5,h+.3,-18],t.metal);const u=new X(new Be(1.1,1.1,2.2,16),t.rustMetal);u.position.set(70,h+1.45,-8),u.castShadow=!0,n.scene.add(u);const p=new Oe().setFromObject(u);n.colliders.push({mesh:u,box:p,min:p.min,max:p.max}),n.solidMeshes.push(u),n.addBox([1,.9,1],[64.5,h+.45,-16],t.wood),n.addBox([.9,.8,.9],[64.2,h+.4,-17.2],t.darkWood),Jn(n,68,h,-5.5,Math.PI),we(n,74,h+1.8,-14,"TRADING CO.",16732067,{width:4,height:.7,rotY:-Math.PI/2}),n.addMapRect(62,-24,74,-4,"#4b3b4f");for(const[g,d,f,x]of[[56,30,56,48],[56,48,74,48],[74,30,74,48],[56,30,60,30],[70,30,74,30]])Ki(n,g,d,f,x,.12,.9);b_(n,65,32.5,0,1),n.addBox([2.4,.06,15],[65,.16,39.5],t.stone,{collider:!1,solid:!1});for(const[g,d]of[[61.5,35],[68.5,35],[61.5,43],[68.5,43]])n.addBox([.6,.3,.6],[g,.27,d],t.stone,{collider:!1}),n.addBox([.28,.9,.28],[g,.87,d],t.stone,{collider:!1}),n.addBox([.5,.12,.5],[g,1.37,d],t.lampWarm,{collider:!1,solid:!1});w_(n,65,42.5,0);for(const[g,d]of[[58,33],[72,33],[58,45],[72,45]]){n.addBox([1.2,.7,1.2],[g,.47,d],t.darkWood);const f=new X(new Be(.12,.18,2.6,8),t.darkWood);f.position.set(g,2,d),n.scene.add(f);const x=new X(new $r(1.5,2.6,8),t.greenSteel);x.position.set(g,3.8,d),x.castShadow=!0,n.scene.add(x)}we(n,65,2.6,30.4,"KANTO SHRINE",16765498,{width:4.4,height:.7}),n.addMapRect(56,30,74,48,"#4a3b2b");const m=[[13,-40,!1],[13,-18,!0],[13,2,!1],[13,24,!0],[13,44,!1],[43,-38,!1],[43,-14,!0],[43,8,!1],[43,28,!0],[43,46,!1]];for(const[g,d,f]of m)S_(n,g,d,g>30?-Math.PI/2:Math.PI/2,f);const _=[[13,-44],[13,-4],[13,36],[43,-32],[43,10],[43,40]];for(const[g,d]of _)T_(n,g,d);Tr(n,[[13,5.7,-44],[13,5.65,-4],[13,5.7,36]],.7),Tr(n,[[43,5.7,-32],[43,5.65,10],[43,5.7,40]],.7),Tr(n,[[13,5.6,-4],[28,5.3,-4],[43,5.6,-4]],1.2),Tr(n,[[13,5.6,36],[28,5.3,36],[43,5.6,36]],1.2);for(const[g,d]of[[3,-12],[3,12],[10,-14],[10,14]])n.addBox([.26,.9,.26],[g,.57,d],t.darkMetal),n.addBox([.32,.08,.32],[g,1,d],t.neonCyan,{collider:!1,solid:!1});Jn(n,6,.12,-8,0),Jn(n,6,.12,8,Math.PI),ns(n,10.8,.12,-6,-Math.PI/2),ns(n,10.8,.12,-4.4,-Math.PI/2),jn(n,11,.12,2),vn(n,2,3,-13,"NEO-KANTO",{width:4,height:.8,rotY:Math.PI/2,bg:"#0a1015",color:"#eaffff",accent:"#3df0ff",sub:"NIGHT DISTRICT"}),Un(n,"sedan",23.6,16,0,9190203),Un(n,"taxi",32.2,-10,Math.PI,1975336),Un(n,"van",23.8,-30,0,4939115),Un(n,"truck",32,38,Math.PI,4152135),Un(n,"sedan",31.8,14,Math.PI,3359829),Un(n,"taxi",23.9,38,0,13805358);for(let g=-40;g<=44;g+=8)n.addBox([.22,.7,.22],[41.6,.51,g],t.darkMetal),n.addBox([.28,.07,.28],[41.6,.9,g],t.yellow,{collider:!1,solid:!1});n.addBox([.4,4,.4],[43.8,2.12,-20],t.darkMetal),we(n,43.75,4.4,-20,"MARKET",16765498,{width:2.6,height:.6,rotY:-Math.PI/2}),n.addNavZone(-1,-16,12,16,.12,"plaza"),n.addNavZone(12,-49,20,49,.16,"sidewalk-west"),n.addNavZone(20,-49,36,49,.02,"road"),n.addNavZone(36,-49,44,49,.16,"sidewalk-east"),n.addNavZone(44,-20,60,10,.12,"market"),n.addNavZone(60,10,62,28,.12,"alley"),n.addNavZone(44,12,60,28,.14,"mart"),n.addNavZone(62,12,74,26,.14,"ramen"),n.addNavZone(56,30,74,48,.12,"shrine"),n.addNavZone(44,-50,75,-20,.1,"parking"),n.addNavZone(60,-20,75,10,.12,"back-court"),n.addNavZone(-1,-20,12,-16,.12,"plaza-south"),n.addNavZone(-1,16,12,20,.12,"plaza-north"),n.addSpawnPoint(5,.12,0),n.addSpawnPoint(28,.02,20),n.addSpawnPoint(40,.16,-12),n.addSpawnPoint(52,.12,-4),n.addSpawnPoint(55,.1,-36),n.addSpawnPoint(52,.14,20),n.addSpawnPoint(68,.14,18),n.addSpawnPoint(65,.12,38),n.addSpawnPoint(28,5.2,-23),n.addSpawnPoint(68,6.5,-14),n.addSpawnPoint(61,.12,20),n.addMapRect(20,-50,36,50,"#262b2f"),n.addMapRect(12,-50,20,50,"#4a4d4c"),n.addMapRect(36,-50,44,50,"#4a4d4c"),n.addMapRect(-1,-16,12,16,"#3f4b4f"),n.addMapRect(44,12,60,28,"#2f5056"),n.addMapRect(62,12,74,26,"#5a3733"),n.addMapRect(44,-50,75,-20,"#343a39"),n.addMapRect(44,-20,60,10,"#5a3a40"),n.addMapRect(56,30,74,48,"#4a3a29"),n.addMapRect(12,-24.5,44,-21.5,"#5b6264"),n.addMapRect(62,-24,74,-4,"#4a3a4d")}class P_{constructor(t){this.world=t,this.nodes=[],this.gridStep=3.1,this.build()}build(){const t=this.world,e=this.nodes;for(const a of t.navZones){const o=a.x2-a.x1,l=a.z2-a.z1;if(o<1.2||l<1.2)continue;const c=Math.min(this.gridStep,Math.max(2,Math.min(o,l)*.6)),h=Math.max(1,Math.round(o/c)),u=Math.max(1,Math.round(l/c)),p=o/h,m=l/u;for(let _=0;_<h;_++)for(let g=0;g<u;g++){const d=a.x1+p*(_+.5),f=a.z1+m*(g+.5),x=t.getFloorHeightAt(d,f,a.y+1.2);isFinite(x)&&(x<a.y-.5||x>a.y+.45||t.isPointBlocked(d,f,x+.06,.52,1.75,.42)||e.push({pos:new b(d,x,f),links:[],tag:a.tag,zone:a,stair:null}))}}for(const a of t.navStairs){const o=Math.abs(a.x2-a.x1)>=Math.abs(a.z2-a.z1),l=Math.abs(o?a.x2-a.x1:a.z2-a.z1),c=Math.abs(o?a.z2-a.z1:a.x2-a.x1);if(l<.5)continue;const h=Math.max(2,Math.ceil(l/1)),u=c>2.8?[-c*.23,c*.23]:[0],p=o?(a.z1+a.z2)/2:(a.x1+a.x2)/2;for(const m of u){let _=null;for(let g=0;g<=h;g++){const d=g/h,f=o?a.x1+(a.x2-a.x1)*d:p+m,x=o?p+m:a.z1+(a.z2-a.z1)*d,v=a.y1+(a.y2-a.y1)*d;if(t.isPointBlocked(f,x,v+.08,.42,1.7,.5)){_=null;continue}const y={pos:new b(f,v,x),links:[],tag:a.tag,zone:null,stair:a};e.push(y),_&&(_.links.push(y),y.links.push(_)),_=y}}}const i=4,s=new Map,r=(a,o)=>`${Math.floor(a/i)},${Math.floor(o/i)}`;for(const a of e){const o=r(a.pos.x,a.pos.z);s.has(o)||s.set(o,[]),s.get(o).push(a)}for(const a of e){const o=Math.floor(a.pos.x/i),l=Math.floor(a.pos.z/i);for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++){const u=s.get(`${o+c},${l+h}`);if(u)for(const p of u)p===a||a.links.includes(p)||a.pos.distanceTo(p.pos)>4||Math.abs(a.pos.y-p.pos.y)>.64||this.linkIsClear(a,p)&&(a.links.push(p),p.links.push(a))}}this.nodes=e.filter(a=>a.links.length>0)}linkIsClear(t,e){for(let s=1;s<5;s++){const r=s/5,a=t.pos.x+(e.pos.x-t.pos.x)*r,o=t.pos.z+(e.pos.z-t.pos.z)*r,l=t.pos.y+(e.pos.y-t.pos.y)*r;if(this.world.isPointBlocked(a,o,l+.06,.36,1.6,.55))return!1}return!0}findNearest(t,e=25){let i=null,s=e*e;for(const r of this.nodes){const a=r.pos.x-t.x,o=(r.pos.y-t.y)*1.6,l=r.pos.z-t.z,c=a*a+o*o+l*l;c<s&&(s=c,i=r)}return i}randomNode(){return this.nodes.length?this.nodes[Math.floor(Math.random()*this.nodes.length)]:null}randomNodeFarFrom(t,e=18){const i=e*e,s=[];for(const r of this.nodes){const a=r.pos.x-t.x,o=r.pos.z-t.z;a*a+o*o>=i&&s.push(r)}return s.length?s[Math.floor(Math.random()*s.length)]:this.randomNode()}findPath(t,e){const i=this.findNearest(t,30),s=this.findNearest(e,30);if(!i||!s)return null;if(i===s)return[s.pos.clone()];const r=new C_,a=new Map,o=new Map,l=new Set;for(o.set(i,0),r.push(i,i.pos.distanceTo(s.pos));r.size;){const c=r.pop();if(c===s){const h=[];let u=c;for(;u;)h.push(u.pos.clone()),u=a.get(u);return h.reverse(),h}if(!l.has(c)){l.add(c);for(const h of c.links){if(l.has(h))continue;const u=(o.get(c)??1/0)+c.pos.distanceTo(h.pos);if(u<(o.get(h)??1/0)){a.set(h,c),o.set(h,u);const p=h.pos.distanceTo(s.pos);r.push(h,u+p)}}}}return null}}class C_{constructor(){this.items=[]}get size(){return this.items.length}push(t,e){this.items.push({value:t,priority:e});let i=this.items.length-1;for(;i>0;){const s=i-1>>1;if(this.items[s].priority<=this.items[i].priority)break;[this.items[s],this.items[i]]=[this.items[i],this.items[s]],i=s}}pop(){const t=this.items[0],e=this.items.pop();if(this.items.length&&e){this.items[0]=e;let i=0;for(;;){const s=i*2+1,r=s+1;let a=i;if(s<this.items.length&&this.items[s].priority<this.items[a].priority&&(a=s),r<this.items.length&&this.items[r].priority<this.items[a].priority&&(a=r),a===i)break;[this.items[a],this.items[i]]=[this.items[i],this.items[a]],i=a}}return t?t.value:null}}class L_{constructor(t,e){this.scene=t,this.renderer=e,this.colliders=[],this.solidMeshes=[],this.hitOnlyMeshes=[],this.navZones=[],this.navStairs=[],this.spawnPoints=[],this.mapFeatures=[],this.updaters=[],this.time=0,this._geoCache=new Map,this.mats=f_(e),this.respawnPoints=[],this.init()}init(){this.scene.background=new Xt(395792),this.scene.fog=new Co(659993,.0072),this.createSky(),this.createLighting(),A_(this),R_(this),this.createBoundaries(),this.nav=new P_(this),this.spawnPoints.length===0&&this.spawnPoints.push(new b(-20,-2.6,0)),this.respawnPoints=this.spawnPoints.map(t=>t.clone())}boxGeo(t,e,i){const s=`${t}|${e}|${i}`;return this._geoCache.has(s)||this._geoCache.set(s,new _t(t,e,i)),this._geoCache.get(s)}addBox(t,e,i,s={}){const{collider:r=!0,solid:a=!0,castShadow:o=!1,receiveShadow:l=!0,rotation:c=null,hitOnly:h=!1}=s,u=new X(this.boxGeo(...t),i);return u.position.set(...e),c&&u.rotation.set(...c),u.castShadow=o,u.receiveShadow=l,this.scene.add(u),h?this.hitOnlyMeshes.push(u):a&&this.solidMeshes.push(u),r&&this.addColliderFromMesh(u),u}floor(t,e,i,s,r,a,o,l={}){const c=Math.abs(i-t),h=Math.abs(s-e);return this.addBox([c,a,h],[(t+i)/2,r-a/2,(e+s)/2],o,{...l,collider:l.collider!==!1})}wall(t,e,i,s,r,a,o,l={}){const c=Math.max(.2,Math.abs(i-t)),h=Math.max(.2,Math.abs(s-e)),u=a-r;return this.addBox([c,u,h],[(t+i)/2,r+u/2,(e+s)/2],o,l)}stairs(t,e,i,s,r,a,o,l,c={}){const h=Math.abs(i-t)>=Math.abs(s-e),u=Math.abs(h?s-e:i-t),p=(a-r)/o,m=Math.min(r,a)-.5;for(let _=0;_<o;_++){const g=r+p*(_+1),d=Math.max(.14,g-m),f=(_+.5)/o,x=h?t+(i-t)*f:(t+i)/2,v=h?(e+s)/2:e+(s-e)*f,y=h?Math.abs(i-t)/o:Math.abs(s-e)/o;this.addBox(h?[y+.02,d,u]:[u,d,y+.02],[x,g-d/2,v],l,{...c,receiveShadow:!0})}}addColliderFromMesh(t){const e=new Oe().setFromObject(t);return this.colliders.push({mesh:t,box:e,min:e.min,max:e.max}),e}addColliderBox(t,e,i=null){const s=new Oe(new b(...t),new b(...e));return this.colliders.push({mesh:i,box:s,min:s.min,max:s.max}),s}addBlockerBox(t,e,i,s){this.addColliderBox([e[0]-t[0]/2,i,e[2]-t[1]/2],[e[0]+t[0]/2,s,e[2]+t[1]/2])}addSolid(t){this.solidMeshes.push(t)}addHitOnly(t){this.hitOnlyMeshes.push(t)}createSky(){const t=new _n(360,24,16),e=new ai({side:Ve,depthWrite:!1,uniforms:{topColor:{value:new Xt(198156)},midColor:{value:new Xt(727594)},bottomColor:{value:new Xt(1450539)}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        varying vec3 vWorld;
        void main() {
          float h = normalize(vWorld).y;
          vec3 col = h > 0.0
            ? mix(midColor, topColor, smoothstep(0.0, 0.7, h))
            : mix(bottomColor, midColor, smoothstep(-0.3, 0.0, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `}),i=new X(t,e);this.scene.add(i);const s=[];for(let m=0;m<900;m++){const _=Math.random()*Math.PI*2,g=Math.random()*Math.PI*.46,d=300;s.push(Math.cos(_)*Math.cos(g)*d,Math.sin(g)*d+8,Math.sin(_)*Math.cos(g)*d)}const r=new Ee;r.setAttribute("position",new Qt(s,3));const a=new Ch(r,new Lo({color:13624575,size:1.1,sizeAttenuation:!0,transparent:!0,opacity:.8,depthWrite:!1}));this.scene.add(a);const o=new X(new _n(11,20,16),new ce({color:15923199}));o.position.set(120,92,-190),this.scene.add(o);const l=document.createElement("canvas");l.width=l.height=128;const c=l.getContext("2d"),h=c.createRadialGradient(64,64,2,64,64,62);h.addColorStop(0,"rgba(220,238,255,0.7)"),h.addColorStop(.35,"rgba(160,200,255,0.22)"),h.addColorStop(1,"rgba(100,160,255,0)"),c.fillStyle=h,c.fillRect(0,0,128,128);const u=new Bs(new _s({map:new Wn(l),transparent:!0,depthWrite:!1,blending:ri}));u.scale.set(55,55,1),u.position.copy(o.position),this.scene.add(u);const p=new X(new _t(240,34,2),new ce({color:396050}));p.position.set(30,17,-120),this.scene.add(p)}createLighting(){this.scene.add(new Kg(3885664,.42)),this.scene.add(new xo(5205390,724755,.68));const t=new Hr(10469352,.72);t.position.set(-40,80,-30),t.target.position.set(0,0,0),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-100,t.shadow.camera.right=100,t.shadow.camera.top=100,t.shadow.camera.bottom=-100,t.shadow.camera.near=1,t.shadow.camera.far=260,t.shadow.bias=-7e-4,t.shadow.normalBias=.04,this.scene.add(t,t.target);const e=new Hr(2771562,.2);e.position.set(30,20,40),this.scene.add(e);const i=[[24,5,24,16762234,24],[-12,1,0,12576511,26],[54,3,14,12580607,18]];for(const[s,r,a,o,l]of i){const c=new Ue(o,18,l,1.8);c.position.set(s,r,a),this.scene.add(c)}}addNavZone(t,e,i,s,r,a=""){this.navZones.push({x1:Math.min(t,i),x2:Math.max(t,i),z1:Math.min(e,s),z2:Math.max(e,s),y:r,tag:a})}addNavStairs(t,e,i,s,r,a,o="",l=3.2){this.navStairs.push({x1:t,z1:e,x2:i,z2:s,y1:r,y2:a,tag:o,wide:l})}addSpawnPoint(t,e,i){this.spawnPoints.push(new b(t,e,i))}addMapRect(t,e,i,s,r){this.mapFeatures.push({x1:Math.min(t,i),z1:Math.min(e,s),x2:Math.max(t,i),z2:Math.max(e,s),color:r})}addUpdater(t){this.updaters.push(t)}createBoundaries(){const t=Bn;this.addColliderBox([t.minX-2,-8,t.minZ-2],[t.minX,14,t.maxZ+2]),this.addColliderBox([t.maxX,-8,t.minZ-2],[t.maxX+2,14,t.maxZ+2]),this.addColliderBox([t.minX-2,-8,t.minZ-2],[t.maxX+2,14,t.minZ]),this.addColliderBox([t.minX-2,-8,t.maxZ],[t.maxX+2,14,t.maxZ+2]),this.floor(t.minX,t.minZ,t.maxX,t.maxZ,-12,1,this.mats.concreteDark,{solid:!1})}getBounds(){return{minX:Bn.minX,maxX:Bn.maxX,minZ:Bn.minZ,maxZ:Bn.maxZ}}getKillY(){return Jg}getWidth(){return Cc.width}getDepth(){return Cc.depth}getColliders(){return this.colliders}getObstacleMeshes(){return this.solidMeshes}getHitMeshes(){return this.solidMeshes.concat(this.hitOnlyMeshes)}getFloorHeightAt(t,e,i=30){let s=-1/0;for(const r of this.colliders){const a=r.box;a.max.y>i||t<a.min.x||t>a.max.x||e<a.min.z||e>a.max.z||a.max.y>s&&(s=a.max.y)}return s}isPointBlocked(t,e,i,s=.5,r=1.9,a=.35){for(const o of this.colliders){const l=o.box;if(!(t+s<=l.min.x||t-s>=l.max.x)&&!(e+s<=l.min.z||e-s>=l.max.z)&&!(i+r<=l.min.y)&&!(l.max.y<=i+a))return!0}return!1}getRespawnPoint(){const t=this.spawnPoints.length?this.spawnPoints:this.respawnPoints;return t[Math.floor(Math.random()*t.length)].clone()}update(t){this.time+=t;for(const e of this.updaters)e(t,this.time)}}class I_{constructor(t,e,i,s=null){this.camera=t,this.domElement=e,this.colliders=i,this.world=s,this.spawnPosition=new b(Xa.x,Xa.y,Xa.z),this.camera.position.copy(this.spawnPosition),this.velocity=new b,this.direction=new b,this.speed=5,this.sprintMultiplier=1.8,this.gravity=25,this.jumpForce=8,this.radius=.4,this.height=1.7,this.stepHeight=.34,this.maxHealth=100,this.health=100,this.isDead=!1,this.spawnProtection=0,this.hasStarted=!1,this.isPaused=!1,this.gunRef=null,this.audio=null,this.timeSinceDamage=999,this.regenDelay=5,this.regenRate=10,this.lastHealthShown=-1,this.sensitivity=.002,this.healthElement=document.getElementById("health-text"),this.healthBarFill=document.getElementById("health-bar-fill"),this.damageArcsContainer=document.getElementById("damage-arcs"),this.damageVignette=document.getElementById("damage-vignette"),this.deathScreen=document.getElementById("death-screen"),this.damageArcs=[],this.maxDamageArcs=8,this.damageArcLife=1,this.vignetteIntensity=0,this.isLocked=!1,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1,this.canJump=!1,this.euler=new Xs(0,0,0,"YXZ"),this.PI_2=Math.PI/2,this.initEvents()}initEvents(){const t=()=>{if(!this.isDead){if(!this.hasStarted){this.hasStarted=!0,this.isPaused=!1;const i=document.getElementById("instructions");i&&(i.style.display="none")}this.audio&&this.audio.unlock(),this.isLocked||this.domElement.requestPointerLock()}};this.domElement.addEventListener("click",()=>{!this.isLocked&&!this.isDead&&t()});const e=document.getElementById("instructions");e&&e.addEventListener("click",t),this.deathScreen&&this.deathScreen.addEventListener("click",()=>{this.isDead&&(this.respawn(),this.audio&&this.audio.unlock(),this.domElement.requestPointerLock())}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===this.domElement?(this.isLocked=!0,this.hasStarted=!0):this.isLocked=!1}),document.addEventListener("mousemove",i=>{if(!this.isLocked||this.isDead)return;const s=this.gunRef&&this.gunRef.getZoomSensitivityScale?this.gunRef.getZoomSensitivityScale():1,r=this.sensitivity*s,a=i.movementX||i.px||i.initX||0,o=i.movementY||i.py||i.initY||0;this.euler.y-=a*r,this.euler.x-=o*r,this.euler.x=Math.max(-this.PI_2,Math.min(this.PI_2,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}),document.addEventListener("keydown",i=>this.onKeyDown(i)),document.addEventListener("keyup",i=>this.onKeyUp(i))}setSensitivity(t){this.sensitivity=t;try{localStorage.setItem("fps-sensitivity",String(t))}catch{}}takeDamage(t,e=null){this.isDead||this.spawnProtection>0||(this.health-=t,this.health=Math.max(0,this.health),this.timeSinceDamage=0,this.updateHealthUI(),this.audio&&this.audio.hurt(),this.vignetteIntensity=Math.min(.55,this.vignetteIntensity+.3),e&&this.spawnDamageArc(e),this.health<=0&&this.die())}heal(t){this.health=Math.min(this.maxHealth,this.health+t),this.updateHealthUI()}spawnDamageArc(t){const e=this.damageArcsContainer;if(!e)return;for(;this.damageArcs.length>=this.maxDamageArcs;)this.damageArcs.shift().element.remove();const i=document.createElement("div");i.className="dmg-arc",e.appendChild(i),this.damageArcs.push({element:i,source:t.clone(),age:0})}updateDamageIndicators(t){if(this.vignetteIntensity>0&&this.damageVignette&&(this.vignetteIntensity=Math.max(0,this.vignetteIntensity-t*1.4),this.damageVignette.style.opacity=String(this.vignetteIntensity)),!this.damageArcs.length)return;const e=new b;this.camera.getWorldDirection(e),e.y=0,e.normalize();const i=new b(-e.z,0,e.x),s=Math.min(window.innerWidth,window.innerHeight)*.36;for(let r=this.damageArcs.length-1;r>=0;r--){const a=this.damageArcs[r];if(a.age+=t,a.age>=this.damageArcLife){a.element.remove(),this.damageArcs.splice(r,1);continue}const o=new b().subVectors(a.source,this.camera.position);o.y=0,o.normalize();const l=o.dot(e),c=o.dot(i),h=Math.atan2(c,l),u=a.age/this.damageArcLife;a.element.style.opacity=String(1-u),a.element.style.transform=`rotate(${h*180/Math.PI}deg) translateY(${-s}px)`}}updateHealthUI(){const t=Math.ceil(this.health);t!==this.lastHealthShown&&(this.lastHealthShown=t,this.healthElement&&(this.healthElement.textContent=`${t} / ${this.maxHealth}`),this.healthBarFill&&(this.healthBarFill.style.width=`${t/this.maxHealth*100}%`,this.healthBarFill.style.backgroundColor=t>60?"#ff9a42":t>30?"#ffb300":"#e53935"))}die(){this.isDead||(this.isDead=!0,this.isPaused=!1,this.clearMovementKeys(),this.audio&&this.audio.playerDeath(),this.onDeath&&this.onDeath(this),this.deathScreen&&(this.deathScreen.style.opacity="1",this.deathScreen.style.pointerEvents="auto"),document.pointerLockElement&&document.exitPointerLock())}respawn(){this.health=this.maxHealth,this.isDead=!1,this.isPaused=!1,this.spawnProtection=0,this.timeSinceDamage=999,this.camera.position.copy(this.spawnPosition),this.euler.set(0,0,0,"YXZ"),this.camera.quaternion.setFromEuler(this.euler),this.velocity.set(0,0,0),this.clearMovementKeys(),this.deathScreen&&(this.deathScreen.style.opacity="0",this.deathScreen.style.pointerEvents="none"),this.updateHealthUI(),this.gunRef&&typeof this.gunRef.refillAll=="function"&&this.gunRef.refillAll();const t=document.getElementById("instructions");t&&(t.style.display="none")}clearMovementKeys(){this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.isSprinting=!1}onKeyDown(t){if(!(!this.hasStarted||this.isDead||this.isPaused))switch(t.code){case"KeyW":this.moveForward=!0;break;case"KeyS":this.moveBackward=!0;break;case"KeyA":this.moveLeft=!0;break;case"KeyD":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!0;break;case"Space":this.canJump&&(this.velocity.y=this.jumpForce,this.canJump=!1);break}}onKeyUp(t){switch(t.code){case"KeyW":this.moveForward=!1;break;case"KeyS":this.moveBackward=!1;break;case"KeyA":this.moveLeft=!1;break;case"KeyD":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.isSprinting=!1;break}}update(t){if(this.spawnProtection>0&&(this.spawnProtection=Math.max(0,this.spawnProtection-t)),this.hasStarted&&!this.isDead&&!this.isPaused&&(this.timeSinceDamage+=t,this.timeSinceDamage>=this.regenDelay&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+this.regenRate*t),this.updateHealthUI())),this.updateDamageIndicators(t),!this.hasStarted||this.isDead||this.isPaused)return;this.velocity.y-=this.gravity*t,this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize();let e=this.speed;this.isSprinting&&this.moveForward&&!this.moveBackward&&!(this.gunRef&&this.gunRef.isZoomed)&&(e*=this.sprintMultiplier);const i=new b;this.camera.getWorldDirection(i),i.y=0,i.normalize();const s=new b(-i.z,0,i.x),r=new b;this.direction.z!==0&&r.addScaledVector(i,this.direction.z*e),this.direction.x!==0&&r.addScaledVector(s,this.direction.x*e),r.x!==0&&(this.camera.position.x+=r.x*t,this.resolveCollisions("x")),r.z!==0&&(this.camera.position.z+=r.z*t,this.resolveCollisions("z")),this.camera.position.y+=this.velocity.y*t,this.resolveCollisions("y");const a=this.world&&this.world.getBounds?this.world.getBounds():{minX:-32,maxX:32,minZ:-46,maxZ:47},o=this.world&&this.world.getKillY?this.world.getKillY():-18,l=this.camera.position.y-this.height,c=this.camera.position;(l<o||c.x<a.minX-1||c.x>a.maxX+1||c.z<a.minZ-1||c.z>a.maxZ+1)&&this.safetyRespawn()}safetyRespawn(){const t=this.world&&this.world.getRespawnPoint?this.world.getRespawnPoint():this.spawnPosition;this.camera.position.set(t.x,t.y+this.height,t.z),this.velocity.set(0,0,0),this.canJump=!0}resolveCollisions(t){const e=this.camera.position;for(const i of this.colliders){const s=i.box,r=e.x-this.radius,a=e.x+this.radius,o=e.y-this.height,l=e.y,c=e.z-this.radius,h=e.z+this.radius;if(a>s.min.x&&r<s.max.x&&l>s.min.y&&o<s.max.y&&h>s.min.z&&c<s.max.z)if(t==="x"||t==="z"){const u=e.y-this.height,p=s.max.y-u;if(p>0&&p<=this.stepHeight){e.y=s.max.y+this.height,this.velocity.y<0&&(this.velocity.y=0),this.canJump=!0;continue}if(t==="x"){const m=a-s.min.x,_=s.max.x-r;m<_?e.x=s.min.x-this.radius:e.x=s.max.x+this.radius}else{const m=h-s.min.z,_=s.max.z-c;m<_?e.z=s.min.z-this.radius:e.z=s.max.z+this.radius}}else t==="y"&&(this.velocity.y<=0?(e.y=s.max.y+this.height,this.velocity.y=0,this.canJump=!0):(e.y=s.min.y,this.velocity.y=0))}}}const te={torso:new _t(.58,.62,.34),vest:new _t(.66,.44,.4),hips:new _t(.46,.28,.3),head:new _n(.17,12,10),helmet:new _n(.2,12,8,0,Math.PI*2,0,Math.PI*.62),brim:new _t(.32,.05,.28),mask:new _t(.24,.1,.06),upperArm:new ts(.07,.24,4,8),foreArm:new ts(.062,.22,4,8),hand:new _n(.07,8,6),upperLeg:new ts(.085,.3,4,8),lowerLeg:new ts(.075,.3,4,8),boot:new _t(.16,.15,.28),knee:new _t(.15,.12,.12),pouch:new _t(.14,.16,.08),backpack:new _t(.38,.44,.16),shoulder:new _n(.105,8,6),gunBody:new _t(.1,.12,.52),gunBarrel:new Be(.022,.022,.42,8),gunMag:new _t(.07,.2,.11),gunStock:new _t(.08,.1,.22),gunSight:new _t(.07,.06,.1)},Ja=new Map;function ln(n,t=.04,e=.7){const i=`${n}-${t}-${e}`;return Ja.has(i)||Ja.set(i,new ue({color:n,metalness:t,roughness:e})),Ja.get(i)}function Jt(n,t,e,i,s,r){const a=new X(t,e);return a.position.set(i,s,r),a.castShadow=!0,n.add(a),a}const D_=new ce({color:16722468,transparent:!0,opacity:.55,side:Ve,depthWrite:!1,depthTest:!0});function U_(){const n=document.createElement("canvas");n.width=128,n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);e.addColorStop(0,"rgba(255,70,50,0.55)"),e.addColorStop(.4,"rgba(255,40,30,0.22)"),e.addColorStop(1,"rgba(255,20,20,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new Wn(n);return i.colorSpace=fe,i}const N_=new _s({map:U_(),color:16728112,transparent:!0,opacity:.5,blending:ri,depthWrite:!1,depthTest:!0}),Uc=[{outfit:3226954,vest:1844526,accent:4059391,pants:2305077,skin:13013874,helmet:1449251},{outfit:4864048,vest:2760731,accent:16757850,pants:2827296,skin:10120015,helmet:2366230},{outfit:3229498,vest:1911587,accent:9240410,pants:2042403,skin:12092515,helmet:1581339},{outfit:4600137,vest:2694443,accent:16732067,pants:2760748,skin:13605494,helmet:2168613},{outfit:3881796,vest:2236969,accent:16765498,pants:2829106,skin:9068360,helmet:1776416},{outfit:3096917,vest:1779509,accent:16734794,pants:2108216,skin:13672575,helmet:1383976}];class Xh{constructor(t,e,i=0,s={}){const r=Uc[i%Uc.length];this.showAura=s.aura!==!1,this.palette=r,this.root=new Ut,this.parts={},this.hitMeshes=[],this.flashMeshes=[],this.deathT=0,this.dead=!1,this.phase=Math.random()*Math.PI*2;const a=ln(r.outfit),o=ln(r.vest,.1,.7),l=ln(r.pants,.02,.85),c=ln(r.accent,.25,.35),h=ln(r.skin,0,.72),u=ln(r.helmet,.35,.4),p=ln(1251356,.5,.5);this.materials=[a,o,l,c,h,u],this.parts.hips=Jt(this.root,te.hips,l,0,.86,0),this.parts.torso=Jt(this.root,te.torso,a,0,1.25,0),this.parts.vest=Jt(this.root,te.vest,o,0,1.31,-.005),Jt(this.root,te.shoulder,o,-.36,1.47,0),Jt(this.root,te.shoulder,o,.36,1.47,0),Jt(this.root,te.pouch,p,-.16,1.23,-.21),Jt(this.root,te.pouch,p,.16,1.23,-.21),Jt(this.root,te.pouch,p,0,.99,-.19),Jt(this.root,new _t(.5,.07,.33),c,0,1.03,0),Jt(this.root,te.backpack,ln(1712166),0,1.3,.26),this.parts.head=Jt(this.root,te.head,h,0,1.72,0),this.parts.helmet=Jt(this.root,te.helmet,u,0,1.79,0),Jt(this.root,te.brim,u,0,1.74,-.16);const m=Jt(this.root,te.mask,p,0,1.69,-.155);m.scale.x=1;const _=Jt(this.root,new _t(.18,.035,.02),c,0,1.735,-.205);_.material=new ce({color:r.accent}),this.parts.armL=new Ut,this.parts.armL.position.set(-.38,1.46,0),this.root.add(this.parts.armL),Jt(this.parts.armL,te.upperArm,a,0,-.18,0),this.parts.elbowL=new Ut,this.parts.elbowL.position.set(0,-.36,0),this.parts.armL.add(this.parts.elbowL),Jt(this.parts.elbowL,te.foreArm,h,0,-.16,0),this.parts.handL=Jt(this.parts.elbowL,te.hand,ln(1710621),0,-.34,0),this.parts.armR=new Ut,this.parts.armR.position.set(.38,1.46,0),this.root.add(this.parts.armR),Jt(this.parts.armR,te.upperArm,a,0,-.18,0),this.parts.elbowR=new Ut,this.parts.elbowR.position.set(0,-.36,0),this.parts.armR.add(this.parts.elbowR),Jt(this.parts.elbowR,te.foreArm,h,0,-.16,0),this.parts.handR=Jt(this.parts.elbowR,te.hand,ln(1710621),0,-.34,0),Jt(this.parts.elbowL,new _t(.12,.1,.12),o,0,-.02,0),Jt(this.parts.elbowR,new _t(.12,.1,.12),o,0,-.02,0),this.parts.legL=new Ut,this.parts.legL.position.set(-.15,.8,0),this.root.add(this.parts.legL),Jt(this.parts.legL,te.upperLeg,l,0,-.2,0),this.parts.kneeL=new Ut,this.parts.kneeL.position.set(0,-.4,0),this.parts.legL.add(this.parts.kneeL),Jt(this.parts.kneeL,te.lowerLeg,l,0,-.18,0),Jt(this.parts.kneeL,te.knee,o,0,-.02,-.07),Jt(this.parts.kneeL,te.boot,p,0,-.39,-.04),this.parts.legR=new Ut,this.parts.legR.position.set(.15,.8,0),this.root.add(this.parts.legR),Jt(this.parts.legR,te.upperLeg,l,0,-.2,0),this.parts.kneeR=new Ut,this.parts.kneeR.position.set(0,-.4,0),this.parts.legR.add(this.parts.kneeR),Jt(this.parts.kneeR,te.lowerLeg,l,0,-.18,0),Jt(this.parts.kneeR,te.knee,o,0,-.02,-.07),Jt(this.parts.kneeR,te.boot,p,0,-.39,-.04),this.gun=new Ut,this.gun.position.set(0,-.34,-.05),this.parts.elbowR.add(this.gun),Jt(this.gun,te.gunBody,ln(2106923,.5,.5),0,0,-.16),Jt(this.gun,te.gunBarrel,ln(1185563,.8,.35),0,.02,-.5).rotation.x=Math.PI/2,Jt(this.gun,te.gunMag,p,0,-.12,-.1),Jt(this.gun,te.gunStock,p,0,.01,.22),Jt(this.gun,te.gunSight,p,0,.1,-.26),this.muzzle=new xe,this.muzzle.position.set(0,.02,-.74),this.gun.add(this.muzzle),this.hitMeshes.push(this.parts.torso,this.parts.head,this.parts.hips);for(const g of[this.parts.armL,this.parts.armR])g.traverse(d=>{d.isMesh&&this.hitMeshes.push(d)});for(const g of[this.parts.legL,this.parts.legR])g.traverse(d=>{d.isMesh&&this.hitMeshes.push(d)});this.showAura&&this.addAura(),this.tagCanvas=document.createElement("canvas"),this.tagCanvas.width=256,this.tagCanvas.height=80,this.tagTexture=new Wn(this.tagCanvas),this.tagTexture.colorSpace=fe,this.tag=new Bs(new _s({map:this.tagTexture,transparent:!0,depthWrite:!1,depthTest:!0})),this.tag.scale.set(1.22,.38,1),this.tag.position.y=2.28,this.root.add(this.tag),this.setName(e),t.add(this.root)}addAura(){const t=[];this.root.traverse(e=>{if(!e.isMesh)return;let i=e.parent;for(;i&&i!==this.root;){if(i===this.gun)return;i=i.parent}t.push(e)});for(const e of t){const i=new X(e.geometry,D_);i.position.copy(e.position),i.quaternion.copy(e.quaternion),i.scale.copy(e.scale).multiplyScalar(1.06),i.castShadow=!1,i.receiveShadow=!1,i.renderOrder=-1,i.userData.aura=!0,e.parent.add(i)}this.auraGlow=new Bs(N_),this.auraGlow.scale.set(2.4,3.2,1),this.auraGlow.position.set(0,1.15,0),this.auraGlow.renderOrder=-1,this.root.add(this.auraGlow)}setName(t){this.name=t}setHealth(t,e){const i=this.tagCanvas.getContext("2d");i.clearRect(0,0,256,80);const s=Math.max(0,Math.min(1,t/e)),r=22,a=28,o=212,l=18;i.fillStyle="rgba(0,0,0,0.72)",i.fillRect(r-2,a-2,o+4,l+4);const c=i.createLinearGradient(0,a,0,a+l);c.addColorStop(0,"#ff5a4a"),c.addColorStop(1,"#c81e12"),i.fillStyle=c,i.fillRect(r,a,o*s,l),i.strokeStyle="rgba(255,125,105,0.9)",i.lineWidth=1.5,i.strokeRect(r,a,o,l),this.tagTexture.needsUpdate=!0}flash(){var t;for(const e of this.materials)(t=e.emissive)==null||t.setHex(3351074);setTimeout(()=>{var e;for(const i of this.materials)(e=i.emissive)==null||e.setHex(0)},80)}playDeath(){this.dead=!0,this.deathT=0,this.tag.visible=!1,this.auraGlow&&(this.auraGlow.visible=!1)}update(t,e){if(this.dead){this.deathT+=t;const r=Math.min(1,this.deathT/.85);this.root.rotation.x=-r*Math.PI*.5,this.root.position.y+=t*.05,this.root.visible=this.deathT<6;return}const i=e.speed||0;i>.05&&(this.phase+=t*(6.5+i*.9));const s=Math.sin(this.phase)*Math.min(1,i/3.2);if(this.parts.legL.rotation.x=s*.55,this.parts.legR.rotation.x=-s*.55,this.parts.kneeL.rotation.x=Math.max(0,-s)*.6,this.parts.kneeR.rotation.x=Math.max(0,s)*.6,e.aiming)this.parts.armR.rotation.x=-1.35,this.parts.armR.rotation.z=-.1,this.parts.elbowR.rotation.x=-.28,this.parts.armL.rotation.x=-1.2,this.parts.armL.rotation.z=.42,this.parts.elbowL.rotation.x=-.45;else{const r=s*.42;this.parts.armR.rotation.x=r,this.parts.armR.rotation.z=-.06,this.parts.elbowR.rotation.x=-.18,this.parts.armL.rotation.x=-r,this.parts.armL.rotation.z=.06,this.parts.elbowL.rotation.x=-.18}e.hit>0?(this.root.rotation.z=Math.sin(e.hit*40)*.08,e.hit=Math.max(0,e.hit-t)):this.root.rotation.z*=.85,this.tag&&(this.tag.position.y=2.28)}}const sn=.46,Nc=1.82,F_=.36,O_=25,B_=44,Fc=["VIPER","KILO","RAVEN","GHOST","ONI","SABLE","RIFT","NOVA","MACE","WRAITH","HEX","DAGGER","CINDER","VOLT","SHADE","BISHOP","RONIN","FROST","TALON","ZERO"];let z_=0;class k_{constructor(t,e,i,s,r,a={}){this.scene=t,this.camera=e,this.player=i,this.colliders=s,this.world=r,this.nav=r.nav,this.id=z_++,this.name=a.name||Fc[this.id%Fc.length],this.startPosition=a.startPosition?a.startPosition.clone():r.getRespawnPoint?r.getRespawnPoint():new b(-20,-2.6,0),this.speedMultiplier=a.speedMultiplier||1,this.spreadMultiplier=a.spreadMultiplier||1,this.damage=a.damage||9,this.onKilled=a.onKilled||null,this.maxHealth=100,this.health=100,this.isAlive=!0,this.radius=sn,this.height=Nc,this.vy=0,this.blocked=!1,this.hitTimer=0,this.character=new Xh(t,this.name,a.palette??Math.floor(Math.random()*6)),this.group=this.character.root,this.group.position.copy(this.startPosition),this.character.setHealth(this.health,this.maxHealth),this.speed=3.25*this.speedMultiplier,this.chaseSpeed=3.9*this.speedMultiplier,this.sightRange=B_,this.state="patrol",this.path=null,this.pathIndex=0,this.destination=null,this.repathTimer=0,this.lastKnown=new b().copy(this.startPosition),this.timeSinceSeen=99,this.aiming=!1,this.strafeDir=Math.random()<.5?1:-1,this.strafeTimer=0,this.burstTimer=0,this.burstCount=0,this.fireTimer=1+Math.random()*1.4,this.attackCooldown=0,this.stuckTimer=0,this.trackTimer=0,this.lastPos=this.group.position.clone(),this.tryingToMove=!1,this.deathElapsed=0,this.raycaster=new Hh,this.raycaster.far=this.sightRange,this._tmpA=new b,this._tmpB=new b,this._tmpC=new b,this.pickPatrolGoal(!0)}get eyePosition(){return this._tmpA.set(this.group.position.x,this.group.position.y+1.52,this.group.position.z)}getMuzzleWorldPosition(){return this.character.muzzle.getWorldPosition(this._tmpB),this._tmpB}hasLineOfSight(t){if(!this.world.getObstacleMeshes)return!0;const e=this.eyePosition.clone(),i=this._tmpC.subVectors(t,e),s=i.length();if(s>this.sightRange)return!1;i.normalize(),this.raycaster.set(e,i),this.raycaster.far=s;const r=this.raycaster.intersectObjects(this.world.getObstacleMeshes(),!1);return!r.length||r[0].distance>s-.4}setDestination(t){this.nav&&(this.destination=t.clone(),this.path=this.nav.findPath(this.group.position,t),this.pathIndex=0,this.repathTimer=.9+Math.random()*.6,this.path&&this.path.length>0&&this.path[0].distanceTo(this.group.position)<.75&&(this.pathIndex=1))}pickPatrolGoal(t=!1){if(!this.nav)return;const e=this.nav.randomNodeFarFrom(this.group.position,t?10:22);e&&(this.destination=e.pos.clone(),this.path=null,this.repathTimer=0,this.state="patrol")}followPath(t,e,i=null){this.tryingToMove=!0,this.repathTimer<=0&&(i?this.setDestination(i):this.destination&&(this.path=this.nav.findPath(this.group.position,this.destination),this.pathIndex=0,this.repathTimer=1.4+Math.random()*.8));let s=null;if(this.path&&this.pathIndex<this.path.length){s=this.path[this.pathIndex];const h=s.x-this.group.position.x,u=s.z-this.group.position.z;Math.hypot(h,u)<.72&&(this.pathIndex++,s=this.path[this.pathIndex]||null)}if(!s&&i&&(s=i),!s&&this.destination&&(s=this.destination),!s)return this.pickPatrolGoal(),!1;const r=s.x-this.group.position.x,a=s.z-this.group.position.z,o=Math.hypot(r,a);if(o<.05)return!1;const l=e*t,c=this.moveBot(r/o*l,a/o*l);if(!this.aiming){const h=Math.atan2(r,a);this.group.rotation.y=this.lerpAngle(this.group.rotation.y,h,10*t)}if(this.trackTimer+=t,this.trackTimer>=.5){const h=Math.hypot(this.group.position.x-this.lastPos.x,this.group.position.z-this.lastPos.z);!c||h<.08?this.stuckTimer+=.5:this.stuckTimer=0,this.lastPos.copy(this.group.position),this.trackTimer=0,this.stuckTimer>=1.2&&(this.path=null,this.repathTimer=0,this.stuckTimer=0)}return c}lerpAngle(t,e,i){let s=(e-t+Math.PI)%(Math.PI*2)-Math.PI;return s<-Math.PI&&(s+=Math.PI*2),t+s*Math.min(1,i)}updateCombat(t){const e=this.camera.position,i=Math.hypot(e.x-this.group.position.x,e.z-this.group.position.z),s=new b(e.x,e.y-.65,e.z),r=!this.player.isDead&&this.hasLineOfSight(s);if(r?(this.timeSinceSeen=0,this.lastKnown.copy(e),this.state="combat",this.aiming=!0):(this.timeSinceSeen+=t,this.aiming=!1,this.timeSinceSeen>7&&(this.state==="combat"&&this.pickPatrolGoal(),this.state="patrol")),this.state==="combat"){const a=r?e:this.lastKnown,o=Math.atan2(a.x-this.group.position.x,a.z-this.group.position.z);if(this.group.rotation.y=this.lerpAngle(this.group.rotation.y,o,12*t),i>19||!r)this.followPath(t,this.chaseSpeed,new b(a.x,a.y,a.z));else if(i<6.5){this.strafeTimer+=t;const l=this._tmpA.set(this.group.position.x-e.x,0,this.group.position.z-e.z).normalize(),c=this._tmpB.set(-l.z,0,l.x).multiplyScalar(this.strafeDir*.7);l.multiplyScalar(.8).add(c).normalize(),this.moveBot(l.x*this.speed*.8*t,l.z*this.speed*.8*t),this.strafeTimer>1.6&&(this.strafeDir*=-1,this.strafeTimer=0)}else{this.strafeTimer+=t;const l=this._tmpA.set(e.x-this.group.position.x,0,e.z-this.group.position.z).normalize(),c=this._tmpB.set(-l.z,0,l.x).multiplyScalar(this.strafeDir),h=i>13?.55:i<9?-.55:0,u=c.addScaledVector(l,h).normalize();this.tryingToMove=!0,this.moveBot(u.x*this.speed*t,u.z*this.speed*t),this.strafeTimer>1.8&&(this.strafeDir*=-1,this.strafeTimer=0)}r&&this.tryShoot(t,i)}else this.timeSinceSeen<7?this.followPath(t,this.speed,this.lastKnown):this.followPath(t,this.speed*.72)}tryShoot(t,e){if(!(!this.isAlive||this.player.isDead)){if(this.attackCooldown>0){this.attackCooldown-=t;return}e>38||(this.fireTimer-=t,!(this.fireTimer>0)&&(this.burstCount++,this.burstTimer=.11,this.shootAtPlayer(),this.burstCount%3===0?(this.fireTimer=1+Math.random()*1.4,this.burstCount=0):this.fireTimer=.14+Math.random()*.1))}}shootAtPlayer(){var p;if(!this.isAlive||this.player.isDead)return;const t=this.getMuzzleWorldPosition().clone(),s=this.camera.position.clone().clone().add(new b((Math.random()-.5)*.25,-.55+(Math.random()-.5)*.35,(Math.random()-.5)*.25)).sub(t).normalize(),r=new b().crossVectors(s,new b(0,1,0));r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize();const a=new b().crossVectors(r,s).normalize(),o=.038*this.spreadMultiplier;s.addScaledVector(r,(Math.random()-.5)*2*o).addScaledVector(a,(Math.random()-.5)*2*o).normalize(),this.raycaster.set(t,s),this.raycaster.far=80;const l=this.raycaster.intersectObjects(this.world.getHitMeshes(),!1)[0]||null,c=this.raycaster.ray.intersectBox(this.getPlayerBox(),new b);let h=!1,u;if(c){const m=t.distanceTo(c);(!l||l.distance>m)&&(h=!0,u=c)}h||(u=l?l.point:this.raycaster.ray.at(50,new b),l&&this.scene.__effects&&this.scene.__effects.impact(l.point,(p=l.face)==null?void 0:p.normal)),this.createTracer(t,u),h&&this.player.takeDamage(this.damage+Math.floor(Math.random()*4),t)}getPlayerBox(){const t=this.camera.position;return new Oe(new b(t.x-.42,t.y-1.62,t.z-.42),new b(t.x+.42,t.y+.06,t.z+.42))}createTracer(t,e){const i=t.distanceTo(e);if(i<.01)return;const s=new Be(.012,.012,i,4);s.rotateX(Math.PI/2);const r=new ce({color:16738890,transparent:!0,opacity:.8,depthWrite:!1}),a=new X(s,r);a.position.copy(t).add(e).multiplyScalar(.5),a.lookAt(e),this.scene.add(a),setTimeout(()=>{this.scene.remove(a),s.dispose(),r.dispose()},45)}resolveCollisions(t){const e=this.group.position;for(const i of this.colliders){const s=i.box,r=e.x-sn,a=e.x+sn,o=e.y,l=e.y+Nc,c=e.z-sn,h=e.z+sn;if(a>s.min.x&&r<s.max.x&&l>s.min.y&&o<s.max.y&&h>s.min.z&&c<s.max.z){const u=s.max.y-e.y;if(u>0&&u<=F_){e.y=s.max.y,this.vy<0&&(this.vy=0);continue}if(t==="x"){const p=a-s.min.x,m=s.max.x-r;e.x=p<m?s.min.x-sn:s.max.x+sn}else{const p=h-s.min.z,m=s.max.z-c;e.z=p<m?s.min.z-sn:s.max.z+sn}this.blocked=!0}}}moveBot(t,e){const i=this.group.position,s=i.x,r=i.z;return i.x+=t,this.resolveCollisions("x"),i.z+=e,this.resolveCollisions("z"),Math.hypot(i.x-s,i.z-r)>1e-4}updateGroundPhysics(t){const e=this.group.position,i=e.y;this.vy-=O_*t,e.y+=this.vy*t,e.y<i-2&&(e.y=i-2);let s=-1/0;for(const o of this.colliders){const l=o.box;l.max.y>i+.06||e.x+sn>l.min.x&&e.x-sn<l.max.x&&e.z+sn>l.min.z&&e.z-sn<l.max.z&&l.max.y>s&&(s=l.max.y)}s>-1/0&&e.y<=s&&(e.y=s,this.vy=0);const r=this.world.getBounds?this.world.getBounds():{minX:-75,maxX:75,minZ:-50,maxZ:50},a=this.world.getKillY?this.world.getKillY():-9;if(e.y<a||e.x<r.minX-1||e.x>r.maxX+1||e.z<r.minZ-1||e.z>r.maxZ+1){const o=this.world.getRespawnPoint?this.world.getRespawnPoint():this.startPosition;e.copy(o),this.vy=0,this.path=null}}update(t){if(t=Math.min(t,.05),!this.isAlive){this.deathElapsed+=t,this.character.update(t,{speed:0,aiming:!1,hit:0}),this.deathElapsed>8&&(this.group.visible=!1);return}if(this.repathTimer-=t,this.player.hasStarted&&!this.player.isDead?this.updateCombat(t):(this.aiming=!1,this.followPath(t,this.speed*.55)),this.updateGroundPhysics(t),this.stuckTimer>3){const i=this.nav?this.nav.randomNodeFarFrom(this.player.camera.position,16):null;i&&(this.group.position.copy(i.pos),this.vy=0,this.path=null,this.stuckTimer=0)}const e=this.tryingToMove?this.speed:0;this.tryingToMove=!1,this.character.update(t,{speed:e,aiming:this.aiming,hit:this.hitTimer}),this.hitTimer>0&&(this.hitTimer=Math.max(0,this.hitTimer-t))}checkHit(t){if(!this.isAlive||!this.group.visible)return null;const e=t.intersectObjects(this.character.hitMeshes,!1);if(!e.length)return null;const i=e[0];return{target:this,point:i.point.clone(),distance:i.distance,isHeadshot:i.object===this.character.parts.head}}applyDamage(t,e){var i;this.isAlive&&(this.health-=e,this.hitTimer=.22,this.character.flash(),this.character.setHealth(Math.max(0,this.health),this.maxHealth),this.aiming||(this.lastKnown.copy(this.player.camera.position),this.timeSinceSeen=0),t&&this.character.setHealth(Math.max(0,this.health),this.maxHealth),this.health<=0&&(this.health=0,this.isAlive=!1,this.aiming=!1,this.character.playDeath(),this.onKilled&&this.onKilled(this,{headshot:t,weaponId:((i=this.lastHit)==null?void 0:i.weaponId)||"rifle"})))}}const ja=10,H_=5;function Oc(n,t){return n+Math.random()*(t-n)}class G_{constructor(t,e,i,s,r,a){this.scene=t,this.camera=e,this.player=i,this.world=s,this.audio=r,this.onKill=a,this.bots=[],this.active=!1,this.kills=0,this.respawnQueue=[]}start(){this.stop(),this.active=!0,this.kills=0,this.respawnQueue=[],this.spawnInitial(ja)}stop(){this.active=!1;for(const t of this.bots)try{t&&t.group&&this.scene.remove(t.group)}catch{}this.bots.length=0,this.respawnQueue=[]}spawnInitial(t){const e=this.pickSpawnPositions(t,18);for(let i=0;i<e.length;i++)this.spawnBotAt(e[i])}spawnBotAt(t){if(!this.active)return;const e=new k_(this.scene,this.camera,this.player,this.world.getColliders(),this.world,{startPosition:t,speedMultiplier:1,spreadMultiplier:1,damage:8,onKilled:(i,s)=>this.handleBotKilled(i,s)});this.bots.push(e)}handleBotKilled(t,e={}){var s,r;if(!this.active)return;this.kills+=1;const i=this.bots.indexOf(t);i>=0&&this.bots.splice(i,1);try{t.group&&this.scene.remove(t.group)}catch{}if(this.audio)try{(r=(s=this.audio).enemyDeath)==null||r.call(s)}catch{}this.onKill&&this.onKill({bot:t,headshot:!!e.headshot,weaponId:e.weaponId||"rifle"}),this.bots.length<ja&&this.respawnQueue.push({time:H_})}alertNear(t,e=18){if(!this.active)return;const i=t.clone();for(const s of this.bots){if(!s||!s.isAlive||!s.group)continue;if(s.group.position.distanceTo(i)<e)try{s.lastKnown.copy(i),s.timeSinceSeen=0,s.state!=="combat"&&(s.state="combat"),s.aiming!==void 0&&(s.aiming=!0)}catch{}}}pickSpawnPositions(t,e=18){const i=[],s=this.player.camera.position,r=this.world.nav,a=[];if(r&&Array.isArray(r.nodes)&&r.nodes.length>0){const l=[...r.nodes];for(let c=l.length-1;c>0;c--){const h=Math.floor(Math.random()*(c+1));[l[c],l[h]]=[l[h],l[c]]}for(let c=0;c<l.length&&i.length<t;c++){const u=l[c].pos.clone();if(u.distanceTo(s)<e)continue;let p=!0;for(const _ of a)if(_.distanceTo(u)<4){p=!1;break}if(!p||this.world.isPointBlocked&&this.world.isPointBlocked(u.x,u.z,u.y+.06,.5,1.8,.4))continue;const m=this.world.getFloorHeightAt?this.world.getFloorHeightAt(u.x,u.z,u.y+1.2):u.y;isFinite(m)&&(u.y=m),i.push(u),a.push(u.clone())}}if(i.length<t){const l=this.world.spawnPoints&&this.world.spawnPoints.length?this.world.spawnPoints:[];for(let c=0;c<220&&i.length<t;c++){const u=(l.length?l[Math.floor(Math.random()*l.length)]:new b(-20,-2.6,0)).clone();if(c>l.length&&(u.x+=(Math.random()-.5)*6,u.z+=(Math.random()-.5)*6),u.distanceTo(s)<e)continue;let p=!0;for(const m of a)if(m.distanceTo(u)<4){p=!1;break}if(p){if(this.world.getFloorHeightAt){const m=this.world.getFloorHeightAt(u.x,u.z,u.y+1.2);if(!isFinite(m)||Math.abs(m-u.y)>.6)continue;u.y=m}this.world.isPointBlocked&&this.world.isPointBlocked(u.x,u.z,u.y+.06,.5,1.8,.4)||(i.push(u),a.push(u.clone()))}}}let o=0;for(;i.length<t&&o++<300&&this.world.respawnPoints&&this.world.respawnPoints.length;){const l=this.world.respawnPoints[Math.floor(Math.random()*this.world.respawnPoints.length)].clone();if(l.x+=Oc(-12,12),l.z+=Oc(-12,12),l.distanceTo(s)<e-2)continue;const c=this.world.getFloorHeightAt?this.world.getFloorHeightAt(l.x,l.z,l.y+1.2):l.y;if(isFinite(c)&&(l.y=c),this.world.isPointBlocked&&this.world.isPointBlocked(l.x,l.z,l.y+.06,.5,1.8,.4))continue;let h=!0;for(const u of a)if(u.distanceTo(l)<3.5){h=!1;break}if(h&&(i.push(l),a.push(l.clone()),i.length>=t))break}return i}update(t){if(this.active){if(this.respawnQueue.length&&this.bots.length<ja){for(let e=this.respawnQueue.length-1;e>=0;e--)if(this.respawnQueue[e].time-=t,this.respawnQueue[e].time<=0){this.respawnQueue.splice(e,1);const i=this.pickSpawnPositions(1,22);i.length?this.spawnBotAt(i[0]):this.respawnQueue.push({time:2});break}}for(const e of this.bots)if(e)try{e.update(t)}catch{}}}}const Hn=[{id:"rifle",name:"RIFLE",type:"ASSAULT",magSize:30,reloadTime:1.8,fireRate:10,damageBody:20,damageHead:40,pellets:1,spread:.004,zoomFactor:1.8,zoomSensitivity:.42,position:[.28,-.22,-.82],recoilKick:.065,recoilRot:.035,flashScale:1,shellSize:1},{id:"pistol",name:"PISTOL",type:"SIDEARM",magSize:12,reloadTime:1.2,fireRate:4,damageBody:12,damageHead:24,pellets:1,spread:.006,zoomFactor:1.4,zoomSensitivity:.55,position:[.27,-.21,-.56],recoilKick:.05,recoilRot:.045,flashScale:.75,shellSize:.85},{id:"shotgun",name:"SHOTGUN",type:"BREACH",magSize:6,reloadTime:2.2,fireRate:1.3,damageBody:10,damageHead:20,pellets:8,spread:.055,zoomFactor:1.15,zoomSensitivity:.62,position:[.3,-.22,-.85],recoilKick:.12,recoilRot:.08,flashScale:1.3,shellSize:1.15},{id:"sniper",name:"SNIPER",type:"PRECISION",magSize:5,reloadTime:2.7,fireRate:.8,damageBody:85,damageHead:170,pellets:1,spread:.0015,zoomFactor:4,zoomSensitivity:.16,position:[.3,-.24,-.9],recoilKick:.18,recoilRot:.16,flashScale:1.45,shellSize:1.35}],Cs=new b;function cn(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Cs.copy(t),Cs[i]=0,Cs.normalize();const c=.5*a/(a+o),h=1-Cs.angleTo(n)/l;return Math.sign(Cs[e])===1?h*c:o/(a+o)+c+c*(1-h)}class V_ extends _t{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new b,l=new b,c=new b(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,m=h.length/6,_=new b,g=.5/s;for(let d=0,f=0;d<h.length;d+=3,f+=2)switch(o.fromArray(h,d),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[d+0]=c.x*Math.sign(o.x)+l.x*r,h[d+1]=c.y*Math.sign(o.y)+l.y*r,h[d+2]=c.z*Math.sign(o.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:_.set(1,0,0),p[f+0]=cn(_,l,"z","y",r,i),p[f+1]=1-cn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),p[f+0]=1-cn(_,l,"z","y",r,i),p[f+1]=1-cn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),p[f+0]=1-cn(_,l,"x","z",r,t),p[f+1]=cn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),p[f+0]=1-cn(_,l,"x","z",r,t),p[f+1]=1-cn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),p[f+0]=1-cn(_,l,"x","y",r,t),p[f+1]=1-cn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),p[f+0]=cn(_,l,"x","y",r,t),p[f+1]=1-cn(_,l,"y","x",r,e);break}}}function W_(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ee;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0;const u=[];for(let p=0;p<n.length;++p){const m=n[p].index;for(let _=0;_<m.count;++_)u.push(m.getX(_)+h);h+=n[p].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Bc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const m=[];for(let g=0;g<a[h].length;++g)m.push(a[h][g][p]);const _=Bc(m);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function Bc(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new t(r);let o=0;for(let c=0;c<n.length;++c)a.set(n[c].array,o),o+=n[c].array.length;const l=new je(a,e,i);return s!==void 0&&(l.gpuType=s),l}function qh(n=128,t=26,e=!0){const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),r=s.createImageData(128,128);for(let o=0;o<r.data.length;o+=4){const l=Math.max(0,Math.min(255,n+(Math.random()-.5)*t));r.data[o]=r.data[o+1]=r.data[o+2]=l,r.data[o+3]=255}if(s.putImageData(r,0,0),e){s.globalAlpha=.18,s.strokeStyle="#f4f4f4";for(let o=0;o<18;o++){s.beginPath();const l=Math.random()*128;s.moveTo(Math.random()*40,l),s.lineTo(40+Math.random()*90,l+(Math.random()-.5)*2),s.stroke()}}const a=new Wn(i);return a.wrapS=a.wrapT=Ei,a.repeat.set(2.5,2.5),a.colorSpace=rn,a}function X_(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="#5b3822",t.fillRect(0,0,128,128);for(let i=0;i<34;i++){t.strokeStyle=i%3?"rgba(35,18,10,0.26)":"rgba(160,105,60,0.16)",t.lineWidth=.6+Math.random()*1.6,t.beginPath();const s=Math.random()*128;t.moveTo(s,0),t.bezierCurveTo(s+9,42,s-8,88,s+3,128),t.stroke()}const e=new Wn(n);return e.wrapS=e.wrapT=Ei,e.repeat.set(1.4,1.4),e.colorSpace=fe,e}const Ji=qh(126,30,!0),Ls=qh(112,18,!1),Lt={metal:new ue({color:5331807,metalness:.58,roughness:.44,roughnessMap:Ji,bumpMap:Ji,bumpScale:.0024,emissive:527116,emissiveIntensity:.32}),steel:new ue({color:11582141,metalness:.72,roughness:.27,roughnessMap:Ji,bumpMap:Ji,bumpScale:.0015,emissive:461066,emissiveIntensity:.22}),darkSteel:new ue({color:3818053,metalness:.62,roughness:.38,roughnessMap:Ji,bumpMap:Ji,bumpScale:.0018,emissive:329480,emissiveIntensity:.3}),polymer:new ue({color:2369578,metalness:.06,roughness:.78,roughnessMap:Ls,bumpMap:Ls,bumpScale:.0016,emissive:263429,emissiveIntensity:.26}),rubber:new ue({color:1447704,metalness:.01,roughness:.95,roughnessMap:Ls,emissive:197379,emissiveIntensity:.2}),wood:new ue({color:9065776,metalness:.02,roughness:.55,map:X_(),roughnessMap:Ls,bumpMap:Ls,bumpScale:.002,emissive:853763,emissiveIntensity:.22}),glove:new ue({color:6970957,metalness:.02,roughness:.92,emissive:722949,emissiveIntensity:.28}),sleeve:new ue({color:4869701,metalness:.02,roughness:.88,emissive:460806,emissiveIntensity:.24}),lens:new ue({color:1388859,metalness:.9,roughness:.04,transparent:!0,opacity:.42,emissive:663592,emissiveIntensity:.65,side:De,depthWrite:!1}),redLens:new ue({color:2820104,metalness:.75,roughness:.08,transparent:!0,opacity:.4,emissive:10097676,emissiveIntensity:.9,side:De,depthWrite:!1}),brass:new ue({color:11831869,metalness:.92,roughness:.28})},Qa=new Map;function ea(n,t){return Qa.has(n)||Qa.set(n,t()),Qa.get(n)}function q_(n,t,e,i=.01){const s=`r:${n}:${t}:${e}:${i}`;return ea(s,()=>new V_(n,t,e,3,Math.min(i,n/2.01,t/2.01,e/2.01)))}function Gr(n,t,e,i=12,s=!1){const r=`c:${n}:${t}:${e}:${i}:${s}`;return ea(r,()=>new Be(n,t,e,i,1,s))}function Vr(n,t=16){return ea(`circle:${n}:${t}`,()=>new Zr(n,t))}function ft(n,t,e,i,s,r,a,o,l=0,c=0,h=0,u=.008){const p=new X(q_(e,i,s,u),t);return p.position.set(r,a,o),p.rotation.set(l,c,h),n.add(p),p}function de(n,t,e,i,s,r,a,o=Math.PI/2,l=0,c=12,h=!1){const u=new X(Gr(e,e,i,c,h),t);return u.position.set(s,r,a),u.rotation.set(o,0,l),n.add(u),u}function Yh(n,t,e,i,s,r,a,o=Math.PI*1.4){const l=ea(`torus:${e}:${i}:${o}`,()=>new Qr(e,i,6,18,o)),c=new X(l,t);return c.position.set(s,r,a),c.rotation.set(0,Math.PI/2,-.3),n.add(c),c}function zo(n,t,e,i,s,r){const a=new Kr;a.moveTo(n[0][0],n[0][1]);for(let c=1;c<n.length;c++)a.lineTo(n[c][0],n[c][1]);a.closePath();const o=new jr(a,{depth:t,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:2,steps:1,curveSegments:4});o.translate(0,0,-t/2),o.rotateY(Math.PI/2);const l=new X(o,e);return l.position.set(i,s,r),l}function wn(n,t,e,i){const s=new X(Gr(.007,.007,.006,8),Lt.darkSteel);return s.rotation.z=Math.PI/2,s.position.set(t,e,i),n.add(s),s}function Wr(n,t,e,i,s,r=.075){for(let a=0;a<s;a++)ft(n,Lt.darkSteel,r,.007,.014,0,t,e-a*i,0,0,0,.002)}function na(n,t,e,i,s,r,a){ft(n,Lt.darkSteel,s,r,a,t,e,i,0,0,0,.001)}function ia(n,t,e,i,s=.055,r=.027){ft(n,Lt.darkSteel,.006,r,s,t,e,i,0,0,0,.001),ft(n,Lt.brass,.004,r*.45,s*.6,t+.002,e,i,0,0,0,.001)}function ko(n,t=1){const e=[[0,0],[.073,0],[.055,-.09*t],[.02,-.22*t],[-.058,-.245*t],[-.078,-.1*t]],i=zo(e,.074,Lt.polymer,0,-.075,.19);return n.add(i),ft(n,Lt.polymer,.07,.022,.09,0,-.078,.157,.1,0,0,.006),Yh(n,Lt.darkSteel,.043,.007,0,-.085,.135),ft(n,Lt.steel,.012,.045,.012,0,-.11,.145,-.18,0,0,.004),i}function Ho(n,t=1,e=Lt.polymer){const i=[[0,.018],[-.06,.02],[-.25*t,-.02],[-.29*t,-.14],[-.18*t,-.17],[-.02,-.15],[0,-.05]],s=zo(i,.09,e,0,.035,.37);return n.add(s),ft(n,Lt.rubber,.095,.18,.045,0,-.02,.37+.29*t,0,0,0,.012),s}function Y_(n){ft(n,Lt.darkSteel,.075,.025,.13,0,.087,.02,0,0,0,.004),ft(n,Lt.darkSteel,.06,.025,.035,0,.115,.065,0,0,0,.004),de(n,Lt.darkSteel,.045,.095,0,.155,.01,Math.PI/2,0,16,!0);const t=new X(Vr(.04),Lt.redLens);t.position.set(0,.155,-.038),n.add(t);const e=new X(Vr(.038),Lt.lens);e.rotation.y=Math.PI,e.position.set(0,.155,.058),n.add(e),ft(n,Lt.steel,.008,.018,.018,.045,.14,.01,0,0,0,.002),ft(n,Lt.steel,.018,.008,.018,.045,.155,.01,0,0,0,.002)}function Z_(n){ft(n,Lt.darkSteel,.11,.035,.16,0,.112,-.02,0,0,0,.004);for(const i of[-.13,.09])de(n,Lt.darkSteel,.057,.025,0,.17,i,0,0,16,!0),ft(n,Lt.steel,.028,.055,.02,0,.128,i,0,0,0,.002);de(n,Lt.steel,.045,.31,0,.17,-.02,Math.PI/2,0,18,!0),de(n,Lt.darkSteel,.061,.075,0,.17,-.195,Math.PI/2,0,18,!0),de(n,Lt.darkSteel,.052,.06,0,.17,.16,Math.PI/2,0,18,!0),de(n,Lt.rubber,.063,.012,0,.17,-.235,Math.PI/2,0,18,!0);const t=new X(Vr(.055),Lt.lens);t.position.set(0,.17,-.233),n.add(t);const e=new X(Vr(.046),Lt.lens);e.rotation.y=Math.PI,e.position.set(0,.17,.192),n.add(e),de(n,Lt.darkSteel,.028,.05,.045,.205,.02,Math.PI/2,0,12),de(n,Lt.darkSteel,.026,.045,0,.235,.02,0,0,12),de(n,Lt.steel,.034,.016,.045,.205,.02,Math.PI/2,0,12),de(n,Lt.steel,.032,.014,0,.257,.02,0,0,12);for(let i=0;i<5;i++)ft(n,Lt.steel,.002,.004,.012,.075,.19+i*.006,.02,0,0,0,5e-4)}function $_(n){ft(n,Lt.darkSteel,.026,.04,.018,0,.1,.18,0,0,0,.002),ft(n,Lt.darkSteel,.026,.05,.016,0,.105,-.63,0,0,0,.002),ft(n,Lt.steel,.004,.028,.004,0,.125,-.63,0,0,0,.001)}function Zh(n,t,e,i,s=3){de(n,i,e,.085,0,.02,t,Math.PI/2,0,14);for(let r=0;r<s;r++)ft(n,Lt.darkSteel,e*2.1,.016,.009,0,.02,t-.026+r*.025,0,0,0,.001)}function zc(n,t,e,i,s=1){const r=new Ut;r.position.set(t,e,i),ft(r,Lt.glove,.075,.085,.095,0,0,0,0,0,0,.024);for(let a=0;a<4;a++)ft(r,Lt.glove,.055,.019,.022,.022*s,.032-a*.019,-.048,0,0,.04,.008);return ft(r,Lt.glove,.026,.055,.028,-.045*s,-.005,-.008,0,0,.35*s,.01),n.add(r),r}function kc(n,t,e){const i=new b(...t),s=new b(...e),r=s.clone().sub(i),a=r.length(),o=new X(Gr(.032,.055,a,10),Lt.sleeve);o.position.copy(i).add(s).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new b(0,1,0),r.normalize()),n.add(o);const l=new X(Gr(.036,.036,.04,10),Lt.glove);l.position.copy(i),l.quaternion.copy(o.quaternion),n.add(l)}function K_(n,t){const e=new Ut,i=t.rightHand,s=t.leftHand;return zc(e,i.x,i.y,i.z,1),zc(e,s.x,s.y,s.z,-1),kc(e,[i.x+.012,i.y-.005,i.z+.02],[.28,-.5,.36]),kc(e,[s.x-.012,s.y-.005,s.z+.02],[-.26,-.52,.3]),ft(e,Lt.glove,.07,.05,.1,i.x-.01,i.y+.03,i.z+.07,.2,0,0,.02),ft(e,Lt.glove,.07,.05,.1,s.x+.01,s.y+.03,s.z+.07,.2,0,0,.02),n==="pistol"&&(e.scale.set(.96,.96,.96),e.position.set(0,.03,.03)),$h(e),e}function Hc(){const n=new Ut,t=Lt;ft(n,t.metal,.13,.135,.54,0,0,.02,0,0,0,.018),ft(n,t.darkSteel,.118,.035,.5,0,.077,.02,0,0,0,.008),Wr(n,.099,.16,.045,9),ft(n,t.darkSteel,.106,.115,.36,0,-.002,-.43,0,0,0,.02),Wr(n,.063,-.26,.045,7,.066),ft(n,t.polymer,.034,.086,.34,-.068,-.015,-.43,0,0,0,.012),ft(n,t.polymer,.034,.086,.34,.068,-.015,-.43,0,0,0,.012);for(let e=0;e<5;e++)ft(n,t.darkSteel,.006,.038,.052,-.087,-.015,-.32-e*.055,0,0,0,.003),ft(n,t.darkSteel,.006,.038,.052,.087,-.015,-.32-e*.055,0,0,0,.003);return de(n,t.steel,.019,.42,0,.02,-.72,Math.PI/2,0,14),de(n,t.darkSteel,.027,.1,0,.02,-.94,Math.PI/2,0,14,!0),Zh(n,-.99,.032,t.darkSteel,3),de(n,t.darkSteel,.036,.06,0,.02,-.62,Math.PI/2,0,12),ko(n,1),ft(n,t.polymer,.07,.21,.1,0,-.19,.01,-.18,0,0,.012),ft(n,t.darkSteel,.075,.025,.105,0,-.3,.035,-.18,0,0,.006),ft(n,t.polymer,.04,.022,.1,.06,.075,.18,0,0,0,.004),Ho(n,1,t.polymer),de(n,t.darkSteel,.027,.2,0,.032,.36,Math.PI/2,0,12),Y_(n),$_(n),ia(n,.066,.035,.075),ft(n,t.steel,.05,.012,.04,.068,.035,.2,0,0,0,.002),ft(n,t.darkSteel,.03,.018,.055,0,.116,.17,0,0,0,.004),ft(n,t.steel,.004,.036,.1,0,.09,.27,0,0,0,.001),wn(n,.068,.012,.22),wn(n,-.068,.012,.22),wn(n,.068,-.03,.32),na(n,0,-.065,.055,.085,.002,.012),{group:n,muzzle:new b(0,.02,-1.04),sight:new b(0,.155,.01),eject:new b(.11,.045,.08),rightHand:new b(-.04,-.17,.19),leftHand:new b(-.085,-.115,-.39),scopeZ:-.65}}function J_(){const n=new Ut,t=Lt;ft(n,t.metal,.095,.105,.36,0,.045,-.02,0,0,0,.018),ft(n,t.darkSteel,.088,.025,.3,0,.105,-.04,0,0,0,.008);for(let i=0;i<9;i++)ft(n,t.darkSteel,.003,.052,.011,.049,.045,.1+i*-.018,0,0,0,.001),ft(n,t.darkSteel,.003,.052,.011,-.049,.045,.1+i*-.018,0,0,0,.001);de(n,t.steel,.018,.15,0,.045,-.265,Math.PI/2,0,12),de(n,t.darkSteel,.023,.035,0,.045,-.35,Math.PI/2,0,12,!0),ft(n,t.polymer,.074,.1,.09,0,0,.11,0,0,0,.012);const e=[[0,0],[.06,0],[.04,-.12],[.01,-.25],[-.05,-.255],[-.06,-.11]];return n.add(zo(e,.072,t.polymer,0,-.05,.13)),Yh(n,t.darkSteel,.035,.006,0,-.065,.09),ft(n,t.steel,.011,.04,.011,0,-.09,.1,-.2,0,0,.003),ft(n,t.polymer,.065,.018,.08,0,-.3,.155,.16,0,0,.008),ft(n,t.darkSteel,.025,.022,.028,0,.132,-.15,0,0,0,.003),ft(n,t.steel,.005,.02,.01,0,.146,-.15,0,0,0,.001),ft(n,t.darkSteel,.054,.02,.026,0,.134,.105,0,0,0,.003),ft(n,t.darkSteel,.012,.012,.025,-.02,.128,.105,0,0,0,.002),ft(n,t.darkSteel,.012,.012,.025,.02,.128,.105,0,0,0,.002),ia(n,.049,.075,-.02,.05,.022),wn(n,.049,.02,.09),wn(n,-.049,.02,.09),na(n,0,.112,.12,.055,.002,.01),{group:n,muzzle:new b(0,.045,-.38),sight:new b(0,.145,.105),eject:new b(.08,.075,-.01),rightHand:new b(-.022,-.14,.16),leftHand:new b(-.072,-.12,.09),scopeZ:-.55}}function j_(){const n=new Ut,t=Lt;ft(n,t.metal,.145,.15,.5,0,0,.02,0,0,0,.018),ft(n,t.darkSteel,.1,.055,.46,0,.08,.02,0,0,0,.01),de(n,t.steel,.028,.72,0,.045,-.62,Math.PI/2,0,14),de(n,t.darkSteel,.034,.11,0,.045,-1.02,Math.PI/2,0,14,!0),de(n,t.steel,.019,.62,0,-.035,-.55,Math.PI/2,0,12),de(n,t.darkSteel,.026,.07,0,-.035,-.88,Math.PI/2,0,12),ft(n,t.wood,.12,.105,.31,0,-.06,-.38,0,0,0,.02);for(let e=0;e<6;e++)ft(n,t.darkSteel,.125,.012,.012,0,-.11,-.27-e*.045,0,0,0,.003);return ko(n,.9),Ho(n,1.1,t.wood),ft(n,t.darkSteel,.1,.15,.043,0,-.04,.7,0,0,0,.008),ft(n,t.darkSteel,.024,.02,.025,0,.128,-.96,0,0,0,.002),ft(n,t.steel,.006,.014,.006,0,.14,-.96,0,0,0,.001),ft(n,t.darkSteel,.065,.018,.035,0,.105,.22,0,0,0,.003),ia(n,.074,.04,.02,.07,.035),ft(n,t.steel,.006,.04,.08,.074,-.03,-.2,0,0,0,.002),wn(n,.075,-.01,.2),wn(n,-.075,-.01,.2),na(n,0,-.075,.12,.1,.002,.012),{group:n,muzzle:new b(0,.045,-1.1),sight:new b(0,.11,.22),eject:new b(.12,.05,.02),rightHand:new b(-.04,-.17,.19),leftHand:new b(-.09,-.125,-.39),scopeZ:-.62}}function Q_(){const n=new Ut,t=Lt;ft(n,t.metal,.145,.145,.65,0,0,.02,0,0,0,.018),ft(n,t.darkSteel,.118,.036,.59,0,.083,.02,0,0,0,.008),Wr(n,.105,.23,.045,11),ft(n,t.darkSteel,.108,.11,.46,0,-.005,-.5,0,0,0,.018),Wr(n,.057,-.31,.05,8,.062);for(let e=0;e<6;e++)ft(n,t.darkSteel,.006,.042,.055,-.082,-.012,-.37-e*.06,0,0,0,.003),ft(n,t.darkSteel,.006,.042,.055,.082,-.012,-.37-e*.06,0,0,0,.003);return de(n,t.steel,.022,.62,0,.02,-.92,Math.PI/2,0,16),Zh(n,-1.25,.038,t.darkSteel,4),de(n,t.darkSteel,.042,.07,0,.02,-.65,Math.PI/2,0,14),ko(n,1),ft(n,t.polymer,.072,.23,.11,0,-.2,.08,-.14,0,0,.012),ft(n,t.darkSteel,.08,.03,.14,0,-.31,.11,-.14,0,0,.006),Ho(n,1.15,t.polymer),ft(n,t.rubber,.11,.06,.16,0,.075,.51,0,0,0,.012),ft(n,t.darkSteel,.08,.025,.16,0,.095,.57,0,0,0,.006),de(n,t.darkSteel,.026,.23,0,.035,.42,Math.PI/2,0,12),de(n,t.steel,.009,.1,.09,.03,.18,Math.PI/2,0,8),ft(n,t.darkSteel,.035,.03,.09,.09,.03,.24,0,0,0,.006),ft(n,t.polymer,.055,.032,.18,0,.1,.25,0,0,0,.006),ft(n,t.polymer,.09,.24,.13,0,-.19,-.01,-.08,0,0,.012),ft(n,t.darkSteel,.1,.025,.14,0,-.31,.02,-.08,0,0,.006),Z_(n),ia(n,.074,.04,.1,.07,.03),ft(n,t.steel,.075,.012,.08,0,.13,.46,0,0,0,.003),ft(n,t.darkSteel,.06,.02,.07,.04,.11,.36,0,0,.25,.004),wn(n,.075,.015,.3),wn(n,-.075,.015,.3),wn(n,.075,0,.44),na(n,0,-.06,.1,.1,.002,.012),{group:n,muzzle:new b(0,.02,-1.3),sight:new b(0,.17,-.02),eject:new b(.12,.05,.12),rightHand:new b(-.04,-.17,.19),leftHand:new b(-.1,-.115,-.47),scopeZ:-.58}}function $h(n){const t=new Map,e=[...n.children],i=new Set;for(const s of e){if(!s.isMesh||!s.material||Array.isArray(s.material))continue;s.updateMatrix();let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();r.applyMatrix4(s.matrix);const a=s.material.uuid;t.has(a)||t.set(a,{material:s.material,geometries:[]}),t.get(a).geometries.push(r),i.add(s)}for(const s of i)n.remove(s);for(const{material:s,geometries:r}of t.values()){if(r.length===1){n.add(new X(r[0],s));continue}let a=null;try{a=W_(r,!1)}catch{a=null}if(!a){for(const o of r)n.add(new X(o,s));continue}for(const o of r)o.dispose();n.add(new X(a,s))}}function Go(n){const e=({rifle:Hc,pistol:J_,shotgun:j_,sniper:Q_}[n]||Hc)();return $h(e.group),e.group.userData.weaponId=n,e.group.userData.meta=e,e}class tv{constructor(t){this.root=document.createElement("div"),this.root.className="ads-overlay",this.root.dataset.mode="none",this.root.setAttribute("aria-hidden","true");const e=[];for(const i of[-14,-7,7,14])e.push(`<circle cx="0" cy="${i}" r="0.62" fill="rgba(238,248,242,.86)"/>`);for(const i of[-14,-7,7,14])e.push(`<circle cx="${i}" cy="0" r="0.62" fill="rgba(238,248,242,.86)"/>`);this.root.innerHTML=`
      <div class="ads-sight">
        <span class="ads-dot"></span>
        <span class="ads-ring"></span>
        <span class="ads-tick ads-tick-top"></span>
        <span class="ads-tick ads-tick-bottom"></span>
        <span class="ads-tick ads-tick-left"></span>
        <span class="ads-tick ads-tick-right"></span>
      </div>
      <div class="sniper-scope">
        <div class="scope-edge"></div>
        <div class="scope-lens"></div>
        <div class="scope-reticle">
          <svg viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <g stroke="rgba(236,250,244,.82)" stroke-width="0.32" fill="none">
              <line x1="-46" y1="0" x2="-4.2" y2="0"/>
              <line x1="4.2" y1="0" x2="46" y2="0"/>
              <line x1="0" y1="-46" x2="0" y2="-4.2"/>
              <line x1="0" y1="4.2" x2="0" y2="46"/>
              <circle cx="0" cy="0" r="1.35"/>
            </g>
            <g>${e.join("")}</g>
          </svg>
        </div>
        <div class="scope-glint"></div>
      </div>`,t.appendChild(this.root),this.mode="none",this.time=0}setMode(t){t!==this.mode&&(this.mode=t,this.root.dataset.mode=t,this.root.classList.toggle("active",t!=="none"))}hide(){this.setMode("none")}update(t,{mode:e="none",breath:i=!1,speed:s=0}={}){if(this.setMode(e),e==="none")return;this.time+=t;const r=this.time,a=Math.min(1,s/4.5),o=e==="sniper",c=(o?7.5:1.1)*(o&&i?.16:1)*(.65+a*.9),h=(Math.sin(r*.82)*.75+Math.sin(r*1.93+1.2)*.25)*c,u=(Math.cos(r*.61+.4)*.7+Math.sin(r*2.31)*.3)*c;this.root.style.setProperty("--sx",`${h.toFixed(2)}px`),this.root.style.setProperty("--sy",`${u.toFixed(2)}px`)}}const ev=new _n(.045,5,5),nv=new ce({color:16762950,transparent:!0,opacity:1,depthWrite:!1});let Ar=null,Rr=null;const iv=new Qe(1,1),Gc=(()=>{const n=new Be(.006,.006,1,6,1,!0);return n.rotateX(Math.PI/2),n})(),sv=new ce({color:16765562,transparent:!0,opacity:.7,blending:ri,depthWrite:!1,toneMapped:!1}),rv=new ce({color:16753212,transparent:!0,opacity:.16,blending:ri,depthWrite:!1,toneMapped:!1}),av=new Be(.007,.008,.033,8),Vc=new ue({color:12884548,metalness:.9,roughness:.28}),ov=new Zr(.034,9),lv=new ce({color:526344,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),cv=new ce({color:2696479,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),Is=[];function hv(){if(Ar)return Ar;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,2,64,64,64);e.addColorStop(0,"rgba(255,255,235,1)"),e.addColorStop(.18,"rgba(255,216,120,0.95)"),e.addColorStop(.45,"rgba(255,135,35,0.45)"),e.addColorStop(1,"rgba(255,80,10,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.translate(64,64);for(let i=0;i<8;i++){t.rotate(Math.PI/4);const s=t.createLinearGradient(0,0,58,0);s.addColorStop(0,"rgba(255,245,205,0.9)"),s.addColorStop(1,"rgba(255,120,30,0)"),t.fillStyle=s,t.beginPath(),t.moveTo(0,-7),t.lineTo(58,0),t.lineTo(0,7),t.closePath(),t.fill()}return Ar=new Wn(n),Ar}function Kh(){if(Rr)return Rr;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);return e.addColorStop(0,"rgba(210,205,195,0.66)"),e.addColorStop(.5,"rgba(150,146,138,0.25)"),e.addColorStop(1,"rgba(90,88,82,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Rr=new Wn(n),Rr}function uv(n,t,e=16762950){const i=nv.clone();i.color.setHex(e);const s=new X(ev,i);s.position.copy(t),n.add(s);const r=performance.now(),a=150;function o(){const l=(performance.now()-r)/a;if(l>=1){n.remove(s),i.dispose();return}s.scale.setScalar(1+l*2.2),i.opacity=1-l,requestAnimationFrame(o)}requestAnimationFrame(o)}function dv(n,t,e,i=1){const s=new Ut;s.position.copy(t);const r=e.clone().normalize();s.quaternion.setFromUnitVectors(new b(0,0,-1),r);const a=new ce({map:hv(),color:16765066,transparent:!0,opacity:.95,blending:ri,depthWrite:!1,side:De,toneMapped:!1});for(let u=0;u<3;u++){const p=new Ut;p.rotation.z=u/3*Math.PI;const m=new X(iv,a);m.rotation.x=Math.PI/2,m.scale.set(.26*i,.72*i,1),p.add(m),s.add(p)}const o=new Ue(16757854,2.2*i,3.2,2);s.add(o),n.add(s);const l=performance.now(),c=70;function h(){const u=(performance.now()-l)/c;if(u>=1){n.remove(s),a.dispose();return}const p=.8+u*.8;s.scale.setScalar(p),a.opacity=(1-u)*.95,o.intensity=(1-u)*2.2*i,requestAnimationFrame(h)}requestAnimationFrame(h)}function fv(n,t,e){const i=e.clone().normalize(),s=[];for(let l=0;l<3;l++){const c=new _s({map:Kh(),color:12170410,transparent:!0,opacity:.24,depthWrite:!1}),h=new Bs(c);h.position.copy(t).addScaledVector(i,.16+l*.12).add(new b((Math.random()-.5)*.06,(Math.random()-.5)*.06,(Math.random()-.5)*.06));const u=.16+Math.random()*.14;h.scale.setScalar(u),n.add(h),s.push({sprite:h,material:c,velocity:i.clone().multiplyScalar(.18+Math.random()*.16).add(new b((Math.random()-.5)*.1,.12+Math.random()*.1,0)),size:u})}const r=performance.now(),a=520;function o(){const c=(performance.now()-r)/a;if(c>=1){for(const h of s)n.remove(h.sprite),h.material.dispose();return}for(const h of s)h.sprite.position.addScaledVector(h.velocity,.016),h.velocity.y+=9e-4,h.sprite.scale.setScalar(h.size*(1+c*2.2)),h.material.opacity=(1-c)*.24;requestAnimationFrame(o)}requestAnimationFrame(o)}function pv(n,t,e,i=1){const s=new X(av,Vc);s.scale.setScalar(i),s.position.copy(t),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),n.add(s);const r=new b().crossVectors(e,new b(0,1,0));r.lengthSq()<.001&&r.set(1,0,0),r.normalize();const a=r.multiplyScalar(1.4+Math.random()*.6).add(new b(0,1.5+Math.random()*.5,0)).addScaledVector(e,.25),o=t.y-1.15,l=performance.now(),c=1700;function h(){const u=(performance.now()-l)/c;if(u>=1){n.remove(s);return}a.y-=9.8*.016,s.position.addScaledVector(a,.016),s.position.y<o&&(s.position.y=o,a.y=Math.abs(a.y)*.34,a.x*=.6,a.z*=.6),s.rotation.x+=a.z*.05,s.rotation.z+=a.x*.05,u>.8&&(s.material=Vc),requestAnimationFrame(h)}requestAnimationFrame(h)}function mv(n,t,e){const i=t.distanceTo(e);if(i<.02)return;const s=new X(Gc,sv);s.position.copy(t).add(e).multiplyScalar(.5),s.lookAt(e),s.scale.z=i;const r=new X(Gc,rv);r.position.copy(s.position),r.quaternion.copy(s.quaternion),r.scale.set(1.7,1.7,i),n.add(s,r),setTimeout(()=>{n.remove(s,r)},65)}function gv(n,t,e,i=!1){const s=new Ue(i?16757594:14202745,i?1.4:.7,2.6,2);s.position.copy(t).addScaledVector(e,.08),n.add(s);const r=performance.now();function a(){if((performance.now()-r)/90>=1){n.remove(s);return}s.intensity*=.82,requestAnimationFrame(a)}if(requestAnimationFrame(a),i){let d=function(){const f=(performance.now()-g)/320;if(f>=1){n.remove(_),p.dispose(),m.dispose();return}const x=p.attributes.position.array;for(let v=0;v<12;v++)u[v].y-=5.8*.016,x[v*3]+=u[v].x*.016,x[v*3+1]+=u[v].y*.016,x[v*3+2]+=u[v].z*.016;p.attributes.position.needsUpdate=!0,m.opacity=1-f,requestAnimationFrame(d)};var l=d;const h=new Float32Array(36),u=[];for(let f=0;f<12;f++)h[f*3]=t.x,h[f*3+1]=t.y,h[f*3+2]=t.z,u.push(new b((Math.random()-.5)*2.8,Math.random()*2.2,(Math.random()-.5)*2.8).addScaledVector(e,1.4).multiplyScalar(1.4));const p=new Ee;p.setAttribute("position",new je(h,3));const m=new Lo({color:16764794,size:.028,transparent:!0,opacity:1,blending:ri,depthWrite:!1,sizeAttenuation:!0}),_=new Ch(p,m);n.add(_);const g=performance.now();requestAnimationFrame(d)}else{let p=function(){const _=(performance.now()-u)/380;if(_>=1){n.remove(h),c.dispose();return}h.scale.setScalar(.16+_*.3),c.opacity=(1-_)*.3,requestAnimationFrame(p)};var l=p;const c=new _s({map:Kh(),color:10918790,transparent:!0,opacity:.3,depthWrite:!1}),h=new Bs(c);h.position.copy(t).addScaledVector(e,.03),h.scale.setScalar(.16),n.add(h);const u=performance.now();requestAnimationFrame(p)}const o=new X(ov,i?lv:cv);for(o.position.copy(t).addScaledVector(e,.012),o.lookAt(t.clone().add(e)),o.rotateZ(Math.random()*Math.PI*2),n.add(o),Is.push(o);Is.length>60;){const c=Is.shift();n.remove(c)}setTimeout(()=>{n.remove(o);const c=Is.indexOf(o);c>=0&&Is.splice(c,1)},9e3)}const _v=new b(0,1,0);class vv{constructor(t,e,i,s,r,a){this.camera=t,this.scene=e,this.domElement=i,this.targets=s,this.bots=r||[],this.world=a,this.weapons=Hn.map(l=>({...l,ammo:l.magSize,fireInterval:1/l.fireRate,model:null,basePosition:null,adsPosition:null,muzzleMarker:null,ejectMarker:null})),this.currentIndex=0,this.weapon=this.weapons[0],this.isReloading=!1,this.reloadTimer=0,this.reloadDuration=1,this.fireTimer=0,this.isFiring=!1,this.isHoldingBreath=!1,this.audio=null,this.onHit=null,this.onShot=null,this.baseFov=t.fov,this.adsTarget=!1,this.isZoomed=!1,this.adsProgress=0,this.currentFov=t.fov,this.switchTimer=0,this.switchDuration=.3,this.time=0,this.bobTime=0,this.lastCameraPosition=t.position.clone(),this.recoilOffset=new b,this.recoilRotation=new b,this.scopeSway=new it,this.raycaster=new Hh,this.raycaster.far=200,this.ammoElement=document.getElementById("ammo"),this.weaponNameElement=document.getElementById("weapon-name"),this.hitmarkerElement=document.getElementById("hitmarker"),this.crosshairElement=document.getElementById("crosshair"),this.zoomCrosshairElement=document.getElementById("zoom-crosshair"),this.zoomCrosshairElement&&(this.zoomCrosshairElement.style.display="none");const o=document.getElementById("hud")||document.body;this.scope=new tv(o),this.initWeaponModels(),this.initEvents(),this.updateHUD()}initWeaponModels(){for(const t of this.weapons){const e=Go(t.id),i=e.group;i.position.set(...t.position),i.visible=!1,this.camera.add(i);const s=K_(t.id,e);i.add(s),t.model=i,t.basePosition=i.position.clone(),t.sightOffset=e.sight.clone(),t.adsPosition=new b(-e.sight.x,-e.sight.y,e.scopeZ-e.sight.z),t.muzzleMarker=new xe,t.muzzleMarker.position.copy(e.muzzle),i.add(t.muzzleMarker),t.ejectMarker=new xe,t.ejectMarker.position.copy(e.eject),i.add(t.ejectMarker)}this.scene.add(this.camera),this.weapon.model.visible=!0,this.gunGroup=this.weapon.model,this.baseGunPosition=this.weapon.basePosition.clone()}initEvents(){window.addEventListener("mousedown",t=>{document.pointerLockElement===this.domElement&&(t.button===0?this.isFiring=!0:t.button===2&&this.setZoom(!0))}),window.addEventListener("mouseup",t=>{t.button===0?this.isFiring=!1:t.button===2&&this.setZoom(!1)}),document.addEventListener("contextmenu",t=>{document.pointerLockElement===this.domElement&&t.preventDefault()}),window.addEventListener("keydown",t=>{document.pointerLockElement===this.domElement&&(t.code==="KeyR"&&this.reload(),(t.code==="ShiftLeft"||t.code==="ShiftRight")&&(this.isHoldingBreath=!0),t.code==="Digit1"&&this.switchWeapon(0),t.code==="Digit2"&&this.switchWeapon(1),t.code==="Digit3"&&this.switchWeapon(2),t.code==="Digit4"&&this.switchWeapon(3))}),window.addEventListener("keyup",t=>{(t.code==="ShiftLeft"||t.code==="ShiftRight")&&(this.isHoldingBreath=!1)}),window.addEventListener("blur",()=>{this.isHoldingBreath=!1,this.setZoom(!1)})}setZoom(t){t&&(this.isReloading||this.switchTimer>.02)||(this.adsTarget=t,this.isZoomed=t,this.crosshairElement&&(this.crosshairElement.style.display=t?"none":""),t||(this.scope.hide(),this.gunGroup&&(this.gunGroup.visible=!0)))}getZoomSensitivityScale(){return 1+((this.weapon.zoomSensitivity??.5)-1)*this.adsProgress}switchWeapon(t){t<0||t>=this.weapons.length||t!==this.currentIndex&&this.equip(t)}equip(t,{animate:e=!0}={}){if(!(t<0||t>=this.weapons.length)){this.setZoom(!1),this.scope.hide();for(const i of this.weapons)i.model&&(i.model.visible=!1);this.currentIndex=t,this.weapon=this.weapons[t],this.weapon.model.visible=!0,this.gunGroup=this.weapon.model,this.baseGunPosition=this.weapon.basePosition.clone(),this.gunGroup.position.copy(this.baseGunPosition),this.gunGroup.rotation.set(0,0,0),this.recoilOffset.set(0,0,0),this.recoilRotation.set(0,0,0),this.adsProgress=0,this.adsTarget=!1,this.switchTimer=e?this.switchDuration:0,this.isReloading=!1,this.reloadTimer=0,this.isFiring=!1,this.fireTimer=this.weapon.fireInterval,this.updateHUD()}}reload(){this.isReloading||this.weapon.ammo>=this.weapon.magSize||(this.setZoom(!1),this.isReloading=!0,this.reloadDuration=this.weapon.reloadTime,this.reloadTimer=this.reloadDuration,this.isFiring=!1,this.ammoElement&&(this.ammoElement.textContent="RELOADING"),this.audio&&this.audio.reload())}refillAll(){for(const t of this.weapons)t.ammo=t.magSize;this.isReloading=!1,this.reloadTimer=0,this.isFiring=!1,this.fireTimer=this.weapon.fireInterval,this.updateHUD()}fire(){if(this.isReloading||this.switchTimer>.08)return;const t=this.weapon;if(t.ammo<=0){this.reload();return}t.ammo--,this.updateAmmoUI(),this.audio&&this.audio.gunShot(t.id),this.onShot&&this.onShot({weaponId:t.id});const e=t.recoilKick;this.recoilOffset.z+=e,this.recoilOffset.y+=e*.22,this.recoilRotation.x+=t.recoilRot,this.recoilRotation.z+=(Math.random()-.5)*t.recoilRot*.6;const i=new b;this.camera.getWorldDirection(i);const s=this.getMuzzleWorldPosition(),r=this.getEjectWorldPosition();dv(this.scene,s,i,t.flashScale),fv(this.scene,s,i),pv(this.scene,r,i,t.shellSize);let a=!1,o=!1;for(let l=0;l<t.pellets;l++){const c=this.firePellet(t,s);c.hit&&(a=!0),c.headshot&&(o=!0)}a&&(this.showHitmarker(o),this.audio&&this.audio.hit(o),this.onHit&&this.onHit({headshot:o,weaponId:t.id}))}getMuzzleWorldPosition(){return this.camera.updateMatrixWorld(),this.weapon.muzzleMarker.getWorldPosition(new b)}getEjectWorldPosition(){return this.camera.updateMatrixWorld(),this.weapon.ejectMarker.getWorldPosition(new b)}firePellet(t,e){const i=new b;this.camera.getWorldPosition(i);const s=new b;this.camera.getWorldDirection(s);const r=t.spread*(1-this.adsProgress*.84);r>0&&this.applySpread(s,r),this.raycaster.set(i,s),this.raycaster.far=200;let a=null;const o=this.world&&this.world.getHitMeshes?this.world.getHitMeshes():[],l=this.raycaster.intersectObjects(o,!1)[0]||null;l&&(a={kind:"world",distance:l.distance,point:l.point,object:l.object,face:l.face});const c=this.targets&&this.targets.checkHit?this.targets.checkHit(this.raycaster):null;if(c){const u=c.point.distanceTo(i);(!a||u<a.distance)&&(a={kind:"actor",distance:u,point:c.point,hit:c})}for(const u of this.bots){const p=u.checkHit(this.raycaster);if(!p)continue;const m=p.point.distanceTo(i);(!a||m<a.distance)&&(a={kind:"actor",distance:m,point:p.point,hit:p})}const h=a?a.point:this.raycaster.ray.at(120,new b);if(mv(this.scene,e,h),a&&a.kind==="world"){const u=a.face?a.face.normal.clone().transformDirection(a.object.matrixWorld):s.clone().negate(),p=Array.isArray(a.object.material)?a.object.material[0]:a.object.material;return gv(this.scene,a.point,u,!!p&&p.metalness>.45),{hit:!1,headshot:!1}}if(a&&a.kind==="actor"){const u=a.hit.isHeadshot?t.damageHead:t.damageBody;return a.hit.target.lastHit={weaponId:t.id,headshot:!!a.hit.isHeadshot},a.hit.target.applyDamage(a.hit.isHeadshot,u),uv(this.scene,a.point,16738890),{hit:!0,headshot:!!a.hit.isHeadshot}}return{hit:!1,headshot:!1}}applySpread(t,e){const i=new b().crossVectors(t,_v);i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize();const s=new b().crossVectors(i,t).normalize(),r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*e;t.addScaledVector(i,Math.tan(Math.cos(r)*a)).addScaledVector(s,Math.tan(Math.sin(r)*a)).normalize()}showHitmarker(t=!1){this.hitmarkerElement&&(this.hitmarkerElement.classList.toggle("headshot",t),this.hitmarkerElement.style.opacity="1",setTimeout(()=>{this.hitmarkerElement.style.opacity="0"},t?160:100))}updateAmmoUI(){this.ammoElement&&(this.ammoElement.textContent=this.isReloading?"RELOADING":`${this.weapon.ammo} / ${this.weapon.magSize}`)}updateHUD(){this.weaponNameElement&&(this.weaponNameElement.textContent=this.weapon.name),this.updateAmmoUI()}update(t){document.pointerLockElement!==this.domElement&&(this.isFiring=!1,this.adsTarget&&this.setZoom(!1)),this.time+=t;const e=this.camera.position.distanceTo(this.lastCameraPosition),i=Math.min(9,e/Math.max(t,.001));this.lastCameraPosition.copy(this.camera.position),this.bobTime+=t*(1+Math.min(1.4,i*.2));const s=this.adsTarget?1:0,r=this.weapon.id==="sniper"?7.5:14;this.adsProgress+=(s-this.adsProgress)*Math.min(1,t*r),Math.abs(s-this.adsProgress)<.001&&(this.adsProgress=s);const a=this.baseFov/(1+(this.weapon.zoomFactor-1)*this.adsProgress);Math.abs(a-this.camera.fov)>.005&&(this.camera.fov=a,this.camera.updateProjectionMatrix()),this.isReloading?(this.reloadTimer-=t,this.reloadTimer<=0&&(this.weapon.ammo=this.weapon.magSize,this.isReloading=!1,this.updateHUD())):this.isFiring&&this.switchTimer<=.08?(this.fireTimer+=t,this.fireTimer>=this.weapon.fireInterval&&(this.fireTimer=0,this.fire())):this.fireTimer=this.weapon.fireInterval,this.switchTimer=Math.max(0,this.switchTimer-t);const o=Math.max(0,1-t*11);this.recoilOffset.multiplyScalar(o),this.recoilRotation.multiplyScalar(o);const l=this.adsProgress*this.adsProgress*(3-2*this.adsProgress),c=1-l*.78,h=this.weapon.id==="sniper"&&this.isHoldingBreath?.2:1,u=Math.min(1,i/4.8),p=Math.sin(this.bobTime*8.4)*.0085*u*c,m=Math.abs(Math.cos(this.bobTime*8.4))*.0065*u*c,_=Math.sin(this.time*1.25)*.0035*c*h,g=Math.cos(this.time*.92)*.003*c*h,d=this.weapon.basePosition.clone().lerp(this.weapon.adsPosition,l);d.x+=p+_,d.y+=m+g;let f=0,x=0,v=0;if(this.switchTimer>0){const C=1-this.switchTimer/this.switchDuration,A=1-C*C*(3-2*C);d.y-=A*.24,v-=A*.45,f+=A*.25}if(this.isReloading){const C=1-Math.max(0,this.reloadTimer)/this.reloadDuration,A=Math.sin(Math.min(1,C)*Math.PI);d.y-=A*.13,d.z+=A*.05,v+=A*.42,f-=A*.2}d.add(this.recoilOffset),f+=this.recoilRotation.x+Math.sin(this.time*.74)*.0015*c,v+=this.recoilRotation.z+Math.sin(this.time*.53)*.0015*c,x+=Math.sin(this.bobTime*4.2)*.004*u,this.gunGroup.position.copy(d),this.gunGroup.rotation.set(f,x,v);const y=this.isZoomed&&this.adsProgress>.52?this.weapon.id==="sniper"?"sniper":this.weapon.id==="rifle"?"reddot":"iron":"none";this.gunGroup.visible=y!=="sniper",this.scope.update(t,{mode:y,breath:this.isHoldingBreath,speed:i})}}const xv=[{type:"health",position:[-30,-2.6,-4]},{type:"ammo",position:[-14,-2.6,4]},{type:"health",position:[-66,-4.8,24]},{type:"ammo",position:[-38,-4.8,-20]},{type:"ammo",position:[-52,-5.6,-30]},{type:"health",position:[-62,-4.8,39]},{type:"ammo",position:[28,.07,-6]},{type:"health",position:[52,.12,2]},{type:"ammo",position:[52,.14,20]},{type:"health",position:[55,.1,-36]},{type:"ammo",position:[65,.12,38]},{type:"health",position:[28,5.2,-23]},{type:"ammo",position:[68,6.5,-14]}],Mv=20,yv=1.4;class Sv{constructor(t,e,i,s){this.scene=t,this.player=e,this.gun=i,this.audio=s,this.items=[],this.time=0,this.init()}init(){for(const t of xv){const e=new Ut;e.position.set(t.position[0],t.position[1]+.45,t.position[2]),t.type==="health"?this.buildHealthPack(e):this.buildAmmoBox(e),this.scene.add(e),this.items.push({type:t.type,group:e,baseY:t.position[1]+.45,active:!0,respawnTimer:0})}}buildHealthPack(t){const e=new ue({color:16053492,roughness:.6}),i=new ue({color:14492194,roughness:.5}),s=new X(new _t(.7,.4,.5),e);s.castShadow=!0,t.add(s);const r=new X(new _t(.42,.13,.53),i);t.add(r);const a=new X(new _t(.13,.42,.53),i);t.add(a)}buildAmmoBox(t){const e=new ue({color:4016676,roughness:.7}),i=new ue({color:14201130,roughness:.5}),s=new X(new _t(.8,.4,.5),e);s.castShadow=!0,t.add(s);const r=new X(new _t(.83,.1,.53),i);r.position.y=.05,t.add(r);const a=new X(new _t(.82,.06,.52),e);a.position.y=.22,t.add(a)}update(t){this.time+=t;for(const e of this.items){if(!e.active){e.respawnTimer-=t,e.respawnTimer<=0&&(e.active=!0,e.group.visible=!0);continue}if(e.group.rotation.y+=t*1.2,e.group.position.y=e.baseY+Math.sin(this.time*2+e.baseY)*.08,!this.player.hasStarted||this.player.isDead)continue;const i=this.player.camera.position.x-e.group.position.x,s=this.player.camera.position.z-e.group.position.z,r=this.player.camera.position.y-e.baseY;if(!(Math.hypot(i,s)>yv||r<0||r>2.2)){if(e.type==="health"){if(this.player.health>=this.player.maxHealth)continue;this.player.heal(50)}else{if(!this.gun.weapons.some(o=>o.ammo<o.magSize))continue;this.gun.refillAll()}this.audio.pickup(),e.active=!1,e.group.visible=!1,e.respawnTimer=Mv}}}}class Ev{constructor(){this.ctx=null,this.master=null,this.noiseBuffer=null,this.muted=!1,this.volume=.32}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.master.connect(this.ctx.destination),this.noiseBuffer=this.createNoiseBuffer(1)}this.ctx.state==="suspended"&&this.ctx.resume()}createNoiseBuffer(t){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return i}setVolume(t){this.volume=Math.max(0,Math.min(1,Number(t)||0)),this.master&&(this.master.gain.value=this.muted?0:this.volume)}toggleMute(){return this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:this.volume),this.muted}tone({frequency:t,endFrequency:e=null,duration:i=.15,type:s="square",gain:r=.2,when:a=0}){if(!this.ctx||this.muted)return;const o=this.ctx.currentTime+a,l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type=s,l.frequency.setValueAtTime(t,o),e!==null&&l.frequency.exponentialRampToValueAtTime(Math.max(1,e),o+i),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(1e-4,o+i),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+i+.02)}noiseBurst({duration:t=.12,filterFreq:e=1200,filterType:i="lowpass",gain:s=.3,when:r=0}){if(!this.ctx||this.muted)return;const a=this.ctx.currentTime+r,o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(e,a),l.frequency.exponentialRampToValueAtTime(Math.max(100,e*.35),a+t);const c=this.ctx.createGain();c.gain.setValueAtTime(s,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(c),c.connect(this.master),o.start(a),o.stop(a+t+.02)}gunShot(t){!this.ctx||this.muted||(t==="pistol"?(this.noiseBurst({duration:.09,filterFreq:1800,gain:.22}),this.tone({frequency:220,endFrequency:90,duration:.12,type:"triangle",gain:.16})):t==="shotgun"?(this.noiseBurst({duration:.28,filterFreq:900,gain:.45}),this.tone({frequency:120,endFrequency:45,duration:.3,type:"sawtooth",gain:.2})):t==="sniper"?(this.noiseBurst({duration:.34,filterFreq:1250,gain:.5}),this.tone({frequency:150,endFrequency:42,duration:.36,type:"sawtooth",gain:.24}),this.tone({frequency:860,endFrequency:180,duration:.2,type:"square",gain:.08,when:.03})):(this.noiseBurst({duration:.07,filterFreq:2400,gain:.28}),this.tone({frequency:320,endFrequency:140,duration:.08,type:"square",gain:.12})))}reload(){!this.ctx||this.muted||(this.tone({frequency:900,duration:.04,type:"square",gain:.06}),this.noiseBurst({duration:.04,filterFreq:3e3,gain:.08,when:.05}),this.tone({frequency:600,duration:.05,type:"square",gain:.06,when:.16}),this.noiseBurst({duration:.05,filterFreq:2600,gain:.09,when:.35}),this.tone({frequency:1e3,duration:.04,type:"triangle",gain:.05,when:.36}))}hit(t=!1){!this.ctx||this.muted||(t?(this.tone({frequency:1300,duration:.06,type:"sine",gain:.12}),this.tone({frequency:1900,duration:.09,type:"sine",gain:.1,when:.035})):this.tone({frequency:950,duration:.05,type:"sine",gain:.1}))}enemyDeath(){!this.ctx||this.muted||(this.tone({frequency:260,endFrequency:70,duration:.35,type:"sawtooth",gain:.12}),this.noiseBurst({duration:.18,filterFreq:700,gain:.1}))}playerDeath(){!this.ctx||this.muted||(this.tone({frequency:180,endFrequency:35,duration:.9,type:"sawtooth",gain:.18}),this.noiseBurst({duration:.5,filterFreq:500,gain:.15}))}hurt(){!this.ctx||this.muted||this.tone({frequency:150,endFrequency:80,duration:.12,type:"triangle",gain:.1})}pickup(){!this.ctx||this.muted||(this.tone({frequency:520,duration:.08,type:"sine",gain:.12}),this.tone({frequency:780,duration:.12,type:"sine",gain:.12,when:.07}))}}const Jh="killhit_profile_v1",Pr=1e3,Fn=[{id:"kills",title:"ELIMINATE 20 HOSTILES",short:"20 KILLS",target:20,reward:250},{id:"headshots",title:"LAND 5 HEADSHOT KILLS",short:"5 HEADSHOTS",target:5,reward:200},{id:"score",title:"SCORE 2,500 POINTS",short:"2,500 SCORE",target:2500,reward:300}];function jh(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function bv(){return{sensitivity:4,volume:32,quality:"high"}}function wv(){return{name:"NIGHTRUNNER",xp:0,level:1,loadout:"rifle",settings:bv(),career:{kills:0,headshots:0},daily:{date:jh(),tasks:Fn.map(n=>({id:n.id,progress:0,awarded:!1}))}}}function Tv(){var e,i;const n=wv();let t=null;try{t=JSON.parse(localStorage.getItem(Jh)||"null")}catch{t=null}return!t||typeof t!="object"?n:{...n,...t,name:typeof t.name=="string"&&t.name.trim()?t.name.trim().slice(0,14):n.name,xp:Number.isFinite(t.xp)?Math.max(0,t.xp):0,settings:{...n.settings,...t.settings||{}},career:{kills:Number.isFinite((e=t.career)==null?void 0:e.kills)?t.career.kills:0,headshots:Number.isFinite((i=t.career)==null?void 0:i.headshots)?t.career.headshots:0},daily:t.daily&&Array.isArray(t.daily.tasks)?t.daily:n.daily}}function So(n){return Hn.find(t=>t.id===n)||Hn[0]}function Wc(n){return(So(n).name||"RIFLE").toUpperCase()}class Av{constructor(t={}){this.hooks=t,this.profile=Tv(),this.currentScreen="home",this.settingsReturn="home",this.matchRunning=!1,this.session=null,this.game=null,this.gameReady=!1,this.pendingTimers=[],this.countdownTimer=null,this.feedTimers=[],this.previews=[],this.homePreview=null,this.previewLast=performance.now(),this.toastTimer=null,this.lastMinimapTime=0,this.hudTaskSignature="",this.minimapContext=null,this.cacheDom(),this.ensureDaily(),this.saveProfile(),this.bindEvents(),this.fillSettingsControls(),this.refreshHome(),this.setGameReady(!1),this.initHomePreview(),this.startPreviewLoop()}cacheDom(){this.screens={home:document.getElementById("home-screen"),loadout:document.getElementById("loadout-screen"),matchmaking:document.getElementById("matchmaking-screen"),results:document.getElementById("results-screen"),pause:document.getElementById("pause-menu")},this.hud=document.getElementById("hud"),this.settingsScreen=document.getElementById("settings-screen"),this.toastElement=document.getElementById("toast"),this.killFeedElement=document.getElementById("kill-feed"),this.tasksElement=document.getElementById("daily-tasks"),this.hudTasksElement=document.getElementById("tasks-hud"),this.loadoutCardsElement=document.getElementById("loadout-cards"),this.respawnOverlay=document.getElementById("respawn-overlay"),this.respawnCountElement=document.getElementById("respawn-count"),this.hudTimerElement=document.getElementById("hud-timer"),this.hudDeathsElement=document.getElementById("hud-deaths"),this.nameInput=document.getElementById("player-name"),this.playButton=document.getElementById("play-btn"),this.gameReadyLabel=document.getElementById("game-ready-label"),this.homeCanvas=document.getElementById("home-preview"),this.minimap=document.getElementById("minimap"),this.minimapContext=this.minimap?this.minimap.getContext("2d"):null}saveProfile(){try{this.profile.level=this.level,localStorage.setItem(Jh,JSON.stringify(this.profile))}catch{}}get level(){return Math.floor(this.profile.xp/Pr)+1}get levelXp(){return this.profile.xp%Pr}ensureDaily(){const t=jh();if(!this.profile.daily||this.profile.daily.date!==t||!Array.isArray(this.profile.daily.tasks)){this.profile.daily={date:t,tasks:Fn.map(i=>({id:i.id,progress:0,awarded:!1}))},this.saveProfile();return}const e=new Set(Fn.map(i=>i.id));this.profile.daily.tasks=this.profile.daily.tasks.filter(i=>e.has(i.id));for(const i of Fn)this.profile.daily.tasks.some(s=>s.id===i.id)||this.profile.daily.tasks.push({id:i.id,progress:0,awarded:!1})}taskState(t){return this.profile.daily.tasks.find(e=>e.id===t)||null}grantXp(t){const e=this.level;this.profile.xp+=Math.max(0,Math.round(t));const i=this.level;return i>e&&this.showToast(`LEVEL UP  ·  LV ${i}`,!0),this.refreshHome(),this.saveProfile(),i>e}updateTaskProgress(t,e=1){const i=this.taskState(t),s=Fn.find(r=>r.id===t);!i||!s||i.awarded||(i.progress=Math.min(s.target,i.progress+e),i.progress>=s.target&&(i.awarded=!0,this.session&&this.session.active&&(this.session.completed.push({id:s.id,title:s.title,reward:s.reward}),this.session.xpEarned+=s.reward),this.grantXp(s.reward),this.showToast(`QUEST COMPLETE  +${s.reward} XP`,!0)),this.refreshDailyTasks(),this.renderHudTasks(!0),this.saveProfile())}setGameReady(t){this.gameReady=!!t,this.playButton&&(this.playButton.disabled=!t),this.gameReadyLabel&&(this.gameReadyLabel.textContent=t?"READY":"BOOTING")}attachGame(t){this.game=t,this.applySettings(),this.updateHUD()}applySettings(){this.hooks.onSettingsChange&&this.hooks.onSettingsChange(this.profile.settings)}refreshHome(){this.ensureDaily(),this.refreshDailyTasks();const t=document.getElementById("daily-reset");if(t){const c=24-new Date().getHours();t.textContent=`${Math.max(1,c)}H REMAINING`}this.nameInput&&document.activeElement!==this.nameInput&&(this.nameInput.value=this.profile.name);const e=this.level,i=document.getElementById("profile-level"),s=document.getElementById("profile-xp-fill"),r=document.getElementById("profile-xp-text");i&&(i.textContent=`LV ${e}`),s&&(s.style.width=`${this.levelXp/Pr*100}%`),r&&(r.textContent=`${Math.round(this.levelXp)} / ${Pr} XP`);const a=document.getElementById("career-kills"),o=document.getElementById("career-headshots");a&&(a.textContent=String(this.profile.career.kills||0)),o&&(o.textContent=String(this.profile.career.headshots||0))}initHomePreview(){if(this.homeCanvas)try{const t=new Br({canvas:this.homeCanvas,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.setClearColor(0,0),t.outputColorSpace=fe;const e=new po,i=new $e(30,1,.1,30);i.position.set(.62,1.32,4.05),i.lookAt(0,1.02,0),e.add(new xo(16770508,1774096,1.9));const s=new Hr(16773080,3.2);s.position.set(2.6,4,3.2),e.add(s);const r=new Ue(16747325,14,8,2);r.position.set(-2.1,2,-1.4),e.add(r);const a=new Ue(16760957,7,7,2);a.position.set(2.4,1,1.8),e.add(a);const o=new X(new Be(1.32,1.42,.12,48),new ue({color:1906451,roughness:.82,metalness:.18}));o.position.y=-.06,e.add(o);const l=new X(new No(1.28,1.37,64),new ce({color:16751170,transparent:!0,opacity:.78,side:De}));l.rotation.x=-Math.PI/2,l.position.y=.005,e.add(l);const c=new Xh(e,this.profile.name,2,{aura:!1});c.tag.visible=!1,c.gun.visible=!1;const h=new Ut;h.position.set(0,-.34,-.05),c.parts.elbowR.add(h),this.homePreview={renderer:t,scene:e,camera:i,character:c,holder:h,weapon:null,width:0,height:0},this.updateHomeWeapon(),this.resizeHomePreview(!0),this.renderHomePreview(.016,performance.now())}catch{this.homePreview=null}}resizeHomePreview(t=!1){const e=this.homePreview;if(!e)return;const i=this.homeCanvas,s=Math.max(1,i.clientWidth||480),r=Math.max(1,i.clientHeight||520);!t&&s===e.width&&r===e.height||(e.width=s,e.height=r,e.renderer.setSize(s,r,!1),e.camera.aspect=s/r,e.camera.updateProjectionMatrix())}updateHomeWeapon(){const t=this.homePreview;if(!t)return;t.weapon&&(t.holder.remove(t.weapon),Cv(t.weapon));const e=this.profile.loadout,i=Pv(e),s=e==="pistol"?.62:e==="shotgun"||e==="sniper"?.38:.4;i.scale.setScalar(s),i.rotation.set(Math.PI/2,-Math.PI/2,0),i.position.set(0,.01,.02),t.holder.add(i),t.weapon=i}renderHomePreview(t,e){const i=this.homePreview;if(!i)return;this.resizeHomePreview();const s=i.character;s.update(t,{speed:0,aiming:!0,hit:0}),s.root.rotation.y=-.12+Math.sin(e*35e-5)*.5,s.root.position.y=Math.sin(e*.0015)*.008,i.renderer.render(i.scene,i.camera)}refreshDailyTasks(){if(this.tasksElement){this.tasksElement.textContent="";for(const t of Fn){const e=this.taskState(t.id)||{progress:0,awarded:!1},i=Math.min(t.target,e.progress||0),s=Math.min(100,Math.round(i/t.target*100)),r=document.createElement("div");r.className=`quest-row${e.awarded?" complete":""}`,r.innerHTML=`
        <div class="quest-toprow">
          <span class="quest-title">${t.title}</span>
          <span class="quest-prog">${i}/${t.target}</span>
        </div>
        <div class="quest-line"><i style="width:${s}%"></i></div>
        <div class="quest-xp">+${t.reward} XP</div>
      `,this.tasksElement.appendChild(r)}}}showLoadout(){this.gameReady&&(this.currentScreen="loadout",this.showScreen("loadout"),this.initLoadout())}initLoadout(){if(!this.loadoutCardsElement||this.loadoutCardsElement.children.length){this.markSelectedLoadout();return}for(let t=0;t<Hn.length;t++){const e=Hn[t],i=e.pellets>1?`${e.damageBody} × ${e.pellets}`:String(e.damageBody),s=document.createElement("button");s.className="loadout-card",s.dataset.weapon=e.id,s.innerHTML=`
        <div class="card-top">
          <span class="card-index">0${t+1}</span>
          <span class="card-type">${e.type}</span>
        </div>
        <canvas class="weapon-preview" width="520" height="280"></canvas>
        <div class="card-name">${e.name}</div>
        <div class="weapon-stats">
          <div class="stat-row"><span>DAMAGE</span><div class="stat-bar"><i style="width:${Math.min(100,e.damageBody*e.pellets/60*100)}%"></i></div><b>${i}</b></div>
          <div class="stat-row"><span>FIRE RATE</span><div class="stat-bar"><i style="width:${Math.min(100,e.fireRate/10*100)}%"></i></div><b>${e.fireRate}/s</b></div>
          <div class="stat-row"><span>MAGAZINE</span><div class="stat-bar"><i style="width:${Math.min(100,e.magSize/30*100)}%"></i></div><b>${e.magSize}</b></div>
        </div>
        <div class="selected-tag">SELECTED</div>`,s.addEventListener("click",()=>this.selectLoadout(e.id)),this.loadoutCardsElement.appendChild(s),this.createPreview(s.querySelector("canvas"),e.id)}this.markSelectedLoadout()}selectLoadout(t){this.profile.loadout=So(t).id,this.saveProfile(),this.markSelectedLoadout(),this.updateHomeWeapon(),this.showToast(`${Wc(t)} EQUIPPED`,!1)}markSelectedLoadout(){if(this.loadoutCardsElement)for(const t of this.loadoutCardsElement.children)t.classList.toggle("selected",t.dataset.weapon===this.profile.loadout)}getStartingWeaponId(){return So(this.profile.loadout).id}createPreview(t,e){const i=new Br({canvas:t,antialias:!0,alpha:!0});i.setPixelRatio(1),i.setSize(t.width,t.height,!1),i.outputColorSpace=fe;const s=new po,r=new $e(28,t.width/t.height,.05,20);r.position.set(0,.15,1.7),r.lookAt(0,0,0),s.add(new xo(10271172,527632,1.6));const a=new Hr(16777215,2.8);a.position.set(1.6,2.2,2.2),s.add(a);const o=new Ue(16751170,3.2,6);o.position.set(-1.5,.5,1.1),s.add(o);const l=Rv(e);l.updateMatrixWorld(!0);const c=new Oe().setFromObject(l),h=c.getCenter(new b),u=c.getSize(new b);l.position.sub(h);const p=new Ut;p.add(l);const m=1.02/Math.max(u.x,u.y,u.z,.001);p.scale.setScalar(m),p.rotation.set(.08,.72,0),s.add(p),this.previews.push({renderer:i,scene:s,camera:r,pivot:p,id:e,phase:Math.random()*Math.PI*2})}startPreviewLoop(){const t=e=>{const i=Math.min((e-this.previewLast)/1e3,.05);if(this.previewLast=e,this.currentScreen==="loadout"&&this.previews.length)for(const r of this.previews)r.pivot.rotation.y+=i*.62,r.pivot.position.y=Math.sin(e*.0016+r.phase)*.025,r.renderer.render(r.scene,r.camera);(this.currentScreen==="home"||this.currentScreen==="settings"&&this.settingsReturn==="home")&&this.homePreview&&this.renderHomePreview(i,e),requestAnimationFrame(t)};requestAnimationFrame(t)}fillSettingsControls(){const t=document.getElementById("setting-sensitivity"),e=document.getElementById("setting-volume"),i=document.getElementById("setting-sensitivity-value"),s=document.getElementById("setting-volume-value");t&&(t.value=String(this.profile.settings.sensitivity)),e&&(e.value=String(this.profile.settings.volume)),i&&(i.textContent=String(this.profile.settings.sensitivity)),s&&(s.textContent=`${this.profile.settings.volume}%`),this.markSelectedQuality()}showSettings(){this.settingsReturn=this.currentScreen||"home",this.currentScreen="settings",this.fillSettingsControls(),this.settingsScreen&&this.settingsScreen.classList.add("active")}closeSettings(){this.settingsScreen&&this.settingsScreen.classList.remove("active"),this.currentScreen=this.settingsReturn||"home",this.applySettings(),this.saveProfile(),this.refreshHome()}markSelectedQuality(){const t=document.getElementById("quality-row");if(t)for(const e of t.querySelectorAll(".quality-btn"))e.classList.toggle("selected",e.dataset.quality===this.profile.settings.quality)}showScreen(t){const e=t===null?null:t==="pause"?"pause":t;for(const[i,s]of Object.entries(this.screens))s&&s.classList.toggle("active",e===i);t!==null&&(this.currentScreen=t),t===null&&(this.currentScreen=null),document.body.classList.toggle("interface-open",t!==null),t==="home"&&(this.exitFullscreen(),this.refreshHome()),(t==="home"||t===null&&!this.matchRunning)&&this.setHUDVisible(!1)}requestFullscreen(){const t=document.documentElement,e=t.requestFullscreen||t.webkitRequestFullscreen;if(e)try{const i=e.call(t);i&&typeof i.catch=="function"&&i.catch(()=>{})}catch{}}exitFullscreen(){if(!document.fullscreenElement&&!document.webkitFullscreenElement)return;const t=document.exitFullscreen||document.webkitExitFullscreen;if(t)try{const e=t.call(document);e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}setHUDVisible(t){this.hud&&this.hud.classList.toggle("active",!!t)}setMatchRunning(t){this.matchRunning=!!t,t||this.setHUDVisible(!1)}shouldRenderWorld(){return this.matchRunning||this.currentScreen==="pause"}beginMatchmaking(){this.gameReady&&(this.clearTimers(),this.clearKillFeed(),this.matchRunning=!1,this.setHUDVisible(!1),this.showScreen("matchmaking"),this.pendingTimers.push(setTimeout(()=>this.startMatch(),2e3)))}startMatch(){this.clearTimers(),this.startSession(),this.showScreen(null),this.setHUDVisible(!0),this.currentScreen=null,this.hooks.onStartMatch&&this.hooks.onStartMatch(this.getStartingWeaponId())}startSession(){this.ensureDaily(),this.session={active:!0,kills:0,deaths:0,headshots:0,score:0,xpEarned:0,completed:[],startLevel:this.level},this.hudTaskSignature="",this.matchRunning=!0,this._lastMatchTime=-1,this.clearKillFeed(),this.hideRespawnOverlay(),this.hudDeathsElement&&(this.hudDeathsElement.textContent="0"),this.renderHudTasks(!0),this.refreshHome()}onPlayerDeath(){!this.session||!this.session.active||(this.session.deaths+=1,this.hudDeathsElement&&(this.hudDeathsElement.textContent=String(this.session.deaths)),this.respawnOverlay&&this.respawnOverlay.classList.add("active"))}updateRespawnCountdown(t){this.respawnCountElement&&(this.respawnCountElement.textContent=String(Math.max(0,Math.ceil(t))))}hideRespawnOverlay(){this.respawnOverlay&&this.respawnOverlay.classList.remove("active")}updateMatchTime(t){if(!this.hudTimerElement)return;const e=Math.max(0,Math.ceil(t));if(e===this._lastMatchTime)return;this._lastMatchTime=e;const i=Math.floor(e/60),s=e%60;this.hudTimerElement.textContent=`${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`,this.hudTimerElement.classList.toggle("urgent",e<=60)}finishMatch(){if(!this.session||!this.session.active)return;this.session.active=!1,this.matchRunning=!1,this.hideRespawnOverlay(),this.setHUDVisible(!1);const t=50+this.session.kills*25+this.session.headshots*15;this.session.xpEarned+=t,this.profile.xp+=t,this.saveProfile(),this.renderResults(),this.showScreen("results"),this.refreshHome()}showHome(){this.clearTimers(),this.matchRunning=!1,this.session&&(this.session.active=!1),this.clearKillFeed(),this.showScreen("home"),this.currentScreen="home",this.setHUDVisible(!1),this.refreshHome()}showPause(){this.matchRunning&&(this.showScreen("pause"),this.currentScreen="pause")}hidePause(){this.currentScreen==="pause"&&(this.showScreen(null),this.currentScreen=null)}clearTimers(){for(const t of this.pendingTimers)clearTimeout(t);this.pendingTimers=[],this.countdownTimer&&clearInterval(this.countdownTimer),this.countdownTimer=null}onKill(t={}){if(!this.session||!this.session.active)return;const e=!!t.headshot;this.session.kills+=1,e&&(this.session.headshots+=1);const i=e?150:100;this.session.score+=i,this.profile.career.kills=(this.profile.career.kills||0)+1,e&&(this.profile.career.headshots=(this.profile.career.headshots||0)+1);const s=t.bot&&t.bot.name?t.bot.name:"HOSTILE";this.addKillFeed(this.profile.name,s,{headshot:e,weaponId:t.weaponId||"rifle"}),this.updateTaskProgress("kills",1),this.updateTaskProgress("score",i),e&&this.updateTaskProgress("headshots",1),this.saveProfile(),this.updateHUD()}addKillFeed(t,e,{headshot:i=!1,weaponId:s="rifle"}={}){if(!this.killFeedElement)return;const r=document.createElement("div");r.className=`feed-item${i?" headshot":""}`;const a=document.createElement("b");a.textContent=t;const o=document.createElement("span");o.className="feed-weapon",o.textContent=Wc(s);const l=document.createElement("b");l.className="feed-victim",l.textContent=e;const c=document.createElement("span");for(c.className="feed-tag",c.textContent=i?"HEADSHOT":"ELIMINATED",r.append(a,o,l,c),this.killFeedElement.prepend(r);this.killFeedElement.children.length>6;)this.killFeedElement.lastElementChild.remove();const h=setTimeout(()=>{r.classList.add("out"),setTimeout(()=>r.remove(),350)},i?4400:3800);this.feedTimers.push(h)}clearKillFeed(){for(const t of this.feedTimers)clearTimeout(t);this.feedTimers=[],this.killFeedElement&&(this.killFeedElement.textContent="")}renderHudTasks(t=!1){if(!this.hudTasksElement)return;const e=Fn.map(i=>{const s=this.taskState(i.id);return`${i.id}:${s?s.progress:0}:${s?s.awarded:!1}`}).join("|");if(!(!t&&e===this.hudTaskSignature)){this.hudTaskSignature=e,this.hudTasksElement.textContent="";for(const i of Fn){const s=this.taskState(i.id)||{progress:0,awarded:!1},r=Math.min(i.target,s.progress||0),a=document.createElement("div");a.className=`hud-task${s.awarded?" complete":""}`,a.innerHTML=`
        <span>${i.short}</span>
        <div class="hud-task-bar"><i style="width:${r/i.target*100}%"></i></div>
        <b>${r}/${i.target}</b>`,this.hudTasksElement.appendChild(a)}}}updateHUD(){if(!this.game)return;const{player:t,enemies:e,gun:i}=this.game;if(!t||!i)return;const s=Math.max(0,Math.ceil(t.health)),r=document.getElementById("health-text"),a=document.getElementById("health-bar-fill");if(r&&(r.textContent=`${s} / ${t.maxHealth}`),a){const g=s/t.maxHealth;a.style.width=`${g*100}%`,a.style.backgroundColor=g>.6?"#dce6ef":g>.3?"#b9c8d6":"#ff4d5e"}const o=document.getElementById("weapon-name"),l=document.getElementById("ammo");o&&(o.textContent=i.weapon.name),l&&(l.textContent=i.isReloading?"RELOADING":`${i.weapon.ammo} / ${i.weapon.magSize}`);const c=e&&Array.isArray(e.bots)?e.bots.filter(g=>g&&g.isAlive).length:0,h=document.getElementById("hud-enemies"),u=document.getElementById("hud-kills"),p=document.getElementById("hud-score"),m=document.getElementById("hud-objective-text");h&&(h.textContent=String(c)),u&&(u.textContent=String(this.session?this.session.kills:0)),p&&(p.textContent=String(this.session?this.session.score:0)),m&&(m.textContent=c>0?"HUNT THE HOSTILES":"SECTOR CLEAR"),this.renderHudTasks(!1);const _=performance.now();_-this.lastMinimapTime>100&&(this.lastMinimapTime=_,this.drawMinimap())}drawMinimap(){const t=this.minimapContext;if(!t||!this.game||!this.game.world||!this.game.player)return;const e=this.minimap,i=e.width,s=e.height,r=this.game.world.getBounds(),a=10,o=r.maxX-r.minX,l=r.maxZ-r.minZ,c=d=>a+(d-r.minX)/o*(i-a*2),h=d=>a+(d-r.minZ)/l*(s-a*2);t.clearRect(0,0,i,s),t.fillStyle="rgba(3, 10, 12, 0.82)",t.fillRect(0,0,i,s),t.strokeStyle="rgba(255, 154, 66, 0.14)",t.lineWidth=1;for(let d=1;d<6;d++){const f=a+(i-a*2)/6*d;t.beginPath(),t.moveTo(f,a),t.lineTo(f,s-a),t.stroke()}for(let d=1;d<4;d++){const f=a+(s-a*2)/4*d;t.beginPath(),t.moveTo(a,f),t.lineTo(i-a,f),t.stroke()}for(const d of this.game.world.mapFeatures||[]){const f=typeof d.color=="number"?`#${d.color.toString(16).padStart(6,"0")}`:d.color||"#2a4a4a";t.globalAlpha=.52,t.fillStyle=f,t.fillRect(c(d.x1),h(d.z1),Math.max(1,c(d.x2)-c(d.x1)),Math.max(1,h(d.z2)-h(d.z1)))}if(t.globalAlpha=1,this.game.enemies&&this.game.enemies.bots){t.fillStyle="#ff5566";for(const d of this.game.enemies.bots)d.isAlive&&(t.beginPath(),t.arc(c(d.group.position.x),h(d.group.position.z),2.4,0,Math.PI*2),t.fill())}const u=this.game.player,p=c(u.camera.position.x),m=h(u.camera.position.z);t.save(),t.translate(p,m),t.rotate(-u.euler.y),t.fillStyle="rgba(255, 154, 66, 0.13)",t.beginPath(),t.moveTo(0,0),t.lineTo(-16,-40),t.lineTo(16,-40),t.closePath(),t.fill(),t.fillStyle="#ff9a42",t.strokeStyle="#041012",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-7),t.lineTo(5,5),t.lineTo(0,2.5),t.lineTo(-5,5),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255, 154, 66, 0.48)",t.lineWidth=1.5,t.strokeRect(.75,.75,i-1.5,s-1.5);const _=document.getElementById("minimap-zone");_&&(_.textContent=u.camera.position.x<-1?"KANTO STATION":"NIGHT DISTRICT");const g=document.getElementById("minimap-heading");if(g){const d=(-u.euler.y*180/Math.PI%360+360)%360,f=["N","NE","E","SE","S","SW","W","NW"];g.textContent=f[Math.round(d/45)%8]}}renderResults(){if(!this.session)return;const t=this.session,e=(r,a)=>{const o=document.getElementById(r);o&&(o.textContent=String(a))};e("result-kills",t.kills),e("result-deaths",t.deaths||0),e("result-headshots",t.headshots),e("result-score",t.score),e("result-xp",`+${t.xpEarned} XP`);const i=document.getElementById("result-levelup");if(i){const r=this.level>t.startLevel;i.style.display=r?"inline-flex":"none",r&&(i.textContent=`LEVEL UP  ·  LV ${this.level}`)}const s=document.getElementById("result-task-list");if(s){s.textContent="";for(const r of Fn){const a=this.taskState(r.id)||{progress:0,awarded:!1},o=Math.min(r.target,a.progress||0),l=document.createElement("div");l.className=`result-task-row${a.awarded?" complete":""}`,l.innerHTML=`<span>${r.title}</span><b>${o}/${r.target} · +${r.reward} XP</b>`,s.appendChild(l)}}}showToast(t,e=!1){this.toastElement&&(this.toastElement.textContent=t,this.toastElement.classList.toggle("accent",!!e),this.toastElement.classList.add("visible"),this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastElement.classList.remove("visible")},2400))}bindEvents(){var o,l,c,h,u,p,m,_,g,d,f;(o=this.playButton)==null||o.addEventListener("click",()=>{this.requestFullscreen(),this.beginMatchmaking()}),(l=document.getElementById("loadout-btn"))==null||l.addEventListener("click",()=>this.showLoadout()),(c=document.getElementById("settings-btn"))==null||c.addEventListener("click",()=>this.showSettings()),(h=document.getElementById("loadout-back"))==null||h.addEventListener("click",()=>this.showHome()),(u=document.getElementById("loadout-confirm"))==null||u.addEventListener("click",()=>this.showHome()),(p=document.getElementById("resume-btn"))==null||p.addEventListener("click",()=>{this.hooks.onResume&&this.hooks.onResume()}),(m=document.getElementById("pause-settings-btn"))==null||m.addEventListener("click",()=>this.showSettings()),(_=document.getElementById("pause-main-menu"))==null||_.addEventListener("click",()=>{this.hooks.onExitMatch&&this.hooks.onExitMatch(),this.showHome()}),(g=document.getElementById("play-again-btn"))==null||g.addEventListener("click",()=>{this.beginMatchmaking()}),(d=document.getElementById("result-main-menu"))==null||d.addEventListener("click",()=>{this.hooks.onExitMatch&&this.hooks.onExitMatch(),this.showHome()});const t=this.nameInput,e=()=>{const x=((t==null?void 0:t.value)||"").trim().slice(0,14);this.profile.name=x||"NIGHTRUNNER",t&&(t.value=this.profile.name),this.saveProfile(),this.refreshHome()};t==null||t.addEventListener("change",e),t==null||t.addEventListener("blur",e),t==null||t.addEventListener("keydown",x=>{x.key==="Enter"&&t.blur(),x.stopPropagation()});const i=document.getElementById("setting-sensitivity"),s=document.getElementById("setting-sensitivity-value");i==null||i.addEventListener("input",()=>{const x=Math.max(1,Math.min(10,Number(i.value)||4));this.profile.settings.sensitivity=x,s&&(s.textContent=String(x)),this.applySettings()});const r=document.getElementById("setting-volume"),a=document.getElementById("setting-volume-value");r==null||r.addEventListener("input",()=>{const x=Math.max(0,Math.min(100,Number(r.value)||0));this.profile.settings.volume=x,a&&(a.textContent=`${x}%`),this.applySettings()}),document.querySelectorAll(".quality-btn").forEach(x=>{x.addEventListener("click",()=>{this.profile.settings.quality=x.dataset.quality||"high",this.markSelectedQuality(),this.applySettings()})}),(f=document.getElementById("settings-close"))==null||f.addEventListener("click",()=>this.closeSettings()),document.addEventListener("keydown",x=>{x.code==="Escape"&&this.currentScreen==="settings"&&this.closeSettings()})}}function Rv(n){return Go(n).group}function Pv(n){return Go(n).group}function Cv(n){n.traverse(t=>{var e;t.isMesh&&((e=t.geometry)==null||e.dispose())})}const yn=new po,Sn=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),Se=new Br({antialias:!0,powerPreference:"high-performance"});Se.setSize(window.innerWidth,window.innerHeight);Se.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Se.shadowMap.enabled=!0;Se.shadowMap.type=Jc;Se.domElement.style.display="block";document.body.appendChild(Se.domElement);const jt=new Av({onStartMatch:n=>Dv(n),onExitMatch:()=>Nv(),onResume:()=>Uv(),onSettingsChange:n=>nu(n)});let Pt=null,Ne=null,Te=null,Gs=null,Ae=null,Ke=null,Vo=!1,us=!1,ds=!1,Xc="";const Qh=600,qc=3,Lv=2;let is=Qh,bn=0,tu="rifle",Ti=null,Vs=!1;const fs=document.getElementById("fps"),to=document.getElementById("mute-indicator"),Yc=document.getElementById("capture-hint");let eo=0,no=performance.now(),Zc=performance.now();function Iv(){var n;Ae=new Ev,Ae.setVolume((jt.profile.settings.volume??32)/100),Ke=new L_(yn,Se),window.__world=Ke,Pt=new I_(Sn,Se.domElement,Ke.getColliders(),Ke),Pt.audio=Ae,Pt.onDeath=()=>Fv(),Ti=Pt.spawnPosition.clone(),Ne=new vv(Sn,yn,Se.domElement,{checkHit:()=>null},null,Ke),Ne.audio=Ae,Pt.gunRef=Ne,Te=new G_(yn,Sn,Pt,Ke,Ae,t=>jt.onKill(t)),Ne.bots=Te.bots,Ne.onShot=()=>{Te&&Te.alertNear(Pt.camera.position,20)},Gs=new Sv(yn,Pt,Ne,Ae),jt.attachGame({world:Ke,player:Pt,enemies:Te,gun:Ne,sound:Ae,camera:Sn,scene:yn,renderer:Se}),window.__game={world:Ke,player:Pt,enemies:Te,gun:Ne,sound:Ae,camera:Sn,scene:yn,renderer:Se,ui:jt},Te.start(),Se.compile(yn,Sn),Se.render(yn,Sn),Te.stop(),nu(jt.profile.settings),Vo=!0,jt.setGameReady(!0),(n=document.getElementById("play-btn"))==null||n.addEventListener("click",()=>Ae.unlock())}function Dv(n){if(!Vo||!Pt||!Ne)return;const t=Math.max(0,Hn.findIndex(e=>e.id===n));tu=Hn[t]?Hn[t].id:"rifle",Ti&&Pt.spawnPosition.copy(Ti),Ne.equip(t),Pt.respawn(),Pt.spawnProtection=0,Pt.hasStarted=!0,Pt.isPaused=!1,ds=!1,bn=0,is=Qh,Vs=!1,us=!0,kv(),Te&&(Te.stop(),Te.start()),Ae&&Ae.unlock(),jt&&(jt.hideRespawnOverlay(),jt.updateMatchTime(is)),jt.updateHUD(),eu(),li()}function eu(){try{const n=Se.domElement.requestPointerLock();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}}function li(){if(!Yc)return;const n=!!Pt&&jt.matchRunning&&!Pt.isDead&&!Pt.isPaused&&document.pointerLockElement!==Se.domElement;Yc.classList.toggle("visible",n)}function Uv(){!Vo||!Pt||(jt.hidePause(),Pt.isPaused=!1,Ae&&Ae.unlock(),eu(),li())}function Nv(){us=!1,Vs=!1,bn=0,ds=!1,Te&&Te.stop(),Pt&&(Pt.isPaused=!0,Pt.hasStarted=!1,Pt.clearMovementKeys()),jt&&jt.hideRespawnOverlay(),document.pointerLockElement&&document.exitPointerLock(),li()}function Fv(){ds||!us||Vs||(ds=!0,bn=qc,jt&&(jt.onPlayerDeath(),jt.updateRespawnCountdown(qc)))}function Ov(){const n=Ke&&Array.isArray(Ke.spawnPoints)?Ke.spawnPoints:[];if(!n.length)return Ti?Ti.clone():null;const t=Te&&Array.isArray(Te.bots)?Te.bots.filter(r=>r&&r.isAlive):[],e=n.map(r=>{let a=1/0;for(const o of t){const l=o.group?o.group.position:o.position;if(!l)continue;const c=r.x-l.x,h=r.z-l.z;a=Math.min(a,Math.hypot(c,h))}return{point:r,distance:a}});e.sort((r,a)=>a.distance-r.distance);const i=e.slice(0,Math.min(3,e.length)),s=i[Math.floor(Math.random()*i.length)];return s?s.point.clone():null}function Bv(){if(!Pt)return;const n=Ov();n?Pt.spawnPosition.set(n.x,n.y+Pt.height+.05,n.z):Ti&&Pt.spawnPosition.copy(Ti),Pt.respawn(),ds=!1,bn=0;const t=Math.max(0,Hn.findIndex(e=>e.id===tu));Ne&&Ne.equip(t),Pt.spawnProtection=Lv,jt&&jt.hideRespawnOverlay(),Ae&&Ae.unlock(),li()}function zv(){!us||Vs||(Vs=!0,us=!1,bn=0,ds=!0,Te&&Te.stop(),Ne&&(Ne.isFiring=!1,Ne.setZoom(!1)),Pt&&(Pt.clearMovementKeys(),Pt.isPaused=!0),jt&&(jt.hideRespawnOverlay(),jt.finishMatch()),document.pointerLockElement&&document.exitPointerLock(),li())}function kv(){if(Gs)for(const n of Gs.items)n.active=!0,n.group.visible=!0,n.respawnTimer=0}function nu(n={}){const t=["low","medium","high"].includes(n.quality)?n.quality:"high";if(t!==Xc){Xc=t;const e=t==="low"?.75:t==="medium"?1:Math.min(window.devicePixelRatio,1.5);Se.setPixelRatio(Math.max(.6,e)),Se.setSize(window.innerWidth,window.innerHeight),Se.shadowMap.enabled=t!=="low",yn.traverse(i=>{if(!i.material)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const r of s)r&&(r.needsUpdate=!0)})}Ae&&Ae.setVolume((n.volume??32)/100),Pt&&(Pt.sensitivity=(n.sensitivity??4)*5e-4)}document.addEventListener("pointerlockchange",()=>{Pt&&(document.pointerLockElement===Se.domElement?(Pt.isPaused=!1,jt.hidePause()):jt.matchRunning&&!Pt.isDead&&Pt.hasStarted&&(Pt.isPaused=!0,Pt.clearMovementKeys(),jt.showPause()),li())});document.addEventListener("pointerlockerror",()=>{Pt&&jt.matchRunning&&!Pt.isDead&&(Pt.isPaused=!1,jt.hidePause()),li()});window.addEventListener("keydown",n=>{if(n.code==="F3"){n.preventDefault(),fs&&fs.classList.add("visible");return}if(n.code!=="KeyM"||n.target&&n.target.tagName==="INPUT"||!Ae)return;const t=Ae.toggleMute();to&&(to.style.display=t?"block":"none",to.textContent=t?"MUTED (M)":"")});window.addEventListener("keyup",n=>{n.code==="F3"&&fs&&fs.classList.remove("visible")});window.addEventListener("resize",()=>{Sn.aspect=window.innerWidth/window.innerHeight,Sn.updateProjectionMatrix(),Se.setSize(window.innerWidth,window.innerHeight)});function iu(n){requestAnimationFrame(iu);const t=Math.max(0,(n-Zc)/1e3),e=Math.min(t,.05),i=Math.min(t,1);if(Zc=n,eo++,n-no>=1e3){const s=Math.round(eo*1e3/(n-no));fs&&(fs.textContent=`FPS: ${s}`),eo=0,no=n}us&&Pt&&!Pt.isPaused&&(is=Math.max(0,is-i),jt&&jt.updateMatchTime(is),is<=0?zv():(Pt.update(e),Gs&&Gs.update(e),Te&&Te.update(e),Ne&&Ne.update(e),Ke&&Ke.update(e),Pt.isDead&&bn>0&&(bn=Math.max(0,bn-i),jt&&jt.updateRespawnCountdown(bn),bn<=0&&Bv()),jt&&jt.updateHUD(),li())),jt.shouldRenderWorld()&&Ke&&Se.render(yn,Sn)}requestAnimationFrame(iu);setTimeout(Iv,40);document.addEventListener("contextmenu",n=>{n.preventDefault()},{capture:!0});document.addEventListener("dragstart",n=>{n.preventDefault()},{capture:!0});document.addEventListener("selectstart",n=>{const t=n.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)||n.preventDefault()});let $c=!1;const Wo=new Image;Wo.onload=()=>{document.body.classList.add("station-bg-ready")};Wo.onerror=()=>{$c||($c=!0,console.warn("KillHit: /images/station-bg.jpg is missing; using the fallback interface gradient."))};Wo.src="/images/station-bg.jpg";
