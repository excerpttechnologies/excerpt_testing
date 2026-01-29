import{r as l,j as e,H as N,L as k}from"./index-CzkBdf-o.js";const S=()=>{const[o,h]=l.useState("All"),[r,c]=l.useState(!1),[d,s]=l.useState(0),n=[{id:1,title:"RGVK",category:"Static",type:"Tourism",image:"portfolio/rgvk.webp",link:"https://rgvkindia.com/",className:"hideOnMd"},{id:2,title:"Car Captain",category:"E-com",type:"E-Commerce",image:"portfolio/car.webp",link:"https://carcaptain.in/",className:""},{id:3,title:"DTECH",category:"CRM",type:"Civil",image:"portfolio/dtech.webp",link:"https://dtechwale.com/",className:"hideOnMd"},{id:4,title:"RoyalHood",category:"E-com",type:"E-Commerce",image:"portfolio/royalhood.webp",link:"https://royalhood.in/",className:""},{id:5,title:"ANANTA SAUKHYAM",category:"Health",type:"Wellness",image:"portfolio/ananta.webp",link:"https://anantasaukhyam.com/",className:"hideOnMd"},{id:6,title:"DYAVASANDRA INDUSTRIAL ESTATE ASSOCIATION",category:"CRM",type:"Industrial Association",image:"portfolio/diea.webp",link:"",className:"hideOnMd"},{id:7,title:"AUTOMET ENGINEERING",category:"Static",type:"Automobile",image:"portfolio/automet.webp",link:"http://www.autometengg.com/",className:"hideOnMd"},{id:8,title:"GIFCO AUTO FILTERS INDIA",category:"Static",type:"Automobile",image:"portfolio/gifco.webp",link:"http://gifcoindia.com/",className:"hideOnMd"},{id:9,title:"Shaw Tech Training Services",category:"LMS",type:"Educational",image:"portfolio/stts.webp",link:"https://sttsonline.com/",className:"hideOnMd"},{id:10,title:"Mech Mold",category:"Static",type:"Industrial",image:"portfolio/mech.webp",link:"https://mechmold.com/",className:"hideOnMd"},{id:11,title:"IT DESK MAHADEVPURA",category:"LMS",type:"Educational",image:"images/p5.webp",link:"https://itdeskmahadevpura.com/",className:""},{id:12,title:"CAD DESK MAHADEVPURA",category:"LMS",type:"Educational",image:"images/p4.webp",link:"http://caddeskmahadevpura.com/",className:""},{id:13,title:"Terra Clenz",category:"E-com",type:"E-Commerce",image:"portfolio/terra.webp",link:"https://terraclenz.com/",className:""},{id:14,title:"Cad desk",category:"CRM",type:"CRM",image:"portfolio/cad.webp",link:"https://caddesk.in/",className:""},{id:15,title:"JBK Academy",category:"CRM",type:"CRM",image:"portfolio/jbk.webp",link:"https://jbkadmin.jbkacademy.in/",className:""},{id:16,title:"Triicons",category:"CRM",type:"CRM",image:"portfolio/triicons.webp",link:"https://triicons.com/",className:""},{id:17,title:"City Hospitality Solutions",category:"CRM",type:"CRM",image:"portfolio/city.webp",link:"https://crm.cityhospitalitysolutions.com",className:""},{id:18,title:"Jyothi Cloud ERP",category:"ERP",type:"ERP",image:"portfolio/erp.webp",link:"https://erp.etpl.ai",className:""},{id:19,title:"BDM Technology",category:"Static",type:"Educational",image:"portfolio/bdm.webp",link:"https://bdmtech.in/",className:""},{id:20,title:"Darklick",category:"Static",type:"Product",image:"portfolio/dark.webp",link:"http://darklick.com/",className:"hideOnMd"},{id:21,title:"Lynx industries",category:"Static",type:"Industrial",image:"portfolio/lynx.webp",link:"http://lynxindustries.in/",className:"hideOnMd"},{id:22,title:"P and S Industries",category:"Static",type:"Industrial",image:"portfolio/ps.webp",link:"http://pandsindustries.in",className:"hideOnMd"},{id:23,title:" Sri Engineering",category:"Static",type:"Industrial",image:"portfolio/srii.webp",link:"https://sriengineering.net/",className:"hideOnMd"},{id:24,title:"Sai Shanti Vidya Niketan",category:"Static",type:"Educational",image:"portfolio/ssvn.webp",link:"http://saishantividyaniketan.in/",className:"hideOnMd"},{id:25,title:"Umang Marketing & Engineering Services",category:"Static",type:"Industrial",image:"portfolio/umang.webp",link:"https://umangmarketing.com/",className:"hideOnMd"},{id:26,title:"Upstreams",category:"Static",type:"Industrial",image:"portfolio/upst.webp",link:"https://upstreamhotels.in/",className:"hideOnMd"},{id:27,title:"Terra Batteries",category:"Static",type:"Ecommerce",image:"portfolio/terrabat.webp",link:"https://terrabatteries.com/",className:"hideOnMd"}],a=n.slice(0,8);l.useEffect(()=>{const t=setInterval(()=>{s(i=>(i+1)%a.length)},4e3);return()=>clearInterval(t)},[a.length]);const g=["All",...new Set(n.map(t=>t.category))],p=o==="All"?n:n.filter(t=>t.category===o),m=6,x=r?p:p.slice(0,m),f=p.length>m,b=t=>{const i=()=>e.jsxs("div",{className:`news-card position-relative ${t.id===2?"news-card-dyavasandra":""}`,style:t.id===2?{height:"330px"}:{},children:[e.jsx("div",{className:"img-wrapper mb-30",children:e.jsx("img",{src:t.image,alt:t.title})}),e.jsxs("div",{className:"content",children:[t.id===2||t.id===7||t.id===8||t.id===9||t.id===11||t.id===12||t.id===13?e.jsx("hh5",{className:"heading-5 mb-15",children:t.title}):e.jsx("h5",{className:"heading-5 mb-15",children:t.title}),e.jsx("div",{className:"paragraph mb-25",children:t.type})]}),e.jsx("div",{className:"circle-1 position-absolute"}),e.jsx("div",{className:"circle-2 position-absolute"})]});return e.jsx("div",{className:`col-md-6 col-lg-4 ${t.className}`,children:t.link?t.link.startsWith("http")?e.jsx(k,{to:t.link,className:"link-to-external-website",target:"_blank",children:e.jsx(i,{})}):e.jsx("a",{href:t.link,target:"_blank",children:e.jsx(i,{})}):e.jsx("a",{href:"",children:e.jsx(i,{})})},t.id)},u=()=>{c(!r)},y=t=>{s(t)},w=()=>{s(t=>(t+1)%a.length)},v=()=>{s(t=>(t-1+a.length)%a.length)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
                .portfolio-slider {
                    position: relative;
                    width: 100%;
                    height: 580px;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    margin-bottom: 80px;
                }

                .slider-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    transform: translateX(-${d*100}%);
                }

                .slide {
                    min-width: 100%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }

                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .slide-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, rgba(0, 17, 255, 0.8), rgba(0, 17, 255, 0.4));
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    text-align: center;
                    padding: 20px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .slide:hover .slide-overlay {
                    opacity: 1;
                }

                .slide:hover .slide-image {
                    transform: scale(1.05);
                }

                .slide-title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 10px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }

                .slide-type {
                    font-size: 1.2rem;
                    font-weight: 300;
                    opacity: 0.9;
                }

                .slider-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                    font-size: 20px;
                    color: #0011ffff;
                }

                .slider-nav:hover {
                    background: #0011ffff;
                    color: white;
                    transform: translateY(-50%) scale(1.1);
                }

                .slider-nav.prev {
                    left: 20px;
                }

                .slider-nav.next {
                    right: 20px;
                }

                .slider-dots {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 10;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .dot.active {
                    background: white;
                    transform: scale(1.2);
                    border-color: #0011ffff;
                }

                .dot:hover {
                    background: rgba(255, 255, 255, 0.8);
                    transform: scale(1.1);
                }

                .slider-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 4px;
                    background: #0011ffff;
                    transition: width 4s linear;
                    z-index: 10;
                    width: ${(d+1)/a.length*100}%;
                }

                /* Mobile-specific improvements */
                @media (max-width: 768px) {
                    .portfolio-slider {
                        height: 280px;
                        margin-bottom: 30px;
                        border-radius: 10px;
                    }

                    .slide-title {
                        font-size: 1.4rem;
                        line-height: 1.2;
                        margin-bottom: 8px;
                    }

                    .slide-type {
                        font-size: 0.9rem;
                    }

                    .slider-nav {
                        width: 35px;
                        height: 35px;
                        font-size: 16px;
                    }

                    .slider-nav.prev {
                        left: 8px;
                    }

                    .slider-nav.next {
                        right: 8px;
                    }

                    .slider-dots {
                        bottom: 15px;
                        gap: 8px;
                    }

                    .dot {
                        width: 10px;
                        height: 10px;
                    }

                    .slide-overlay {
                        padding: 15px;
                    }

                    /* Tab navigation mobile styles */
                    .portfolio-tabs {
                        margin-top: -50px !important;
                        margin-bottom: 30px !important;
                        overflow-x: auto;
                        padding-bottom: 10px;
                    }

                    .tab-wrapper {
                        min-width: 10px;
                        gap: 5px;
                        padding: 0 15px;
                    }

                    .tab-btn {
                        padding: 10px 18px ;
                        margin: 0 3px ;
                        font-size: 13px ;
                        min-width: 10px ;
                        white-space: nowrap;
                        border-radius: 20px !important;
                        flex-shrink: 0;
                    }

                    /* Portfolio cards mobile optimization */
                    .col-md-6.col-lg-4 {
                        margin-bottom: 20px;
                    }

                    .news-card {
                        margin-bottom: 15px;
                    }

                    .news-card .img-wrapper {
                        margin-bottom: 20px;
                    }

                    .news-card .heading-5 {
                        font-size: 1.1rem !important;
                        line-height: 1.3;
                        margin-bottom: 10px !important;
                    }

                    .news-card .paragraph {
                        font-size: 0.9rem;
                        margin-bottom: 15px !important;
                    }

                    /* Newsletter section mobile */
                    .newsletter-Wrapper {
                        padding: 30px 15px !important;
                        text-align: center;
                    }

                    .newsletter-Wrapper .text h3 {
                        font-size: 1.3rem !important;
                        margin-bottom: 10px;
                    }

                    .newsletter-Wrapper .text p {
                        font-size: 0.9rem !important;
                        margin-bottom: 20px;
                    }

                    .email-wrapper {
                        flex-direction: column !important;
                        gap: 15px;
                    }

                    .email-wrapper input {
                        width: 100% !important;
                        margin-bottom: 10px;
                        padding: 12px 15px;
                        border-radius: 25px;
                        font-size: 14px;
                    }

                    .subscribe-btn {
                        width: 100% !important;
                        padding: 12px 20px !important;
                        border-radius: 25px !important;
                        font-size: 14px !important;
                    }

                    /* Read More button mobile */
                    .d-flex.justify-content-center.mt-50 {
                        margin-top: 30px !important;
                        padding: 0 15px;
                    }

                    .d-flex.justify-content-center.mt-50 button {
                        width: 100% !important;
                        max-width: 250px;
                        padding: 12px 25px !important;
                        font-size: 14px !important;
                        border-radius: 25px !important;
                    }

                    /* Page header mobile */
                    .sub-header .page-info h2 {
                        font-size: 1.8rem !important;
                        margin-bottom: 10px;
                    }

                    .sub-header .page-info h6 {
                        font-size: 0.9rem !important;
                    }

                    .sub-header .page-info {
                        padding: 20px 0;
                    }

                    /* Hide elements on mobile that have hideOnMd class */
                    .hideOnMd {
                        display: none !important;
                    }
                }

                @media (max-width: 480px) {
                    .portfolio-slider {
                        height: 220px;
                        margin-bottom: 25px;
                    }

                    .slide-title {
                        font-size: 1.2rem;
                    }

                    .slide-type {
                        font-size: 0.8rem;
                    }

                    .tab-btn {
                        padding: 8px 15px !important;
                        font-size: 12px !important;
                        min-width: 80px !important;
                    }

                    .news-card .heading-5 {
                        font-size: 1rem !important;
                    }

                    .newsletter-Wrapper .text h3 {
                        font-size: 1.1rem !important;
                    }
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .slide-content {
                    animation: slideIn 0.6s ease-out;
                }
                    
            `}),e.jsxs(N,{children:[e.jsx("title",{children:"Portfolio - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider"}),e.jsx("meta",{name:"description",content:"Welcome to Excerpt Technologies Private Limited. We specialize in Web Design & Development, E-commerce Solutions, Data Analytics, and BI Report Generation."})]}),e.jsxs("div",{children:[e.jsx("section",{style:{backgroundImage:"url(images/00.webp)",backgroundColor:"rgb(255, 255, 255)"},className:"sub-header position-relative",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"page-info ",children:[e.jsx("h2",{className:"heading-2",style:{color:"white",textAlign:"center"},children:"Our Portfolio"}),e.jsxs("h6",{className:"heading-6",children:[e.jsx("a",{href:"/",children:"Home"})," / ",e.jsx("a",{href:"#",children:"Portfolio"})]})]})})}),e.jsxs("section",{id:"projects",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"portfolio-slider",children:[e.jsx("div",{className:"slider-container",children:a.map((t,i)=>e.jsxs("div",{className:"slide",children:[e.jsx("img",{src:t.image,alt:t.title,className:"slide-image"}),e.jsx("div",{className:"slide-overlay",children:e.jsxs("div",{className:"slide-content",children:[e.jsx("h3",{className:"slide-title",children:t.title}),e.jsx("p",{className:"slide-type",children:t.type})]})})]},t.id))}),e.jsx("button",{className:"slider-nav prev",onClick:v,children:"‹"}),e.jsx("button",{className:"slider-nav next",onClick:w,children:"›"}),e.jsx("div",{className:"slider-dots",children:a.map((t,i)=>e.jsx("span",{className:`dot ${i===d?"active":""}`,onClick:()=>y(i)},i))}),e.jsx("div",{className:"slider-progress"})]}),e.jsx("div",{className:"portfolio-tabs d-flex  mb-50",style:{marginTop:"-70px"},children:e.jsx("div",{className:"tab-wrapper d-flex",children:g.map(t=>e.jsx("button",{className:`tab-btn ${o===t?"active":""}`,onClick:()=>{h(t),c(!1)},style:{padding:"12px 24px",margin:"5px 8px",border:"none",borderRadius:"25px",backgroundColor:o===t?"#0011ffff":"transparent",color:o===t?"white":"#333",cursor:"pointer",fontWeight:"500",transition:"all 0.3s ease",fontSize:"16px",textTransform:"uppercase",letterSpacing:"1px",minWidth:"120px",whiteSpace:"nowrap"},onMouseEnter:i=>{o!==t&&(i.target.style.backgroundColor="#f8f9fa",i.target.style.color="#0011ffff")},onMouseLeave:i=>{o!==t&&(i.target.style.backgroundColor="transparent",i.target.style.color="#333")},children:t},t))})})]}),e.jsx("section",{id:"latest-news",className:"home__latest--news",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row g-4",children:x.map(t=>b(t))}),f&&e.jsx("div",{className:"d-flex justify-content-center mt-50",children:e.jsx("button",{onClick:u,style:{padding:"15px 30px",border:"2px solid #0011ffff",borderRadius:"30px",backgroundColor:r?"#0011ffff":"transparent",color:r?"white":"#0011ffff",cursor:"pointer",fontWeight:"600",fontSize:"16px",textTransform:"uppercase",letterSpacing:"1px",transition:"all 0.3s ease",minWidth:"180px"},onMouseEnter:t=>{r||(t.target.style.backgroundColor="#0011ffff",t.target.style.color="white")},onMouseLeave:t=>{r||(t.target.style.backgroundColor="transparent",t.target.style.color="#0011ffff")},children:r?"Show Less":"Read More"})})]})}),e.jsx("div",{className:"space100"})]}),e.jsxs("section",{style:{backgroundImage:"url(images/Newimage/digital-marketing-banner1.webp)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},id:"newsletter",className:"portfolio__newsletter",children:[e.jsx("style",{children:`
    .popup-box {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      color: #333;
      padding: 20px 30px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 500;
      box-shadow: 0 4px 10px rgba(0,0,0,0.25);
      z-index: 9999;
      animation: fadeInOut 2.5s ease forwards;
    }
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translate(-50%, -60%); }
      10% { opacity: 1; transform: translate(-50%, -50%); }
      90% { opacity: 1; transform: translate(-50%, -50%); }
      100% { opacity: 0; transform: translate(-50%, -40%); }
    }
  `}),e.jsxs("div",{className:"container newsletter-Wrapper",children:[e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:"Join to Our Team For More Info"}),e.jsx("p",{children:"Excerpt Technologies PVT LTD"})]}),e.jsx("form",{className:"form",onSubmit:t=>{t.preventDefault();const i=document.createElement("div");i.className="popup-box",i.innerText="✅ Thank you for submitting!",document.body.appendChild(i),setTimeout(()=>{i.remove()},2500)},children:e.jsxs("div",{className:"email-wrapper",children:[e.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",required:!0}),e.jsx("button",{type:"submit",className:"subscribe-btn",children:e.jsx("span",{children:"Reach Us"})})]})})]})]}),e.jsx("div",{className:"space100"})]})]})};export{S as default};
