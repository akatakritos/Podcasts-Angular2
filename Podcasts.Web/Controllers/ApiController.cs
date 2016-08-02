using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

using Podcasts.Core.Services;

namespace Podcasts.Web.Controllers
{
    public class ApiController : Controller
    {
        private readonly IPageDownloader _pageDownloader;

        public ApiController(IPageDownloader pageDownloader)
        {
            _pageDownloader = pageDownloader;
        }

        // GET: Api
        public async Task<ActionResult> Metadata(string url)
        {
            var html = await _pageDownloader.GetHtmlAsync(new Uri(url));
            var metadata = MetadataParser.LoadMetadata(html);

            return Json(metadata, JsonRequestBehavior.AllowGet);
        }
    }
}