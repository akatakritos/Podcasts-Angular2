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
                name: "Podcasts Index",
                url: "",
                defaults: new { controller = "Podcast", action = nameof(PodcastController.Index) });

            routes.MapRoute(
                name: "Save Podcast",
                url: "podcasts",
                defaults: new { controller = "Podcast", action = nameof(PodcastController.Save) });

            routes.MapRoute(
                name: "Delete Podcast",
                url: "podcasts/delete",
                defaults: new { controller = "Podcast", action = nameof(PodcastController.Delete) });

            routes.MapRoute(
                name: "New Podcast",
                url: "podcasts/new",
                defaults: new { controller = "Podcast", action = nameof(PodcastController.New) });

            routes.MapRoute(
                name: "Feed",
                url: "feed",
                defaults: new { controller = "Feed", action = nameof(FeedController.GetFeed) });
        }
    }
}
