using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
using System.Xml.XPath;

using NFluent;

using Podcasts.Core.Entities;
using Podcasts.Core.Services;

using Xunit;
using Xunit.Abstractions;

namespace Podcasts.Tests.Services
{
    public class FeedGeneratorTests
    {
        private readonly ITestOutputHelper _output;
        private readonly PodcastFeed feed;

        public FeedGeneratorTests(ITestOutputHelper output)
        {
            _output = output;
            feed = new PodcastFeed()
            {
                Title = "Unit Test",
                Description = "Testing podcast",
                Episodes = new List<Podcast>()
                {
                    new Podcast() { Title = "Episode 1", Description = "Episode 1 Description", DownloadUrl = "http://example.com/test.mp3" }
                }
            };
        }

        [Fact]
        public void GeneratesSomething()
        {
            var rss = FeedGenerator.GenerateAsString(feed);

            Check.That(rss).StartsWith("<?xml");
        }

        [Fact]
        public void HasTheEpisodeName()
        {
            var rss = FeedGenerator.GenerateAsString(feed);
            _output.WriteLine(rss);

            var doc = XDocument.Parse(rss);
            var name = doc.XPathSelectElements("/rss/channel/item")
                .First()
                .Element("title").Value;
            Check.That(name).IsEqualTo(feed.Episodes.First().Title);
        }
    }
}
