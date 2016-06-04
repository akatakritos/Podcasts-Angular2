using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Podcasts.Tests
{
    internal static class Fixtures
    {
        public static string RootPath => Path.GetFullPath(Path.Combine(Directory.GetCurrentDirectory(), @"..\..\Fixtures\"));

        public static string Load(string filename)
        {
            var fullPath = Path.Combine(RootPath, filename);
            if (!File.Exists(fullPath))
                throw new FileNotFoundException($"Could not find fixture '{fullPath}");

            return File.ReadAllText(fullPath);
        }
    }
}
