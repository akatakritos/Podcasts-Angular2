using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

using Podcasts.Core;
using Podcasts.Core.Entities;

namespace Podcasts.Web.Controllers
{
    public class PodcastsController : ApiController
    {
        private readonly PodcastContext _context;

        public PodcastsController(PodcastContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Podcast>> Get()
        {
            var podcasts = await _context.Podcasts.OrderByDescending(p => p.AddedAt)
                .Take(10)
                .ToListAsync();

            return podcasts;
        }

        public async Task<Podcast> Post([FromBody]Podcast podcast)
        {
            if (podcast.PodcastId != 0)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Can't create a podcast when podcastId is provided"));
            }

            _context.Podcasts.Add(podcast);
            await _context.SaveChangesAsync();

            return podcast;
        }

        public async Task Delete(int id)
        {
            var p = await _context.Podcasts.FindAsync(id);
            if (p == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            _context.Podcasts.Remove(p);
            await _context.SaveChangesAsync();
        }
    }
}