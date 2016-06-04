using System;
using System.Collections.Generic;
using System.Linq;

namespace Podcasts.Core.Entities
{
    public class PodcastMetadata
    {
        public Uri PodcastUri { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
