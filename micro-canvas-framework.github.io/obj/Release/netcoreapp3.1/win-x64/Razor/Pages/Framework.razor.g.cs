#pragma checksum "C:\Repos\micro-canvas-framework.github.io\micro-canvas-framework.github.io\Pages\Framework.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7dc654d120e9fd6e9b7d048b4ca1f4a601c52b36"
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
            __builder.AddMarkupContent(0, "<section class=\"features-icons bg-light text-center\">\r\n    <div class=\"container\">\r\n        <h2 class=\"mb-5\">Elementary Components of the MicroCanvas&reg; Framework</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 text-white bg-info\">\r\n                Organization\r\n            </div>\r\n            <div class=\"col-md-2 text-white bg-warning\">\r\n                Market\r\n            </div>\r\n            <div class=\"col-md-2 text-white bg-danger\">\r\n                Forces\r\n            </div>\r\n        </div>\r\n        <div class=\"row top-buffer\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 text-white bg-purple\">\r\n                Structural Building Components\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row top-buffer\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">OL</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Organization Leadership</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">GP</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Goals and Purpose</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">OKRs</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Objectives &amp; Key Results</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">GMs</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Growth Metrics</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-warning mb-3\">\r\n                    <div class=\"card-header\">MS</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Market Segments</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-danger mb-3\">\r\n                    <div class=\"card-header\">DF</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Disruption Factors</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">PC</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Problems or Challenges</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">SA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Solution Alternatives</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">CS</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Cost Structure</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-purple mb-3\">\r\n                    <div class=\"card-header\">RS</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Revenue Structure</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-warning mb-3\">\r\n                    <div class=\"card-header\">KP</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Key Partners</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-danger mb-3\">\r\n                    <div class=\"card-header\">RF</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Risk Factors</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row top-buffer\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 text-white bg-success\">\r\n                Vector Components\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row top-buffer\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">EF</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Exponential Factors</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">UA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Unique Advantages</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">OA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Operational Activities</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">MA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Marketing Activities</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-warning mb-3\">\r\n                    <div class=\"card-header\">DC</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Delivery Channels</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-danger mb-3\">\r\n                    <div class=\"card-header\">EF</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">\r\n                            Contextual Factors\r\n                        </h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">KIM</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Impact Metrics</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">LA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Legal Activities</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">SA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Sale Activities</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-success mb-3\">\r\n                    <div class=\"card-header\">FA</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Finantial Activities</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-warning mb-3\">\r\n                    <div class=\"card-header\">ES</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">External Stakeholders</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-danger mb-3\">\r\n                    <div class=\"card-header\">RF2</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Regulatory Factors</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 text-white bg-dark\">\r\n                Tech\r\n            </div>\r\n        </div>\r\n        <div class=\"row top-buffer\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 text-white bg-info\">\r\n                Internally-focused\r\n            </div>\r\n            <div class=\"col-md-2 text-white bg-warning\">\r\n                Market-facing\r\n            </div>\r\n            <div class=\"col-md-2 text-white bg-danger\">\r\n                Disruptive facing\r\n            </div>\r\n        </div>\r\n        <div class=\"row top-buffer\">\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-secondary mb-3\">\r\n                    <div class=\"card-header\">PS</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Product or Service</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-secondary mb-3\">\r\n                    <div class=\"card-header\">ERP</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Organizational Resources</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-secondary mb-3\">\r\n                    <div class=\"card-header\">CRM</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Customer Relationship</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-secondary mb-3\">\r\n                    <div class=\"card-header\">CSI</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Comm and Servers</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"card text-white bg-warning mb-3\">\r\n                    <div class=\"card-header\">CSp</div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Customer Support</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
