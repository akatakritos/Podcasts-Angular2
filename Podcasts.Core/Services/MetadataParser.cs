using System;
using System.Collections.Generic;
using System.Linq;

using HtmlAgilityPack;

using Podcasts.Core.Entities;

namespace Podcasts.Core.Services
{
    public static class MetadataParser
    {
        public static PodcastMetadata LoadMetadata(string html)
        {
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            return new PodcastMetadata
            {
                Title = doc.QuerySelector("title")?.InnerText,
                Description = doc.QuerySelector("meta[name='description']")?.GetAttributeValue("content", null),
            };
        }
    }


}
