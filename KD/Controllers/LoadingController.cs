using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KD.Controllers
{
    public class LoadingController : Controller
    {
        // GET: Loading
        public ActionResult Index()
        {
            return View("~/Views/Loading/Index.cshtml");
        }
    }
}