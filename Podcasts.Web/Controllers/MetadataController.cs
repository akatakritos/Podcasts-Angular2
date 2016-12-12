using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

using Podcasts.Core.Entities;
using Podcasts.Core.Services;

namespace Podcasts.Web.Controllers
{
    public class MetadataController : ApiController
    {
        // GET api/<controller>
        public async Task<PodcastMetadata> Get(string url)
        {
            var downloader = new PageDownloadService();
            var html = await downloader.GetHtmlAsync(new Uri(url));
            return MetadataParser.LoadMetadata(html, url);
        }
    }
}