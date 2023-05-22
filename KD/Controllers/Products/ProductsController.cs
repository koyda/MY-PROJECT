using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KD.Controllers.Products
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult Index()
        {
            return View("~/Views/Products/Index.cshtml");
        }
    }
}