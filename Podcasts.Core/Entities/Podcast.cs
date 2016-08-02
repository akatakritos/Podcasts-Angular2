using System;
using System.Collections.Generic;
using System.Linq;

namespace Podcasts.Core.Entities
{
    public class Podcast
    {
        public int PodcastId { get; set; }
        public string DownloadUrl { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime AddedAt { get; set; }
    }
}
