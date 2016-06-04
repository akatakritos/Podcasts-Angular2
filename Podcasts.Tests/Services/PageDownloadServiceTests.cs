using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using NFluent;

using Podcasts.Core.Services;

using Xunit;

namespace Podcasts.Tests.Services
{
    public class PageDownloadServiceTests
    {
        [Fact]
        public async Task GetsSomeHtml()
        {
            var downloader = new PageDownloadService();
            var html = await downloader.GetHtmlAsync(new Uri("http://www.mattburkedev.com/"));

            Check.That(html).Contains("Matt Burke");
        }

    }
}
