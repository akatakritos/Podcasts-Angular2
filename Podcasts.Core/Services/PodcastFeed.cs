using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Xml;

using Podcasts.Core.Entities;

namespace Podcasts.Core.Services
{
    public class PodcastFeed
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IEnumerable<Podcast> Episodes { get; set; }
    }

    public static class FeedGenerator
    {
        public static string GenerateAsString(PodcastFeed feed)
        {
            using (var stream = new MemoryStream())
            {
                Generate(stream, feed);
                stream.Flush();

                return Encoding.UTF8.GetString(stream.ToArray());
            }
        }

        public static void Generate(Stream stream, PodcastFeed feed)
        {
            // not my job to close your stream for you
            var writer = new XmlTextWriter(stream, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false));
            writer.WriteStartDocument();

            writer.WriteStartElement("rss");
            writer.WriteAttributeString("xmlns", "itunes", null, "http://www.itunes.com/dtds/podcast-1.0.dtd");
            writer.WriteAttributeString("version", "2.0");

            writer.WriteStartElement("channel");
            writer.WriteElementString("title", feed.Title);
            writer.WriteElementString("description", feed.Description);
            writer.WriteElementString("lastBuildDate", DateTime.UtcNow.ToString("r"));
            writer.WriteElementString("pubDate", DateTime.UtcNow.ToString("r"));

            foreach (var ep in feed.Episodes)
            {
                writer.WriteStartElement("item");
                writer.WriteElementString("title", ep.Title);
                writer.WriteElementString("link", ep.DownloadUrl);
                writer.WriteElementString("guid", ep.DownloadUrl);
                writer.WriteElementString("description", ep.Description);

                writer.WriteStartElement("enclosure");
                writer.WriteAttributeString("url", ep.DownloadUrl);
                writer.WriteEndElement();
            }

            writer.WriteEndElement();
            writer.WriteEndElement();
            writer.WriteEndDocument();

            writer.Flush();
        }
    }
}
