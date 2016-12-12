using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;

using HtmlAgilityPack;

using Podcasts.Core.Entities;

namespace Podcasts.Core.Services
{
    public static class MetadataParser
    {
        public static PodcastMetadata LoadMetadata(string html, string url)
        {
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            var title = doc.QuerySelector("title")?.InnerText;
            var description = doc.QuerySelector("meta[name='description']")?.GetAttributeValue("content", null);

            return new PodcastMetadata
            {
                Title = title != null ? WebUtility.HtmlDecode(title) : null,
                Description = description != null ? WebUtility.HtmlDecode(description) : null,
                PossibleEpisodes = ExtractDownloadLinks(doc, url)
            };
        }

        private static IReadOnlyList<PossibleEpisodeFile> ExtractDownloadLinks(HtmlDocument doc, string url)
        {
            var page = new Uri(url);
            return doc.QuerySelectorAll("a")
                .Select(a => a.GetAttributeValue("href", ""))
                .Where(href => href.Contains(".mp3"))
                .Select(href => PossibleEpisodeFile.Create(page, href))
                .ToList();
        }
    }


}
