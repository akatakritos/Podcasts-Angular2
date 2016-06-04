using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Podcasts.Core.Services
{
    public interface IPageDownloader
    {
        Task<string> GetHtmlAsync(Uri page);
    }

    public class PageDownloadService : IPageDownloader
    {
        private readonly HttpClient _client;
        public PageDownloadService()
        {
            _client = new HttpClient();
        }

        public Task<string> GetHtmlAsync(Uri page)
        {
            return _client.GetStringAsync(page);
        }
    }
}
