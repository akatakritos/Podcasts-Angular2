using System;
using System.Collections.Generic;
using System.Linq;

using NFluent;

using Podcasts.Core.Entities;
using Podcasts.Core.Services;

using Xunit;

namespace Podcasts.Tests.Services
{
    public class MetadataServiceTests : AutoMoqTest
    {
        [Fact]
        public void FindsTitleTag()
        {
            var html = Fixtures.Load("dotnet-rocks.html");
            var result = MetadataParser.LoadMetadata(html, "http://foo.com");

            Check.That(result.Title).IsEqualTo(".NET Rocks! vNext");
        }

        [Fact]
        public void FindDescription()
        {
            var html = Fixtures.Load("dotnet-rocks.html");
            var result = MetadataParser.LoadMetadata(html, "http://foo.com");

            Check.That(result.Description).IsEqualTo(".NET Rocks! is a weekly talk show for anyone interested in programming on the Microsoft .NET platform. The shows range from introductory information to hardcore geekiness.");
        }

        [Fact]
        public void GetsMp3s()
        {
            var html = "<head>" +
                       "<body>" +
                       "<a href='some/relative/link.mp3'>Download</a>" +
                       "<a href='http://example.com/test/foo.mp3?something=1'>Foo</a>" +
                       "</body>" +
                       "</head>";

            var result = MetadataParser.LoadMetadata(html, "https://something.com/episode1");
            Check.That(result.PossibleEpisodes).HasSize(2);
        }

        [Fact]
        public void UnescapesMetadata()
        {
            var html = Fixtures.Load("bikeshed-91.html");
            var result = MetadataParser.LoadMetadata(html, "http://bikeshed.fm/91");
            Check.That(result.Title).IsEqualTo("91: I Think It's a Fish | The Bike Shed");
            Check.That(result.Description).IsEqualTo("Derek briefly complains of the staleness of the asset pipeline in Rails 5, before Sean catches Derek up on Rails 5.1's support for Webpack, Yarn, and ES6. We also discuss the pain of deprecations in the upgrade to Rails 5.");
        }
    }

    public class PossibleEpisodeFileTests
    {
        [Theory]
        [InlineData("http://bar.com/test.mp3", "http://bar.com/test.mp3")]
        [InlineData("/absolute-path/test.mp3", "https://example.com/absolute-path/test.mp3")]
        [InlineData("relative-path/test.mp3", "https://example.com/episodes/relative-path/test.mp3")]
        [InlineData("//protocol.relative/test.mp3", "https://protocol.relative/test.mp3")]
        [InlineData("/test.mp3?query=1", "https://example.com/test.mp3?query=1")]
        public void ParsesCorrectly(string href, string expected)
        {
            var basePage = new Uri("https://example.com/episodes/1.html");
            var file = PossibleEpisodeFile.Create(basePage, href);
            Check.That(file.Url).IsEqualTo(expected);
        }

        [Fact]
        public void ExtractsFilename()
        {
            var basePage = new Uri("https://example.com/episodes/1.html");
            var file = PossibleEpisodeFile.Create(basePage, "/a/folder/something.mp3?foo=bar");
            Check.That(file.Filename).IsEqualTo("something.mp3");
        }
    }
}
