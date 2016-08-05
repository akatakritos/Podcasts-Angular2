using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

using Podcasts.Web.Controllers;

namespace Podcasts.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Main",
                url: "",
                defaults: new { controller = "Home", action = nameof(HomeController.Home) });

            routes.MapRoute(
                name: "Feed",
                url: "feed",
                defaults: new { controller = "Feed", action = nameof(FeedController.GetFeed) });
        }
    }
}
