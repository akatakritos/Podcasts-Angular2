using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Podcasts.Web.Startup))]
namespace Podcasts.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
