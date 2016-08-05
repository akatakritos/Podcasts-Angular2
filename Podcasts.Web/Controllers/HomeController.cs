using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Podcasts.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Home()
        {
            return View();
        }
    }
}