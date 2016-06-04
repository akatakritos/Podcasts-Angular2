using System;
using System.Collections.Generic;
using System.Linq;

using NFluent;

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
            var result = MetadataParser.LoadMetadata(html);

            Check.That(result.Title).IsEqualTo(".NET Rocks! vNext");
        }

        [Fact]
        public void FindDescription()
        {
            var html = Fixtures.Load("dotnet-rocks.html");
            var result = MetadataParser.LoadMetadata(html);

            Check.That(result.Description).IsEqualTo(".NET Rocks! is a weekly talk show for anyone interested in programming on the Microsoft .NET platform. The shows range from introductory information to hardcore geekiness.");
        }
    }
}
