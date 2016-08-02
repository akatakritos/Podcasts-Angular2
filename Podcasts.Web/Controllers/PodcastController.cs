using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

using Podcasts.Core;
using Podcasts.Core.Entities;

namespace Podcasts.Web.Controllers
{
    public class PodcastController : Controller
    {
        private readonly PodcastContext _context;
        public PodcastController(PodcastContext context)
        {
            _context = context;
        }

        // GET: Podcast
        public async Task<ActionResult> Index()
        {
            var podcasts = await _context.Podcasts.OrderByDescending(p => p.AddedAt).Take(10).ToListAsync();

            return View(podcasts);
        }

        [HttpPost]
        public async Task<ActionResult> Save(Podcast podcast)
        {
            _context.Podcasts.Add(podcast);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index");
        }

        public ActionResult New()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Delete(int podcastId)
        {
            var podcast = new Podcast() { PodcastId = podcastId };
            _context.Entry(podcast).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}