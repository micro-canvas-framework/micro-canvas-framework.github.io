#pragma checksum "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\Shared\FooterMenu.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d50fac42536720c905f5e69f0cccb769fd1f5222"
// <auto-generated/>
#pragma warning disable 1591
namespace micro_canvas_framework.github.io.Shared
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
    public partial class FooterMenu : LayoutComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "footer");
            __builder.AddAttribute(1, "class", "footer bg-light");
            __builder.AddMarkupContent(2, "\r\n    ");
            __builder.OpenElement(3, "div");
            __builder.AddAttribute(4, "class", "container");
            __builder.AddMarkupContent(5, "\r\n        ");
            __builder.OpenElement(6, "div");
            __builder.AddAttribute(7, "class", "row");
            __builder.AddMarkupContent(8, "\r\n            ");
            __builder.OpenElement(9, "div");
            __builder.AddAttribute(10, "class", "col-lg-8 h-100 text-center text-lg-left my-auto");
            __builder.AddMarkupContent(11, "\r\n                ");
            __builder.OpenElement(12, "ul");
            __builder.AddAttribute(13, "class", "list-inline mb-2");
            __builder.AddMarkupContent(14, "\r\n                    ");
            __builder.OpenElement(15, "li");
            __builder.AddAttribute(16, "class", "list-inline-item");
            __builder.AddMarkupContent(17, "\r\n                        ");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Routing.NavLink>(18);
            __builder.AddAttribute(19, "class", "nav-link");
            __builder.AddAttribute(20, "href", "/");
            __builder.AddAttribute(21, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(22, "\r\n                            <span class=\"oi oi-plus\" aria-hidden=\"true\"></span> Home\r\n                        ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(23, "\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(24, "\r\n                    ");
            __builder.AddMarkupContent(25, "<li class=\"list-inline-item\">&sdot;</li>\r\n                    ");
            __builder.OpenElement(26, "li");
            __builder.AddAttribute(27, "class", "list-inline-item");
            __builder.AddMarkupContent(28, "\r\n                        ");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Routing.NavLink>(29);
            __builder.AddAttribute(30, "class", "nav-link");
            __builder.AddAttribute(31, "href", "/about");
            __builder.AddAttribute(32, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(33, "\r\n                            <span class=\"oi oi-plus\" aria-hidden=\"true\"></span> About\r\n                        ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(34, " <a href=\"#\"></a>\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(35, "\r\n                    ");
            __builder.AddMarkupContent(36, "<li class=\"list-inline-item\">&sdot;</li>\r\n                    ");
            __builder.AddMarkupContent(37, "<li class=\"list-inline-item\">\r\n                        <a href=\"#\">Contact</a>\r\n                    </li>\r\n                    ");
            __builder.AddMarkupContent(38, "<li class=\"list-inline-item\">&sdot;</li>\r\n                    ");
            __builder.OpenElement(39, "li");
            __builder.AddAttribute(40, "class", "list-inline-item");
            __builder.AddMarkupContent(41, "\r\n                        ");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Routing.NavLink>(42);
            __builder.AddAttribute(43, "class", "nav-link");
            __builder.AddAttribute(44, "href", "/terms");
            __builder.AddAttribute(45, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(46, "\r\n                            <span class=\"oi oi-plus\" aria-hidden=\"true\"></span> Terms of Use\r\n                        ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(47, "\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(48, "\r\n                    ");
            __builder.AddMarkupContent(49, "<li class=\"list-inline-item\">&sdot;</li>\r\n                    ");
            __builder.OpenElement(50, "li");
            __builder.AddAttribute(51, "class", "list-inline-item");
            __builder.AddMarkupContent(52, "\r\n                        ");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Routing.NavLink>(53);
            __builder.AddAttribute(54, "class", "nav-link");
            __builder.AddAttribute(55, "href", "/privacy");
            __builder.AddAttribute(56, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(57, "\r\n                            <span class=\"oi oi-plus\" aria-hidden=\"true\"></span> Privacy Policy\r\n                        ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(58, "\r\n                    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(59, "\r\n                ");
            __builder.CloseElement();
            __builder.AddMarkupContent(60, "\r\n                ");
            __builder.AddMarkupContent(61, @"<p class=""text-muted small mb-4 mb-lg-0"">&copy; <a href=""https://doulab.net"" target=""_blank"">Doulab</a> by <a href=""https://isgwebsite.com"" target=""_blank"">Informatik LLC</a>. Made with love by <a href=""https://about.me/luis.santiago"" target=""_blank"">Luis Santiago</a> and the MicroCanvas community</p>
            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(62, "\r\n            ");
            __builder.AddMarkupContent(63, @"<div class=""col-lg-4 h-100 text-center text-lg-right my-auto"">
                <ul class=""list-inline mb-0"">
                    
                    
                    
                    <li class=""list-inline-item"">
                        <a href=""https://www.instagram.com/themicrocanvas/"" target=""_blank"">
                            <i class=""fab fa-instagram fa-2x fa-fw""></i>
                        </a>
                    </li>
                </ul>
            </div>
        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(64, "\r\n    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(65, "\r\n");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
