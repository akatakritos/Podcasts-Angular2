using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Podcasts.Core.Entities
{
    public class PodcastMetadata
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IReadOnlyList<PossibleEpisodeFile> PossibleEpisodes { get; set; }
    }

    public class PossibleEpisodeFile
    {
        public string Url { get; set; }
        public string Filename { get; set; }

        public static PossibleEpisodeFile Create(Uri basePage, string href)
        {
            var fullLink = new Uri(basePage, new Uri(href, UriKind.RelativeOrAbsolute));
            var filename = Path.GetFileName(fullLink.AbsolutePath);

            return new PossibleEpisodeFile()
            {
                Url = fullLink.ToString(),
                Filename = filename
            };
        }
    }
}
