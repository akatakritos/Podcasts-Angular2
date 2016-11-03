using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;

namespace Podcasts.Core
{
    public static class Settings
    {
        public static bool IsDevelopment => Environment == RuntimeEnvironment.Development;

        public static bool IsProduction => Environment == RuntimeEnvironment.Production;

        private static readonly Lazy<RuntimeEnvironment> _environment = new Lazy<RuntimeEnvironment>(() => ParseEnum<RuntimeEnvironment>(ConfigurationManager.AppSettings["RuntimeEnvironment"]));
        public static RuntimeEnvironment Environment => _environment.Value;

        public static bool UseWebpackDevServer => IsDevelopment && "true".Equals(ConfigurationManager.AppSettings["UseWebpackDevServer"], StringComparison.InvariantCultureIgnoreCase);

        public static string WebpackDevServerRoot => ConfigurationManager.AppSettings["WebpackDevServerRoot"];

        private static T ParseEnum<T>(string s)
        {
            if (string.IsNullOrWhiteSpace(s))
                return default(T);

            return (T)Enum.Parse(typeof(T), s, ignoreCase: true);
        }

    }

    public enum RuntimeEnvironment
    {
        Development = 0,
        Production = 1
    }
}
