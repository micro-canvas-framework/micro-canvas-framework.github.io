#pragma checksum "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\Pages\Framework.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ab5d75f817166887ce87ba8bc7c39bdb2319460b"
// <auto-generated/>
#pragma warning disable 1591
namespace micro_canvas_framework.github.io.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using micro_canvas_framework.github.io;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\_Imports.razor"
using micro_canvas_framework.github.io.Shared;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/framework")]
    public partial class Framework : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<style>\r\n    * {\r\n        box-sizing: border-box;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n\r\n    body {\r\n        /*background: linear-gradient(#dbeaf8, #dbeaf8);*/\r\n        /*color: #222;*/\r\n        /*padding: 20px;*/\r\n        font-family: \"HelveticaNeue-Light\",\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,\"Lucida Grande\",sans-serif;\r\n    }\r\n\r\n    .wrapper {\r\n        width: 1050px;\r\n        margin: 30px auto;\r\n        position: relative;\r\n    }\r\n\r\n    .main:after {\r\n        clear: both;\r\n        content: \"\";\r\n        display: table;\r\n    }\r\n\r\n    .main li {\r\n        width: 10%;\r\n        height: 90px;\r\n        border: 1px solid rgba(0,0,0,0.3);\r\n        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);\r\n        position: relative;\r\n        font-size: 20px;\r\n        float: left;\r\n        padding: 0px 2px 0px 5px;\r\n        margin-left: 15px;\r\n        margin-bottom: 15px;\r\n        cursor: pointer;\r\n        padding-top: 20px;\r\n        overflow: hidden;\r\n        transition: all .2s ease-in;\r\n        text-shadow: 0 1px 0 rgba(255,255,255,0.2);\r\n    }\r\n\r\n        .main li span {\r\n            display: block;\r\n            line-height: 1;\r\n            font-size: 14px;\r\n            color: black;\r\n            padding-top: 7px;\r\n            color: #FFF;\r\n        }\r\n\r\n    .main .empty {\r\n        border: none;\r\n        box-shadow: none;\r\n        cursor: default;\r\n    }\r\n\r\n    .deactivate {\r\n        opacity: 0.5;\r\n        -webkit-filter: grayscale(70%);\r\n        filter: grayscale(70%);\r\n    }\r\n\r\n    .main li:before,\r\n    .main li:after {\r\n        content: attr(data-pos);\r\n        position: absolute;\r\n        top: 3px;\r\n        left: 3px;\r\n        color: black;\r\n        font-size: 8px;\r\n        line-height: 1;\r\n    }\r\n\r\n    .main li:after {\r\n        content: attr(data-nb);\r\n        left: auto;\r\n        right: 3px;\r\n    }\r\n\r\n    .main li:hover {\r\n        transform: scale(2);\r\n        z-index: 100;\r\n        box-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n    }\r\n\r\n    .main .empty:hover {\r\n        box-shadow: none;\r\n        transform: none;\r\n    }\r\n\r\n    .type-0 {\r\n        background: #fff;\r\n    }\r\n\r\n    .type-1 {\r\n        background: #cc66ff;\r\n    }\r\n\r\n    .type-2 {\r\n        background: #ffcc00;\r\n    }\r\n\r\n    .type-3 {\r\n        background: #dc3545;\r\n    }\r\n\r\n    .type-4 {\r\n        background: #b2e580;\r\n    }\r\n\r\n    .type-5 {\r\n        background: #b3b3b3;\r\n    }\r\n\r\n    .type-6 {\r\n        background: #dd9999;\r\n    }\r\n\r\n    .type-7 {\r\n        background: #4CAFFA;\r\n    }\r\n\r\n    .type-8 {\r\n        background: #ffaa88;\r\n    }\r\n\r\n    .type-9 {\r\n        background: #ddaacc;\r\n    }\r\n\r\n    .cat-0 {\r\n        color: #4c4c4c;\r\n    }\r\n\r\n    .cat-1 {\r\n        color: #000000;\r\n    }\r\n\r\n    .cat-2 {\r\n        color: #FFF;\r\n    }\r\n\r\n    .cat-3 {\r\n        color: #555;\r\n    }\r\n\r\n    .legend {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 20%;\r\n        padding: 10px;\r\n        font-size: 11px;\r\n        background: #f1edec;\r\n        border: 1px solid rgba(0,0,0,0.2);\r\n        border-radius: 15px;\r\n        box-shadow: inset 0 1px 1px white, inset 0 -5px 3px #dddcdb, 0 0 10px rgba(0,0,0,0.2);\r\n    }\r\n\r\n        .legend:after {\r\n            content: \"\";\r\n            display: table;\r\n            clear: table;\r\n        }\r\n\r\n        .legend ul {\r\n            float: left;\r\n            list-style: none;\r\n        }\r\n\r\n        .legend .list-2 {\r\n            margin-left: 40px;\r\n            width: 200px;\r\n        }\r\n\r\n        .legend .list-1 li {\r\n            margin: 7px 0;\r\n        }\r\n\r\n            .legend .list-1 li:first-of-type {\r\n                margin-top: 2px;\r\n            }\r\n\r\n        .legend .list-1 span {\r\n            border: 1px solid black;\r\n            display: inline-block;\r\n            padding: 3px;\r\n            width: 20px;\r\n            text-align: center;\r\n            height: 20px;\r\n            margin-right: 5px;\r\n        }\r\n\r\n        .legend .list-2 li {\r\n            margin: 2px;\r\n            padding: 3px;\r\n            float: left;\r\n            border: 1px solid rgba(0,0,0,0.2);\r\n            width: 48%;\r\n            cursor: pointer;\r\n        }\r\n\r\n    .badge-secondary {\r\n        background-color: #cc66ff;\r\n    }\r\n\r\n    .badge-light {\r\n        background-color: #b3b3b3;\r\n    }\r\n</style>\r\n\r\n");
            __builder.AddMarkupContent(1, "<div class=\"wrapper\">\r\n    <h2 class=\"mb-5\">Elementary Components of the MicroCanvas&reg; Framework</h2>\r\n\r\n    <ul class=\"main\">\r\n        <li data-pos=\"1\" data-nb=\"Org\" class=\"type-1 cat-0\">PR<span>Problem Statement</span></li>\r\n        <li data-pos=\"1\" data-nb=\"Org\" class=\"type-1 cat-0\">TP<span>Transformative Purpose</span></li>\r\n        <li data-pos=\"1\" data-nb=\"Org\" class=\"type-1 cat-0\">SAS<span>Solution Alternatives</span></li>\r\n        <li data-pos=\"1\" data-nb=\"Org\" class=\"type-1 cat-0\">OKR<span>Objectives &amp; Key Results</span></li>\r\n        <li data-pos=\"1\" data-nb=\"Market\" class=\"type-2 cat-1\">MS<span>Market Segments</span></li>\r\n        <li data-pos=\"1\" data-nb=\"Factors\" class=\"type-3 cat-2\">DF<span>Future Disruptions</span></li>\r\n        <li class=\"empty\"></li>\r\n        <li class=\"empty\"></li>\r\n        <li data-pos=\"2\" data-nb=\"Org\" class=\"type-1 cat-0\">EA<span>Exponential Attributes</span></li>\r\n        <li data-pos=\"2\" data-nb=\"Org\" class=\"type-1 cat-0\">OT<span>Organizational Team</span></li>\r\n        <li data-pos=\"2\" data-nb=\"Org\" class=\"type-1 cat-0\">CS<span>Cost Structure</span></li>\r\n        <li data-pos=\"2\" data-nb=\"Org\" class=\"type-1 cat-0\">RS<span>Revenue Structure</span></li>\r\n        <li data-pos=\"2\" data-nb=\"Market\" class=\"type-2 cat-1\">KP<span>Key Partners</span></li>\r\n        <li data-pos=\"2\" data-nb=\"Factors\" class=\"type-3 cat-2\">RF<span>Risks</span></li>\r\n        <li class=\"empty\"></li>\r\n        <li class=\"empty\"></li>\r\n        <li data-pos=\"3\" data-nb=\"Org\" class=\"type-4 cat-0\">UA<span>Unique Advantages</span></li>\r\n        <li data-pos=\"3\" data-nb=\"Org\" class=\"type-4 cat-0\">KGM<span>Key Growth Metrics</span></li>\r\n        <li data-pos=\"3\" data-nb=\"Org\" class=\"type-4 cat-0\">KIA<span>Key Impact Metrics</span></li>\r\n        <li data-pos=\"3\" data-nb=\"Org\" class=\"type-4 cat-0\">SA<span>Sales</span></li>\r\n        <li data-pos=\"3\" data-nb=\"Market\" class=\"type-2 cat-1\">DC<span>Delivery Channels</span></li>\r\n        <li data-pos=\"3\" data-nb=\"Factors\" class=\"type-3 cat-2\">CaE<span>Context and Enviroment</span></li>\r\n        <li class=\"empty\"></li>\r\n        <li class=\"empty\"></li>\r\n        <li data-pos=\"4\" data-nb=\"Org\" class=\"type-4 cat-0\">OA<span>Operations</span></li>\r\n        <li data-pos=\"4\" data-nb=\"Org\" class=\"type-4 cat-0\">FA<span>Finance</span></li>\r\n        <li data-pos=\"4\" data-nb=\"Org\" class=\"type-4 cat-0\">MA<span>Marketing</span></li>\r\n        <li data-pos=\"4\" data-nb=\"Org\" class=\"type-4 cat-0\">LA<span>Legal</span></li>\r\n        <li data-pos=\"4\" data-nb=\"Market\" class=\"type-2 cat-1\">ES<span>External Stakeholders</span></li>\r\n        <li data-pos=\"4\" data-nb=\"Factors\" class=\"type-3 cat-2\">RF<span>Regulatory</span></li>\r\n        <li class=\"empty\"></li>\r\n        <li class=\"empty\"></li>\r\n        <li data-pos=\"5\" data-nb=\"Org\" class=\"type-5 cat-0\">PS<span>Product Tech</span></li>\r\n        <li data-pos=\"5\" data-nb=\"Org\" class=\"type-5 cat-0\">ERP<span>Organizational Resources</span></li>\r\n        <li data-pos=\"5\" data-nb=\"Org\" class=\"type-5 cat-0\">CRM<span>Customer Relationship</span></li>\r\n        <li data-pos=\"5\" data-nb=\"Org\" class=\"type-5 cat-0\">CS<span>Communication and Servers</span></li>\r\n        <li data-pos=\"5\" data-nb=\"Market\" class=\"type-5 cat-0\">CSP<span>Customer Support</span></li>\r\n        <li class=\"empty\"></li>\r\n        <li class=\"empty\"></li>\r\n        <li class=\"empty\"></li>\r\n    </ul>\r\n\r\n    <span class=\"badge badge-secondary\">Organizational Components</span> <br>\r\n    <span class=\"badge badge-warning\">Market </span> <br>\r\n    <span class=\"badge badge-danger\">Factors</span> <br>\r\n    <span class=\"badge badge-success\">Directional Components</span><br>\r\n    <span class=\"badge badge-light\">Technology</span>\r\n\r\n</div>");
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
