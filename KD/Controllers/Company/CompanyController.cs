using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KD.Controllers.Company
{
    public class CompanyController : Controller
    {
        // GET: Company
        public ActionResult Index()
        {
            return View("~/Views/Company/Index.cshtml");
        }
    }
}