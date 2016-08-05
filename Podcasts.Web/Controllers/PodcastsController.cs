using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
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

        public void Post([FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}