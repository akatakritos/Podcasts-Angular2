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
            if (LooksLikeMedia(url))
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.BadRequest)
                {
                    Content = new StringContent("Looks like a media file.")
                });
            }

            var downloader = new PageDownloadService();
            var html = await downloader.GetHtmlAsync(new Uri(url));
            return MetadataParser.LoadMetadata(html, url);
        }

        private bool LooksLikeMedia(string url)
        {
            return url.Contains("mp3");
        }
    }
}