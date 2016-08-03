using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

using Podcasts.Core;
using Podcasts.Core.Services;

namespace Podcasts.Web.Controllers
{
    public class FeedController : Controller
    {
        private readonly PodcastContext _context;
        public FeedController(PodcastContext context)
        {
            _context = context;
        }

        // GET: Feed
        public async Task<ActionResult> GetFeed()
        {
            var podcasts = await _context.Podcasts.OrderByDescending(p => p.AddedAt)
                .Take(30).ToListAsync();

            var feed = new PodcastFeed()
            {
                Title = "Matt Misc Podcasts",
                Description = "Collection of one-off podcasts",
                Episodes = podcasts
            };

            var memoryStream = new MemoryStream();
            FeedGenerator.Generate(memoryStream, feed);
            memoryStream.Position = 0;
            return new FileStreamResult(memoryStream, "application/rss+xml");
        }
    }
}