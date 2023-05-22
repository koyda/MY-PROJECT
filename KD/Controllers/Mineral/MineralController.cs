using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KD.Controllers.Mineral
{
    public class MineralController : Controller
    {
        // GET: Mineral
        public ActionResult Index()
        {
            return View("~/Views/Mineral/Index.cshtml");
        }
    }
}