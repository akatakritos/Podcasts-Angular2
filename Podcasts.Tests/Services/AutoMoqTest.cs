using System;
using System.Collections.Generic;
using System.Linq;

using AutoMoq;

namespace Podcasts.Tests.Services
{
    public class AutoMoqTest
    {
        public AutoMoqTest()
        {
            Mocker = new AutoMoqer();
        }

        public AutoMoqer Mocker { get; }
    }
}